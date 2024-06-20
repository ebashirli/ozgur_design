import { ReactElement } from "react";
import { FaWhatsapp } from "react-icons/fa";

type Props = {
  open: boolean;
  setOpen: (b: false) => void;
};

const items = [
  {
    href: "#about",
    label: "Haqqımızda",
  },
  {
    href: "#services",
    label: "Xidmətlər",
  },
  {
    href: "#contacts",
    label: "Əlaqə",
  },
  {
    href: "https://wa.me/message/NQL7VPZ3AJPNH1",
    label: (
      <>
        <FaWhatsapp />
        <span> +994 55 729 60 86</span>
      </>
    ),
    liClassName: "text-secondary font-[600]",
    className: "flex items-center gap-2",
    target: "_blank",
  },
];

function Navigations({ open, setOpen }: Props) {
  return (
    <ul
      onClick={() => setOpen(false)}
      className={`${
        open
          ? "grid content-center justify-center items-center absolute left-0 top-0 bg-primary w-full h-screen bg-opacity-90 text-white  "
          : "hidden "
      } md:flex md:static md:bg-none items-center gap-5 text-4xl md:text-lg  `}
    >
      {items.map((listItem) => (
        <ListItem
          key={listItem.href}
          href={listItem.href}
          label={listItem.label}
          className={listItem.className}
          liClassName={listItem.liClassName}
        />
      ))}
    </ul>
  );
}

export default Navigations;

type ListItemProps = {
  href: string;
  label: string | ReactElement;
  className?: string;
  liClassName?: string;
  target?: string;
};

function ListItem({
  href,
  label,
  className,
  liClassName,
  target,
}: ListItemProps) {
  return (
    <li className={liClassName + " text-center "}>
      <a href={href} className={className} target={target}>
        {label}
      </a>
    </li>
  );
}
