'use client'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

const login = () => {

    const [userData, setUserData] = useState([]);
    const [changeName, setChangeName] = useState('');
    const [putEmail, setPutEmail] = useState('');
    const [updatedUser, setUpdatedUser] = useState([]);

    const loadUsers = async () => {
        await axios.get("http://localhost:8000/api/all-user")
            .then((res) => {
                setUserData(res.data.allUser);
            }).catch((error) => {
                console.log(error);
            })
    }

    const updateUser = async (email) => {
        await axios.put(`http://localhost:8000/api/update-user/${email}`, {
            fname: changeName,
        })
      .then((res) => {
        setUpdatedUser(res.data.new);
      })
      .catch((error) => {
        console.log(error);
      })
    }

    useEffect(() => {
        loadUsers();
    }, [updatedUser])

    return (
        <div>
            {userData.map((user, index) => (
                <div key={user.email} className="w-full h-auto bgs-white-10 shadow-primary rounded-[12px] box-border p-[30px]">
                    <div>
                        <div className="font-family-Raleway text-[24px] font-semibold">
                            <label>first name:</label>
                            <label>{user.fname}</label><br />
                            <label>last name:</label>
                            <label>{user.lname}</label>
                        </div>
                    </div>
                    <div className="pt-[20px] border-b-[1px] pb-[20px]">
                        {/* use 81 characters in description */}
                        <div className="font-family-Roboto text-[16px] font-normal">
                            <label>email:</label>
                            <label>{user.email}</label><br />
                            <label>mobile:</label>
                            <label>{user.mobile}</label>
                            
                            <div>
                                <input type='text' className='border mt-3' onChange={(event) => {event.preventDefault,setChangeName(event.target.value)}}/>
                                <button className='ms-5' onClick={()=>{
                                    updateUser(user.email);
                                    }}>Send</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between pt-[20px]">
                        <div className="relative flex items-center gap-[8px]">
                            <div className="w-[18px] h-[18px] set-bg time-img"></div>
                            <div>Time</div>
                        </div>
                        <div>{user.created_at}</div>
                    </div>
                </div>
            ))}


        </div>
    )
}

export default login
