import React from 'react'
import founderImage from "../assets/founderImage.png"

const About = () => {
  return (
    <div className=' flex p-10 '>
      {/* Left */}
      <div className='flex flex-col justify-center rounded-l-2xl w-[50%] bg-gray-200 p-6 gap-4'>
        <p className=' text-3xl font-bold'>Darsheel Savla</p>
        <hr class="border-t-2 border-gray-600 my-2"/>
        <p className=' text-gray-500'>charismatic and creative powerhouse who infuses his passion for food, people, and brand building into everything he does. With an unshakable drive and an insatiable appetite for culinary exploration, he's determined to bring the legendary recipes of PatilKaki to the world.</p>
      </div>
      {/* Right */}
        <div className={`bg-black flex flex-col rounded-r-2xl  w-[50%] p-10`}>
        <img src={founderImage} alt="" />
        {/* <p>Hello</p> */}
      </div>
    </div>
  )
}

export default About