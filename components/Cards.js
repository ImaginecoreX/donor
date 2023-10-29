"use client";
import Image from "next/image";
import React, { useState } from "react";
import image1 from "public/about_img1.jpg";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function CatCard() {
  return (
    <div className="cat-card box-border p-[20px] max-w-[320px] h-fit w-fit">
      <div className="">
        <div className="font-family-Raleway text-[20px] font-bold leading-normal text-white">
          Title
        </div>
        <div className="font-family-Raleway text-[16px] font-semibold leading-normal text-white pt-[4px]">
          Subtitle
        </div>
      </div>
      <div className="pt-[12px]">
        <div className="font-family-Roboto text-[14px] font-normal text-white">
          This subtitle encapsulates the essence of the "About Us" section,
          highlighting your organization's mission,
        </div>
      </div>
      <div className="pt-[12px]">
        <a href="#">
          <div className="text-blue-500 font-family-Roboto ">Learn More</div>
        </a>
      </div>
    </div>
  );
};

export const RequestCard = () => {
  return (
    <div className="w-[320px] h-auto shadow-primary bg-white flex items-center box-border pt-[40px] pb-[40px] px-[30px] flex-col">
      <div className="p-[16px] rounded-full bgs-yellow-100 w-fit h-fit">
        <div
          layout="fill"
          className="w-[40px] h-[40px] set-bg bg-request-img"
        ></div>
      </div>
      <div className="pt-[20px]">
        <div>
          <div className="font-family-Raleway text-[24px] font-medium leading-normal text-center">
            Your Request Title
          </div>
        </div>
        <div className="pt-[12px]">
          <div className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta,
            nulla commodi recusandae veniam perferendis a at explicabo magnam
            quis illum libero quisquam. Commodi obcaecati sapiente tenetur ex
            fugiat consequatur mollitia.
          </div>
        </div>
      </div>

      <div className="flex justify-between w-full pt-[24px]">
        <div>
          <div className="font-family-Roboto text-[24px] leading-[32px] font-medium">
            50%
          </div>
        </div>
        <div>
          <div className="font-family-Roboto text-[24px] leading-[32px] font-medium">
            $700
          </div>
        </div>
      </div>

      <div className="w-full h-[16px] rounded-full bg-slate-200 mt-[20px]">
        <div className="h-full w-[50%] bg-blue-500 rounded-full"></div>
      </div>

      <div className="flex justify-between w-full pt-[24px]">
        <div>
          <div className="font-family-Raleway text-[18px] font-medium leading-[32px]">
            Deadline:
          </div>
        </div>
        <div>
          <div className="font-family-Roboto text-[18px] font-medium leading-[32px]">
            23 JAN 2023
          </div>
        </div>
      </div>

      <div className="w-full pt-[24px]">
        <button className="w-full py-[8px] rounded-[12px] text-white font-family-Roboto text-[18px] leading-[32px] font-semibold bgs-red-100">
          Donate Now
        </button>
      </div>
    </div>
  );
};

// ##########################################################################

export const MemberCard = () => {
  return (
    <div className="w-auto h-auto max-w-[318px] max-h-[491px] cat-Mcard py-[40px] px-[30px] flex flex-col items-center">
      <div className="set-bg-smar">
        <Image
          src={image1}
          className="w-[120px] h-[120px] rounded-full set-bg"
        />
      </div>
      <div>
        <div>
          <div className="text-center text-[20px] font-family-Roboto font-medium leading-normal pt-[8px]">
            Your Name
          </div>
        </div>
        <div>
          <div className="text-center text-[18px] font-family-Roboto font-normal leading-normal pt-[8px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta,
            nulla commodi recusandae veniam perferendis a at explicabo magnam
            quis illum libero quisquam. Commodi obcaecati sapiente tenetur ex
            fugiat consequatur mollitia.
          </div>
        </div>
      </div>
    </div>
  );
};

// ###########################################################################

export const EventCard = ({ events }) => {

  return (
    <div className="w-[280px] h-auto bgs-white-10 shadow-primary rounded-[12px] box-border p-[30px]">
      <div>
        <div className="font-family-Raleway text-[24px] font-semibold">
          {events.name}
        </div>
      </div>
      <div className="pt-[20px] border-b-[1px] pb-[20px]">
        <div className="font-family-Roboto text-[16px] font-normal">
          {events.description.length > 150
            ? `${events.description.slice(0, 150)}...`
            : events.description}&nbsp;
          <Link href={`/events/${events.id}`} className="color-yellow-100" passHref>
            show more
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between pt-[20px]">
        <div className="relative flex items-center gap-[8px]">
          <div className="w-[18px] h-[18px] set-bg time-img"></div>
          <div>Time</div>
        </div>
        <div>{events.time}</div>
      </div>
      <div className="flex items-center justify-between pt-[12px]">
        <div className="relative flex items-center gap-[8px]">
          <div className="w-[18px] h-[18px] set-bg location-img"></div>
          <div>Location</div>
        </div>
        <Link href={`/events/${events.id}#location`} className="text-blue-600 " passHref>
          View Location
        </Link>
      </div>
    </div>
  );
};


// ###########################################################################

export const DonationCards = ({ events }) => {
  return (
    <div className="bg-red-100 h-auto w-full box-border px-4 py-4 rounded mt-4">
      <label className="font-family-Roboto-Serif text-[18px] ">{events.name}</label><br />
      <p className="mt-2 font-family-Roboto-Slab ">{events.description.length > 140
        ? `${events.description.slice(0, 140)}...`
        : events.description}&nbsp;
        <Link href={`/events/${events.id}`} className="color-yellow-100" passHref>
          show more
        </Link></p>
    </div>
  )
}

