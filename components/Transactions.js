import React from 'react'
import revImage from '../public/user.png'
import Image from 'next/image'

const Transactions = ({from, to, amount, date}) => {
    return (
        <div>

            <div className='flex flex-col justify-center border shadow-xl rounded-2xl w-fit p-5 background text'>

                <div className='flex justify-center'>
                    <label className='text-3xl font-semibold'>Transactions</label>
                </div>

                <div className='mt-4 flex justify-between'>


                    <div className='me-10'>
                        <Image src={revImage} alt='Image' width={50} height={50} className='ms-8 border rounded-full' />
                        <label className='me-2'>From:</label>
                        <label>{from}</label>
                    </div>

                    <div className=''>
                        <Image src={revImage} alt='Image' width={50} height={50} className='ms-8 border rounded-full'/>
                        <label className='me-3'>To:</label>
                        <label>{to}</label>
                    </div>

                </div>

                <div className='mt-10 flex text-[20px] font-semibold'>
                    <label className='me-5'>Amount: </label> <div>{amount}</div>
                </div>

                <div className='mt-3 flex '>
                    <label className='me-5'>Date:</label> <div>{date}</div>
                </div>

            </div>

        </div>
    )
}

export default Transactions
