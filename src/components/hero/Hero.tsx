import hero from "../../assets/imgs/hero.png";
// import Feature from "./Feature";

function Hero() {
  return (
    <div className="relative h-screen">
      <img className="w-full h-screen" src={hero} alt="" />
      <h2 className=" absolute top-[8%] lg:top-[50%] text-[72px] lg:max-w-[39%] left-[7.778%] font-[600] lg:-translate-y-1/2 grid grid-rows-2 text-neutral-700">
        Dizayn et. Yarat. <span>Öndə ol.</span>
      </h2>
      {/* <Feature /> */}
    </div>
  );
}

export default Hero;
