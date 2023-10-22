import React from 'react'
import AdminSideBar from '../../components/AdminSideBar'
import UserCount from '../../components/UserCount'
import NewRequest from '../../components/NewRequest'
import ChartG from '../../components/ChartG'
import LatestDonations from '../../components/LatestDonations'

const Dashboard = () => {
  return (
    
    <div className='flex justify-center w-full h-auto'>
      <div className='basis-1/4  ss:hidden sm:hidden md:hidden ns:hidden'>
      <AdminSideBar/>
      </div>
      <div className='basis-3/4 flex-col h-screen overflow-scroll'>
        <div className='flex flex-col  gap-4'>
          <div>
            <UserCount />
          </div>

          <div className=' flex  ss:flex-col sm:flex-col  md:flex-row  lg:flex-row'>
            <ChartG/>

            <LatestDonations/>
          </div>

        </div>
        <div className='flex ss:flex-col gap-6 mt-5'>
          
          <div className='w-[500px] ss:w-[280px]'>
            <NewRequest />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Dashboard

