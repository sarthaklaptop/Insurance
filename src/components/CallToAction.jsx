import React from 'react'
import Button from './Common/Button';

const CallToAction = () => {
  return (
    <div className='flex items-center justify-between gap-8  border-white border-4 rounded-lg  p-20 m-10'>
      {/* left */}
      <div className=' text-white flex flex-col gap-4'>
        <h1 className='text-3xl font-bold '>Crash course Launch offer (save INR 2000)</h1>
        <div className=' pl-4'>
          <ul className='list-disc text-secondary'>
            <li>Learn from th professionals</li>
            <li>Enjoy Discounted price of ₹499</li>
            <li>Launch Offer expires soon, grap your seat NOW!</li>
          </ul>
        </div>
      </div>

      {/* right */}
      <div className=' flex flex-col'>
        <p className=' text-white text-xl font-bold'>Price of the Program</p>
        <p className=' text-4xl font-bold text-[#F7C85A] mb-4'>₹499 <span><small className='line-through text-secondary text-lg font-normal'>2000</small></span></p>
        

        <div className={`cursor-pointer bg-[#F7C85A] p-4 w-3/4 font-bold text-center rounded-md`}>
          <p >Register Now</p>
        </div>
      </div>
    </div>
  )
}

export default CallToAction