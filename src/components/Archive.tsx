import React, { useState } from 'react'
import Archivecard from './Archivecard'
import { motion } from 'framer-motion'
const cards = [
  {
    id: 1,
    title: 'Social Media App',
    description: 'A social media website in which users can create their account and post their thoughts also they can like and comment on others posts.',
    image: '/social.png',
    link: 'https://social-media-frontend-mocha.vercel.app/',
    items: ['ReactJS', 'Node.js', 'Tailwind CSS'],
    github: 'https://github.com/karan-2906/Social-Media',
  },
  {
    id: 2,
    title: 'Live Chat App',
    description: 'A live chat website in which users can chat with each other and receive notifications when someone messages them.',
    image: '/livechat.png',
    link: 'https://chat-app-tan-beta.vercel.app/',
    items: ['NextJS', 'Redis', 'Tailwind CSS'],
    github: 'https://github.com/karan-2906/Live-chat-app',
  },
  {
    id: 3,
    title: 'Fileshare Website',
    description: 'A website in which users can upload and share and download their files with each other also keep their files safe.',
    image: '/portfolio.png',
    link: 'https://fileshare-alpha.vercel.app/',
    items: ['ReactJS', "Google Drive", 'Tailwind CSS'],
    github: 'https://github.com/karan-2906/Fileshare',
  },
  {
    id: 4,
    title: 'Fake Mailer',
    description: 'A fake mailer website in which users can send fake emails to each other.',
    image: '/fake.png',
    link: 'https://mailer-sv4m.vercel.app/',
    items: ['ReactJS', 'SMTP', 'Tailwind CSS'],
    github: 'https://github.com/karan-2906/Mailer',
  },
  {
    id: 5,
    title: 'Video calling',
    description: 'A video calling website in which users can have a meeting with each other and talk to each other.',
    image: '/video.png',
    link: 'https://video-call-hazel-phi.vercel.app/',
    items: ['ReactJS', 'WebRTC', 'Tailwind CSS'],
    github: 'https://github.com/karan-2906/Video-call',
  },
  {
    id: 6,
    title: 'Kanban Board To Do Website',
    description: 'A to do board website in which users can create their account and create their own boards and add tasks to them and manage their tasks.',
    image: '/todo.png',
    link: 'https://next-to-do-three.vercel.app/',
    items: ['NextJS', 'Prisma', 'Tailwind CSS'],
    github: 'https://github.com/karan-2906/Next-Kanban-To-Do',
  },
  {
    id: 7,
    title: 'Weather Website',
    description: 'A weather website in which users can view the weather of any city in the world.',
    image: '/weather.png',
    link: 'https://weather-app-self-two-59.vercel.app/',
    items: ['ReactJS', 'OpenWeather API', 'Tailwind CSS'],
    github: 'https://github.com/karan-2906/Weather-app',
  },
  {
    id: 8,
    title: 'Github User Search',
    description: 'A github user search website in which users can search for any github user and view their details.',
    image: '/github.png',
    link: 'https://github-user-data-sigma.vercel.app/',
    items: ['ReactJS', 'Github API', 'Tailwind CSS'],
    github: 'https://github.com/karan-2906/Github_user_data',
  },
  {
    id: 9,
    title: 'Summary Generator',
    description: 'A summary generator website in which users can give a paragraph of text and get the summary of the text.',
    image: '/summary.png',
    link: 'https://summary-generator-chi.vercel.app/',
    items: ['ReactJS', "Gemini API", 'Tailwind CSS'],
    github: 'https://github.com/karan-2906/Summary-Generator',
  },
  {
    id: 10,
    title: 'Password Generator Website',
    description: 'A password generator website in which users can generate a random password of their desired length and complexity.',
    image: '/password.png',
    link: 'https://password-generator-olive-six.vercel.app/',
    items: ['Vite', 'Toastify', "Tailwind CSS"],
    github: 'https://github.com/karan-2906/Password_generator',
  }
]

const Archive = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className='max-w-contentContainer mx-auto px-4 py-24'>
      <div className='flex flex-col w-full items-center'>
        <h2 className='text-3xl font-titlefont font-semibold'>Other Noteworthy Projects</h2>
        <p className='text-sm font-titlefont text-textGreen'>View the archive</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10'>
        {cards.slice(0, 6).map((card) => (
          <motion.div
          key={card.id}
          initial={{ opacity: 0.8 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 * (card.id) }}
        >
          <Archivecard title={card.title} description={card.description} image={card.image} link={card.link} items={card.items} github={card.github} />
        </motion.div>
        ))}
        {showMore && cards.slice(6).map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 * (index + 1) }}
          >
            <Archivecard title={card.title} description={card.description} image={card.image} link={card.link} items={card.items} github={card.github} />
          </motion.div>
        ))}
      </div>
      <div className='mt-12 flex justify-center items-center'>
        <button onClick={() => setShowMore(!showMore)} className='w-36 h-12 rounded-md text-textGreen text[13px] border border-textGreen hover:bg-hoverColor duration-300'>{showMore ? 'Show Less' : 'Show More'}</button>
      </div>
    </div>
  )
}

export default Archive
