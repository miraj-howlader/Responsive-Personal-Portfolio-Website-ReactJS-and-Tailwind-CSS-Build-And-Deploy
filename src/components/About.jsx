import React from 'react'

const About = () => {
  return (
    <>
    <section  className=' bg-white dark:bg-slate-800 dark:text-white'>
     <div className=' container md:w-[70%]'>
        <div className=' grid items-center py-10 gap-4 grid-cols-1 sm:grid-cols-2'>
          <div className=' relative font-bold'>
            <div className=' text-center text-6xl xl:text-8xl font-bold
             text-black/5'>ABOUT</div>
            <h1 className=' absolute top-1/2 left-1/2 -translate-x-1/2
             -translate-y-1/2 text-3xl md:text-4xl'>About me</h1>
          </div>
          <div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta quidem tempora iure ipsam eveniet accusamus corporis temporibus beatae dolor distinctio!</p>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, molestiae.</p>
           <div>
            <a href=""
            className=' primary-btn inline-block my-6 mr-6'
            >Download Resume</a>
            <a href="tel:+839473764"
            className=' outline-btn inline-block my-6 mr-6'
            >Contact</a>
           </div>
          </div>
        </div>
     </div>
    </section>
      
    </>
  )
}

export default About
