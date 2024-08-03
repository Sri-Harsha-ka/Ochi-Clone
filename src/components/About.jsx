import React from 'react'
import Button1 from './innderComponents/Button1'

function About() {
    return (
        <div data-scroll data-scroll-section  data-scroll-speed="-.2">
            <div className='w-full h-[88vw] bg-lime-300 rounded-t-3xl'>
                <div className='flex w-3/4  flex-wrap'>
                    <p className='pt-32 px-10 text-5xl text-black '>
                        Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
                    </p>
                </div>
                <div className='border-t-[1px] border-b-[1px] border-black text-black mt-20 flex justify-between pt-20 pb-20 px-20 '>
                    <div className='text-xl'>
                        <span>What you can expert:</span>
                    </div>
                    <div className='flex justify-center items-center w-[45vw] gap-20 text-xl font-light'>
                        <div className=" flex flex-wrap flex-col gap-5">
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. At, inventore? Sunt dolorem atque odio autem sed, asperiores eligendi illum aut eaque necessitatibus aspernatur?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, inventore? Sunt dolorem atque odio autem sed, asperiores eligendi illum aut eaque necessitatibus aspernatur tempore distinctio molestias reprehenderit ipsam laboriosam facere ipsum</p>
                        </div>
                        <div className='list-none w-[25vw]'>Social Media:
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>Facebook</li>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between pt-10 px-8 '>
                    <div className='flex flex-col gap-5 '>
                        <span className='text-6xl font-serif text-black mb-3 '>Our approach:</span>
                        <Button1 text="READ MORE" />
                    </div>
                    <div className='w-1/2 h-1/2 rounded-lg overflow-hidden '>
                        <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
