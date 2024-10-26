import React from 'react'
import { SlSocialInstagram, SlSocialLinkedin } from 'react-icons/sl';
import { TbBrandGithub } from 'react-icons/tb';

const Footer = () => {
    const socialItems = [
        { href: "https://github.com/karan-2906", icon: TbBrandGithub, text: "See Pojects" },
        { href: "https://www.linkedin.com/in/karan-gandhi-15082222a/", icon: SlSocialLinkedin, text: "Send Connection" },
        { href: "https://www.instagram.com/_karangandhi_/", icon: SlSocialInstagram, text: "Follow Me" },
        // { href: "#contact", icon: BsPersonWorkspace, text: "Contact Me" },
      ];

    return (
        <div className='hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4'>
            {socialItems.map((item, index) => (
                <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} key={index}>
                    <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                        <item.icon />
                    </span>
                </a>
            ))}
        </div>
    )
}

export default Footer