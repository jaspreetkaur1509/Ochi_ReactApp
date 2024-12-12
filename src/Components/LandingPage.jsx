import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3"  className='w-full h-screen bg-zinc-900 pt-1 '>
        <div className='textstructure mt-52 px-20'>
            {["We Create", "Eye Opening","PRESENTATIONS"].map((item,index) => {
                return (   
                <div className='masker'>
                    <div className='w-fit flex items-end overflow-hidden '>
                        {index === 1 && (
                        <motion.div initial={{width:0}} animate={{width:"8vw"}} transition={{ease:[0.76,0,0.24,1], duration:1}} className='mr-[1vw] w-[8vw] h-[5.7vw] rounded relative -top-[1vw] bg-red-600'></motion.div>)}
                    <h1 className='pt-1 -mb-1 uppercase text-[9vw] leading-[.80]  font-["Founder_Grotesk_X-Condensed"] font-bold'>{item}</h1>
                    </div>
            </div>
            );})}
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
            {["For Public and Private Companies", "From the First Pitch IPO"].map((item, indeex) => <p className='text-md
             font-light tracking-tight leading-none'>{item}
            </p>)}
            <div className='start flex items-center gap-5'>
                <div className='px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light text-md uppercase'>Start the project</div>
                <div className='w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full'>
                    <span className='rotate-[45deg]'>
                    <FaArrowUpLong />
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage