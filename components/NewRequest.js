import Image from 'next/image'
import React from 'react'
import person from "../public/person.svg"

const NewRequest = () => {
    return (
        <div className='flex text-black mt-6 '>
            <div className='w-[600px] h-auto border rounded box-border bg-orange-50 px-6 py-6'>
                <div className='flex justify-between items-center px-1 mb-4'>
                    <span className=' font-family-Roboto text-blue-950 text-lg font-bold'>New Requests</span>
                    <a href='#' className='text-blue-800'>See All</a>
                </div>
                <div className='border box-border bg-gray-100 py-3 px-3 mt-2 rounded-[12px]'>
                    <div className='flex justify-between items-center'>
                        <div className='flex justify-center items-center gap-4'>
                            <Image src={person} className='h-[25px] w-[25px] rounded-full' />
                            <span className='text-[14px] font-family-Fira-Sans'>
                                Dave Rayan
                            </span>
                        </div>
                        <div>
                            <span className='text-[14px] font-family-Fira-Sans'>2023/10/05</span>
                        </div>
                    </div>
                    <div className='box-border px-2 py-2 mt-1'>
                        <p className='text-justify text-[14px]'>
                            In the quiet stillness of the early morning, the world seemed to hold its breath. Dew glistened on the grass, and a gentle breeze whispered through the leaves. <a href='#' className='underline'>See more</a>...
                        </p>
                    </div>
                </div>
                <div className='border box-border bg-gray-100 py-3 px-3 mt-2 rounded-[12px]'>
                    <div className='flex justify-between items-center'>
                        <div className='flex justify-center items-center gap-4'>
                            <Image src={person} className='h-[25px] w-[25px] rounded-full' />
                            <span className='text-[14px] font-family-Fira-Sans'>
                                Dave Rayan
                            </span>
                        </div>
                        <div>
                            <span className='text-[14px] font-family-Fira-Sans'>2023/10/05</span>
                        </div>
                    </div>
                    <div className='box-border px-2 py-2 mt-1'>
                        <p className='text-justify text-[14px]'>
                            In the quiet stillness of the early morning, the world seemed to hold its breath. Dew glistened on the grass, and a gentle breeze whispered through the leaves. <a href='#' className='underline'>See more</a>...
                        </p>
                    </div>
                </div>
                <div className='border box-border bg-gray-100 py-3 px-3 mt-2 rounded-[12px]'>
                    <div className='flex justify-between items-center'>
                        <div className='flex justify-center items-center gap-4'>
                            <Image src={person} className='h-[25px] w-[25px] rounded-full' />
                            <span className='text-[14px] font-family-Fira-Sans'>
                                Dave Rayan
                            </span>
                        </div>
                        <div>
                            <span className='text-[14px] font-family-Fira-Sans'>2023/10/05</span>
                        </div>
                    </div>
                    <div className='box-border px-2 py-2 mt-1'>
                        <p className='text-justify text-[14px]'>
                            In the quiet stillness of the early morning, the world seemed to hold its breath. Dew glistened on the grass, and a gentle breeze whispered through the leaves. <a href='#' className='underline'>See more</a>...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewRequest