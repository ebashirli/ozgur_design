import Logo from "../ui/Logo";
import Navigations from "./Navigations";

function Navbar() {
  return (
    <header className="absolute flex justify-between py-4 px-[7.778%] z-20 w-full">
      <Logo />
      <Navigations />
    </header>
  );
}

export default Navbar;
