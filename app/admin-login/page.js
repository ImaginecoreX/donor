'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import axios from 'axios';



const AdminLogin = () => {

    const router = useRouter();
    const navigateToRegister = () => {
      router.push("/register", { scroll: false });
    };

  return (
    <section className='flex flex-col items-center justify-center w-full min-h-screen'>

            <div className='w-[400px] h-auto bg-white rounded-[12px] shadow-lg border-[1px] box-border p-[30px] flex flex-col gap-[24px]'>


            <div className='flex flex-col gap-[8px] pb-[16px]'>
                    <div><div className='font-family-Raleway text-[24px] font-semibold text-center leading-normal'>Admin Login</div></div>
                </div>

                <div className='flex flex-col gap-[8px]'>
                    <div><label>Email</label></div>
                    <div><input className='w-full h-[40px] rounded-[8px] px-[20px] font-family-Fira-Sans text-[15px] border-[1px] border-slate-200' type='text' placeholder='example@domain.com' /></div>
                </div>

                <div className='flex flex-col gap-[8px]'>
                    <div><label>Password</label></div>
                    <div><input className='w-full h-[40px] rounded-[8px] px-[20px] font-family-Fira-Sans text-[15px] border-[1px] border-slate-200' type='password' placeholder='Type your password' /></div>
                </div>

                <div className='flex flex-col gap-[8px]'>
                   <button className='w-full h-[40px] bg-black text-white font-family-Roboto text-[16px] font-semibold rounded-[8px]' >Login</button>
                </div>

            </div>

     
    </section>
  )
}

export default AdminLogin