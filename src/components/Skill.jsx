import React from 'react'
import SkillsLevel from './SkillsLevel'

const Skill = () => {
  return (
    <>
        <section  className=' bg-white dark:bg-slate-800 dark:text-white'>
     <div className=' container md:w-[70%]'>
        <div className=' grid items-center py-10 gap-4 grid-cols-1 sm:grid-cols-2'>
          <div className='sm:order-2 relative font-bold'>
            <div className=' text-center text-6xl xl:text-8xl font-bold
             text-black/5'>SKILLS</div>
            <h1 className=' absolute top-1/2 left-1/2 -translate-x-1/2
             -translate-y-1/2 text-3xl md:text-4xl'>Skills</h1>
          </div>
          <div className=' sm:order-1 text-slate-500'>
            <SkillsLevel
            skillName='HTML'
            percentage='90%'
            />
            <SkillsLevel
            skillName='CSS'
            percentage='80%'
            />
            <SkillsLevel
            skillName='Tailwind CSS'
            percentage='95%'
            />
            <SkillsLevel
            skillName='React JS'
            percentage='90%'
            />
            <SkillsLevel
            skillName='Next JS'
            percentage='85%'
            />
            <SkillsLevel
            skillName='JS'
            percentage='94%'
            />
          </div>
        </div>
     </div>
    </section>
    </>
  )
}

export default Skill
