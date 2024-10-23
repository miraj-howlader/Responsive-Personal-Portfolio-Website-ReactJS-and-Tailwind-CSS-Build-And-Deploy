import React from 'react'
import { AiFillLayout } from 'react-icons/ai'
import { FaCode, FaMobile } from 'react-icons/fa'
import { MdSecurity } from 'react-icons/md'
 
const ServicesData = [
    {
        name:'UX reserch',
        desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In unde nostrum dolores?'
        ,
        image:'https://picsum.photos/200/300',
        icon: <AiFillLayout/>,
        bgColor:'bg-slate-500/70'
    },
    {
        name:'App Development',
        desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In unde nostrum dolores?'
        ,
        image:'https://picsum.photos/200/300',
        icon: <FaCode/>,
        bgColor:'bg-blue-500/70'
    },
    {
        name:'Mobile Development',
        desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In unde nostrum dolores?'
        ,
        image:'https://picsum.photos/200/300',
        icon: <FaMobile/>,
        bgColor:'bg-blue-500/70'
    },
    {
        name:'Security',
        desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In unde nostrum dolores?'
        ,
        image:'https://picsum.photos/200/300',
        icon: <MdSecurity/>,
        bgColor:'bg-orange-500/80'
    },
]
const ServicesBox = () => {
  return (
    <section id='services' className=' my-10 container'>
        <div className=' grid grid-cols-1 sm:grid-cols-2 gap-6'>
            {
                ServicesData.map(({name,icon,desc,image,bgColor})=>{
                    return <div key={name}
                    className={`${bgColor} rounded-xl text-white
                     bg-[url(${image})] bg-cover bg-center bg-no-repeat
                      bg-blend-overlay`}
                    >
                        <div className=' p-3 md:p-12 backdrop-blur-sm
                         space-y-3 rounded-xl'>
                          <p className=' text-3xl'>{icon}</p>
                          <h1 className=' text-3xl font-semibold'>{name}</h1>
                          <h1>{desc}</h1>
                        </div>
                    </div>
                })
            }

        </div>
    </section>
  )
}

export default ServicesBox
