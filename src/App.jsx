import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Introduction from './components/Introduction'
import CountdownTimer from './components/CountdownTimer'
import CallToAction from './components/CallToAction'
import FormComponent from "./components/Common/FormComponent"


function App() {

  return (
    <div className=' '>
      <div className=' bg-primary h-[100%] py-10 px-28 font-GeneralSans relative overflow-x-hidden'>
        <Navbar />
        <Hero/>
        <About/>
        <Introduction />
        <CountdownTimer/>
        <CallToAction/>
        <div className='fixed z-10 top-72 left-14 '>
          <FormComponent/>
        </div>
      </div>
    </div>
  )
}

export default App
