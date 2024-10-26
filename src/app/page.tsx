"use client"
import Leftside from '@/components/Leftside'
import Navbar from '@/components/Navbar'
import Rightside from '@/components/Rightside'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import Banner from '@/components/Banner'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Archive from '@/components/Archive'
import './globals.css'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cursorInner = document.getElementById('cursor-inner');
    const cursorOuter = document.getElementById('cursor-outer');
    let outerX = 0;
    let outerY = 0;
    let targetX = 0;
    let targetY = 0;
    const delay = 0.1; // Adjust this value for more or less delay

    const onMouseMove = (e: MouseEvent) => {
      if (cursorInner) {
        cursorInner.style.left = `${e.pageX}px`;
        cursorInner.style.top = `${e.pageY}px`;
      }
      targetX = e.pageX;
      targetY = e.pageY;
    };

    const updateCursorOuter = () => {
      outerX += (targetX - outerX) * delay;
      outerY += (targetY - outerY) * delay;
      if (cursorOuter) {
        cursorOuter.style.left = `${outerX}px`;
        cursorOuter.style.top = `${outerY}px`;
      }
      requestAnimationFrame(updateCursorOuter);
    };

    const handleResize = () => {
      const isMobile = window.innerWidth < 1024; // Adjust this breakpoint as needed
      if (cursorInner && cursorOuter) {
        cursorInner.style.display = isMobile ? 'none' : 'block';
        cursorOuter.style.display = isMobile ? 'none' : 'block';
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    requestAnimationFrame(updateCursorOuter);
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    // Simulate loading time (you can replace this with actual data fetching)
    const timer = setTimeout(() => setLoading(false), 2000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <div className=''>
      <div className="cursor-inner hidden lg:block" id="cursor-inner"></div>
      <div className="cursor-outer hidden lg:block" id="cursor-outer"></div>
        {loading ? (
          <Loader />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            
            <div className='w-full h-screen font-bodyfont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textGreen'>
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
                <div className='h-[88vh] w-full mx-auto p-4'>
                  <Banner />
                  <About />
                  <Experience />
                  <Projects />
                  <Archive />
                  <Contact />
                  <Footer />
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
          </motion.div>
        )}
    </div>
  )
}

export default Page
