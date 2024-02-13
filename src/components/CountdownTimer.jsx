import React, { useEffect, useRef, useState } from 'react'
import Button from './Common/Button';


const CountdownTimer = () => {

  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {

    const countdownDate = new Date('Feb 28, 2024 00:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
      if (distance < 0) {
        // stop our timer
        clearInterval(interval.current);
      } else {
      // update timer 
        setTimerDays(days); 
        setTimerHours(hours); 
        setTimerMinutes(minutes); 
        setTimerSeconds(seconds);    
      }

      // console.log(timerSeconds)
    
    }, 1000)
  };

  // componentDidMount

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    }
  });

  
  return (
    <div className=' flex items-center justify-center flex-col gap-10 p-10'>
      
      <div>

        <p className=' text-5xl font-semibold '><span className=' text-[#F7C85A]'>Time is Running out.</span> <br /> Grab your spot fast!</p>
        
      </div>

      <div className=' flex text-3xl items-center font-semibold text-center gap-4'>
        <section className=' bg-white p-4 rounded-lg w-36'>
          <p>{timerDays}</p>
          <p><small>Days</small></p>
        </section>
        <span>:</span>
        <section className=' bg-white p-4  rounded-lg w-36'>
          <p>{timerHours}</p>
          <p><small>Hours</small></p>
        </section >
        <span>:</span>
        <section className=' bg-white p-4 rounded-lg w-36'>
          <p>{timerMinutes}</p>
          <p><small>Minutes</small></p>
        </section>
        <span>:</span>
        <section className=' bg-white p-4 rounded-lg w-36'>
          <p>{timerSeconds}</p>
          <p><small>Seconds</small></p>
        </section>
      </div>

      <div className={`cursor-pointer bg-[#F7C85A] p-4 w-3/6 font-bold text-center rounded-md`}>
        <p >Register Now at ₹499</p>
      </div>

    </div>



  )
}

export default CountdownTimer;