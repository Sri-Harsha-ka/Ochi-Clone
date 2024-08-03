import React from 'react'

import Card from './innderComponents/Card'
import Button1 from './innderComponents/Button1'

function Featchers() {
  return (
    <div className='w-full  text-black '>
      <div >
      

        <div className='border-b-[1px] border-black pt-24 pb-12 px-7'>
          <span className='text-6xl font-sans tracking-tight '>Featured projects</span>
        </div>

        <div className='flex gap-10 justify-evenly w-full px-10 py-14'>
          <Card image="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" />
          <Card image="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" />
        </div>

        <div className='flex gap-10 justify-evenly w-full px-10 py-14'>
          <Card image="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg" />
          <Card image="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png" />
        </div>

        <div className='flex justify-center items-center py-20 '>
          <Button1 text="VIEW ALL CASE STIDES" />
        </div>

      </div>

    </div>
  )
}

export default Featchers
