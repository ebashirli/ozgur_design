import icon0 from "../../assets/icons/services/icon.png";
import icon1 from "../../assets/icons/services/icon-1.png";
import icon2 from "../../assets/icons/services/icon-2.png";
import icon3 from "../../assets/icons/services/icon-3.png";
import icon4 from "../../assets/icons/services/icon-4.png";
import icon5 from "../../assets/icons/services/icon-5.png";
import Card, { CardType } from "../ui/Card";

const items: CardType[] = [
  {
    id: 1,
    icon: icon0,
    heading: "Construction",
  },
  {
    id: 2,
    icon: icon1,
    heading: "Renovation",
  },
  {
    id: 3,
    icon: icon2,
    heading: "Consultation",
  },
  {
    id: 4,
    icon: icon3,
    heading: "Repair Services",
  },
  {
    id: 5,
    icon: icon4,
    heading: "Architecture",
  },
  {
    id: 6,
    icon: icon5,
    heading: "Electric",
  },
];

export function Services() {
  return (
    <div className="bg-neutral-50 md:px-56 pt-9 pb-20">
      <h3 className=" text-center font-bold pb-10 text-4xl text-neutral-800 mb-2.5">
        Services
      </h3>
      <ul className=" grid lg:grid-cols-3 gap-x-24 gap-y-12 justify-items-center">
        {items.map((item) => (
          <Card
            key={item.id}
            item={item}
            className="flex flex-col items-center justify-between w-72 h-48 text-center even:bg-primary even:text-white py-9 shadow-[0_0px_37px_-2px_rgba(17,24,39,0.05)] rounded"
          />
        ))}
      </ul>
    </div>
  );
}

export default Services;
