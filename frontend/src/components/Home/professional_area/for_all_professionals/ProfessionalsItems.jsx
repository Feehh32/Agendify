const ProfessionalsItems = ({ img, alt, title, text }) => {
  return (
    <article className="bg-white shadow-lg rounded-2xl max-w-2xs ">
      <div className=" max-w-full rounded-t-2xl overflow-hidden">
        <img src={img} alt={alt} />
      </div>
      <div className="p-2.5 text-center">
        <h3 className="text-lg font-display text-primary font-semibold">
          {title}
        </h3>
        <p className="text-text">{text}</p>
      </div>
    </article>
  );
};

export default ProfessionalsItems;
