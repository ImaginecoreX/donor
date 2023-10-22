import Image from "next/image";
import React from "react";
import dornorIcon from "../public/donor.png";
import donationsIcon from "../public/donations.png";

export const UserCount = () => {
  return (
    <div className="flex flex-wrap w-full h-auto gap-4 mt-6 ss:flex-col ns:flex-col ss:gap-3 gap-x-14">
      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-4 border-2 rounded-[12px] box-border px-6 py-6 font-semibold shadow-lg ">
          <div className="flex items-center justify-between gap-11">
            <div className="">
              <Image src={dornorIcon} className="h-[50px] w-[50px] " />
            </div>
            <div className="text-end">
              <label className="text-5xl font-bold text-blue-600 font-family-Roboto">
                2000
              </label>
              <br />
              <label className="text-2xl font-semibold text-black font-family-Raleway">
                Total Donors
              </label>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4 border-2 rounded-[12px] box-border px-6 py-6 font-semibold shadow-lg">
          <div className="flex items-center justify-between gap-11 ">
            <div className="">
              <Image src={donationsIcon} className="h-[50px] w-[50px] " />
            </div>
            <div className="text-end">
              <label className="text-5xl font-bold text-blue-600 font-family-Roboto">
                167800$
              </label>
              <br />
              <label className="text-2xl font-semibold text-black font-family-Raleway">
                Total Donations
              </label>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4 border-2 rounded-[12px] box-border px-6 py-6 font-semibold shadow-lg">
          <div className="flex flex-col items-center ">
            <label className="text-5xl font-bold text-blue-600 font-family-Roboto">
              56
            </label>
        
            <label className="text-2xl font-semibold text-black font-family-Raleway">
              All Request
            </label>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-4 border-2 rounded-[12px] box-border px-6 py-6 font-semibold shadow-lg">
          <div className="flex flex-col items-center ">
            <label className="text-5xl font-bold text-blue-600 font-family-Roboto">
              565
            </label>
        
            <label className="text-2xl font-semibold text-black font-family-Raleway">
              All Users
            </label>
          </div>
        </div>
      </div>

    </div>
  );
};


// const UserCount = () => {
//     return (
//         <div className='flex items-center justify-center w-full h-auto mt-10 mb-10'>
//             <div className='flex flex-col gap-4 border-2 rounded-[12px] box-border px-6 py-6 font-semibold shadow-lg'>
//                 <div className='flex justify-between gap-5'>
//                     <div className='rounded-full bg-blue-400 flex justify-center items-center w-[100px] h-[100px]'>
//                         <span className='text-4xl font-family-Roboto-Serif '>2K</span>
//                     </div>
//                     <div className='flex flex-col justify-center '>
//                         <label className='text-3xl font-family-Raleway color-yellow-500'>Registered</label>
//                         <label className='text-2xl font-family-Raleway color-blue-500'>Users</label>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
