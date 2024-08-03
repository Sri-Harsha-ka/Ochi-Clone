import React, { useEffect } from 'react'
import { useState } from 'react'

function EyesAni() {

    const [rotate, setrotate] = useState(0)
 
    useEffect(() => {
      window.addEventListener("mousemove",(e)=>{
          let mouseX = e.clientX;
          let mouseY = e.clientY;

          const deltaX = mouseX-window.innerWidth/2;
          const deltaY = mouseY-window.innerHeight/2;

          let angle = Math.atan2(deltaY,deltaX) * 180/Math.PI
        
          setrotate(angle-180)
      })
    
    })
    

    return (
        <div className='w-full h-screen overflow-hidden '>
            <div  data-scroll data-scroll-speed="-.5"  className='relative eyes w-full h-screen bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")] '>
                <div className='absolute top-1/3 left-1/2 -translate-x-[50%] -translate-y-[50%] w-1/3  flex justify-between'>
                    <div className='w-[15vw] h-[15vw] rounded-full bg-white flex items-center justify-center'>
                        <div className='w-2/3 h-2/3 relative rounded-full bg-black'>
                            <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                                <div className='w-10 h-10 rounded-full bg-white'></div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[15vw] h-[15vw] rounded-full bg-white flex items-center justify-center'>
                        <div className='w-2/3 h-2/3 relative rounded-full bg-black'>
                            <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}}  className='w-full h-10 absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
                                <div className='w-10 h-10 rounded-full bg-white'></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EyesAni