// ###################################################

export const LoadRequests = () => {

  return (
    <div className="ss:w-[100%] sm:w-[80%] md:w-[70%] lg:w-[40%] xl:w-[30%] w-[22%] p-3 shadow-primary rounded-xl flex flex-col hover:scale-[1.02] duration-300 hover:shadow-xl">

      <div>
        <img src="/hero-img.jpg" className="rounded-t-xl" />
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold text-center">Request Title</h2> <hr />
      </div>

      <div className='flex justify-between my-4 flex-wrap gap-3'>
        <div className='ss:w-full w-[30%] flex flex-col items-center bgs-blue-100 text-white text-sm rounded-md py-[4px]'>
          <label>Request type</label>
          <label>Cash</label>
        </div>
        <div className='ss:w-full w-[30%] flex flex-col items-center bgs-blue-100 text-white text-sm rounded-md py-[4px]'>
          <label>Request</label>
          <label>$1000</label>
        </div>
        <div className='ss:w-full w-[30%] flex flex-col items-center bgs-blue-100 text-white text-sm rounded-md py-[4px]'>
          <label>Timeline</label>
          <label>ASAP</label>
        </div>
      </div>

      <div className="mb-5">
        <p>Full Description of the Request Full Description of the Request Full Description of the Request Full Description of the Request Full Description of the Request Full Description of the Request Full Description of the Request Full Description of the Request Full Description of the Request </p>
      </div>

      <div className='flex justify-between'>
        <label>A. A. James Gorden</label>
        <label className='flex'><img src='location.svg' />New York</label>
      </div>

      <div className="flex justify-center py-[8px] bgs-red-100 hover:bg-red-800 rounded-md mt-3">
        <button className="text-white font-bold">Donate Now</button>
      </div>

    </div>

  )
}

// ######################################################

export const MoreRequests = () => {
  return (
    <div className='flex p-3 rounded-lg border-solid border-[1px] border-slate-300 hover:shadow-md hover:border-yellow-400 flex-wrap'>

      <div className='ss:w-full w-[30%]'>
        <img src='/hero-img.jpg' className='object-contain border-solid border-[3px] border-white rounded-md' />
      </div>

      <div className='ss:w-full w-[70%] ss:px-1 px-5 ss:mt-2'>

        <div className='mb-3'>
          <h2 className='font-semibold text-xl'>Title of the request</h2>
          <hr />
        </div>

        <div className='flex justify-between mb-3 flex-wrap gap-3'>
          <div className='ss:w-full w-[30%] flex flex-col items-center bgs-blue-100 text-white text-sm rounded-md py-[4px]'>
            <label>Request type</label>
            <label>Cash</label>
          </div>
          <div className='ss:w-full w-[30%] flex flex-col items-center bgs-blue-100 text-white text-sm rounded-md py-[4px]'>
            <label>Request</label>
            <label>$1000</label>
          </div>
          <div className='ss:w-full w-[30%] flex flex-col items-center bgs-blue-100 text-white text-sm rounded-md py-[4px]'>
            <label>Timeline</label>
            <label>ASAP</label>
          </div>
        </div>

        <div className='flex justify-between'>
          <label>A. A. James Gorden</label>
          <label className='flex'><img src='location.svg' />New York</label>
        </div>

      </div>

    </div>
  )
}

// ###################################################

export const QuickDonate = () => {
  return (
    <div className='flex justify-center'>

      <div className='ss:w-[90%] w-2/3 p-6 rounded-lg shadow-primary flex flex-col items-center bg-white'>

        <div className='mb-8'>
          <h2 className='text-2xl font-semibold'>Quick Donations</h2>
        </div>

        <div className='ss:px-1 px-5 w-full'>

          <div className='flex flex-col mb-5 gap-1'>
            <label className='text-lg font-semibold'>Your Name:</label>
            <input type='text' className='border-[1px] border-solid rounded-md p-[5px] ps-3' placeholder='Ex: Jimmy Donadson' />
          </div>
          <label className='text-lg font-semibold'>Amount:</label>
          <div className='flex justify-around mb-8 gap-3 flex-wrap'>
            <button className='flex justify-center items-center py-3 px-6 rounded-md border-solid border-[2px] border-yellow-400 hover:bg-yellow-400 hover:text-white hover:duration-200 font-semibold'>
              $25
            </button>
            <button className='flex justify-center items-center py-3 px-6 rounded-md border-solid border-[2px] border-yellow-400 hover:bg-yellow-400 hover:text-white hover:duration-200 font-semibold'>
              $50
            </button>
            <button className='flex justify-center items-center py-3 px-6 rounded-md border-solid border-[2px] border-yellow-400 hover:bg-yellow-400 hover:text-white hover:duration-200 font-semibold'>
              $100
            </button>
            <button className='flex justify-center items-center py-3 px-6 rounded-md border-solid border-[2px] border-yellow-400 hover:bg-yellow-400 hover:text-white hover:duration-200 font-semibold'>
              Other
            </button>
          </div>
          <div className='flex mb-5'>
            <button className='bgs-red-100 w-full p-[8px] rounded-md font-semibold text-white hover:bg-red-800 hover:duration-200'>Donate</button>
          </div>

        </div>

      </div>

    </div>
  )
}