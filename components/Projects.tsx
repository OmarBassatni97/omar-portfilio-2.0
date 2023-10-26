import React from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import { projectsData } from '@/lib/data'
import Project from './Project'
const Projects = () => {
  return (
    <section>
        <SectionHeading>My Projects</SectionHeading>
        <div>
            {
                projectsData.map((project,index)=>(
                   <Project key={index} {...project}/> 
                )

                )
            }
        </div>
    </section>
  )
}

export default Projects