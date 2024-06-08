import Logo from "../ui/Logo";

import { BiLogoInstagramAlt } from "react-icons/bi";
import facebook from "../../assets/icons/social/facebook.svg";
import linkedin from "../../assets/icons/social/in.svg";
import twitter from "../../assets/icons/social/x.svg";
// import instagram from "../../assets/icons/social/instagram.svg";

interface ContactsInfo {
  title?: string;
  content: JSX.Element;
  css?: string;
}

const contactsInfos: ContactsInfo[] = [
  // {
  //   content: <Logo />,
  //   css: "grid gap-5 col-start-1 row-start-5",
  // },
  {
    title: "Ünvan:",
    content: (
      <address>
        {
          "Bakı şəh., Ələddin Quliyev küç., 1131, Babək plaza, A bloku, 13-cü mərtəbə"
        }
      </address>
    ),
  },
  // {
  //   title: ":",
  //   content: <Subscribe />,
  //   css: "grid gap-5 row-span-2",
  // },
  {
    title: "Telefon:",
    content: (
      <div className="ml-5">
        <div>
          <a href="tel:+994557296086">+994 55 729 60 86</a>
        </div>
        <div>
          <a href="tel:+994552070308">+994 55 207 03 08</a>
        </div>
      </div>
    ),
  },
  {
    title: "Email:",
    content: <a href="mailto: info@ozgurdesign.az">info@ozgurdesign.az</a>,
  },
  {
    title: "",
    content: <Social />,
    css: "grid gap-5 col-start-2 row-start-4 row-span-2",
  },
];

function Bottom() {
  return (
    <div
      id="contacts"
      className="px-[7.778%]  py-[6.112%] grid grid-cols-[2fr_1fr] "
    >
      {contactsInfos.map((item) => (
        <ContactDetail item={item} />
      ))}
    </div>
  );
}

export default Bottom;

function ContactDetail({ item }: { item: ContactsInfo }) {
  return (
    <div className={item.css || "grid grid-cols-[1fr_10fr] "}>
      {item.title ? <ContactLabel title={item.title} /> : null}
      <div>{item.content}</div>
    </div>
  );
}

function ContactLabel({ title }: { title?: string }) {
  const labelStyle = { fontVariant: "all-small-caps" };

  return (
    <div>
      <label
        className="text-primary text-5 font-bold uppercase"
        style={labelStyle}
      >
        {title}
      </label>
    </div>
  );
}

function Subscribe() {
  return (
    <form className="flex gap-2">
      <input
        type="email"
        name="email"
        className="flex-grow  px-2 py-2.5 placeholder:text-lg placeholder:text-neutral-300 rounded border border-neutral-100"
        placeholder="Your email here"
      />
      <input
        type="submit"
        value="Subscribe"
        className="px-5 py-2.5 bg-secondary rounded text-white text-lg font-semibold "
      />
    </form>
  );
}

function Social() {
  return (
    <div className="flex gap-5  ">
      {/* <a href="">
        <img src={facebook} alt="" />
      </a> */}
      <a href="https://www.linkedin.com/company/ozgur-design/" target="_blank">
        <img src={linkedin} alt="" />
      </a>
      {/* <a href="">
        <img src={twitter} alt="" />
      </a> */}
      <a href="https://www.instagram.com/ozgurdesignltd/" target="_blank">
        <div className="bg-[#3D445C] rounded-full w-10 h-10 flex items-center justify-center">
          <BiLogoInstagramAlt
            className={"text-[28px] fill-white bg-[#3D445C]  "}
          />
        </div>
      </a>
    </div>
  );
}
