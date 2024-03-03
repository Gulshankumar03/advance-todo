'use client'
import { SignIn } from '@clerk/nextjs'
import React from 'react'

const Signin = () => {
  return (
    <div className='h-[50rem] flex justify-center items-center' >
        <SignIn/>
    </div>
  )
}

export default Signin