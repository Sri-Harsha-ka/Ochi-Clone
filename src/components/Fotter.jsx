import React from 'react'
import Button1 from './innderComponents/Button1'

function Fotter() {
  return (
    <div className='flex justify-around items-center flex-col  w-full h-screen border-t-[1px] border-black'>
      <div className='flex justify-center items-center flex-col'>
        <div className='text-6xl font-bold text-zinc-800 tracking-tight mb-3'>
          <span>READY </span>
        </div>
        <div className='text-4xl font-normal text-zinc-800 tracking-tighter mb-3'>
          <span>TO</span>
        </div>
        <div className='text-5xl font-semibold text-zinc-800 tracking-wider mb-3'>
          <span>START PROJECT</span>
        </div>

      </div>
      <div>
        <Button1 text="START PROJECT" className="" />
      </div>
    </div>
  )
}

export default Fotter
