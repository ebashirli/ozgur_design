import BackNextButtons from "../ui/BackNextButtons";
import Navigation from "../ui/NavigationCircles";

interface ProjectType {
  id: number;
  title: string;
  address: string;
  img: string;
  category: string;
}

interface FilterType {
  name: string;
  isActive?: boolean;
}

const projects: ProjectType[] = [
  {
    id: 1,
    title: "Wildstone Infra Hotel",
    address: "2715 Ash Dr. San Jose, South Dakota",
    img: "/1.webp",
    category: "",
  },
  {
    id: 2,
    title: "Wish Stone Building",
    address: "2972 Westheimer Rd. Santa Ana, Illinois ",
    img: "/2.webp",
    category: "",
  },
  {
    id: 3,
    title: "Mr. Parkinston’s House",
    address: "3517 W. Gray St. Utica, Pennsylvania",
    img: "/3.webp",
    category: "",
  },
  {
    id: 4,
    title: "Oregano Height",
    address: "2464 Royal Ln. Mesa, New Jersey New Jersey ",
    img: "/4.webp",
    category: "",
  },
];

const filters: FilterType[] = [
  { name: "Mühəndislik həlləri", isActive: true },
  { name: "Metal konstrukiya işləri" },
  { name: "İnteryer və exteryer dizayn" },
  { name: "Koteclər" },
];

function Projects() {
  return (
    <div id="services" className="px-[7.789%] py-[6.112%]">
      <h3 className="text-4xl font-bold mb-10">Xidmətlər və layihələr</h3>
      <div className="grid lg:grid-cols-2 mb-[4.114%]">
        <div className="flex gap-5 flex-wrap lg:flex-col">
          {filters.map((filter) => (
            <FilterItem item={filter} />
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-3 justify-self-center ">
          {projects.map((p) => (
            <Project project={p} />
          ))}
          <div className="hidden md:block col-span-full">
            <BackNextButtons className="grid grid-cols-3">
              <Navigation />
            </BackNextButtons>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

function FilterItem({ item }: { item: FilterType }) {
  const active = "text-primary lg:border-b-0 border-b-4 lg:border-l-4  ";
  const passive = "text-neutral-200";
  return (
    <p
      className={`border-primary text-2xl font-medium lg:pl-4 ${
        item.isActive ? active : passive
      }`}
    >
      {item.name}
    </p>
  );
}

function Project({ project }: { project: ProjectType }) {
  const { img, title, address } = project;
  return (
    <div className="">
      <div className=""></div>
      <img src={img} alt="" className="h-full" />
      {/* <div className="bg-primary text-white p-3 grid gap-3">
        <h5>{title}</h5>
        <p>{address}</p>
      </div> */}
    </div>
  );
}
