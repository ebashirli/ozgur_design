import Button from "./Button";
import lArrow from "../../assets/icons/arrow-left.svg";
import rArrow from "../../assets/icons/arrow-right.svg";

type Props = {
  children?: JSX.Element;
  className: string;
  setStart: (n: any) => void;
  decDisabled?: boolean;
  incDisabled?: boolean;
};

function BackNextButtons({
  setStart,
  className,
  decDisabled,
  incDisabled,
}: Props) {
  const btnClassName =
    "flex items-center justify-center gap-4 grow bg-neutral-800 text-white py-1.5 rounded-lg ";
  console.log(decDisabled, incDisabled);

  return (
    <div className={className}>
      <Button
        className={btnClassName}
        onClick={() => setStart((p: number) => p - 4)}
        disabled={decDisabled}
      >
        <img src={lArrow} alt="" />
      </Button>
      <div></div>
      <Button
        className={btnClassName}
        onClick={() => setStart((p: number) => p + 4)}
        disabled={incDisabled}
      >
        <img src={rArrow} alt="" />
      </Button>
    </div>
  );
}

export default BackNextButtons;
