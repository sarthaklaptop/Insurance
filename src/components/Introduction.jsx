import React from 'react'
import { PiBookOpenText, PiNotebook } from "react-icons/pi";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineStock } from "react-icons/ai";
import { TbUserQuestion } from "react-icons/tb";



const Introduction = () => {
  return (
    <div className=' flex flex-col gap-20 p-10'>
      {/* top */}
      <div className=' text-4xl mx-auto font-medium flex flex-col gap-2'>
        <p className=' flex justify-center text-[#F7C85A] text-4xl font-bold'>But,</p>
        <p>Why should you become a Mindful Marketer?</p>
      </div>

      {/* bottom */}
      <div className=' flex flex-wrap text-lg gap-10'>
        <div className=' p-10 mx-auto flex w-80 flex-col items-center bg-gray-100 rounded-xl'>
          <PiBookOpenText size={50}/>
          <p className=' text-center'>Learn to look at the challenges through a different lens</p>
        </div>
        <div className=' p-10 mx-auto flex w-80 flex-col items-center bg-gray-100 rounded-xl'>
          <PiNotebook size={50} />
          <p className=' text-center'>Develop a deep understanding of modern marketing</p>
        </div>
        <div className=' p-10 mx-auto flex w-80 flex-col items-center bg-gray-100 rounded-xl'>
          <CgWebsite size={50} />
          <p className=' text-center'>Understand time-tested principles</p>
        </div>
        <div className=' p-10 mx-auto flex w-80 flex-col items-center bg-gray-100 rounded-xl'>
          <AiOutlineStock size={50} />
          <p className=' text-center'>Become a strategic thinker without trend-surfing</p>
        </div>
        <div className=' p-10 mx-auto flex w-80 flex-col items-center bg-gray-100 rounded-xl'>
          <TbUserQuestion size={50} />
          <p className=' text-center'>Incorporate a creative & innovative thought process</p>
        </div>
      </div>
    </div>
  )
}

export default Introduction