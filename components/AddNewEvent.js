'use client'
import React, { useState } from 'react';
import Modal from '../components/Model';

const AddNewEvent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='w-full h-auto flex justify-center items-center mt-10 mb-10'>
            <div className='bg-red-900 border rounded-[13px] w-[200px] box-border py-4 px-4 flex justify-center items-center'>
                <button onClick={openModal} className='text-white'>Add New Event</button>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                {/* Content of your modal */}
                <div className='w-full h-[600px] box-border px-5 overflow-y-scroll'>
                    <div className='flex flex-col justify-center mb-5'>
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900 mt-2">Event Information</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">Fill the event informations and save to add new event.</p>

                            <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label className="block text-sm font-medium leading-6 text-gray-900">
                                        Title
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md box-border px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Event Description
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            type="email"
                                            autoComplete="email"
                                            rows={40}
                                            cols={5}
                                            className="block w-full rounded-md box-border px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                        Location
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            autoComplete="street-address"
                                            className="block w-full rounded-md box-border px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                        District
                                    </label>
                                    <div className="mt-2">
                                        <select className='block w-full rounded-md box-border px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                                            <option value="1">Kandy</option>
                                            <option value="2">Colombo</option>
                                            <option value="3">Ratnapura</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                                        Date
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="date"
                                            autoComplete="postal-code"
                                            className="block w-full rounded-md box-border px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                                        Time (from)
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="time"
                                            autoComplete="postal-code"
                                            className="block w-full rounded-md box-border px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                                        Time (to)
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="time"
                                            autoComplete="postal-code"
                                            className="block w-full rounded-md box-border px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                        Event Status
                                    </label>
                                    <div className="mt-2">
                                        <select className='block w-full rounded-md box-border px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                                            <option value="1">Ongoing</option>
                                            <option value="2">Completed</option>
                                            <option value="3">Upcoming</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className='flex justify-between'>
                        <div className='w-[100px] bg-green-800 border rounded-[20px] box-border py-2 px-4 flex justify-center items-center '>
                            <button className='text-white'>Save</button>
                        </div>
                        <div className='w-[100px] text-white bg-red-700 border rounded-[20px] box-border py-2 px-4 flex justify-center items-center '>
                            <button onClick={closeModal} className='color-red-500'>Close</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default AddNewEvent;
