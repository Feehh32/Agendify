import PropTypes from "prop-types";

/* eslint-disable no-unused-vars */
const ChoiceItems = ({ icon: Icon, title, text }) => {
  return (
    <article
      className="relative max-w-3xs pl-2.5 after:absolute after:content-[''] after:bg-gradient-to-b after:from-secondary after:to-dark-orange after:min-h-full after:w-[3px] after:top-0 after:left-0 after:rounded-xs"
      aria-labelledby={`choice-title-${title
        .replace(/\s+/g, "-")
        .toLowerCase()}`}
    >
      <Icon
        className="mb-2 md:size-6 size-5"
        role="img"
        aria-hidden="true"
        focusable="false"
      />
      <h3
        className="text-primary font-display md:text-lg text-base font-semibold mb-2"
        id={`choice-title-${title.replace(/\s+/g, "-").toLowerCase()}`}
      >
        {title}
      </h3>
      <p className="text-text text-sm md:text-base">{text}</p>
    </article>
  );
};

ChoiceItems.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ChoiceItems;
