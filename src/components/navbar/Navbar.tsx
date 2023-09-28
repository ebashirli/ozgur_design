import Logo from "./Logo";
import Navigations from "./Navigations";

function Navbar() {
  return (
    <header className="flex justify-between py-4 px-16">
      <Logo />
      <Navigations />
    </header>
  );
}

export default Navbar;
