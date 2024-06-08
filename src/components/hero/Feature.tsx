import BackNextButtons from "../ui/BackNextButtons";

function Feature() {
  return (
    <div className="lg:absolute bottom-0 right-0 text-white bg-primary lg:w-[28.8889%] flex flex-col justify-between items-center">
      <div className="py-5 px-2.5 flex gap-5 flex-col text-center">
        {/* <h4 className=" font-[700] text-xl">Feature Projects</h4> */}
        {/* <p className="text-2xl mb">The National University of Architecture</p> */}
      </div>
      <BackNextButtons className="w-full flex" />
    </div>
  );
}

export default Feature;
