const validateProfessionalForm = (data) => {
  const errors = {};

  if (!data.name.trim()) errors.name = "Nome é obrigatório.";

  if (!data.email.trim()) errors.email = "E-mail é obrigatório.";
  else if (!/\S+@\S+\.\S+/.test(data.email))
    errors.email = "Formato de e-mail inválido.";

  if (!data.password) errors.password = "Senha é obrigatória.";
  else if (
    !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}/.test(data.password)
  )
    errors.password =
      "A senha deve ter no mínimo 6 caracteres, com pelo menos uma letra maiúscula, uma minúscula e um número.";

  if (!data.confirmPassword) errors.confirmPassword = "Confirme sua senha.";
  else if (data.password !== data.confirmPassword)
    errors.confirmPassword = "As senhas devem ser iguais.";

  return errors;
};

export default validateProfessionalForm;
