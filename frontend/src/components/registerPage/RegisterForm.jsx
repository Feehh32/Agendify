import InputField from "../ui/InputField";
import { useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import PropTypes from "prop-types";

const RegisterForm = ({ onSubmit, errors = {}, setErrors }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    avatar_url: "",
    profession: "",
    password: "",
    confirmPassword: "",
  });

  const fields = [
    {
      label: "Nome",
      name: "name",
      type: "text",
      required: true,
      autoComplete: "name",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      autoComplete: "email",
    },
    {
      label: "Telefone",
      name: "phone",
      type: "tel",
      optional: true,
      required: false,
      autoComplete: "tel",
    },
    {
      label: "Carregar imagem do seu perfil",
      name: "avatar_url",
      type: "file",
      optional: true,
      required: false,
      autoComplete: "avatar_url",
    },
    {
      label: "Profissão",
      name: "profession",
      type: "text",
      required: true,
      autoComplete: "profession",
    },
    {
      label: "Senha",
      name: "password",
      type: "password",
      required: true,
    },
    {
      label: "Confirmar Senha",
      name: "confirmPassword",
      type: "password",
      required: true,
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <section
      className=" shadow-base rounded-2xl p-5 md:p-16"
      aria-labelledby="register-client-form-title"
    >
      <SectionTitle id="register-client-form-title" className="text-center">
        Crie sua conta<span className="text-secondary">.</span>
      </SectionTitle>
      <p className="pt-5 text-primary lg:text-2xl md:text-lg text-base text-center">
        Insira seus dados para começar a usar o Agendify
      </p>
      {errors.general && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-2.5 max-w-xl mx-auto">
          <span>{errors.general}</span>
          <button
            onClick={() =>
              setErrors((prev) => ({ ...prev, general: undefined }))
            }
            className="absolute top-0 right-0 px-3 py-2 text-xl cursor-pointer"
            aria-label="Fechar"
          >
            ×
          </button>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-col gap-4 max-w-xl mx-auto md:mt-10 mt-5"
      >
        {fields.map((field) => (
          <InputField
            key={field.name}
            {...field}
            value={formData[field.name]}
            onChange={handleChange}
            error={errors[field.name]}
          />
        ))}
        <Button as="submit" type="submit" size="input">
          Criar Conta
        </Button>
      </form>
    </section>
  );
};

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object,
};

export default RegisterForm;
