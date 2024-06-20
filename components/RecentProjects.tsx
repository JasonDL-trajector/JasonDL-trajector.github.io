import { projects } from '@/data'
import React from 'react'

const RecentProjects = () => {
  return (
    <div className='py-20'>
        <h1 className='heading'>
            A small selection of {' '}
            <span className='text-purple'>recent projects</span>
        </h1>

        <div className='flex flex-wrap items-center justify-center p-4 gap-16 mt-10'>
            {projects.map((
            {
                id,
                title, 
                des,
                img,
                iconLists, 
                link
            }) => (
                <div key={id} className='flex flex-col items-center justify-center w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4'>
                   
                        {title && <h1 className='text-3xl font-bold'>{title}</h1>}
                        {des && <p className='text-lg'>{des}</p>}
                        <a href={link} className='text-purple'>
                            View Project
                        </a>
                    </div>
               
            ))}
        </div>
    </div>
  )
}

export default RecentProjects