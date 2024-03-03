'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Signin = () => {
  return (
    <div className='h-[50rem] flex flex-col gap-5 justify-center items-center' >
        <Link href={'https://advanced-urchin-57.accounts.dev/sign-in'}>
          <Button variant={'outline'}>Sign in</Button>
        </Link>
        <Link href={'https://advanced-urchin-57.accounts.dev/sign-up'}>
          <Button variant={'outline'}>Sign up</Button>
        </Link>
    </div>
  )
}

export default Signin