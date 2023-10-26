import React from "react";
import AdminSideBar from "../../../components/AdminSideBar";
import FormCard from "../../../components/FormCard";

const ContactManage = () => {
  return (
    <div className="flex flex-col w-full">
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
        <div className="h-[80px] border-[1px] rounded-[12px] bg-white shadow-md">
          
        </div>
        
        <div className=" h-[900px] flex">
          
          {/* form list */}
          <div className="flex-1 box-border hide-scrollbar border-[1px] rounded-[12px] mt-[40px] overflow-y-scroll">
            <div className="pt-[24px] pl-[24px] font-family-Roboto font-bold text-[24px] border-b-[1px] border-color">
              <div>Form List</div>
              <div className="text-[0.75em] font-normal pb-[24px]">Read newest forms and reply</div>
            </div>
           
           {/* list */}
           <div>
           <FormCard/>
           </div>
          </div>

          {/* single view */}
          <div className="flex-1 flex-grow-[2]">
            
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default ContactManage;
