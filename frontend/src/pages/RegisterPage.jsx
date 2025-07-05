import { useState, useEffect } from "react";
import Container from "../components/ui/Container";
import RegisterForm from "../components/registerPage/RegisterForm";
import validateProfessionalForm from "../utills/validateProfessionalForm";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";

const RegisterPage = () => {
  usePageTitle("Cadastro");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    if (errors.general) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [errors.general]);

  const handleSubmit = async (formData) => {
    const validationErrors = validateProfessionalForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    try {
      await api.post("/api/register", formData);
      navigate("/login");
    } catch (err) {
      const message =
        err.response?.data?.error ||
        "Erro ao registrar novo usuário. Tente novamente.";
      setErrors({ general: message });
    }
  };
  return (
    <section className="md:mt-32 mt-16">
      <Container>
        <RegisterForm
          errors={errors}
          onSubmit={handleSubmit}
          setErrors={setErrors}
        />
      </Container>
    </section>
  );
};

export default RegisterPage;
