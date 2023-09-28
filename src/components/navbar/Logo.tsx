import logo from "../../assets/imgs/logo.svg";

function Logo() {
  return (
    <div className="flex gap-4">
      <img src={logo} alt="Ozgur Design logo" />
      <h1 className=" logo  flex items-center ">
        Özgür <span>Design</span>
      </h1>
    </div>
  );
}

export default Logo;
