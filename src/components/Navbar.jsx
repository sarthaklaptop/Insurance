import React from 'react'
import InsurnceLogo from "../assets/InsurnceLogo.png"
import Button from "../components/Common/Button.jsx"

const Navbar = () => {
  return (
    <div className=' flex justify-between'>
        {/* Left */}
        <div>
            <div>
                <img src={InsurnceLogo} alt='Brand Logo'/>
            </div>
        </div>

        {/* Right */}
        <div className=' flex gap-10 items-center '>
            <p className='text-white'><a href="#">Home</a></p>
            <p className='text-white'><a href="#">About</a></p>
            <Button text="Register Now" bg="#F7C85A"/>
        </div>
    </div>
  )
}

export default Navbar