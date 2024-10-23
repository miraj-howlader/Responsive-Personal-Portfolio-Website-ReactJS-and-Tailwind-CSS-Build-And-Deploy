import React from 'react'

const SkillsLevel = ({ percentage, skillName }) => {
    return (
        <div>
            <div className=' mt-4 space-y-2'>
                <div className=' flex justify-between items-end'>
                    <p className=' font-bold text-xl'>{skillName}</p>
                    <p className=' text-sm'>{percentage}</p>
                </div>
                <div className=' w-full bg-slate-500 h-2 rounded-full'>
                    <div
                    style={{width:`${percentage}`}}
                     className=' h-2 bg-primary rounded-full'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsLevel
