import Header from '@/components/header/header';
import Profilebar from '@/components/profile/profile';
import React from 'react'

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className='min-h-screen h-full'>
      <Header />
       <div className='py-8' >
        <div className='mx-auto px-4 max-w-screen-lg'>
       <div className='grid grid-cols-1 lg:grid-cols-12 gap-4'>
        <div className='lg:col-span-9'>
        {children}
        </div>
        <div className='hidden lg:block lg:col-span-3'>
          <Profilebar />
       </div>
       </div>

        </div>
       </div>
    </div>
  )
}

export default layout