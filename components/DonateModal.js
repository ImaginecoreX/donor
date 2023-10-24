import React, { useState } from 'react'
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';

const donateAmounts = [
  {
    "id": "1",
    "amount":"Rs 40K",
  },
  {
    "id": "2",
    "amount":"Rs 30K",
  },
  {
    "id": "3",
    "amount":"Rs 15K",
  },
  {
    "id": "4",
    "amount":"Rs 8,000",
  },
  {
    "id": "5",
    "amount":"Rs 4,000",
  },
  {
    "id": "6",
    "amount":"Rs 3,000",
  },

];

const currency = [
  {
    "code":"LKR",
    "name":"Sri Lankan Rupee",
  },
  {
    "code":"USD",
    "name":"US Dollar",
  },
  {
    "code":"EUR",
    "name":"Euro",
  },
];

const DonateModal = ({click}) => {

  const [isDedicated, setIsDedicated] = useState(false);
  const toggleDedicated = () => {setIsDedicated(!isDedicated);}

  return (
    <div className='w-[400px] h-auto bg-white  z-50 rounded-[12px] box-border p-[30px] flex flex-col items-center'>
      
      <div className='flex items-center gap-[8px] pb-[30px]'>
      <div><div className='font-family-Roboto text-[26px] font-bold'>Secure Donation</div></div>
      <HttpsOutlinedIcon sx={{width:'18px', height:'18px'}}/>
      </div>

      <div className='w-full h-[50px] flex border-color border-[1px] rounded-[12px] mb-[24px]'>
        <div className='flex font-family-Roboto items-center justify-center w-1/2 h-full border-[3px] border-red-600 rounded-[12px]'><FavoriteIcon sx={{fill:'#fc3003',width:'16px',height:'16px'}}/> Monthly</div>
        <div className='flex items-center justify-center w-1/2 h-full font-family-Roboto'>Give Once</div>
      </div>

      <div className='flex flex-wrap gap-[10px] w-full'>
      {donateAmounts.map((donate)=>(
        <div key={donate.id} className='py-[10px] donateChip flex justify-center items-center cursor-pointer  border-color border-[1px] rounded-[8px]'>
              <div className='font-family-Roboto text-[16px]'>{donate.amount}</div>
        </div>
      ))}
      </div>

      <div className='w-full h-auto pt-[16px] mb-[24px]'>
        <div className='w-full h-[60px] flex justify-between rounded-[6px] border-[1px] border-solid border-color box-border px-[18px] py-[10px]'>
          
          <div className='flex items-center h-full gap-[16px]'>
          <div className='font-family-Roboto text-[18px] text-gray-400'>Rs</div>
          <input type='text' className='w-2/3 h-full text-[24px] font-family-Roboto font-normal text-blue-600 focus:outline-none'/>
          </div>

          <div className='flex-1'>
            <select className='px-[12px] py-[8px] focus:outline-none hover:bg-gray-100 rounded-[8px] after:right-[10px] after:absolute after:pointer-events-none'>
              {currency.map((currency)=>(
                <option key={currency.code}>{currency.code}</option>
              ))}
            </select>
          </div>
          
        </div>

       
      </div>

      {/* dedicate */}
     <div className='flex flex-col w-full pb-[24px] gap-[10px]'>
     <div className='flex items-center w-full gap-[8px]'>
        <input type='checkbox' className='w-[16px] h-[16px] rounded-[6px]' onChange={toggleDedicated}/>
        <div>Dedicate this donation</div>
      </div>
      {isDedicated?
      <div>
        <input type='text' className='w-full font-family-Roboto h-[40px] px-[16px] border-[1px] border-color rounded-[8px]' placeholder='Name of someone special to me'/>
      </div>  
      :''}
     </div>
     

      <button onClick={click} className='font-family-Roboto w-full text-white bg-black py-[12px] rounded-[8px]'>Cancel</button>
    </div>
  )
}

export default DonateModal