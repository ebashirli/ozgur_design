import about from "../../assets/imgs/about.png";
// import Button from "../ui/Button";
function About() {
  return (
    <div className="lg:h-screen px-[7.778%] py-[7.8vh] lg:pb-[21vh] flex flex-col gap-0.25">
      <div className="relative h-full max-w-fit">
        <img src={about} alt="" className="max-h-full" />
        <div className="absolute bg-primary bg-opacity-20 text-white px-10 py-8 grid gap-9 lg:bg-opacity-100 top-0 lg:top-1/2 max-h-full md:w-2/5 lg:right-0 lg:translate-x-1/2 lg:-translate-y-1/2 overflow-y-scroll lg:overflow-hidden ">
          <h4 className="text-4xl font-[700]">About us</h4>
          <p>
            Established in 2014, Ozgur Design has distinguished itself as a
            prominent player in the design and engineering sector. Over the
            years, we have successfully delivered a range of projects including
            commercial buildings, bridges, and civil infrastructure both
            domestically and internationally.
          </p>
          <p>
            In 2021, Ozgur Design formalized its operations by becoming a
            registered Limited Liability Company (LLC). This pivotal milestone
            marked a significant expansion of our services, encompassing
            engineering, construction, consultancy, and training.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
