import Image from "next/image"
import SectionTitle from "./SectionTitle"
import { AiFillThunderbolt } from "react-icons/ai"
const About = () => {
  return (
    <section id='about' className='max-w-containerSmall mx-auto py-24 lgl:py-36 flex flex-col gap-8'>
      <SectionTitle title='About Me' titlenumber='01' />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p className="">
            Hello! My name is Karan Gandhi and I enjoy  creating things that live on the internet. My interest in Web Development started back in 2022 when I decided to tried creting a website using react.
          </p>
          <p>
            These days I am an engineer at Contentstack, working on the visual editing layer of a headless CMS. It is the part that lets people change a website by clicking straight on the page, which sounds simple until three separate codebases have to agree on what was clicked. Most of what I have learned about state, testing and debugging came from that one product.
          </p>
          <p>
            I like building things from scratch and I am happiest on the problems where the obvious solution does not hold up. Outside work that usually means side projects: multiplayer games, small tools, anything that lets me find out whether the hard part is as hard as it looks.
          </p>
          <p>Here are a few technologies I&#39;ve been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-titlefont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt /> </span> JavaScript</li>
            <li className="flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt /> </span> TypeScript</li>
            <li className="flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt /> </span> React</li>
            <li className="flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt /> </span> Node.js</li>
            <li className="flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt /> </span> Next.js</li>
            <li className="flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt /> </span> Tailwind CSS</li>
            <li className="flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt /> </span> Express</li>
            <li className="flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt /> </span> MongoDB</li>
            <li className="flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt /> </span> Playwright</li>
            <li className="flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt /> </span> GitHub</li>
          </ul>
        </div>

        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image className="rounded-lg h-full object-cover" src={"/pic2.jpg"} alt="Karan Gandhi" width={400} height={400} />
              <div className="hidden lgl:inline-block absolute w-full h-80 group-hover:bg-textGreen/20 rounded-md top-0 left-0 bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 duration-300 transition-transform"></div>
        </div>
      </div>
    </section>
  )
}

export default About