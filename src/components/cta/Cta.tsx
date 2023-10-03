function Cta() {
  return (
    <div className="text-center bg-[#F6F8F7] py-10 px-10 text-[#292E3D]">
      <h3 className="  font-bold py-10 text-4xl">What can us do for you?</h3>
      <p className="text-xl pb-9">
        We are ready to work on a project of any complexity, whether it’s
        commercial or residential.
      </p>
      <form>
        <div className="grid grid-cols-2 gap-x-8 gap-y-5 md:px-[25%] py-1">
          <input type="text" name="name" placeholder="Your name" />
          <input type="email" name="email" placeholder="Email" />
          <input
            type="text"
            name="reason"
            placeholder="Resoning for contacting*"
          />
          <input type="phone" name="tel" placeholder="Phone*" required />
          <div className="col-start-1 col-end-3">
            <textarea
              className="w-full"
              name="message"
              cols={30}
              rows={5}
              placeholder="Message"
            ></textarea>
            <p className="text-left">* indicates a required field</p>
          </div>
          <div className="col-start-1 col-end-3">
            <input
              className="bg-[#2947A9] text-white text-xl font-bold w-full md:w-1/2"
              type="submit"
              value="Submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Cta;
