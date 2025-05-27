import PropTypes from "prop-types";

const TestimonialsItem = ({
  name,
  profession,
  location,
  text,
  img,
  reverse,
  QuoteIcon,
  showOpeningQuote = false,
  showClosingQuote = false,
}) => {
  return (
    <blockquote
      className={`relative flex flex-col md:flex-row gap-5 max-w-5xl mx-auto col-span-2 ${
        reverse ? "md:flex-row-reverse md:text-right" : ""
      }`}
    >
      <img
        src={img}
        alt={`Foto de ${name}`}
        className="w-24 h-24 md:w-40 md:h-40 rounded-full shrink-0"
      />
      {QuoteIcon && showOpeningQuote && (
        <QuoteIcon className=" hidden md:block w-10 h-10 text-accent" />
      )}
      <div className="flex-1 ">
        <p className="text-lg text-text max-w-xl mb-2">{text}</p>
        <cite className="not-italic font-semibold text-primary block">
          {name}
        </cite>
        <span className="block text-sm text-muted text-text">
          {profession} | {location}
        </span>
      </div>
      {QuoteIcon && showClosingQuote && (
        <QuoteIcon className=" w-10 h-10 absolute right-5 bottom-5 rotate-180" />
      )}
    </blockquote>
  );
};

TestimonialsItem.prototype = {
  name: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
  QuoteIcon: PropTypes.elementType,
  showOpeningQuote: PropTypes.bool,
  showClosingQuote: PropTypes.bool,
};

export default TestimonialsItem;
