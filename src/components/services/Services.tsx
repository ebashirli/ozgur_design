import Card from "../ui/Card";

import icon0 from "../../assets/icons/services/icon.png";
import icon1 from "../../assets/icons/services/icon-1.png";
import icon2 from "../../assets/icons/services/icon-2.png";
import icon3 from "../../assets/icons/services/icon-3.png";
import icon4 from "../../assets/icons/services/icon-4.png";
import icon5 from "../../assets/icons/services/icon-5.png";

function Services() {
  const items = [
    {
      icon: icon0,
      heading: "Construction",
    },
    {
      icon: icon1,
      heading: "Renovation",
    },
    {
      icon: icon2,
      heading: "Consultation",
    },
    {
      icon: icon3,
      heading: "Repair Services",
    },
    {
      icon: icon4,
      heading: "Architecture",
    },
    {
      icon: icon5,
      heading: "Electric",
    },
  ];
  return (
    <div className="bg-neutral-50 px-56 pt-9">
      <h3 className=" text-center font-bold mb-9">Services</h3>
      <ul className=" grid grid-cols-3 gap-x-24 gap-y-12">
        {items.map((item) => (
          <Card
            item={item}
            className="flex flex-col items-center justify-between w-72 h-48 text-center even:bg-primary even:text-white py-9 shadow-[0_0px_37px_-2px_rgba(17,24,39,0.05)] rounded"
          />
        ))}
      </ul>
    </div>
  );
}

export default Services;
