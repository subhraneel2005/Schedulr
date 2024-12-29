'use client'
import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Content from './Content'

export default function Screen() {

  const [currentContent, setCurrentContent] = useState<
    'profile' | 'doc' | 'time' | ''
  >('');

  return (
    <div className='w-full h-screen flex lg:flex-row flex-col justify-evenly items-center lg:px-[20px] px-[14px] lg:py-[30px] py-[16px] space-y-5 lg:space-y-0'>
        <Sidebar setActiveContent={setCurrentContent}/>
        <Content currentContent={currentContent}/>
    </div>
  )
}
