'use client'
import React, { useState } from "react";
import AdminSideBar from "../../../components/AdminSideBar";
import FormCard from "../../../components/FormCard";
import ReplyIcon from '@mui/icons-material/Reply';
import DonateNoticeCard from "../../../components/DonateNoticeCard";
import DonateModal from "../../../components/DonateModal";

const formObj = [
  {
    id: "DNS-0001",
    name: "Nethmina Sandaruwan",
    email: "nethminas42@gmail.com",
    msg: "The Gmail API is a RESTful API that can be used to access Gmail mailboxes and send mail. For most web applications the Gmail API is the best choice for authorized access to a user's Gmail data and is suitable for various applications, such as:",
    date: "2023-10-26",
    read: true,
  },
  {
    id: "DNS-0001",
    name: "Nethmina Sandaruwan",
    email: "nethminas42@gmail.com",
    msg: "The Gmail API is a RESTful API that can be used to access Gmail mailboxes and send mail. For most web applications the Gmail API is the best choice for authorized access to a user's Gmail data and is suitable for various applications, such as:",
    date: "2023-10-26",
    read: false,
  },
  {
    id: "DNS-0001",
    name: "Nethmina Sandaruwan",
    email: "nethminas42@gmail.com",
    msg: "The Gmail API is a RESTful API that can be used to access Gmail mailboxes and send mail. For most web applications the Gmail API is the best choice for authorized access to a user's Gmail data and is suitable for various applications, such as:",
    date: "2023-10-26",
    read: false,
  },
  {
    id: "DNS-0001",
    name: "Nethmina Sandaruwan",
    email: "nethminas42@gmail.com",
    msg: "The Gmail API is a RESTful API that can be used to access Gmail mailboxes and send mail. For most web applications the Gmail API is the best choice for authorized access to a user's Gmail data and is suitable for various applications, such as:",
    date: "2023-10-26",
    read: true,
  },
  {
    id: "DNS-0001",
    name: "Nethmina Sandaruwan",
    email: "nethminas42@gmail.com",
    msg: "The Gmail API is a RESTful API that can be used to access Gmail mailboxes and send mail. For most web applications the Gmail API is the best choice for authorized access to a user's Gmail data and is suitable for various applications, such as:",
    date: "2023-10-26",
    read: false,
  },
];

const ContactManage = () => {

  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div className="flex flex-col w-full pb-[40px]">

{show && show == true ? (
        <div className="fixed z-[100] flex items-center justify-center   w-full h-[100vh]">
          <div
            className="w-full h-[100vh] bg-[#00000070] backdrop-blur-sm fixed"
            onClick={toggleShow}
          ></div>

          <div className="z-[200] w-full flex justify-center gap-[30px] ss:flex-col ns:flex-col ss:items-center ns:items-center">
            <DonateNoticeCard/>
            <DonateModal click={toggleShow} />
          </div>
        </div>
      ) : (
        ""
      )}
      
      <div className="flex">
        <div className="w-[250px] ss:hidden sm:hidden md:hidden ns:hidden">
          <AdminSideBar />
        </div>
        <div className="box-border py-[40px] px-[40px] flex-1">
          <div className="w-full border-b-[1px] pb-[30px]">
            <div className="font-family-Roboto text-[36px] font-bold">
              Contact Management
            </div>
            <div className="font-family-Roboto text-[21px] font-normal">
              View all Forum Sent to us
            </div>
          </div>
        </div>
      </div>
      {/* forums */}
      <div className="h-auto lg:ml-[250px] xl:ml-[250px] 2xl:ml-[250px] 3xl:ml-[250px] lg:adminSidebar-scape xl:adminSidebar-scape 2xl:adminSidebar-scape 3xl:adminSidebar-scape box-border px-[30px]">
        <div className="h-[80px] border-[1px] rounded-[12px] bg-white "></div>

        <div className=" h-[900px] flex gap-[30px]">
          {/* form list */}
          <div className="flex-1 box-border hide-scrollbar border-[1px] rounded-[12px] mt-[40px] overflow-y-scroll">
            <div className="pt-[24px] pl-[24px] font-family-Roboto font-bold text-[24px] border-b-[1px] border-color">
              <div>Form List</div>
              <div className="text-[0.75em] font-normal pb-[24px]">
                Read newest forms and reply
              </div>
            </div>

            {/* list */}
            <div>
              {formObj.map((data) => (
                <FormCard
                  read={data.read}
                  ID={data.id}
                  NAME={data.name}
                  EMAIL={data.email}
                  MSG={data.msg}
                  DATE={data.date}
                />
              ))}
            </div>
          </div>

          {/* single view */}
          <div className="flex-1 flex-grow-[2] border-[1px] rounded-[12px] mt-[40px]">
            <div className="box-border w-full h-full p-[40px] relative">
              
              <div className="flex items-center justify-between border-b-[1px] pb-[30px] border-color">
                <div>
                  <div>
                    <div className="font-family-Roboto text-[24px] font-bold">
                      Nethmina Sandaruwan
                    </div>
                  </div>
                  <div className="pt-[4px]">
                    <div className="font-family-Roboto text-[18px] font-normal text-blue-500">
                      nethminas42@gmail.com
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="font-family-Roboto text-[18px] font-medium text-right text-gray-700">
                      2023-10-26
                    </div>
                  </div>
                  <div className="pt-[4px]">
                    <div className="font-family-Roboto text-[16px] font-normal text-gray-500 text-right">
                      #DNS-0001
                    </div>
                  </div>
                </div>
              </div>

                  {/* body */}
                  <div className="pt-[30px]">
                    <div className="font-normal font-family-Roboto text-[16px] text-gray-700 leading-[26px]">The Gmail API is a RESTful API that can be used to access Gmail mailboxes and send mail. For most web applications the Gmail API is the best choice for authorized access to a user's Gmail data and is suitable for various applications, such as:</div>
                  </div>

                  {/* reply */}
                  <div className="absolute bottom-[40px]">
                    <div className="cursor-pointer font-family-Roboto hover:text-blue-500" onClick={toggleShow}><ReplyIcon/> Reply</div>
                  </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactManage;
