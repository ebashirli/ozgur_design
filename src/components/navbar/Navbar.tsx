import Logo from "../ui/Logo";
import Navigations from "./Navigations";

function Navbar() {
  return (
    <header className="flex justify-between py-4 px-[7.778%]">
      <Logo />
      <Navigations />
    </header>
  );
}

export default Navbar;
