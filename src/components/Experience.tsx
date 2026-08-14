import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Mayvent from "./works/Mayvent";
import Grow from "./works/Grow";
import Nuevera from "./works/Nuevera";
import Contentstack from "./works/Contentstack";

const experiences = [
  { id: "contentstack", label: "Contentstack", Panel: Contentstack },
  { id: "mayvent", label: "Mayvent Technologies", Panel: Mayvent },
  { id: "grow", label: "Grow Educators", Panel: Grow },
  { id: "nuevera", label: "Nuevera Infotech", Panel: Nuevera },
] as const;

type ExperienceId = (typeof experiences)[number]["id"];

const Experience = () => {
  const [active, setActive] = useState<ExperienceId>("contentstack");

  const ActivePanel =
    experiences.find((item) => item.id === active)?.Panel ?? Contentstack;

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-24 lgl:py-36 px-4"
    >
      <SectionTitle title="Where I have Worked" titlenumber="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          {experiences.map(({ id, label }) => (
            <li
              key={id}
              onClick={() => setActive(id)}
              className={`border-l-2 ${
                active === id
                  ? "border-l-textGreen text-textGreen"
                  : "border-l-hoverColor text-textDark"
              } bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
            >
              {label}
            </li>
          ))}
        </ul>
        <ActivePanel />
      </div>
    </section>
  );
};

export default Experience;
