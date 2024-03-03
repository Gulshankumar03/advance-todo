'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Signup = () => {
  return (
    <div className='h-[50rem] flex justify-center items-center' >
        <Link href={'https://advanced-urchin-57.accounts.dev/sign-up'}>
          <Button>sign up</Button>
        </Link>
    </div>
  )
}

export default Signup