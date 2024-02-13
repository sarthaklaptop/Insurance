import React from 'react'
import Button from './Common/Button'
import bgMain2 from "../assets/bgMain2.png"
import DotMain from "../assets/DotMain.png"
import imgMain from "../assets/imgMain.png"
import iconMain from "../assets/iconMain.png"
import iconMain2 from "../assets/iconMain2.png"
import iconMain3 from "../assets/iconMain3.png"


const Hero = () => {
  return (
    <div className=' flex my-20 '>

      {/* Left */}
      <div className=' w-[50%] flex flex-col my-10 py-10 gap-10'>
        
        <div className=' text-white flex flex-col gap-4'>
          <h1 className=' text-5xl font-bold'>Are You Covered? Home, Life, & Auto Insurance.</h1>
          <p className=' text-secondary'>Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec rutrum congue leo eget malesuada. </p>
        </div>

        <Button text="Get Started"/>
      </div>

      {/* Right */}
        <img className=' absolute w-4/6 -right-20 -top-10  z-10' src={bgMain2} />
      <div className=' items-center justify-center mx-auto relative'>
        <img width={300} src={imgMain} alt="Main Image" className='relative z-20'/>
      </div>
        
      <div className=' '>
        <img  src={iconMain} className='absolute z-20 right-96  top-96'/>
        <img width={30} src={iconMain2} className='absolute z-20 right-40 top-80'/>
        <img width={30} src={iconMain3} className='absolute z-20 right-60  top-96'/>
      </div>
      
    </div>
  )
}

export default Hero