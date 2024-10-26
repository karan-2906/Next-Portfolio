import React from 'react'
import { FaRegFolder } from 'react-icons/fa'
import { RxOpenInNewWindow } from 'react-icons/rx'
import { TbBrandGithub } from 'react-icons/tb'

const Archivecard = ({title, description, link, github, items}: {title: string, description: string, link: string, github: string, items: string[]}) => {
    return (
        <a href={link} target='_blank'>
            <div className='w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 group transition-transform duration-300'>
                <div className='flex justify-between items-center'>
                    <FaRegFolder className='text-4xl text-textGreen' />
                    <div className='flex items-center gap-4'>
                        <a href={github} target='_blank'><TbBrandGithub className='text-4xl hover:text-textGreen' /></a>
                        <RxOpenInNewWindow className='text-4xl hover:text-textGreen' />
                    </div>
                </div>
                <div>
                    <h2 className='text-xl font-titlefont font-semibold tracking-wide group-hover:text-textGreen'>{title}</h2>
                    <p className='text-sm mt-3'>{description}</p>
                </div>
                <ul className='text-xs mdl:text-sm text-textDark flex items-center gap-2 flex-wrap justify-between'>
                    {items.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        </a>
    )
}

export default Archivecard