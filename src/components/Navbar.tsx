"use client"
import { MdMusicNote, MdMusicOff, MdOutlineClose } from "react-icons/md";
import Logos from "./Logos"
import Link from "next/link"
import { motion } from "framer-motion"
import React, { useRef, useState } from "react"
import { Tooltip } from 'react-tooltip'
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";

const Navbar = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);
  const [showmenu, setShowmenu] = useState<boolean>(false);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  }

  const socialItems = [
    { href: "https://github.com/karan-2906", icon: TbBrandGithub, text: "See Pojects" },
    { href: "https://www.linkedin.com/in/karan-gandhi-15082222a/", icon: SlSocialLinkedin, text: "Send Connection" },
    { href: "https://www.instagram.com/_karangandhi_/", icon: SlSocialInstagram, text: "Follow Me" },
    // { href: "#contact", icon: BsPersonWorkspace, text: "Contact Me" },
  ];

  const handleclick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setShowmenu(false);
    }
  }

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowmenu(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const element = document.getElementById(targetId);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
    const links = document.querySelectorAll(".nav-link");
    links.forEach(link => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  }


  return (
    <div className="w-full shadow-navbarshadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container mx-auto h-full py-1 font-titlefont flex items-center justify-between">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Logos />
        </motion.div>
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[13px] gap-7">
            <Link href="#home"
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li initial={{ y: -10, opacity: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.1 }}>Home</motion.li>
            </Link>
            <Link href="#about"
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li initial={{ y: -10, opacity: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.1, delay: 0.1 }}>
                <span className="text-textGreen">01.</span>About
              </motion.li>
            </Link>
            <Link href="#experience"
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li initial={{ y: -10, opacity: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.1, delay: 0.2 }}>
                <span className="text-textGreen">02.</span>Experience
              </motion.li>
            </Link>
            <Link href="#projects"
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li initial={{ y: -10, opacity: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.1, delay: 0.3 }}>
                <span className="text-textGreen">03.</span>Project
              </motion.li>
            </Link>
            <Link href="#contact"
              onClick={handleScroll}
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
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            <audio ref={audioRef} src="/preloader.mp3" loop />
            <button
              onClick={toggleAudio}
              className="text-textGreen text-2xl cursor-pointer border border-textGreen rounded-full p-1 hover:bg-hoverColor duration-300"
              data-tooltip-id="music-tooltip"
              data-tooltip-content={isPlaying ? "Pause Music" : "Play Music"}
            >
              {isPlaying ? <MdMusicOff /> : <MdMusicNote />}
            </button>
            <Tooltip
              id="music-tooltip"
              place="bottom"
              className="bg-textDark text-textGreen absolute"
            />
          </motion.div>
        </div>
        {/* small icon section */}
        <div onClick={() => setShowmenu(true)} className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group">
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all duration-300 ease-in-out"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all duration-300 ease-in-out"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-2 transition-all duration-300 ease-in-out"></span>
        </div>
      </div>
      {showmenu && (
        <div ref={(node) => { if (node) ref.current = node; }} onClick={handleclick} className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.1 }}
            className="w-[80%] h-full overflow-y-scroll scrollbar-hide bg-[#112240] flex flex-col items-center px-4 py-10 relative">
            <MdOutlineClose className="text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4" onClick={() => setShowmenu(false)} />
            <div className="flex flex-col items-center gap-7" >
              <ul className="flex flex-col gap-7 text-base">
                <Link href="#home"
                  onClick={handleScroll}
                  className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                >
                  <motion.li initial={{ x: 20, opacity: 0 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}>Home</motion.li>
                </Link>
                <Link href="#about"
                  onClick={handleScroll}
                  className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                >
                  <motion.li initial={{ x: 20, opacity: 0 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2, delay: 0.2, ease: "easeIn" }}>
                    <span className="text-textGreen">01.</span>About
                  </motion.li>
                </Link>
                <Link href="#experience"
                  onClick={handleScroll}
                  className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                >
                  <motion.li initial={{ x: 20, opacity: 0 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2, delay: 0.3, ease: "easeIn" }}>
                    <span className="text-textGreen">02.</span>Experience
                  </motion.li>
                </Link>
                <Link href="#projects"
                  onClick={handleScroll}
                  className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                >
                  <motion.li initial={{ x: 20, opacity: 0 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2, delay: 0.4, ease: "easeIn" }}>
                    <span className="text-textGreen">03.</span>Project
                  </motion.li>
                </Link>
                <Link href="#contact"
                  onClick={handleScroll}
                  className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                >
                  <motion.li initial={{ x: 20, opacity: 0 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2, delay: 0.5, ease: "easeIn" }}>
                    <span className="text-textGreen">04.</span>Contact
                  </motion.li>
                </Link>
              </ul>
              <a href="/Resume-Karan_Gandhi.pdf" target="_blank">
                <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, ease: "easeIn" }}
                  className="w-32 h-10 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
                >
                  Resume
                </motion.button>
              </a>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, ease: "easeIn" }}>
                <audio ref={audioRef} src="/preloader.mp3" loop />
                <button
                  onClick={toggleAudio}
                  className="text-textGreen text-2xl cursor-pointer border border-textGreen rounded-full p-1 hover:bg-hoverColor duration-300"
                  data-tooltip-id="music-tooltip"
                  data-tooltip-content={isPlaying ? "Pause Music" : "Play Music"}
                >
                  {isPlaying ? <MdMusicOff /> : <MdMusicNote />}
                </button>
              </motion.div>
              <div className="flex flex-wrap items-center gap-4">
                {socialItems.map((item, index) => (
                  <motion.a
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 + (index * 0.1), ease: "easeIn" }}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                  >
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <item.icon />
                    </span>
                  </motion.a>
                ))}
              </div>
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, ease: "easeIn" }}
                href="mailto:karangandhi486@gmail.com">
                <p className="text-sm tracking-wide sm:tracking-widest text-textGreen">
                  karangandhi486@gmail.com
                </p>
              </motion.a>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default Navbar
