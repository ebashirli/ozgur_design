import Button from "../ui/Button";

function Consultation() {
  return (
    <div
      className={` text-white max-h-[300px] px-[7.789%] bg-[url("/ads.png")] gap-8 py-10 lg:py-24 grid lg:flex justify-between items-center bg-no-repeat bg-cover`}
    >
      <div>
        <h3 className="text-4xl font-bold mb-8">
          Free consultation with exceptional quality
        </h3>
        <p className="text-2xl">
          Just one call away:{" "}
          <span className="underline">+994 55 207 03 08</span>
        </p>
      </div>
      <Button className="px-5 py-4 text-lg font-semibold border-[2px] border-white rounded-sm ">
        Get your consultation
      </Button>
    </div>
  );
}

export default Consultation;
