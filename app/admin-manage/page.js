"use client";
import { useEffect, useState } from "react";
import AdminSideBar from "../../components/AdminSideBar";
import AllAdminTable from "../../components/AllAdminTable";
import AdminAddModel from "../../components/AdminAddModel";

import AdminData from "../../class/AdminData"

export default function AdminUser() {
  const [editView, setEditView] = useState(
    "flex flex-wrap mt-5 gap-5 invisible"
  );

  const [showModel, setShowModel] = useState(false);

  const [btnView, setBtnView] = useState("flex justify-between mt-5 invisible");

  const [adminData,setAdminData] = useState({});

  console.log(adminData)

  useEffect(() => {
    {
      editView == "flex flex-wrap mt-5 gap-5 invisible"
        ? setBtnView("flex justify-between mt-5 invisible")
        : setBtnView("flex justify-between mt-5 visible");
    }
  }, [editView]);




  return (
    <section>
      {showModel && showModel? (
        <div className=" fixed  z-[100] flex-row items-center justify-center w-full h-[100vh]">
          <div className="w-full h-[100vh] bg-[#00000070] backdrop-blur-sm fixed"></div>
          <div className="z-[200] w-full flex justify-center   ss:flex-col ns:flex-col ss:items-center ns:items-center">
            <AdminAddModel setShowModel={setShowModel} setAdminData={setAdminData} adminData={adminData} />
          </div>
        </div>
      ) : (null)}
        
        <div className=" flex w-ful  h-auto">
          <div className="w-1/4  ss:hidden sm:hidden md:hidden ns:hidden">
            <AdminSideBar />
          </div>
          <div className="w-3/4 flex-col h-auto overflow-scroll   mt-10 px-9 md:w-full sm:w-full ss:w-full ns:w-full mb-5">
            <div className=" flex gap-5 items-center">
              <label className="font-family-Roboto text-blue-950 text-2xl font-bold leading-6 ">
                Admin Management
              </label>

              <div className="w-[100px] bg-blue-500 border rounded-[20px] box-border py-2 px-4 flex justify-center items-center ">
                <button className="text-white" onClick={()=>{setShowModel(true)}}>Add</button>
              </div>
            </div>

            <div className=" bg-gray-100 box-border p-5 rounded-[20px] mt-5">
              <AllAdminTable editView={editView} setEditView={setEditView} />
            </div>

            <div className={editView}>
              <div className=" flex flex-col  gap-2">
                <label className="text-sm font-medium leading-6">Email</label>
                <input className=" h-10 ss:w-full rounded input-m box-border px-2 ring-1 ring-inset ring-gray-300 w-[300px]" />
              </div>

              <div className=" flex flex-col  gap-2">
                <label className="text-sm font-medium leading-6">
                  First Name
                </label>
                <input className=" h-10 ss:w-full rounded input-m box-border px-2 ring-1 ring-inset ring-gray-300 w-[300px]" />
              </div>

              <div className=" flex flex-col  gap-2">
                <label className="text-sm font-medium leading-6">
                  Last Name
                </label>
                <input className=" h-10 ss:w-full rounded input-m box-border px-2 ring-1 ring-inset ring-gray-300 w-[300px]" />
              </div>

              <div className=" flex flex-col  gap-2">
                <label className="text-sm font-medium leading-6">Mobile</label>
                <input className=" h-10 ss:w-full rounded input-m box-border px-2 ring-1 ring-inset ring-gray-300 w-[300px]" />
              </div>

              <div className=" flex flex-col  gap-2">
                <label className="text-sm font-medium leading-6">
                  Password
                </label>
                <input className=" h-10 ss:w-full rounded input-m box-border px-2 ring-1 ring-inset ring-gray-300 w-[300px]" />
              </div>
            </div>

            <div className={btnView}>
              <div className="w-[100px] bg-green-800 border rounded-[20px] box-border py-2 px-4 flex justify-center items-center ">
                <button className="text-white">Save</button>
              </div>
            </div>
          </div>
          </div>
        
    
   </section>
  );
}
