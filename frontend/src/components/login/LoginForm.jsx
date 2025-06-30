import { useState } from "react";
import PropTypes from "prop-types";
import InputField from "../ui/InputField";
import Button from "../ui/Button";
const LoginForm = ({ onSubmit, errors = {}, setErrors }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors.general) {
      setErrors((prev) => ({ ...prev, general: undefined }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <InputField
        label="Email"
        name="email"
        type="email"
        onChange={handleChange}
        error={errors.email}
      />
      <InputField
        label="Senha"
        name="password"
        type="password"
        onChange={handleChange}
        error={errors.password}
      />
      {errors.general && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-2.5 max-w-xl mx-auto">
          <span className="px-10">{errors.general}</span>
          <button
            onClick={() =>
              setErrors((prev) => ({ ...prev, general: undefined }))
            }
            className="absolute top-0 right-0  -translate-y-1/4 px-3 py-2 text-xl cursor-pointer"
            aria-label="Fechar"
          >
            ×
          </button>
        </div>
      )}
      <Button as="submit" type="submit" size="input">
        Log In
      </Button>
    </form>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object,
  setErrors: PropTypes.func,
};

export default LoginForm;
