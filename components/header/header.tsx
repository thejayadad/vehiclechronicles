import Link from 'next/link'
import React from 'react'
import DesktopNav from './desktop-nav'
import MobileNav from './mobile-nav'
import { auth } from '@/auth'
import AuthModal from './auth-modal'
import SignOut from './signout-btn'

const Header = async () => {
    const session = await auth()

  return (
    <header className='sticky top-0 w-full border-b z-50'>
        <div className='mx-auto max-w-screen-lg px-4'>
            <div className='flex items-center justify-between h-16'>
                <div className='flex items-center'>
                    <Link
                    className='text-xl font-bold font-mono tracking-wider'
                    href={'/'}>
                        VehiclesChronicles
                    </Link>
                </div>
                <div className='flex items-center space-x-3'>
                <DesktopNav />
                    <MobileNav />
                    {
                    
                    session ? (
                        <>
                        <SignOut />
                        </>
                    ) : (
                        <>
                            <AuthModal />
                        </>
                    )                    
                    
                    }
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header