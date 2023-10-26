import React from 'react'
import DonateNoticeImage from '../public/donate-notice-img1.jpg';
import Image from 'next/image';

const DonateNoticeCard = () => {
  return (
    <div className='w-[500px] h-auto hide-scrollbar overflow-y-scroll sc max-h-[90vh] bg-white rounded-[12px] flex flex-col'>

      <div className='w-full rounded-t-[12px] h-2/5 bg-black relative'>
      <Image src={DonateNoticeImage} className="set-bg-smart-cover" />
      </div>

      <div className='flex-1 w-full  rounded-b-[12px] box-border px-[30px] py-[30px]'>
        <div className='pb-[12px]'>
          <div className='font-family-Roboto text-[32px] font-extrabold'>donor.</div>
        </div>

      <div className='font-medium font-family-Roboto text-[24px]'>Help Those in Extreme Poverty</div>
        <div className='font-family-Roboto text-[16px] text-gray-400 font-light mt-[8px]'>Your gift will help feed hungry children, provide shelter to those without, supply basic medical supplies, deliver emergency aid, and more.</div>
      </div>
    </div>
  )
}

export default DonateNoticeCard