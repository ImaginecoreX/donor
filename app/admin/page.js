import React from 'react'
import AdminSideBar from '../../components/AdminSideBar'
import UserCount from '../../components/UserCount'
import NewRequest from '../../components/NewRequest'
import ChartG from '../../components/ChartG'

const Dashboard = () => {
  return (
    <div className='w-full h-auto' >
    <div className='flex'>
      <div className='basis-1/4  ss:hidden sm:hidden md:hidden ns:hidden'>
      <AdminSideBar/>
      </div>
      <div className='basis-3/4 flex-col h-screen overflow-scroll'>
        <div className='flex flex-col '>
          <div>
            <UserCount />
          </div>

          <div className=' flex flex-row '>
            <ChartG/>

            <NewRequest />
          </div>

        </div>
        <div className='flex ss:flex-col gap-6 mt-5'>
          
          <div className='w-[500px]'>
            <NewRequest />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Dashboard