import React from 'react'

const TotalDonates = ({total, monthly,}) => {
  return (

    <div className='m-20'>

      <div className='flex flex-col py-8 px-10 rounded-2xl shadow-lg w-fit border-solid border-[1px] background text'>

        <div className='mb-2 flex justify-center'>
          <label className='font-bold text-[40px]'>{total}</label>
        </div>

        <div className='mb-2 overflow-auto'>
          <label className='font-semibold opacity-70 text-[20px]'>Donations for this month:</label>
        </div>

        <div className='mb-5'>
          <label>{monthly}</label>
        </div>

        <hr/>

        <div className='mt-3'>
          <a href='#' className='text-blue-500 hover:underline'>
            View Details
          </a>
        </div>
      </div>
    </div>


  )
}

export default TotalDonates
