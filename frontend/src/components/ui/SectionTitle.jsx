import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const SectionTitle = ({ children, as = "h2", className = "" }) => {
  const Tag = as;

  const baseStyles = twMerge(
    "text-primary font-display font-semibold text-3xl md:text-5xl lg:text-6xl",
    className
  );
  return <Tag className={baseStyles}>{children}</Tag>;
};

SectionTitle.PropTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.oneOf(["h1", "h2", "h3"]),
  className: PropTypes.string,
};

export default SectionTitle;
