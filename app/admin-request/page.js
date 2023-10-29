'use client'
import React, { useState, useEffect } from 'react';
import AdminSideBar from '../../components/AdminSideBar'
import Image from 'next/image'
import edit from "../../public/editicon.png"
import del from "../../public/deleteicon.png"
import AddNewEvent from "../../components/AddNewEvent"
import Modal from '../../components/Model'
import axios from 'axios';

const AdminRequest = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [requestData, setRequestData] = useState([]);

    const loadRequest = async () => {
        await axios.get("http://localhost:8000/api/all-request")
            .then((response) => {
                console.log(response.data);
                setRequestData(response.data.allRequest);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        loadRequest();
    }, [])


    const [modalRequestData, setModalRequestData] = useState({
        id: null,
        title: '',
        description: '',
        deadline: '',
        target_amount: '',
        donation_type: '',
    });

    const openModal = (requestId) => {
        const requestDataForModal = requestData.find((request) => request.id === requestId);
        if (requestDataForModal) {
            setModalRequestData({
                id: requestDataForModal.id,
                title: requestDataForModal.title,
                description: requestDataForModal.description,
                deadline: requestDataForModal.deadline,
                target_amount: requestDataForModal.target_amount,
                donation_type: requestDataForModal.donation_type,
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
                        <div className='text-[23px] font-family-Raleway mb-5'>Pending Requests</div>
                        <div className='w-[1000px] overflow-x-scroll flex-col bg-gray-100 box-border px-5 py-5 l'>
                            <div className='flex bg-red-100 border shadow-sm box-border px-4 py-4 font-family-Raleway text-[15px] font-semibold'>
                                <div className='w-4/12'>Request Title</div>
                                <div className='w-2/12'>Request Type</div>
                                <div className='w-2/12'>Target Amount</div>
                                <div className='w-3/12'>Deadline</div>
                                <div className='w-1/12'></div>
                            </div>

                            <div className='w-full flex-col mt-3 h-[180px] overflow-y-scroll text-[14px] justify-center items-center '>

                                {requestData.map((request) => (

                                    <div className='flex bg-gray-50 border box-border px-4 py-4 mb-3'>
                                        <div className='w-4/12'>{request.title}</div>
                                        <div className='w-2/12'>{request.donation_type}</div>
                                        <div className='w-2/12'>{request.target_amount}</div>
                                        <div className='w-3/12'>{request.deadline}</div>
                                        <div className='w-1/12 flex justify-center items-center gap-4 box-border border px-2 py-1 rounded-full bg-orange-600 text-white'>
                                            <button>Accept</button>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>

                    </div>

                    <div className='mb-5 mt-4'>
                        <div className='text-[23px] font-family-Raleway mb-5'>Accepted Requests</div>
                        <div className='w-[1000px] overflow-x-scroll flex-col bg-gray-100 box-border px-5 py-5 l'>
                            <div className='flex bg-yellow-100 border shadow-sm box-border px-4 py-4 font-family-Raleway text-[15px] font-semibold'>
                                <div className='w-4/12'>Request Title</div>
                                <div className='w-2/12'>Request Type</div>
                                <div className='w-2/12'>Target Amount</div>
                                <div className='w-3/12'>Deadline</div>
                                <div className='w-1/12'></div>
                            </div>

                            <div className='w-full flex-col mt-3 h-[180px] overflow-y-scroll text-[14px] '>

                                {requestData.map((request) => (

                                    <div className='flex bg-gray-50 border box-border px-4 py-4 mb-3'>
                                        <div className='w-4/12'>{request.title}</div>
                                        <div className='w-2/12'>{request.donation_type}</div>
                                        <div className='w-2/12'>{request.target_amount}</div>
                                        <div className='w-3/12'>{request.deadline}</div>
                                        <div className='w-1/12 flex justify-center items-center gap-4'>
                                            <div onClick={() => openModal(request.id)}>
                                                <Image src={edit} className='h-[20px] w-[20px]' />
                                            </div>
                                            <div><Image src={del} className='h-[25px] w-[25px]' /></div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>

                    </div>

                    <div className='mb-5 mt-4'>
                        <div className='text-[23px] font-family-Raleway mb-5'>Inactive Requests</div>
                        <div className='w-[1000px] overflow-x-scroll flex-col bg-gray-100 box-border px-5 py-5 l'>
                            <div className='flex bg-green-100 border shadow-sm box-border px-4 py-4 font-family-Raleway text-[15px] font-semibold'>
                                <div className='w-4/12'>Request Title</div>
                                <div className='w-2/12'>Request Type</div>
                                <div className='w-2/12'>Target Amount</div>
                                <div className='w-3/12'>Deadline</div>
                                <div className='w-1/12'></div>
                            </div>

                            <div className='w-full flex-col mt-3 h-[180px] overflow-y-scroll text-[14px] '>

                                {requestData.map((request) => (

                                    <div className='flex bg-gray-50 border box-border px-4 py-4 mb-3'>
                                        <div className='w-4/12'>{request.title}</div>
                                        <div className='w-2/12'>{request.donation_type}</div>
                                        <div className='w-2/12'>{request.target_amount}</div>
                                        <div className='w-3/12'>{request.deadline}</div>
                                        <div className='w-1/12 flex justify-center items-center gap-4'>
                                            <div className='h-[20px] w-[20px]' >
                                            </div>
                                            <div><Image src={del} className='h-[25px] w-[25px]' /></div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                {/* Content of your modal */}
                <div className='w-full h-[600px] box-border px-5 overflow-y-scroll'>
                    <div className='flex flex-col justify-center mb-5'>
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900 mt-2">Request Information</h2>

                            <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label className="block text-sm font-medium leading-6 text-gray-900">
                                        Title
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            value={modalRequestData.title}
                                            onChange={(e) => setModalRequestData({ ...modalRequestData, title: e.target.value })}
                                            autoComplete="given-name"
                                            className="block w-full rounded-md box-border px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
                                        Request Description
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            type="text"
                                            autoComplete="text"
                                            value={modalRequestData.description}
                                            onChange={(e) => setModalRequestData({ ...modalRequestData, description: e.target.value })}
                                            rows={10}
                                            cols={5}
                                            className="block w-full rounded-md box-border px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                                        Date
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            value={modalRequestData.deadline}
                                            onChange={(e) => setModalRequestData({ ...modalRequestData, deadline: e.target.value })}
                                            autoComplete="postal-code"
                                            className="block w-full rounded-md box-border px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                                        Target Amount
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            value={modalRequestData.target_amount}
                                            onChange={(e) => setModalRequestData({ ...modalRequestData, target_amount: e.target.value })}
                                            autoComplete="postal-code"
                                            className="block w-full rounded-md box-border px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
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

export default AdminRequest

