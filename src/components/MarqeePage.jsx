import { animate, motion } from 'framer-motion'
import React from 'react'

function MarqeePage() {
  return (
    <div data-scroll  data-scroll-section  data-scroll-speed=".2" className="w-full  bg-zinc-100 text-white">
      <div className='w-full  bg-emerald-800 rounded-t-3xl py-20'>
        <div className='border-t-[1px] border-b-[1px] border-zinc-100 flex items-center whitespace-nowrap leading-none overflow-hidden '>
              <motion.p initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",duration:15, repeat: Infinity}}  className='text-[15vw] font-bold pl-3 '>WE ARE OCHI</motion.p>
              <motion.p initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",duration:15, repeat: Infinity}} className='text-[15vw] font-bold  pl-3'>WE ARE OCHI</motion.p>
        </div>
      </div>
    </div>
  )
}

export default MarqeePage
