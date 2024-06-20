import { useState } from "react";
import BackNextButtons from "../ui/BackNextButtons";

interface ProjectType {
  id?: number;
  title?: string;
  address?: string;
  img: string;
  category?: string;
}

interface FilterType {
  name: string;
  isActive?: boolean;
  bucket: string;
}

const projects: ProjectType[] = [
  { img: "IMG_20230218_170157.jpg" },
  { img: "IMG_20230312_143959.jpg" },
  { img: "IMG_20240304_162601.jpg" },
  { img: "IMG_20240304_195025.jpg" },
  { img: "IMG_20240314_083845.jpg" },
  { img: "IMG_20240322_144531.jpg" },
  { img: "IMG_20240330_171024.jpg" },
  { img: "IMG_20240401_133941.jpg" },
  { img: "IMG_20240404_175352.jpg" },
  { img: "IMG-20230221-WA0009.jpg" },
  { img: "IMG-20231208-WA0118.jpg" },
  { img: "IMG-20231213-WA0028.jpg" },
  { img: "IMG-20240107-WA0072.jpg" },
  { img: "IMG-20240107-WA0075.jpg" },
  { img: "IMG-20240107-WA0079.jpg" },
  { img: "IMG-20240107-WA0081.jpg" },
  { img: "IMG-20240208-WA0023.jpg" },
  { img: "IMG-20240227-WA0006.jpg" },
  { img: "IMG-20240228-WA0023.jpg" },
  { img: "IMG-20240311-WA0001.jpg" },
  { img: "IMG-20240311-WA0003.jpg" },
  { img: "IMG-20240311-WA0006.jpg" },
  { img: "IMG-20240314-WA0004.jpg" },
  { img: "IMG-20240314-WA0006.jpg" },
  { img: "IMG-20240314-WA0007.jpg" },
  { img: "IMG-20240315-WA0001.jpg" },
  { img: "IMG-20240315-WA0002.jpg" },
  { img: "IMG-20240315-WA0003.jpg" },
  { img: "IMG-20240318-WA0010.jpg" },
  { img: "IMG-20240318-WA0012.jpg" },
  { img: "IMG-20240318-WA0013.jpg" },
  { img: "IMG-20240318-WA0014.jpg" },
  { img: "IMG-20240324-WA0024.jpg" },
  { img: "IMG-20240328-WA0002.jpg" },
  { img: "IMG-20240328-WA0003.jpg" },
  { img: "IMG-20240328-WA0004.jpg" },
  { img: "IMG-20240409-WA0004.jpg" },
  { img: "IMG-20240409-WA0006.jpg" },
  { img: "IMG-20240409-WA0008.jpg" },
  { img: "IMG-20240409-WA0012.jpg" },
  { img: "IMG-20240409-WA0013.jpg" },
  { img: "IMG-20240409-WA0014.jpg" },
  { img: "IMG-20240409-WA0021.jpg" },
];

const filters: FilterType[] = [
  { name: "Mühəndislik həlləri", bucket: "solutions", isActive: true },
  { name: "Metal konstrukiya işləri", bucket: "steel" },
  { name: "İnteryer və exteryer dizayn", bucket: "designs" },
  { name: "Koteclər", bucket: "cottages" },
];

function Services() {
  const [start, setStart] = useState(0);
  const [bucket, setBucket] = useState("steel");
  const baseUrl = `https://kwfudicheikebyrjvroe.supabase.co/storage/v1/object/public/${bucket}/`;

  const end = start + 4;
  return (
    <div id="services" className="px-[7.789%] py-10 grid md:grid-cols-2 ">
      <h3 className="text-4xl font-bold mb-10">Xidmətlər və layihələr</h3>
      <div className="flex gap-5 flex-wrap lg:flex-col mb-8 md:col-start-1">
        {filters.map((filter) => (
          <FilterItem
            key={filter.name}
            item={filter}
            isActive={filter.bucket === bucket}
            setBucket={setBucket}
          />
        ))}
      </div>
      <div className="w-full grid justify-center gap-4 ">
        <div className="grid md:grid-cols-2 gap-3 justify-self-center w-full justify-center ">
          {projects.slice(start, end).map((p) => (
            <Project project={p} baseUrl={baseUrl} />
          ))}
        </div>
        <div className="hidden md:block col-span-full">
          <BackNextButtons
            decDisabled={start === 0}
            incDisabled={start === projects.length - 1}
            setStart={setStart}
            className="grid grid-cols-3"
          />
        </div>
      </div>
    </div>
  );
}

export default Services;

function FilterItem({
  item,
  setBucket,
  isActive,
}: {
  item: FilterType;
  setBucket: (p: string) => void;
  isActive: boolean;
}) {
  const active = "text-primary lg:border-b-0 border-b-4 lg:border-l-4  ";
  const passive = "text-neutral-200";
  return (
    <p
      className={`border-primary text-2xl font-medium lg:pl-4 ${
        isActive ? active : passive
      } cursor-pointer`}
      onClick={() => setBucket(item.bucket)}
    >
      {item.name}
    </p>
  );
}

function Project({
  project,
  baseUrl,
}: {
  project: ProjectType;
  baseUrl: string;
}) {
  const { img } = project;

  return (
    <div className="max-w-sm p-6 bg-white rounded-lg shadow ">
      <img src={baseUrl + img} alt="" className="h-full" />
    </div>
  );
}
