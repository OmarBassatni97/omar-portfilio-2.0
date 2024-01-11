"use client"
import React, { useEffect } from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import { projectsData } from '@/lib/data'
import Project from './Project'
import { useActiveSectionContext } from '@/context/active-section-context'
import { useInView } from 'react-intersection-observer'
import { useSectionInView } from '@/lib/hooks'
const Projects = () => {
  const {ref} = useSectionInView("Projects",0.5)
  return (
    <section ref={ref} id='projects' className='scroll-mt-28'>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {
          projectsData.map((project, index) => (
            <Project key={index} {...project} />
          )

          )
        }
      </div>
    </section>
  )
}

export default Projects