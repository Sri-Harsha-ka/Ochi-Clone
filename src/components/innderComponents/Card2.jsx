import React from 'react'

function Card2({image,text,name}) {
  return (
    <div className='flex justify-between items-center py-28 px-32'>
      <div className='overflow-hidden rounded-lg w-96'>
        <img src={image} alt="" />
      </div>
      <div className='flex flex-wrap w-[40vw]'>
        <p className='text-xl font-sans tracking-tighter'>
            {text}
            <span className='relative top-12 font-serif left-48 text-4xl'>-{name}</span>
        </p>
      </div>
    </div>
  )
}

export default Card2
