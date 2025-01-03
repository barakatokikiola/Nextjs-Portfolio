import Link from 'next/link'
import React from 'react'

const ProjectLayout = ({name, description, date, demoLink}) => {
  return (
    <Link
    href={demoLink}
    target={'_blank'} className='flex flex-col items-center justify-between w-full relative
    rounded-lg overflow-hidden p-6 custom-bg'>
      <div className='flex flex-col items-center justify-center
      space-x-2'>
        <h2 className='text-foreground'>{name}</h2>
        <p className='text-muted'>{description}</p>
      </div>
      <div className='self-end flex mx-2 mb-1 bg-transparent border-b border-dashed
      border-muted'>
      <p className='text-foreground'>
        {
        new Date(date).toDateString()
        }</p>
      </div>
    </Link>
    
  )
}

export default ProjectLayout