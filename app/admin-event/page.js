'use client'
import React, { useState, useEffect } from 'react';
import AdminSideBar from '../../components/AdminSideBar'
import Image from 'next/image'
import edit from "../../public/editicon.png"
import del from "../../public/deleteicon.png"
import AddNewEvent from "../../components/AddNewEvent"
import Modal from '../../components/Model'
import axios from 'axios';

const AdminEvent = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [eventData, setEventData] = useState([]);

    const loadEvents = async () => {
        await axios.get("http://localhost:8000/api/get-all-event")
            .then((response) => {
                console.log(response.data);
                setEventData(response.data.allEvent);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        loadEvents();
    }, [])


    const [modalEventData, setModalEventData] = useState({
        id: null,
        title: '',
        description: '',
        location: '',
        district: '',
        date: '',
        timeFrom: '',
        timeTo: '',
        eventStatus: '',
    });

    const openModal = (eventId) => {
        const eventDataForModal = eventData.find((event) => event.id === eventId);
        if (eventDataForModal) {
            setModalEventData({
                id: eventDataForModal.id,
                title: eventDataForModal.title,
                description: eventDataForModal.description,
                location: eventDataForModal.location_link,
                district: eventDataForModal.district,
                date: eventDataForModal.date,
                timeFrom: eventDataForModal.timeFrom,
                timeTo: eventDataForModal.timeTo,
                eventStatus: eventDataForModal.eventStatus,
            });
            setIsModalOpen(true);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    return (
        <div className='w-full h-auto' >
            <div className='flex'>
                <div className='w-1/4  ss:hidden sm:hidden md:hidden ns:hidden'>
                    <AdminSideBar />
                </div>
                <div className='w-3/4 flex-col h-auto overflow-scroll  mt-8 px-9 md:w-full sm:w-full ss:w-full ns:w-full'>
                    <div className='mb-5'>
                        <div className='text-[23px] font-family-Raleway mb-5'>Ongoing Events</div>
                        <div className='w-[1000px] overflow-x-scroll flex-col bg-gray-100 box-border px-5 py-5 l'>
                            <div className='flex bg-yellow-50 border shadow-sm box-border px-4 py-4 font-family-Raleway text-[15px] font-semibold'>
                                <div className='w-4/12'>Event Title</div>
                                <div className='w-4/12'>Location</div>
                                <div className='w-3/12'>Date & Time</div>
                                <div className='w-1/12'></div>
                            </div>

                            <div className='w-full flex-col mt-3 h-[180px] overflow-y-scroll text-[14px] '>

                                {eventData.map((event) => {
                                    if (event.event_statuses_id === 1) {
                                        return (
                                            <div className='flex bg-gray-50 border box-border px-4 py-4 mb-3'>
                                                <div className='w-4/12'>{event.title}</div>
                                                <div className='w-4/12'>{event.location_link}</div>
                                                <div className='w-3/12'>{event.from}</div>
                                                <div className='w-1/12 flex justify-center items-center gap-4'>
                                                    <div onClick={() => openModal(event.id)}>
                                                        <Image src={edit} className='h-[20px] w-[20px]' />
                                                    </div>
                                                    <div><Image src={del} className='h-[25px] w-[25px]' /></div>
                                                </div>
                                            </div>
                                        );
                                    } else {
                                        return null;
                                    }
                                })}

                            </div>
                        </div>

                        <div className='text-[23px] font-family-Raleway mb-5 mt-7'>Completed Events</div>
                        <div className='w-[1000px] overflow-x-scroll flex-col bg-gray-100 box-border px-5 py-5'>
                            <div className='flex bg-green-50 border shadow-sm box-border px-4 py-4 font-family-Raleway text-[15px] font-semibold'>
                                <div className='w-4/12'>Event Title</div>
                                <div className='w-4/12'>Location</div>
                                <div className='w-3/12'>Date & Time</div>
                                <div className='w-1/12'></div>
                            </div>
                            <div className='w-full flex-col mt-3 h-[180px] overflow-y-scroll text-[14px] '>
                                {eventData.map((event) => {
                                    if (event.event_statuses_id === 2) {
                                        return (
                                            <div className='flex bg-gray-50 border box-border px-4 py-4 mb-3'>
                                                <div className='w-4/12'>{event.title}</div>
                                                <div className='w-4/12'>{event.location_link}</div>
                                                <div className='w-3/12'>{event.time}</div>
                                                <div className='w-1/12 flex justify-center items-center gap-4'>
                                                    <div onClick={openModal}><Image src={edit} className='h-[20px] w-[20px]' /></div>
                                                    <div><Image src={del} className='h-[25px] w-[25px]' /></div>
                                                </div>
                                            </div>
                                        );
                                    } else {
                                        return null;
                                    }
                                })}

                            </div>
                        </div>

                        <div className='text-[23px] font-family-Raleway mb-5 mt-7'>Upcoming Events</div>
                        <div className='w-[1000px] overflow-x-scroll flex-col bg-gray-100 box-border px-5 py-5'>
                            <div className='flex bg-orange-50 border shadow-sm box-border px-4 py-4 font-family-Raleway text-[15px] font-semibold'>
                                <div className='w-4/12'>Event Title</div>
                                <div className='w-4/12'>Location</div>
                                <div className='w-3/12'>Date & Time</div>
                                <div className='w-1/12'></div>
                            </div>
                            <div className='w-full flex-col mt-3 h-[180px] overflow-y-scroll text-[14px] '>
                                {eventData.map((event) => {
                                    if (event.event_statuses_id === 3) {
                                        return (
                                            <div className='flex bg-gray-50 border box-border px-4 py-4 mb-3'>
                                                <div className='w-4/12'>{event.title}</div>
                                                <div className='w-4/12'>{event.location_link}</div>
                                                <div className='w-3/12'>{event.time}</div>
                                                <div className='w-1/12 flex justify-center items-center gap-4'>
                                                    <div onClick={openModal}><Image src={edit} className='h-[20px] w-[20px]' /></div>
                                                    <div><Image src={del} className='h-[25px] w-[25px]' /></div>
                                                </div>
                                            </div>
                                        );
                                    } else {
                                        return null;
                                    }
                                })}

                            </div>
                        </div>
                    </div>

                    <div>
                        <AddNewEvent />
                    </div>
                </div>
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
                                            value={modalEventData.title}
                                            onChange={(e) => setModalEventData({ ...modalEventData, title: e.target.value })}
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
                                            value={modalEventData.description}
                                            onChange={(e) => setModalEventData({ ...modalEventData, description: e.target.value })}
                                            rows={30}
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
                                            value={modalEventData.location}
                                            onChange={(e) => setModalEventData({ ...modalEventData, description: e.target.value })}
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
                                        Date & Time (from)
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="datetime-local"
                                            // value={modalEventData.date}
                                            // onChange={(e) => setModalEventData({ ...modalEventData, description: e.target.value })}
                                            autoComplete="postal-code"
                                            className="block w-full rounded-md box-border px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                                        Date & Time (to)
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="datetime-local"
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



    )
}

export default AdminEvent

