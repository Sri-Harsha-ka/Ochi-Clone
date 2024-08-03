import React from 'react'

import { GoArrowUpRight } from "react-icons/go";

function Button1({text}) {
    return (
        <div className="flex items-center gap-4 text-white">
            <button className="bg-black outline-none rounded-full text-lg font-thin capitalize py-1 pl-7 pr-1 hover:bg-white hover:text-black transition-all duration-500 ease-out border-[1px] border-zinc-800 flex group items-center  ">
                {text}
                <div className="rounded-full w-10 h-10 flex items-center justify-center group-hover:bg-white transition-all duration-500 ease-out">
                    <GoArrowUpRight color="black" />
                </div>
            </button>
        </div>
    )
}

export default Button1
