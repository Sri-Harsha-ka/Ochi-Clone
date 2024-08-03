import React from 'react'

function Card({image}) {
  return (
    <div className='w-1/2 h-[70vh] rounded-xl overflow-hidden group cursor-pointer '>
    <div className='w-full h-full group-hover:scale-95 transition-all duration-500  flex justify-center  items-center rounded-xl overflow-hidden '>

      <img src={image} alt="" />

    </div>
  </div>
  )
}

export default Card
