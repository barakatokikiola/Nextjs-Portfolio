'use client'

import React, { useEffect, useState } from 'react'
const createFireFly = () => ({
    id: Math.random(),
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    right: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 5 + 5}s`
})
const FireFliesBg = () => {
    const [fireflies, setFireFlies] = useState([]);

    useEffect(() =>{
        const addFireFlyPeriodically =()=>{
            const newFireFly = createFireFly();
            setFireFlies( currentFireflies =>[
              ...currentFireflies.slice(-14),
              newFireFly
            ])
        }
        const interval = setInterval(addFireFlyPeriodically, 10000)

        return () => clearInterval(interval)
    })
  return (
    <div className='fixed top-0 left-0 overflow-hidden w-full h-full -z-10'>
      {
        fireflies.map((firefly) => {
          return <div key={firefly.id} className='absolute 
          rounded-full bg-firefly-radial w-[10px] h-[10px]'
          style={{
            top: firefly.top,
            left: firefly.left,
            right: firefly.right,
            animation: `move ${firefly.animationDuration} infinite alternate`
          }}>

          </div>
        })
      }
    </div>
  )
}

export default FireFliesBg