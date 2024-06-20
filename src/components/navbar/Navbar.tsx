import { useState } from "react";
import Button from "../ui/Button";
import Logo from "../ui/Logo";
import Navigations from "./Navigations";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="absolute flex justify-between py-4 px-[7.778%] z-20 w-full">
      <Logo />
      <Button onClick={() => setIsMenuOpen((p: boolean) => !p)}>
        <GiHamburgerMenu className="md:hidden text-5xl cursor-pointer " />
      </Button>
      <Navigations open={isMenuOpen} setOpen={setIsMenuOpen} />
    </header>
  );
}

export default Navbar;
