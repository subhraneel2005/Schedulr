'use client'

import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Hero() {

  const router = useRouter();
  return (
    <main className='z-10 min-h-screen w-full flex flex-col justify-center items-center overflow-hidden'>
        <h1 className='text-5xl tracking-tight scroll-m-20 lg:text-7xl text-center font-black flex flex-col md:flex-row justify-center items-center text-[#011141] dark:text-[#e7efff]'>
            <span className='flex'>
            </span>
            Plan Schedule <span className='bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-300 dark:to-blue-500 text-transparent bg-clip-text ml-2'>Achieve</span>
        </h1>
        <p className='md:text-lg md:max-w-xl text-[15px] leading-[20px] text-center max-w-md px-4 mt-6 text-muted-foreground font-normal'>Turn your study goals into daily actions. Connect with Google Calendar and stay on track effortlessly.</p>

       <div className='flex gap-4 mt-8 '>
       <Button className='font-medium' onClick={() => router.push('/early-access')}>Get Early Access</Button> 
       <Button className='font-medium' variant='outline'>
        <Link href='https://x.com/Subhraneel55545' target='_blank'>Talk to Founder</Link>
       </Button>
       </div>       
    </main>
  )
}
