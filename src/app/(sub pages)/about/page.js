'use client'

import Image from "next/image";
import bg from '../../../../public/background/about.png';
import RenderModel from "@/components/RenderModel";
import Hat from '@/components/Models/Hat';
import AboutDetails from "@/components/about";

export default function Home() {
  return (
    <>
      <Image src={bg} alt="background-image"
      className="w-full h-full left-0 top-0 fixed opacity-25 object-cover object-center"  />
       
        <div className="w-full h-screen absolute -top-[25%] left-0">
        <RenderModel>
            <Hat />
        </RenderModel>
        </div>
        <div className="relative w-full h-screen flex flex-col items-center justify-center mx-auto">
        <div className='absolute flex flex-col items-center text-center top-[55%] left-1/2 -translate-y-1/2 -translate-x-1/2 '>
            <h1 className="font-bold text-9xl text-accent">Barakat</h1>
            <p className="font-light text-lg text-foreground">Meet the Wizard behind this portfolio</p>
            
        </div>
       
        </div>
        <AboutDetails />
    </>
  );
}
