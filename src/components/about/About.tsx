import about from "../../assets/imgs/about.png";
import Button from "../ui/Button";
import Card from "../ui/Card";
function About() {
  const cardClassName =
    "bg-primary absolute top-1/2 w-80  bg-gray-900 text-white -translate-y-1/2 p-10 -right-28";
  const btnClassName = " w-52 bg-white text-gray-900";
  const button = <Button className={btnClassName}>More on Our History</Button>;

  return (
    <div className=" px-28">
      <div className="relative w-fit">
        <img src={about} alt="a man with glasses" />
        <Card
          className={cardClassName}
          item={{
            heading: "About us",
            texts: [
              "For more than 30 years we have been delivering world-class construction and we’ve built many lasting relationships along the way. We’ve matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S.",
            ],
            button,
          }}
        />
      </div>
    </div>
  );
}

export default About;
