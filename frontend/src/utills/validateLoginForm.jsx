const validateLoginForm = (data) => {
  const errors = {};

  if (!data.email.trim()) errors.email = "E-mail é obrigatório.";
  else if (!/\S+@\S+\.\S+/.test(data.email))
    errors.email = "Formato de e-mail inválido.";

  if (!data.password) errors.password = "Senha é obrigatória.";

  return errors;
};

export default validateLoginForm;
