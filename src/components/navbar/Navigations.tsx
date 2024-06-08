import { FaWhatsapp } from "react-icons/fa";

function Navigations() {
  return (
    <ul className="hidden md:flex items-center gap-5 text-lg">
      {/* <li>Ana s</li> */}
      <li>
        <a href="#about">Haqqımızda</a>
      </li>
      <li>
        <a href="#services">Xidmətlər</a>
      </li>
      <li>
        <a href="#contacts">Əlaqə</a>
      </li>
      <li className="text-secondary font-[600]">
        <a
          href="https://wa.me/message/NQL7VPZ3AJPNH1"
          target="_blank"
          className="flex items-center gap-2"
        >
          <FaWhatsapp />
          <span> +994 55 729 60 86</span>
        </a>
      </li>
    </ul>
  );
}

export default Navigations;
