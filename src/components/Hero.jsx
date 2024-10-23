import React from 'react'
import PersonImg from '../assets/person2.png'
const Hero = () => {
  return (
    <main className=' w-full bg-secondary dark:bg-gray-900 dark:text-white'>
        <div className=' container sm:h-[600px] grid grid-cols-1
         sm:grid-cols-2 items-center space-y-2 py-12 sm:py-0 '>
            <div>
                <div className=' space-y-2 lg:items-start flex flex-col justify-center items-center'>
                    <p className=' uppercase'>Hello</p>
                    <p className=' text-4xl md:text-5xl font-bold
                     text-black/80 dark:text-white'>I'm Miraj <span className='
                       text-orange-600'>Howlader</span></p>
                       <p className=' text-3xl text-gray-700
                        dark:text-white'>Freelance web & <br /> <span className=' text-amber-600
                         font-semibold'>Full Stact Developer</span></p>
                <p className=' text-black/75 dark:text-white/70
                 text-center sm:text-left'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto perspiciatis voluptate incidunt itaque dolores! Odit modi vitae numquam! Facere animi aliquam sapiente deleniti sit error, quae dolor, magni repudiandae ut consectetur aliquid optio odio ratione.</p>
                <a href="mailto:abc@gmail.com"
                className='primary-btn'
                >Hire me</a>
                </div>
            </div>
            {/* img container  */}
            <div>
                <img src={PersonImg} alt="" 
                className=' w-full md:max-w-lg mx-auto'
                />
            </div>

        </div>
    </main>
  )
}

export default Hero
