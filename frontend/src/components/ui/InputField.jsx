import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

const InputField = ({
  id,
  name,
  value,
  onChange,
  label,
  type = "text",
  placeholder = "",
  optional = false,
  className = "",
  error,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;
  return (
    <label htmlFor={id} className=" font-display font-semibold text-primary">
      <div className="w-full relative">
        {label}
        {optional && (
          <span className="ml-2 text-xs text-gray-500 font-display font-normal inline italic">
            - Opcional
          </span>
        )}
        <input
          type={inputType}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={twMerge(
            `
            w-full
            mt-2  border-2 rounded-lg px-5 py-2.5 outline-none
            focus:border-primary shadow-sm text-base font-normal text-text font-sans ${
              error ? "focus:border-red-600" : "border-light-blue "
            }transition duration-200 ease-in-out`,
            className
          )}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-4 top-2/3 transform -translate-y-1/2 text-sm cursor-pointer opacity-70 text-primary font-normal hover:text-primary transition duration-300 ease-in-out"
          >
            {showPassword ? "Ocultar" : "Mostrar"}
          </button>
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600 font-sans" role="alert">
          {error}
        </p>
      )}
    </label>
  );
};

InputField.propTypes = {
  textLabel: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  optional: PropTypes.bool,
  error: PropTypes.string,
  className: PropTypes.string,
};

export default InputField;
