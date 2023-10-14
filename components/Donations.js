import Image from 'next/image'
import React from 'react'
import revImage from '../public/user.png'

const Donations = ({title, date, fromName, fromEmail, toName, toEmail}) => {
    return (
        <div>

            <div className='flex justify-center p-5 '>
                <div className=' ss:w-[100%] md:w-[40%] p-8 border rounded-xl background text'>

                    <div className='overflow-auto'>
                        <div className='flex'>
                            <label className='text-2xl font-bold me-4'>Title:</label>
                            <div className='text-2xl font-semibold'>{title} </div>
                        </div>

                        <div className='flex items-center'>
                            <label className='text-m font-bold me-4'>Date:</label>
                            <div className='text-m'>{date}</div>
                        </div>
                    </div>

                    <div className='flex justify-between my-6 me-4'>

                        <div className='me-3 overflow-auto'>
                            <div className='mb-3'>
                                <label className='text-xl'>From:</label>
                            </div>
                            <div className='flex'>
                                <label className='me-4'>Name:</label>
                                <div>{fromName}</div>
                            </div>
                            <div className='flex'>
                                <label className='me-4'>Email:</label>
                                <div>{fromEmail}</div>
                            </div>
                        </div>

                        <div className='overflow-auto'>
                            <div className='mb-3'>
                                <label className='text-xl'>To:</label>
                            </div>
                            <div className='flex'>
                                <label className='me-4'>Name:</label>
                                <div>{toName}</div>
                            </div>
                            <div className='flex'>
                                <label className='me-4'>Email:</label>
                                <div>{toEmail}</div>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className='flex justify-between items-center mt-5'>
                        <label className='text-lg'>Download Invoice</label>

                        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                            <span>Download</span>
                        </button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Donations
