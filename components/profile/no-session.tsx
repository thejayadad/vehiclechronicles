import React from 'react'
import AuthModal from '../header/auth-modal'

const NoSession = () => {
  return (
    <div className='flex flex-col h-full p-4 sticky top-20 justify-center text-center items-center border-l'>
        <div className='space-y-6'>
            <h1 className='text-center text-xl font-semibold'>Welcome Back!</h1>
            <p>Login To access your profile and connect with others.</p>
            <AuthModal />
        </div>
    </div>
  )
}

export default NoSession