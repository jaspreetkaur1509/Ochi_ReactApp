import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw] tracking-tight'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain ccomplex ideas, and hire great people</h1>
        <div className='w-full border-t-[1px] pt-10 mt-20 border-[#697b2b] flex gap-5'>
            <div className='w-1/2'>
                <h1 className='text-7xl pt-10 mt-20'>Our approach: </h1>
                <button className='px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white flex gap-10 items-center'>Read More
                <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                </button>
            </div>
            <div className='w-1/2 h-[70vh] rounded-3xl bg-[#697b2b]'>
                <img className='w-1/2 h-[70vh] m-auto' src='https://images.pexels.com/photos/5698417/pexels-photo-5698417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
            </div>
        </div>
    </div>
  )
}

export default About;