import React from 'react';

import HomeBtn from '@/components/HomeBtn';

const SubPagesLayout = ({children}) => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center py-20 px-32'>
       <HomeBtn />
       {children}
    </main>
  )
}

export default SubPagesLayout
