import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import Container from "../components/ui/Container";
import LoginForm from "../components/login/LoginForm";
import logo from "../assets/logo.png";
import api from "../services/api";
import validateLoginForm from "../utills/validateLoginForm";
import { useAuth } from "../contexts/AuthContext";
import usePageTitle from "../hooks/usePageTitle";

const Login = () => {
  usePageTitle("Login");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (formdata) => {
    const validationErrors = validateLoginForm(formdata);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await api.post("api/login", formdata);
      login(response.data.user, response.data.token);

      setErrors({});
      navigate("/dashboard");
    } catch (err) {
      const message = err.response?.data?.error || "Email ou senha inválidos.";
      setErrors({ general: message });
    }
  };

  return (
    <section className="flex justify-center items-center md:mt-32 mt-16">
      <Container>
        <div className="p-10 shadow-[1px_1px_4px_rgba(0,0,0,0.25)] rounded-2xl max-w-lg">
          <Link to="/" aria-label="Página Inicial" className="block mb-5">
            <img
              src={logo}
              alt="Agendify logo"
              className="md:h-10 h-5 m-auto"
            />
          </Link>
          <h1 className="text-secondary font-display font-semibold text-2xl md:text-3xl text-center mt-5">
            Seja Bem Vindo!
          </h1>
          <p className="text-text text-center mb-5 font-display font-medium mt-2">
            Faça seu login para usar nossos serviços
          </p>
          <LoginForm
            onSubmit={handleSubmit}
            errors={errors}
            setErrors={setErrors}
          />
          <p className="text-text text-sm text-center mt-5">
            Ainda nao tem uma conta? Crie gratuitamente sua conta{" "}
            <Link to={"/register"} className="text-secondary text-sm">
              aqui.
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Login;
