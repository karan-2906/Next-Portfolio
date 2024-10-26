import Image from "next/image"
import SectionTitle from "./SectionTitle"
import { TbBrandGithub } from "react-icons/tb"
import { RxOpenInNewWindow } from "react-icons/rx"

const Projects = () => {
    return (
        <section id="projects" className="max-w-container mx-auto lgl:px-20 py-24 lgl:py-36">
            <SectionTitle title="Some Things I've Built" titlenumber="03" />
            <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
                <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
                    <div className="flex flex-col h-auto xl:flex-row gap-6">
                        <a className="w-full xl:w-1/2 relative group" href="https://noteshare-snowy.vercel.app/" target="_blank">
                            <div className="w-full h-full relative  flex pl-6 lgl:pl-0">
                                <Image className="rounded-lg h-full object-cover" src={"/notes.png"} alt="Karan Gandhi" width={1500} height={1500} />
                                <div className="hidden lgl:inline-block absolute w-full h-full bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
                            </div>
                        </a>
                        <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
                            <div>
                                <p className=" font-titlefont text-textGreen text-sm tracking-wide">Featured Project</p>
                                <h3 className="text-2xl font-bold">NoteShare</h3>
                            </div>
                            <p className="text-sm bg-[#112240] md:text-base p-2 md:p-6 rounded-md">
                                NoteShare is a platform that allows Students to share notes with each other. It is a full stack application which works with{" "}
                                <span className="text-textGreen">
                                    Purchasing{" "}
                                </span>
                                notes with the {" "}
                                <span className="text-textGreen">
                                    coins system
                                </span>
                            </p>
                            <ul className="text-xs md:text-sm font-titlefont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                                <li>React JS</li>
                                <li>Node.js</li>
                                <li>Tailwind CSS</li>
                                <li>MongoDB</li>
                                <li>Vercel Deployment</li>
                            </ul>
                            <div className="text-2xl flex items-center gap-4 mb-2">
                                <a className="hover:text-textGreen duration-300" href="https://github.com/karan-2906/NOTESHARE" target="_blank">
                                    <TbBrandGithub />
                                </a>
                                <a className="hover:text-textGreen duration-300" href="https://noteshare-snowy.vercel.app/" target="_blank">
                                    <RxOpenInNewWindow />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
                    <div className="flex flex-col h-auto xl:flex-row-reverse gap-6">
                        <a className="w-full xl:w-1/2  relative group" href="https://entrepreneursconnect.vercel.app" target="_blank">
                        <div className="w-full h-full relative  flex pl-6 lgl:pl-0">
                                <Image className="rounded-lg h-full object-cover" src={"/entre.png"} alt="Karan Gandhi" width={1500} height={1500} />
                                <div className="hidden lgl:inline-block absolute w-full h-full bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
                            </div>
                        </a>
                        <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
                            <div>
                                <p className=" font-titlefont text-textGreen text-sm tracking-wide">Featured Project</p>
                                <h3 className="text-2xl font-bold">Entrepreneurs connect</h3>
                            </div>
                            <p className="text-sm bg-[#112240] md:text-base p-2 md:p-6 xl:-mr-16  rounded-md">
                                Entrepreneurs connect is a platform that allows Entrepreneurs to connect with each other. It is a full stack application which works with{" "}
                                <span className="text-textGreen">
                                    Posting Ideas{" "}
                                </span>
                                and also allows to {" "}
                                <span className="text-textGreen">
                                    chat with each other.
                                </span>
                            </p>
                            <ul className="text-xs md:text-sm font-titlefont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                                <li>React JS</li>
                                <li>Node.js</li>
                                <li>Tailwind CSS</li>
                                <li>MongoDB</li>
                                <li>Vercel Deployment</li>
                            </ul>
                            <div className="text-2xl flex items-center gap-4 mb-2">
                                <a className="hover:text-textGreen duration-300" href="https://github.com/karan-2906/EntrepreneursConnect" target="_blank">
                                    <TbBrandGithub />
                                </a>
                                <a className="hover:text-textGreen duration-300" href="https://entrepreneursconnect.vercel.app/" target="_blank">
                                    <RxOpenInNewWindow />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
                    <div className="flex flex-col h-auto xl:flex-row gap-6">
                        <a className="w-full xl:w-1/2  relative group" href="https://movie-finderbykaran.vercel.app/" target="_blank">
                        <div className="w-full h-full relative  flex pl-6 lgl:pl-0">
                                <Image className="rounded-lg h-full object-cover" src={"/movie.png"} alt="Karan Gandhi" width={1500} height={1500} />
                                <div className="hidden lgl:inline-block absolute w-full h-full bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
                            </div>
                        </a>
                        <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
                            <div>
                                <p className=" font-titlefont text-textGreen text-sm tracking-wide">Featured Project</p>
                                <h3 className="text-2xl font-bold">Movie Finder</h3>
                            </div>
                            <p className="text-sm bg-[#112240] md:text-base p-2 md:p-6 rounded-md">
                                Movie Finder is a platform that allows users to find movies and also allows to{" "}
                                <span className="text-textGreen">
                                    Search{" "}
                                </span>
                                and view {" "}
                                <span className="text-textGreen">
                                    details of the movies.
                                </span>
                            </p>
                            <ul className="text-xs md:text-sm font-titlefont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                                <li>React JS</li>
                                <li>TMDB API</li>
                                <li>Tailwind CSS</li>
                                <li>Vercel Deployment</li>
                            </ul>
                            <div className="text-2xl flex items-center gap-4 mb-2">
                                <a className="hover:text-textGreen duration-300" href="https://github.com/karan-2906/Movie-FInder" target="_blank">
                                    <TbBrandGithub />
                                </a>
                                <a className="hover:text-textGreen duration-300" href="https://movie-finderbykaran.vercel.app/" target="_blank">
                                    <RxOpenInNewWindow />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects