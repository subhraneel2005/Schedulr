import React from 'react'
import { Button } from '../ui/button'

export default function Hero() {
  return (
    <main className='z-10 min-h-screen w-full flex flex-col justify-center items-center overflow-hidden'>
        <h1 className='text-5xl tracking-tight scroll-m-20 lg:text-7xl text-center font-black flex flex-col md:flex-row justify-center items-center'>
            <span className='flex'>
            <span className='bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-300 dark:to-blue-500 text-transparent bg-clip-text mr-2'>Plan</span>
            <span className='bg-gradient-to-r dark:from-yellow-300 from-yellow-500 dark:to-green-300 to-green-500  text-transparent bg-clip-text mx-2 pr-1'>Schedule</span>
            </span>
            Achieve
        </h1>
        <p className='md:text-lg md:max-w-xl text-[15px] leading-[20px] text-center max-w-md px-4 mt-6 text-gray-700 dark:text-gray-300'>Turn your study goals into daily actions. Connect with Google Calendar and stay on track effortlessly.</p>

        <Button className='mt-8 font-bold'>Take Action today🚀</Button>        
    </main>
  )
}
