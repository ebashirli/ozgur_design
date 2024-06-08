// import about from "../../assets/imgs/about.png";
// import Button from "../ui/Button";
function About() {
  return (
    <div
      id="about"
      className="lg:h-screen px-[7.778%] py-[7.8vh] pb-0 lg:pb-[21vh] flex flex-col gap-0.25"
    >
      {/* <div className="relative h-full max-w-fit"> */}
      {/* <img src={about} alt="" className="max-h-full" /> */}
      <div className=" bg-primary bg-opacity-20 text-white px-10 py-8 grid gap-9 lg:bg-opacity-100 top-0 lg:top-1/2 max-h-full md:w-3/5 lg:right-0  ">
        <h4 className="text-4xl font-[700]">Haqqımızda</h4>
        <p>
          “Özgür Group” fəaliyyətə 2014-cü ildən başlamış və bu müddət ərzində
          ölkə daxilində və xaricində bir sıra ticarət mərkəzlərinin,
          körpülərin, ictimai tikinti obyektlərinin ərsəyə gəlməsində dizayn,
          memarlıq, mühəndislik, konsultasiya xidmətləri göstərmişdir. 2021-ci
          ildən “Özgür Dizayn” MMC olaraq rəsmi qeydiyyatdan keçmiş və
          fəaliyyətini mühəndislik, tikinti və tədris istiqamətində
          genişləndirmişdir.
        </p>
        <p>
          Missiyamız hər bir komanda üzvünün qazandığı bilik və təcrübənin digər
          komanda üzvləri və tərəfdaşlarla tam şəkildə paylaşıldığı şəfaf və
          etibarlı mühitin yaradılmasıdır.
        </p>
        <p>
          Əsas viziyonumuz tikinti və mühəndislik sahəsində tələb olunan nəzəri
          və praktiki bilik və təcrübələrin lokanik və kompleks şəkildə tədris
          və tətbiq edildiyi vahid mərkəzin yaradılmasıdır.
        </p>
      </div>
      {/* </div> */}
    </div>
  );
}

export default About;
