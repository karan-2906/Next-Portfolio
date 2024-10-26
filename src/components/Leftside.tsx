"use client"
import { SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";
import { TbBrandGithub } from "react-icons/tb";
import { useState } from "react";
import { motion } from "framer-motion";

const Leftside = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const socialItems = [
    { href: "https://github.com/karan-2906", icon: TbBrandGithub, text: "See Pojects" },
    { href: "https://www.linkedin.com/in/karan-gandhi-15082222a/", icon: SlSocialLinkedin, text: "Send Connection" },
    { href: "https://www.instagram.com/_karangandhi_/", icon: SlSocialInstagram, text: "Follow Me" },
    // { href: "#contact", icon: BsPersonWorkspace, text: "Contact Me" },
  ];

  return (
    <motion.div 
      className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
    >
      <div className="flex gap-4 flex-col">
        {socialItems.map((item, index) => (
          <motion.div 
            key={index} 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
          >
            <a
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              onMouseEnter={() => setHoveredItem(item.text)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
                <item.icon />
              </span>
            </a>
            {hoveredItem === item.text && (
              <div className="absolute left-14 top-1/2 rounded-xl -translate-y-1/2 bg-hoverColor text-textGreen px-3 py-2 ">
                {item.text}
              </div>
            )}
          </motion.div>
        ))}
      </div>
      <motion.div 
        className="w-[2px] h-48 bg-textDark"
        initial={{ height: 0 }}
        animate={{ height: "11rem" }}
        transition={{ duration: 0.5, delay: 0.6 }}
      ></motion.div>
    </motion.div>
  );
};

export default Leftside;