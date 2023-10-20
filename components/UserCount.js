import React from 'react'

const UserCount = () => {
    return (
        <div className='w-full h-auto flex justify-center items-center mt-10 mb-10'>
            <div className='flex flex-col gap-4 border-2 rounded-[12px] box-border px-6 py-6 font-semibold shadow-lg'>
                <div className='flex justify-between gap-5'>
                    <div className='rounded-full bg-blue-400 flex justify-center items-center w-[100px] h-[100px]'>
                        <span className='text-4xl font-family-Roboto-Serif '>2K</span>
                    </div>
                    <div className='flex flex-col justify-center '>
                        <label className='text-3xl font-family-Raleway color-yellow-500'>Registered</label>
                        <label className='text-2xl  font-family-Raleway color-blue-500'>Users</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCount