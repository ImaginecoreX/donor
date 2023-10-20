'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation'
import React from 'react'
import admin from "../public/admin2.svg"
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import EventIcon from '@mui/icons-material/Event';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const AdminSideBar = () => {

  const Router = useRouter('/');

  const NavigateToAdminDashboard = () => { Router.push('/admin', { scroll: false }) }
  const NavigateToUserMan = () => { Router.push('/admin-users', { scroll: false }) }
 const NavigateToEvent = ()=>{Router.push('admin-event',{scroll:false})}
 const NavigateToRequest = ()=>{Router.push('admin-request',{scroll:false})}
 const NavigateToDono = ()=>{Router.push('admin-donation',{scroll:false})}
 const NavigateToCon = ()=>{Router.push('admin-contact',{scroll:false})}
 const NavigateToAdmin = ()=>{Router.push('admin-manage',{scroll:false})}


  return (
    <div className='w-[250px] h-[100vh] ss:hidden bg-black flex-shrink-0 box-border  py-[40px] flex flex-col justify-between fixed '>

      <div className='flex flex-col '>
        <div className='w-full box-border pl-[30px] pr-[24px] py-[12px]'>
          <div className='flex items-center justify-center'>
            <div className='flex justify-center items-center bg-white rounded-full h-[70px] w-[70px]'>
              <Image src={admin} className='' /> 
            </div>
          </div>
          <div className='flex items-center justify-center mt-3'>
            <span className='text-lg font-semibold text-yellow-300 font-family-Raleway'>David Andrew</span>
          </div>
        </div>
        <div className='w-full mt-2 hover:bg-blue-600 cursor-pointer box-border pl-[30px] pr-[24px] py-[12px] ' onClick={NavigateToAdminDashboard}>
          <div className='font-family-Roboto text-[15px] font-medium text-white'><DashboardIcon/> Dashboard</div>
        </div>
        <div className='w-full hover:bg-blue-600 cursor-pointer box-border pl-[30px] pr-[24px] py-[12px]' onClick={NavigateToUserMan}><div className='font-family-Roboto text-[15px] font-medium text-white '><ManageAccountsIcon/> Users</div></div>
        <div className='w-full hover:bg-blue-600 cursor-pointer box-border pl-[30px] pr-[24px] py-[12px]' onClick={NavigateToEvent}><div className='font-family-Roboto text-[15px] font-medium text-white'><EventIcon/> Event</div></div>
        <div className='w-full hover:bg-blue-600 cursor-pointer box-border pl-[30px] pr-[24px] py-[12px]' onClick={NavigateToRequest}><div className='font-family-Roboto text-[15px] font-medium text-white'><ContactMailIcon/> Request</div></div>
        <div className='w-full hover:bg-blue-600 cursor-pointer box-border pl-[30px] pr-[24px] py-[12px]' onClick={NavigateToDono}><div className='font-family-Roboto text-[15px] font-medium text-white'><VolunteerActivismIcon/> Donation</div></div>
        <div className='w-full hover:bg-blue-600 cursor-pointer box-border pl-[30px] pr-[24px] py-[12px]' onClick={NavigateToCon}><div className='font-family-Roboto text-[15px] font-medium text-white'><ContactPhoneIcon/> Contact</div></div>
        <div className='w-full hover:bg-blue-600 cursor-pointer box-border pl-[30px] pr-[24px] py-[12px]' onClick={NavigateToAdmin}><div className='font-family-Roboto text-[15px] font-medium text-white'><AdminPanelSettingsIcon/> Admin</div></div>


      </div>

      <div className='box-border pl-[30px] pr-[24px] cursor-pointer'><div className='font-family-Roboto text-[15px] font-medium text-white'>Log out</div></div>

    </div>
  )
}

export default AdminSideBar