import React from 'react'
import profile from "@/public/profile.png"
import Image from 'next/image'

const Request = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='h-auto flex flex-col mb-10 box-border py-5 px-5 border rounded'>
                <div className='flex justify-between items-center w-[700px] ss:w-[90%] '>
                    <div className='flex justify-center items-center ss:flex-wrap'>
                        <Image class="w-10 h-10 rounded-full mr-4" src={profile} alt="Avatar of Jonathan Reinink" />

                        <span className='color-blue-400 font-semibold font-family-Lora'>Sample User</span>
                    </div>
                    <div className='bg-green-950 rounded-[12px] box-border py-2 px-3'>
                        <button className='text-white'>Pending</button>
                    </div>
                </div>
                <div className='flex flex-col mt-5 w-[700px] ss:w-[90%] '>
                    <span className='font-bold color-yellow-500 text-xl font-family-Maven-Pro'>Book Donation</span>
                    <p className='mt-4 text-justify text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                </div>
                <div class="border-b border-solid border-color-yellow-100 mt-4"></div>
                <div className='flex justify-between mt-4'>
                    <div className='flex flex-col'>
                        <span className='text2'>Donation Type:</span>
                        <span className='color-blue-700 font-bold text-xl font-family-Roboto-Serif'>Stationery</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text2'>Received Amount:</span>
                        <span className='text-end color-blue-700 font-bold text-xl font-family-Roboto-Serif'>300</span>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Request