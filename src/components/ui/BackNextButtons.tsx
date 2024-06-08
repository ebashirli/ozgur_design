import Button from "./Button";
import lArrow from "../../assets/icons/arrow-left.svg";
import rArrow from "../../assets/icons/arrow-right.svg";

function BackNextButtons({
  children,
  className,
}: {
  children?: JSX.Element;
  className: string;
}) {
  const btnClassName =
    "flex items-center justify-center gap-4 grow bg-neutral-800 text-white py-1.5 ";

  return (
    <div className={className}>
      <Button className={btnClassName}>
        <img src={lArrow} alt="" />
      </Button>
      <div></div>
      <Button className={btnClassName}>
        <img src={rArrow} alt="" />
      </Button>
    </div>
  );
}

export default BackNextButtons;
