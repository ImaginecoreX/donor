import React from 'react'
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';

const DonateModal = ({click}) => {
  return (
    <div className='w-[600px] h-[60vh] bg-white  z-50 rounded-[12px] box-border p-[30px] flex flex-col items-center'>
      
      <div className='flex items-center gap-[8px] pb-[30px]'>
      <div><div className='font-family-Roboto text-[26px] font-bold'>Secure Donation</div></div>
      <HttpsOutlinedIcon sx={{width:'18px', height:'18px'}}/>
      </div>

      <div>
        <div></div>
      </div>

      <button onClick={click} className='font-family-Roboto w-full text-white bg-black py-[12px] rounded-[8px]'>Cancel</button>
    </div>
  )
}

export default DonateModal