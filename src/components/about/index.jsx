import React from 'react'

const AboutDetails = () => {
  return (
    <section className='pt-[22rem] w-full'>
        <div className='grid grid-cols-12 gap-8 w-full'>
            <div className='col-span-8 row-span-2 custom-bg p-8 rounded-xl flex items-center justify-center'>
                Info
            </div>
          
           <div className='col-span-4 custom-bg p-4 rounded-xl flex items-center justify-center'>
                25+ Clients
            </div>
            <div className='col-span-4 custom-bg p-4 rounded-xl flex items-center justify-center'>
            2+ Years of Experience
           </div>
        </div>
    </section>
  )
}

export default AboutDetails;
