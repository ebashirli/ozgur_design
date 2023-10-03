import icon1 from "../../assets/icons/stats/illus.png";
import icon2 from "../../assets/icons/stats/illus-1.png";
import icon3 from "../../assets/icons/stats/illus-2.png";
import icon4 from "../../assets/icons/stats/illus-3.png";
import Card, { CardType } from "../ui/Card";
import Button from "../ui/Button";

const cards: CardType[] = [
  {
    heading: "84",
    texts: ["Happy Clients"],
    icon: icon1,
    pos: "",
    iconPos: "",
  },
  {
    heading: "123",
    texts: ["Projects Completed"],
    icon: icon2,
    pos: "",
    iconPos: "",
  },
  {
    heading: "37",
    texts: ["Awards Win"],
    icon: icon3,
    pos: "",
    iconPos: "",
  },
  {
    heading: "30",
    texts: ["Years in Business"],
    icon: icon4,
    pos: "",
    iconPos: "",
  },
];

function Stats() {
  return (
    <div className="flex gap-[12%] justify-between">
      <ul className="grid ">
        {cards.map((card) => (
          <Card item={card} className={"flex flex-row-reverse rounded-[4px]"} />
        ))}
      </ul>
      <div>
        <h5>30 Years Experience</h5>
        <p>
          Our company has been the leading provided construction services to
          clients throughout the USA since 1988.
        </p>
        <Button>Contact Us</Button>
      </div>
    </div>
  );
}

export default Stats;

// border: 1px solid var(--neutral-white, #FFF);
// background: var(--neutral-white, #FFF);

// /* Shadow 2 */
// box-shadow: 0px 4px 6px -2px rgba(17, 24, 39, 0.05), 0px 12px 16px -4px rgba(17, 24, 39, 0.10);
