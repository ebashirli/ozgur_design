import Button from "../ui/Button";
import lArrow from "../../assets/icons/arrow-left.svg";
import rArrow from "../../assets/icons/arrow-right.svg";

function Feature() {
  const btnClassName =
    "flex items-center justify-center gap-4 grow bg-neutral-800 text-white py-1.5 ";
  return (
    <div className="absolute bottom-0 right-0 text-white bg-primary h-28 flex flex-col justify-between items-center w-max">
      <h4 className=" text-2xl font-bold">Feature Projects</h4>
      <p className=" px-11 text-xl">The National University of Architecture</p>
      <div className="flex justify-between self-stretch">
        <div className="flex grow gap-[1px] bg-white">
          <Button className={btnClassName}>
            <img src={lArrow} alt="" /> Back
          </Button>

          <Button className={btnClassName}>
            Next
            <img src={rArrow} alt="" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Feature;
