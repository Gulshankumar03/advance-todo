'use client'
import { SignUp } from '@clerk/nextjs'
import React from 'react'

const Signup = () => {
  return (
    <div className='h-[50rem] flex justify-center items-center'>
        <SignUp/>
    </div>
  )
}

export default Signup