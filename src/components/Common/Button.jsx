import React from 'react'

const Button = ({text, bg="#F7C85A"}, ) => {
  return (
    <div className={`bg-${bg} cursor-pointer bg-[#F7C85A] p-2 w-40 font-bold text-center rounded-md`}>
    <p >{text}</p>
  </div>
  )
}

export default Button