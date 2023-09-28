import icon1 from "../../assets/icons/reasons/Vector.png";
import icon2 from "../../assets/icons/reasons/Vector-1.png";
import icon3 from "../../assets/icons/reasons/Vector-2.png";
import Card from "../ui/Card";

function Reputation() {
  const items = [
    {
      icon: icon1,
      heading: "Best Services",
      texts: ["Nullam senectus porttitor in eget. Eget rutrum leo interdum."],
    },
    {
      icon: icon2,
      heading: "Best Teams",
      texts: ["Cursus semper tellus volutpat aliquet lacus."],
    },
    {
      icon: icon3,
      headings: "Best Designs",
      texts: ["Ultricies at ipsum nunc, tristique nam lectus."],
    },
  ];

  const className = "border p-5 space-y-4 w-[65%] h-[100%] justify-self-center";

  return (
    <div className="py-14 pb-20">
      <h3 className=" text-center font-bold py-10 text-2xl">Our Reputation</h3>
      <ul className="grid grid-cols-3 w-9/12 m-auto ">
        {items.map((item) => (
          <Card item={item} className={className} />
        ))}
      </ul>
    </div>
  );
}

export default Reputation;
