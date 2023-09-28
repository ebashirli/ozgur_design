import hero from "../../assets/imgs/hero.png";
import Feature from "./Feature";

function Hero() {
  return (
    <div className="relative">
      <img className="w-screen" src={hero} alt="" />
      <h2 className=" absolute top-[50%] text-[72px] max-w-[39%] left-48 font-bold -translate-y-1/2">
        Building things is our mission.
      </h2>
      <Feature />
    </div>
  );
}

export default Hero;
