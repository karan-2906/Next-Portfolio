import { useState } from "react"
import SectionTitle from "./SectionTitle"
import Mayvent from "./works/Mayvent"
import Grow from "./works/Grow"
import Nuevera from "./works/Nuevera"

const Experience = () => {
  const [mayvent, setMayvent] = useState(true)
  const [growEducators, setGrowEducators] = useState(false)
  const [nueveraInfotech, setNueveraInfotech] = useState(false)

  return (
    <section id="experience" className="max-w-containerxs mx-auto py-10 lgl:py-36 px-4">
      <SectionTitle title="Where I have Worked" titlenumber="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li onClick={() => { setMayvent(true); setGrowEducators(false); setNueveraInfotech(false) }} className={`border-l-2 ${mayvent ? "border-l-textGreen text-textGreen":"border-l-hoverColor text-textDark"} bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
            Mayvent Technologies
          </li>
          <li onClick={() => { setMayvent(false); setGrowEducators(true); setNueveraInfotech(false) }}  className={`border-l-2 ${growEducators ? "border-l-textGreen text-textGreen":"border-l-hoverColor text-textDark"} bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
            Grow Educators
          </li>
          <li onClick={() => { setMayvent(false); setGrowEducators(false); setNueveraInfotech(true) }}  className={`border-l-2 ${nueveraInfotech ? "border-l-textGreen text-textGreen":"border-l-hoverColor text-textDark"} bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
            Nuevera Infotech
          </li>
        </ul>
        {mayvent&& <Mayvent />}
        {growEducators&& <Grow />}
        {nueveraInfotech&& <Nuevera />}
      </div>
    </section>
  )
}

export default Experience