function Card({ item, className }) {
  const { icon, heading, texts, button } = item;
  return (
    <div className={className}>
      {icon && <img src={icon} alt="" />}
      <h4 className="font-bold">{heading}</h4>
      {texts?.length &&
        texts.map((text) => (
          <p key={text} className="mb-5 text-lg">
            {text}
          </p>
        ))}
      {button}
    </div>
  );
}

export default Card;
