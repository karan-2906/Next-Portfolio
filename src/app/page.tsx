"use client"
import Leftside from '@/components/Leftside'
import Navbar from '@/components/Navbar'
import Rightside from '@/components/Rightside'
import React from 'react'
import { motion } from "framer-motion"
import Banner from '@/components/Banner'

const page = () => {
  return (
    <div className=''>
      <div className='w-full h-screen font-bodyfont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll'>
        <Navbar />
        <div className='w-full h-[88vh] xl:flex items-center gap-20 justify-between'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className='hidden xl:inline-flex w-32 h-full fixed left-0 sbottom-0'
          >
            <Leftside />
          </motion.div>
          <div className='h-[88vh] mx-auto p-4'>
            <Banner />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className='hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0'
          >
            <Rightside />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default page