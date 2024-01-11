'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/active-section-context'
import { useSectionInView } from '@/lib/hooks'

const Intro = () => {
    const { ref } = useSectionInView("Home")
    return (
        <section ref={ref} id='home' className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-28'>
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: 'tween',
                            duration: 0.25
                        }}

                    >
                        <Image className='h-24 w-24 rounded-full border-[0.35rem] shadow-xl object-cover border-white' src='/Omar.jpeg' alt='omar' width='200' height='200' quality='100' priority={true} />
                    </motion.div>
                    <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: 'spring',
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7
                        }}
                        className='text-4xl absolute bottom-0 right-0'>👋</motion.span>
                </div>
            </div>
            <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                className='!leading-[1.5] mb-10 mt-4 px-4 text-2xl font-medium sm:text-4xl'>
                <span className="font-bold">Hello, I'm Omar.</span> I'm a{" "}
                <span className="font-bold">front-end developer</span> with{" "}
                <span className="font-bold">2 years</span> of experience. I enjoy
                building <span className="italic">sites & apps</span>. My focus is{" "}
                <span className="underline">React (Next.js)</span>.
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.2
                }}
                className='flex gap-2 flex-col sm:flex-row items-center justify-center px-4 text-lg font-medium'>
                <Link href='#contact'
                    className='bg-gray-900 group text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
                >
                    Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
                </Link>
                <a href="/OmarBasatni_CV.pdf" download className='cursor-pointer border border-black/10 bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition group'>Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition' /></a>
                <a href="https://www.linkedin.com/in/omar-bassatni-40a762188/" target='_blank' className='bg-white text-gray-700 hover:text-gray-950 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition border border-black/10 outline-none'><BsLinkedin /></a>
                <a href="https://github.com/OmarBassatni97" target='_blank' className='bg-white text-gray-700 hover:text-gray-950 p-4 flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition border border-black/10 outline-none'><FaGithubSquare /></a>
            </motion.div>
        </section>
    )
}

export default Intro