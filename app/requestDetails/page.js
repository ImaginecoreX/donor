'use clients'

import React from 'react'
import {QuickDonate, MoreRequests} from '../../components/Cards'

const requests = () => {
    return (
        <div className='flex flex-wrap'>

            <div className='ss:w-full w-3/5 ss:p-[30px] p-[70px] bg-slate-50'>
                <div className='ss:mb-5 mb-10'>
                    <h1 className='ss:text-3xl text-5xl font-bold text-gray-900'>Title of the Donation Request Can be longer longer longer longer longer longer longer </h1>
                </div>

                <div className='ss:mx-0 mx-5'>
                    <div>
                        <img src='/hero-img.jpg' alt='request-image' className='rounded-md object-contain' />
                    </div>
                </div>

                <div className='ss:my-4 my-8'>
                    <h1 className='ss:text-2xl text-4xl font-semibold mb-4'>Request Details</h1>
                    <hr />
                </div>

                <div className='mb-8'>
                    <div className='flex flex-row justify-around p-2 text-lg flex-wrap gap-5'>
                        <div className='ss:w-full w-1/4 bgs-blue-100 flex flex-col items-center rounded-lg border py-3 text-white'>
                            <label className='font-semibold'>Request type</label>
                            <label>Cash</label>
                        </div>
                        <div className='ss:w-full w-1/4 bgs-blue-100 flex flex-col items-center rounded-lg border py-3 text-white'>
                            <label className='font-semibold'>Request</label>
                            <label>$5000</label>
                        </div>
                        <div className='ss:w-full w-1/4 bgs-blue-100 flex flex-col items-center rounded-lg border py-3 text-white'>
                            <label className='font-semibold'>Timeline</label>
                            <label>ASAP</label>
                        </div>
                    </div>
                </div>

                <div className='mb-8'>
                    <div className='mb-5'>
                        <h2 className='text-xl font-semibold'>Highlights</h2>
                    </div>
                    <div className='mb-3 px-5 ss:text-base text-lg '>
                        <div>
                            <label className='me-2'>Recipient Name:</label>
                            <label className='font-semibold'>A.A. James Gorden</label>
                        </div>
                        <div>
                            <label className='me-2'>Age:</label>
                            <label className='font-semibold'>25</label>
                        </div>
                        <div>
                            <label className='me-2'>City/Town:</label>
                            <label className='font-semibold'>New York</label>
                        </div>
                    </div>
                    <div className='w-[100%] flex flex-col gap-2 ss:px-0 px-5 text-gray-700'>
                        <p>Full Description of the Request Full Description of the Request Full Description of the Request Full Description of the Request Full Description of the Request Full Description of the Request Full Description of the Request Full Description of the Request Full Description of the Request Full Description of the Request Full Description of the Request Full Description of the Request Full Description of the Request Full Description of the Request Full Description of the Request Full</p>
                        <p>Full Description of the Request Full Description of the Request Full Description of the Request Full Description of the Request Full Description of the Request Full Description of the Request Full Description of the Request Full Description of the Request Full Description of the Request Full Description of the Request Full Description of the Request Full Description of the Request Full Description of the Request Full Description of the Request Full Description of the Request Full</p>
                        <p>Full Description of the Request Full Description of the Request Full Description of the Request Full Description of the Request Full Description of the Request Full Description of the Request Full Description of the Request Full Description of the Request Full Description of the Request Full Description of the Request Full Description of the Request Full Description of the Request Full Description of the Request Full Description of the Request Full Description of the Request Full</p>
                    </div>
                </div>

                <div className='mb-8'>
                    <div className='mb-5'>
                        <h2 className='text-xl font-semibold'>Contact Details</h2>
                    </div>
                    <div className='px-5 ss:text-base text-lg flex flex-wrap'>
                        <div className='ss:w-full w-1/2'>
                            <div>
                                <label className='me-2'>Applicant Name:</label>
                                <label className='font-semibold'>A.A. James Gorden</label>
                            </div>
                            <div>
                                <label className='me-2'>Relation to the recipient:</label>
                                <label className='font-semibold'>Recipient</label>
                            </div>
                            <div>
                                <label className='me-2'>Email:</label>
                                <label className='font-semibold'>jamesgorden@gmail.com</label>
                            </div>
                        </div>
                        <div className='ss:w-full w-1/2'>
                            <div>
                                <label className='me-2'>Mobile:</label>
                                <label className='font-semibold'>+1 523 456789</label>
                            </div>
                            <div>
                                <label className='me-2'>Address:</label>
                                <label className='font-semibold'>50/1 New York, USA</label>
                            </div>
                            <div className='flex'>
                                <label className='me-2'>Location:</label> <img src='/location.svg' />
                                <label className='underline text-blue-700'><a href='#'>View Location</a></label>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='ss:w-full w-2/5'>

                <div className='mt-5'>
                    <QuickDonate />
                </div>

                <div className='mt-5 flex justify-center'>

                    <div className='w-[90%]'>
                        <div className='p-3'>
                            <h2 className='text-2xl'>More Requests!</h2>
                        </div>
                        <div className='p-2 flex flex-col gap-3'>
                            <MoreRequests />
                            <MoreRequests />
                            <MoreRequests />
                            <MoreRequests />
                            <MoreRequests />
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default requests
