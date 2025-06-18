import React from 'react'
import { assets } from '../assets/assets'
import { CalendarIcon, ClockIcon } from 'lucide-react'
import backgroundImage from '../assets/backgroundImage.png'

function HeroSection() {
  return (
    <div
      className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36
      bg-cover bg-center h-screen'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <img src={assets.marvelLogo} alt="" className="max-h-11 lg:h-11 mt-20" />

      <h1 className='text-2xl md:text-[60px] md:leading-[5rem] font-semibold max-w-[44rem]'>
        Some journeys don’t return.<br /> Some change the universe forever.
      </h1>

      <div className='flex items-center gap-4 text-gray-400'>
        <span>Adventure | Action | Sci-Fi</span>
        <div className='flex items-center gap-1'>
          <CalendarIcon className='w-4.5 h-4.5' />2025
        </div>
        <div className='flex items-center gap-1'>
          <ClockIcon className='w-4.5 h-4.5' />3h 10m
        </div>
      </div>
    </div>
  )
}

export default HeroSection
