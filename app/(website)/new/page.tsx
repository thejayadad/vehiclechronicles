import { auth } from '@/auth'
import AuthModal from '@/components/header/auth-modal'
import PostForm from '@/components/post/new/post-form'
import React from 'react'

const NewPage = async () => {
    const session = await auth()
    if(!session){
        return (
            <AuthModal />
        )
    }
    const userEmail = session.user?.email
  return (
    <div>
        <PostForm userEmail={userEmail || ''} />
    </div>
  )
}

export default NewPage