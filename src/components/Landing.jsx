import React from "react";

import Button1 from "./innderComponents/Button1";
import { motion } from "framer-motion";


function Landing() {
    return (
        <div data-scroll  data-scroll-section  data-scroll-speed="-.7" className="w-full h-screen bg-zinc-100 overflow-hidden">
            <div className="textStru pt-52">
                <div className="masker pl-16 text-zinc-800 tracking-tighter">
                    <p className="font-bold text-8xl">We Create</p>
                    <div className="flex items-center">
                        <motion.div initial={{width:"0"}} animate={{width:"8rem"}} transition={{ease:[0.45, 0, 0.55, 1],duration:0.7}} className="w-32 h-20 bg-lime-200 rounded-lg mr-3 overflow-hidden flex justify-center items-center">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSKKrmPasXgrCYuSHV3EsMZBrdMHNN6BgvSw&s" className="w-full " alt="" />
                        </motion.div>
                    <p className="font-bold text-8xl">Eye-Opening</p>
                    </div>
                    <p className="font-bold text-8xl">Presentations</p>
                </div>
            </div>
            <div className="border-t-2 border-zinc-200  mt-44 flex justify-between pt-5 px-20 items-center">
                <div className="tracking-tighter text-lg">
                    For public and private companise
                </div>
                <div className="tracking-tighter text-lg">From the pitch to IPO</div>
                <Button1 text="START NEW PROJECT" />
            </div>
        </div>
    );
}

export default Landing;
