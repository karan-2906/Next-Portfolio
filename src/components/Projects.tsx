import Image from "next/image";
import type { ReactNode } from "react";
import SectionTitle from "./SectionTitle";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

type Project = {
  title: string;
  image: string;
  live: string;
  github: string;
  tech: string[];
  description: ReactNode;
};

const projects: Project[] = [
  {
    title: "Play Game",
    image: "/playgame.png",
    live: "https://play-gamee.onrender.com/",
    github: "https://github.com/karan-2906/Games",
    tech: ["Next.js", "TypeScript", "Socket.IO", "MongoDB", "Render"],
    description: (
      <>
        Play Game is a real-time multiplayer party games platform. Spin up a
        private room, share the five-letter code, and play{" "}
        <span className="text-textGreen">22 games</span> together with no
        installs and no accounts. Chess, pool, carrom, UNO, racing and drawing
        all run off a single{" "}
        <span className="text-textGreen">server-authoritative</span> game engine
        streamed over WebSockets.
      </>
    ),
  },
  {
    title: "NoteShare",
    image: "/notes.png",
    live: "https://noteshare-snowy.vercel.app/",
    github: "https://github.com/karan-2906/NOTESHARE",
    tech: ["React JS", "Node.js", "Tailwind CSS", "MongoDB", "Vercel Deployment"],
    description: (
      <>
        NoteShare is a platform that allows Students to share notes with each
        other. It is a full stack application which works with{" "}
        <span className="text-textGreen">Purchasing </span>
        notes with the <span className="text-textGreen">coins system</span>. The
        project was granted a copyright certificate.
      </>
    ),
  },
  {
    title: "Entrepreneurs connect",
    image: "/entre.png",
    live: "https://entrepreneursconnect.vercel.app/",
    github: "https://github.com/karan-2906/EntrepreneursConnect",
    tech: ["React JS", "Node.js", "Tailwind CSS", "MongoDB", "Vercel Deployment"],
    description: (
      <>
        Entrepreneurs connect is a platform that allows Entrepreneurs to connect
        with each other. It is a full stack application which works with{" "}
        <span className="text-textGreen">Posting Ideas </span>
        and also allows to{" "}
        <span className="text-textGreen">chat with each other</span> in real
        time.
      </>
    ),
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-container mx-auto lgl:px-20 py-24 lgl:py-36"
    >
      <SectionTitle title="Some Things I've Built" titlenumber="03" />
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {projects.map((project, index) => {
          const reversed = index % 2 === 1;

          return (
            <div
              key={project.title}
              className="w-full flex flex-col items-center justify-center gap-28 mt-10"
            >
              <div
                className={`flex flex-col h-auto gap-6 ${
                  reversed ? "xl:flex-row-reverse" : "xl:flex-row"
                }`}
              >
                <a
                  className="w-full xl:w-1/2 relative group"
                  href={project.live}
                  target="_blank"
                >
                  <div className="w-full h-full relative flex pl-6 lgl:pl-0">
                    <Image
                      className="rounded-lg h-full object-cover"
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      width={1500}
                      height={1500}
                    />
                    <div className="hidden lgl:inline-block absolute w-full h-full bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
                  </div>
                </a>
                <div
                  className={`w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10 ${
                    reversed ? "" : "xl:-ml-16"
                  }`}
                >
                  <div>
                    <p className="font-titlefont text-textGreen text-sm tracking-wide">
                      Featured Project
                    </p>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>
                  <p
                    className={`text-sm bg-[#112240] md:text-base p-2 md:p-6 rounded-md ${
                      reversed ? "xl:-mr-16" : ""
                    }`}
                  >
                    {project.description}
                  </p>
                  <ul className="text-xs md:text-sm font-titlefont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                    {project.tech.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="text-2xl flex items-center gap-4 mb-2">
                    <a
                      className="hover:text-textGreen duration-300"
                      href={project.github}
                      target="_blank"
                      aria-label={`${project.title} source on GitHub`}
                    >
                      <TbBrandGithub />
                    </a>
                    <a
                      className="hover:text-textGreen duration-300"
                      href={project.live}
                      target="_blank"
                      aria-label={`${project.title} live site`}
                    >
                      <RxOpenInNewWindow />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
