import PropTypes from "prop-types";

/* eslint-disable no-unused-vars */
const InfoItems = ({ icon: Icon, title, text }) => {
  return (
    <article
      className="max-w-52 grid justify-items-center pb-5 md:pb-0"
      aria-labelledby={`info-title-${title.replace(/\s+/g, "-").toLowerCase()}`}
      role="listitem"
    >
      <Icon
        className="pb-1 md:pb-2 size-24 md:size-32"
        role="img"
        aria-hidden="true"
        focusable="false"
      />
      <h3
        className="text-primary font-display font-semibold text-base md:text-xl text-center"
        id={`info-title-${title.replace(/\s+/g, "-").toLowerCase()}`}
      >
        {title}
      </h3>
      <p className="text-center text-xs md:text-base mt-1 md:mt-2">{text}</p>
    </article>
  );
};

InfoItems.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default InfoItems;
