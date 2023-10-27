import React from "react";
import AdminSideBar from "../../components/AdminSideBar";
import UserCount from "../../components/UserCount";
import NewRequest from "../../components/NewRequest";
import ChartG from "../../components/ChartG";
import LatestDonations from "../../components/LatestDonations";

const Dashboard = () => {
  return (
    <div className="w-full h-auto">
      <div className="flex">
        <div className="basis-1/4 ss:hidden sm:hidden md:hidden ns:hidden">
          <AdminSideBar />
        </div>
        <div className="flex-col h-screen overflow-scroll basis-3/4">
          <div className="flex flex-col ">
            <div>
              <UserCount />
            </div>


            <div className=" flex  ss:flex-col sm:flex-col  md:flex-row  lg:flex-row">
              <ChartG />


              <LatestDonations />
            </div>
          </div>
          <div className="flex gap-6 mt-5 ss:flex-col">
            <div className="w-[500px] ss:w-[280px]">
              <NewRequest />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Dashboard;
