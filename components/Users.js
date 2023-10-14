'use client'

import React, { useState } from 'react';

const Users = ({name, email, status, gender}) => {
    const [pane, setPane] = useState(false);

    const togglePane = () => {
        setPane(!pane);
    }

    return (
        <div className='p-5'>
            <div className='w-full shadow-md flex justify-between items-center py-3 px-5 rounded-xl background text hover:shadow-lg'>
                <div>
                    <img
                        src='/user.png'
                        alt='Avatar'
                        width='50px'
                        height='50px'
                        className='border rounded-full'
                    />
                </div>
                <div>
                    {name}
                </div>
                <div>
                    {email}
                </div>
                <div>
                    <div className='border-solid border-green-500 border-[2px] p-2 rounded-full text-green-500'>
                        {status}
                    </div>
                </div>
                <div>
                    {gender}
                </div>
                <div className='relative inline-block text-left'>
                    <button onClick={togglePane} type='button'>
                        <div className='bg-black w-[5px] h-[5px] rounded-full opacity-70 m-[1px]'></div>
                        <div className='bg-black w-[5px] h-[5px] rounded-full opacity-70 m-[1px]'></div>
                        <div className='bg-black w-[5px] h-[5px] rounded-full opacity-70 m-[1px]'></div>
                    </button>

                    {pane && (
                        <div className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none' 
                        role='menu' aria-orientation='vertical' aria-labelledby='menu-button' tabIndex='-1'>
                            <div className='py-1' role='none'>
                                <a href='#' className='text-gray-700 block px-4 py-2 text-sm' role='menuitem' tabIndex='-1' id='menu-item-0'>Edit</a>
                                <a href='#' className='text-gray-700 block px-4 py-2 text-sm' role='menuitem' tabIndex='-1' id='menu-item-1'>Support</a>
                                <a href='#' className='text-gray-700 block px-4 py-2 text-sm' role='menuitem' tabIndex='-1' id='menu-item-2'>Delete</a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Users;
