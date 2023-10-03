import icon1 from "../../assets/icons/reasons/Vector.png";
import icon2 from "../../assets/icons/reasons/Vector-1.png";
import icon3 from "../../assets/icons/reasons/Vector-2.png";
import Card from "../ui/Card";

const items = [
  {
    id: 1,
    icon: icon1,
    heading: "Best Services",
    texts: ["Nullam senectus porttitor in eget. Eget rutrum leo interdum."],
  },
  {
    id: 2,
    icon: icon2,
    heading: "Best Teams",
    texts: ["Cursus semper tellus volutpat aliquet lacus."],
  },
  {
    id: 3,
    icon: icon3,
    headings: "Best Designs",
    texts: ["Ultricies at ipsum nunc, tristique nam lectus."],
  },
];

function Reputation() {
  const className =
    "border border-neutral-100 p-5 space-y-4 lg:w-[65%] justify-self-center rounded min-h-[197px]";

  return (
    <div className="px-[14.6%] py-[60px] grid">
      <h3 className=" text-center font-bold pb-10 text-4xl text-neutral-800 mb-2.5">
        Our Reputation
      </h3>
      <ul className="grid sm:flex gap-5 md:gap-[5vw] mb-6">
        {items.map((item) => (
          <Card key={item.id} item={item} className={className} />
        ))}
      </ul>
    </div>
  );
}

export default Reputation;
