'use client'
import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Content from './Content'

export default function Screen() {

  const [currentContent, setCurrentContent] = useState<
    'profile' | 'doc' | 'time' | ''
  >('');

  return (
    <div className='w-full h-screen flex justify-center items-center px-[50px] py-[70px] gap-[50px]'>
        <Sidebar setActiveContent={setCurrentContent}/>
        <Content currentContent={currentContent}/>
    </div>
  )
}
