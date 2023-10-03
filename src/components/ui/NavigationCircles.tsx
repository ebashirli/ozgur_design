import activeCircle from "../../assets/icons/navigation/active-circle.svg";
import circle from "../../assets/icons/navigation/circle.svg";

function Navigation() {
  return (
    <div className="flex justify-center w-full col-span-full gap-8 mb-4 pt-2">
      <div className="flex justify-center gap-4">
        <img src={activeCircle} alt="" />
        <img src={circle} alt="" />
        <img src={circle} alt="" />
        <img src={circle} alt="" />
        <img src={circle} alt="" />
      </div>
    </div>
  );
}

export default Navigation;
