"use client"
import React, { useEffect, useState } from "react";

const FormCard = ({read, ID, NAME, EMAIL, MSG, DATE }) => {

  const [isRead, setIsRead] = useState(read);
  const [id, setId] = useState(ID);
  const [name, setName] = useState(NAME);
  const [email, setEmail] = useState(EMAIL);
  const [msg, setMsg] = useState(MSG);
  const [date, setDate] = useState(DATE);
  

  useEffect(()=>{
    setIsRead(read);
    setId(ID);
    setName(NAME);
    setEmail(EMAIL);
    setMsg(MSG);
    setDate(DATE);
  },[read, ID, NAME, EMAIL, MSG, DATE]);
  
  return (
    <div className={`${"w-full h-auto py-[16px] cursor-pointer"} ${isRead?'border-b-[1px] border-color bg-[#fff]':'border-b-[1px] border-color border-l-[3px] border-l-blue-500 bg-[#fafafa]'}`}>
      <div className="flex items-center justify-between">
        <div className="font-family-Roboto text-[15px] font-bold pl-[16px]">{name}</div>
        <div className="font-family-Roboto text-[14px] font-medium pr-[16px] text-gray-600">{date}</div>
      </div>

    <div className="pl-[16px] flex justify-between items-center pr-[16px] pt-[6px]">
      <div className="font-family-Roboto text-[14px] font-normal text-blue-500">{email}</div>
      <div className="font-family-Roboto text-[14px] text-gray-500">#{id}</div>
    </div>

    <div className="pl-[16px] pr-[16px] overflow-hidden pt-[12px]">
      
    <div className="font-family-Roboto text-[15px] text-gray-700 overflow-hidden">{msg}</div>
    </div>

    </div>
  );
};

export default FormCard;
