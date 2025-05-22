import PropTypes from "prop-types";

/* eslint-disable no-unused-vars */
const InfoItems = ({ icon: Icon, title, text }) => {
  return (
    <div className="max-w-52 grid justify-items-center pb-5 md:pb-0">
      <Icon className="pb-2.5 md:pb-5 size-24 md:size-32" />
      <h3 className="text-primary font-display font-semibold text-base md:text-xl text-center">
        {title}
      </h3>
      <p className="text-center text-xs md:text-base mt-2.5 md:mt-5">{text}</p>
    </div>
  );
};

InfoItems.propTypes = {
  icon: PropTypes.elementType.isRequired, // Para componentes React, como ícones SVG
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default InfoItems;
