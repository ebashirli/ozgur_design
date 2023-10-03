import Button from "./Button";
import lArrow from "../../assets/icons/arrow-left.svg";
import rArrow from "../../assets/icons/arrow-right.svg";

function BackNextButtons({ children, className }) {
  const btnClassName =
    "flex items-center justify-center gap-4 grow bg-neutral-800 text-white py-1.5 ";

  return (
    <div className={className}>
      <Button className={btnClassName}>
        <img src={lArrow} alt="" /> Back
      </Button>
      <div>{children}</div>
      <Button className={btnClassName}>
        Next
        <img src={rArrow} alt="" />
      </Button>
    </div>
  );
}

export default BackNextButtons;
