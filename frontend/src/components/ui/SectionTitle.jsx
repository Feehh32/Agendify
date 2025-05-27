import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const SectionTitle = ({ children, as = "h2", className = "", id }) => {
  const Tag = as;

  const baseStyles = twMerge(
    "text-primary font-display font-semibold text-3xl md:text-5xl lg:text-6xl",
    className
  );
  return (
    <Tag id={id} className={baseStyles}>
      {children}
    </Tag>
  );
};

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.oneOf(["h1", "h2", "h3"]),
  className: PropTypes.string,
};

export default SectionTitle;
