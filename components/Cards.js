"use client";
import Image from "next/image";
import React, { useState } from "react";
import image1 from "public/about_img1.jpg";
import Link from "next/link";
import timeImg from "public/time.svg";
import locationImg from "public/location.svg";

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

export const EventCard = ({ event }) => {

  return (
    <div className="w-[280px] h-auto bgs-white-10 shadow-primary rounded-[12px] box-border p-[30px]">
      <div>
        <div className="font-family-Raleway text-[24px] font-semibold">
          Hair Donation
        </div>
      </div>
      <div className="pt-[20px] border-b-[1px] pb-[20px]">
        {/* use 81 characters in description */}
        <div className="font-family-Roboto text-[16px] font-normal">
          Welcome to the Hope Gala 2023! Our charity event is a night of unity,
          compassion,&nbsp;
          <Link href="/events/[id]" as={`/events/${event.id}`} className="color-yellow-100">
            show more...
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between pt-[20px]">
        <div className="relative flex items-center gap-[8px]">
          <div className="w-[18px] h-[18px] set-bg time-img"></div>
          <div>Time</div>
        </div>
        <div>16:00 2023-10-07</div>
      </div>
      <div className="flex items-center justify-between pt-[12px]">
        <div className="relative flex items-center gap-[8px]">
          <div className="w-[18px] h-[18px] set-bg location-img"></div>
          <div>Location</div>
        </div>
        <a className="text-blue-600 " href="#"> View Location</a>
      </div>
    </div>
  );
};


// ###########################################################################

export const DonationCards = () => {
  return (
    <div className="bg-red-100 h-auto w-full box-border px-4 py-4 rounded mt-4">
      <label className="font-family-Roboto-Serif text-[18px] ">Book Donation</label><br />
      <p className="mt-2 font-family-Roboto-Slab ">Books are not just a collection of pages; they are vessels of knowledge, imagination, and hope. Our charity organization <a className="color-yellow-300">see more...</a></p>
    </div>
  )
}