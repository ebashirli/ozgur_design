interface CardType {
  id?: number;
  icon: string;
  heading: string;
  texts?: string[];
  button?: JSX.Element;
  pos?: string;
  iconPos?: string;
}

function Card({ item, className }: { item: CardType; className: string }) {
  const { icon, heading, texts, button } = item;
  return (
    <div className={className}>
      {icon && <img src={icon} alt="" />}
      <h4 className="font-bold">{heading}</h4>
      {texts?.length &&
        texts.map((text: string) => (
          <p key={text} className="mb-5 text-lg">
            {text}
          </p>
        ))}
      {button}
    </div>
  );
}

export type { CardType };

export default Card;
