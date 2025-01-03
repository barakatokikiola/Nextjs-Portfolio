import clsx from 'clsx'
import React from 'react'


const Itemlayout =({children, className}) => {
    return(
        <div className={clsx('custom-bg p-8 rounded-xl flex items-center justify-center', className)}>
                {children}
            </div>
    )
}
const AboutDetails = () => {
  return (
    <section className='w-full'>
        <div className='grid grid-cols-12 gap-8 w-full'>

           <Itemlayout className='col-span-8 row-span-2 flex-col items-start'>
           <div className='space-y-8'>
            <h2 className='text-left text-2xl'>Frontend Engineer</h2> 
            <p className='font-light'>
            Building mobile first, user-freiendly and engaging sotwares
            Craft Interactive Interfaces: I focus on creating seamless user experiences that look great and perform well across all devices.
Modern Web Technologies: Proficient in frameworks like React, and always eager to explore new frontend trends.
Clean, Maintainable Code: I write clean, modular, and efficient code to ensure scalability and maintainability.
            </p>       
           </div>
           </Itemlayout>
          
           <Itemlayout  className='col-span-4'>
           <p className='font-semibold text-left text-accent text-2xl'>
                25+ <sub className='font-semibold text-left text-accent text-base'>Clients</sub>
            </p>
           </Itemlayout>
            <Itemlayout className='col-span-4'>
            <p className='font-semibold text-left text-accent text-2xl'>
            2+ <sub className='font-semibold text-left text-accent text-base'>Years of Experience</sub>
           </p>
            </Itemlayout>
            <Itemlayout className='col-span-4 !p-0'>
                <img 
                src='https://github-readme-stats.vercel.app/api/top-langs/?username=barakatokikiola&theme=transparent&hide_border=true&title_color=fefe5b&icon_color=fefe5b&text_color=ffff&text_bold=false' 
                alt='Barakat' loading='lazy'
                className='w-full h-auto'/>
            </Itemlayout>
            <Itemlayout className='col-span-8 !p-0'>
                <img 
                src='https://github-readme-stats.vercel.app/api?username=barakatokikiola&theme=transparent&hide_border=true&title_color=fefe5b&icon_color=fefe5b&text_color=ffff&text_bold=false' 
                alt='Barakat' loading='lazy'
                className='w-full h-auto'/>
            </Itemlayout>
            <Itemlayout className='col-span-full'>
                <img 
                src=' https://skillicons.dev/icons?i=html,css,javascript,react,nextjs,netlify,tailwind,threejs,bootstrap,github,git,npm,nodejs,figma,vscode&theme=light' 
                alt='Barakat' loading='lazy'
                className='w-full h-auto'/>
            </Itemlayout>
           <Itemlayout className='col-span-6 !p-0'>
           <img className='w-full h-auto' src="https://github-readme-streak-stats.herokuapp.com?user=barakatokikiola&theme=dark&hide_border=true&ring=FEFE5B&background=EB545400&currStreakLabel=FEFE5B"
            alt='Barakat' loading='lazy' />
           </Itemlayout>
           <Itemlayout className='col-span-6 !p-0'>
           <img className='w-full h-auto' src="https://github-readme-stats.vercel.app/api/pin/?username=barakatokikiola&repo=github-readme-stats&theme=transparent&hide_border=true&title_color=fefe5b&icon_color=fefe5b&text_color=ffff&text_bold=false"
            alt='Barakat' loading='lazy' />
           </Itemlayout>
        </div>
    </section>
  )
}

export default AboutDetails;
