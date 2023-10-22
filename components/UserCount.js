import Image from "next/image";
import React from "react";
import dornorIcon from "../public/donor.png";
import donationsIcon from "../public/donations.png";

const UserCount = () => {
  return (
    <div className="w-full h-auto flex ss:flex-col ns:flex-col ss:gap-3  gap-x-14 mt-6   flex-wrap gap-4">
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-4 border-2 rounded-[12px] box-border px-6 py-6 font-semibold shadow-lg ">
          <div className="flex justify-between gap-11  items-center">
            <div className="">
              <Image src={dornorIcon} className="h-[50px] w-[50px] " />
            </div>
            <div className="text-end">
              <label className="text-blue-600 text-5xl font-bold font-family-Roboto">
                2000
              </label>
              <br />
              <label className="text-black text-2xl font-semibold font-family-Raleway">
                Total Donors
              </label>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4 border-2 rounded-[12px] box-border px-6 py-6 font-semibold shadow-lg">
          <div className="flex justify-between gap-11 items-center ">
            <div className="">
              <Image src={donationsIcon} className="h-[50px] w-[50px] " />
            </div>
            <div className="text-end">
              <label className="text-blue-600 text-5xl font-bold font-family-Roboto">
                167800$
              </label>
              <br />
              <label className="text-black text-2xl font-semibold font-family-Raleway">
                Total Donations
              </label>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4 border-2 rounded-[12px] box-border px-6 py-6 font-semibold shadow-lg">
          <div className=" flex flex-col items-center ">
            <label className="text-blue-600 text-5xl font-bold font-family-Roboto">
              56
            </label>
        
            <label className="text-black text-2xl font-semibold font-family-Raleway">
              All Request
            </label>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-4 border-2 rounded-[12px] box-border px-6 py-6 font-semibold shadow-lg">
          <div className=" flex flex-col items-center ">
            <label className="text-blue-600 text-5xl font-bold font-family-Roboto">
              565
            </label>
        
            <label className="text-black text-2xl font-semibold font-family-Raleway">
              All Users
            </label>
          </div>
        </div>
      </div>

    </div>
  );
};


export default UserCount;