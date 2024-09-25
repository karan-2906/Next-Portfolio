"use client"
import Image from "next/image"
import Logos from "./Logos"
import Link from "next/link"
import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <div className="w-full shadow-navbarshadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container mx-auto h-full py-1 font-titlefont flex items-center justify-between">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Logos />
        </motion.div>
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[13px] gap-7">
            <Link href="#home"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li initial={{ y: -10, opacity: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.1 }}>Home</motion.li>
            </Link>
            <Link href="#about"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li initial={{ y: -10, opacity: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.1, delay: 0.1 }}>
                <span className="text-textGreen">01.</span>About
              </motion.li>
            </Link>
            <Link href="#experience"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li initial={{ y: -10, opacity: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.1, delay: 0.2 }}>
                <span className="text-textGreen">02.</span>Experience
              </motion.li>
            </Link>
            <Link href="#project"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li initial={{ y: -10, opacity: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.1, delay: 0.3 }}>
                <span className="text-textGreen">03.</span>Project
              </motion.li>
            </Link>
            <Link href="#contact"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li initial={{ y: -10, opacity: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.1, delay: 0.4 }}>
                <span className="text-textGreen">04.</span>Contact
              </motion.li>
            </Link>
          </ul>
          <a href="/Resume-Karan_Gandhi.pdf" target="_blank">
            <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
            >
              Resume
            </motion.button>
          </a>
        </div>
        {/* small icon section */}
        <div className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group">
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all duration-300 ease-in-out"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all duration-300 ease-in-out"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-2 transition-all duration-300 ease-in-out"></span>
        </div>
      </div>
    </div>
  )
}

export default Navbar