import { projectsData } from '@/lib/data'
import Image from 'next/image'
import React from 'react'
type ProjectProps = typeof projectsData[number]

const Project = ({ title, description, tags, imageUrl }: ProjectProps) => {
    return (
        <section className='group bg-gray-100 max-w-[42rem] border-black/5 overflow-hidden sm:pr-8 relative mb-3 sm:mb-8 last:mb-0 even:pl-8'>
            <div className='flex flex-col h-full pt-4 pb-7 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] sm:h-[20rem] group-even:ml-[18rem]'>
                <h3 className='text-2xl font-semibold'>{title}</h3>
                <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
                <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                    {tags.map((tag, index) => (
                        <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider rounded-full text-white' key={index}>{tag}</li>
                    ))}
                </ul>
            </div>

            <Image className='group-even:right-[initial] group-even:-left-40 absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl ' src={imageUrl} alt='Project I worked on' quality={95} />
        </section>
    )
}

export default Project