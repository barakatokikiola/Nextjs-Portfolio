import { Home } from 'lucide-react';
import Link from 'next/link';
import React from 'react';


const HomeBtn = () => {
  return (
   
      <Link
        href="/"
        target={'_self'}
        className="custom-bg z-50 text-foreground rounded-full flex items-center justify-center fixed top-5 left-5 w-fit self-start"

      >
        <span className="relative w-14 h-14 
        hover:text-accent p-4">
            <Home className='w-full h-auto' strokeWidth={1.5} />
        <span className='peer absolute bg-transparent w-full h-full top-0 left-0' />
        <span className='absolute hidden peer-hover:block px-2 
        py-1 mx-2 top-1/2 left-full -translate-y-1/2
        bg-background text-foreground shadow-lg 
        rounded-md text-sm whitespace-nowrap'>Home</span>
        </span>
        
      </Link>
  
  );
};

export default HomeBtn;
