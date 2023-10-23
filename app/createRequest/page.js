"use client"

import React from 'react'
import AddNewEvent from '../../components/AddNewEvent'

const createRequest = () => {
    return (
        <div className='flex flex-wrap'>

            <div className=''>

                <div className='flex flex-col mb-5 gap-1'>
                    <label className='text-lg font-semibold'>Your Name:</label>
                    <input type='text' className='border-[1px] border-solid rounded-md p-[5px] ps-3' placeholder='Ex: Jimmy Donadson' />
                </div>

                <div className='flex flex-col mb-5 gap-1'>
                    <label className='text-lg font-semibold'>Your Name:</label>
                    <input type='text' className='border-[1px] border-solid rounded-md p-[5px] ps-3' placeholder='Ex: Jimmy Donadson' />
                </div>

                <div className='flex flex-col mb-5 gap-1'>
                    <label className='text-lg font-semibold'>Your Name:</label>
                    <input type='text' className='border-[1px] border-solid rounded-md p-[5px] ps-3' placeholder='Ex: Jimmy Donadson' />
                </div>

            </div>

        </div>
    )
}

export default createRequest
