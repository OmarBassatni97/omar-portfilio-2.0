'use client'
import React from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
const About = () => {
    const { ref } = useSectionInView("About")
    return (
        <motion.section
            className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 '
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id='about'
            ref={ref}
        >
            <SectionHeading>About me</SectionHeading>
            <p className='mb-3'>👋Hello, I'm Omar Bassatni, a dedicated Frontend Developer with a strong passion for crafting intuitive and visually appealing digital experiences. With a solid foundation in React.js and Next.js, I specialize in turning creative ideas into functional and user-friendly web applications.</p>
            <p className='mb-3'>🌟 Passionate about continuous learning, I thrive on staying up-to-date with the latest trends and best practices in frontend development. I believe that great code is born from a combination of creativity and precision, and I'm dedicated to achieving that balance in every project I undertake.</p>
        </motion.section>
    )
}

export default About