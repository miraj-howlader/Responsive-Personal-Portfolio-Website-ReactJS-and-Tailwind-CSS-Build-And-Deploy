import React, { useEffect, useState } from 'react'
import { FiMenu } from 'react-icons/fi'

import { BiSolidMoon, BiSolidSun } from 'react-icons/bi'
const NavMenu = [
    {
        name:"Home",
        link:'/'
    },
    {
        name:"About",
        link:'/about'
    },
    {
        name:"Services",
        link:'/services'
    },
    {
        name:"Contact",
        link:'/contact'
    },
]
const Navbar = () => {
    const [theme,setTheme] = useState('dark')
    const [showMenu,setShowmenu] = useState(false)
    
   

    const toggleMenu = () => {
       setShowmenu(!showMenu)
    }

    useEffect(() => {
      if(theme === 'dark'){
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme','dark');
      }else{
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme','light');
      }
    }, [theme])


  return (
    <>
    <nav className=' bg-secondary py-6 dark:bg-gray-900 dark:text-white '>
        <div className=' container  px-4 py-3  flex justify-between
         items-center sm:py-0 shadow-md lg:py-4'>
            <h1 className='text-3xl text-primary'>Portfolio</h1>
        {/* Desktop Menu */}
        <div className=' hidden md:flex'>
            <ul className=' flex items-center gap-4'>
                {
                    NavMenu.map((menu) => {
                        return <li key={menu.name}>
                            <a
                            className=' text-xl font-semibold px-2
                             py-4 hover:text-orange-500 transition-all
                              duration-300'
                             href={menu.link}>{menu.name}</a>
                        </li>
                    })
                }
            </ul>
            {/* Theme toggle  */}
            {
            theme === 'dark' ?
            <BiSolidSun className=' text-2xl cursor-pointer dark:text-white'
           onClick={()=> setTheme('light')}
           />
            :<BiSolidMoon className=' text-2xl cursor-pointer
             dark:text-white'
            onClick={()=> setTheme('dark')}
            />
           }
        </div>
        {/* Desktop Menu */}
        <div className='  block sm:hidden'>
            
           <div className=' flex items-center gap-4'>
           
           
            
           <FiMenu className=' text-2xl cursor-pointer'
           onClick={toggleMenu}/>
           </div>


            {showMenu && (
                <div className=' fixed top-16 left-0 right-0
                 bg-white shadow-md dark:bg-gray-900 dark:text-white rounded-b-xl z-10 py-14'>
                    <ul className=' flex flex-col items-center
                     gap-4'>
                        {
                            NavMenu.map((menu) => {
                                return <li key={menu.name}>
                                    <a
                                    className=' hover:text-orange-600
                                    text-xl px-2 py-4 md:py-6 inline-block
                                     cursor-pointer
                                      transition-all duration-500 font-semibold'
                                     href={menu.link}>{menu.name}</a>
                                </li>
                            })
                        }
                    </ul>
                </div>
            )}
        </div>
        </div>
    </nav>
      
    </>
  )
}

export default Navbar
