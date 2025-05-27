import React from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const sizeClasses = {
  sm: "text-sm px-4 py-2",
  md: "text-base px-6 py-3",
  lg: "text-lg px-6 py-3",
  input: "h-12 px-6",
  responsive: "text-sm px-4 py-2 md:text-sm md:px-6 md:py-3 lg:text-lg",
};

const Button = ({
  children,
  size = "md",
  className = "",
  fullWidth = false,
  as = "button",
  href = "/",
  onClick,
  type = "button",
  gradient = true,
  ...rest
}) => {
  const baseClasses = twMerge(
    `${gradient ? " btn-gradient" : " btn-border"} ${sizeClasses[size]}${
      fullWidth ? " w-full" : ""
    } inline-block text-center`,
    className
  );

  if (as === "a") {
    return (
      <a href={href} className={baseClasses} {...rest}>
        {children}
      </a>
    );
  }

  if (as === "child") {
    return React.cloneElement(children, {
      className: twMerge(children.props.className, baseClasses),
      ...rest,
    });
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg", "input", "responsive"]),
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  as: PropTypes.oneOf(["button", "a"]),
  href: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};

export default Button;
