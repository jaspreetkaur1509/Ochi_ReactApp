import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-100 flex items-center gap-5 px-32'>
        <div className='cardcontainer h-[50vh] w-1/2'>
            <div className='relative card w-full bg-[#004D43] h-full rounded-xl flex items-center justify-center'>
              <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg' />
              <button className='absolute left-10 bottom-10 px-5 py-1 rounded-full border-2'>&copy; 2019</button>
            </div>
        </div>
        <div className='cardcontainer w-1/2 flex gap-5 h-[50vh]'>
        <div className='relative card w-1/2 bg-[#192826] h-full rounded-xl  flex items-center justify-center'>
           <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg' />
              <button className='absolute left-10 bottom-10 px-5 py-1 rounded-full border-2'>&copy; 2019</button>
        </div>
        <div className='relative card w-1/2 bg-[#192826] h-full rounded-xl flex items-center justify-center'>
            <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png' />
              <button className='absolute left-10 bottom-10 px-5 py-1 rounded-full border-2'>&copy; 2019</button>
        </div>
        </div>
    </div>
  )
}

export default Cards