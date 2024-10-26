import { motion } from "framer-motion"

const Banner = () => {
  return (
    <section id="home"
      className="max-w-contentContainer min-h-screen mx-auto py-24 lgl:py-36 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titlefont tracking-wide text-textGreen"
      >
        Hi,my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-4xl lgl:text-6xl font-titlefont font-semibold flex flex-col"
      >
        Karan Gandhi. <span className="">I build things for the web.</span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        {" "}
        I am a web developer with 2+ years of experience in building responsive and dynamic websites with React.
        I have a strong foundation in front-end & back-end development and a passion for creating beautiful and functional web applications.
        I am skilled in creating user-friendly and responsive websites using React and its ecosystem.
        {" "} <br />
        <a href="https://github.com/karan-2906" target="_blank" >
          <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group mt-1">Learn more
            <span className="absolute w-full h-[1px] bg-textGreen bottom-1 left-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </span>
        </a>
      </motion.p>
      <a href="#projects" className="w-fit">
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="w-52 h-14 text-sm font-titlefont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
        >
          Check out my Projects
        </motion.button>
      </a>
    </section>
  )
}

export default Banner