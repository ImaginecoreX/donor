'use client'
import Image from "next/image";
import React, { useState } from "react";
import ContactImage from "public/constact.svg";
import axios from "axios";


const Contact = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [msg, setMsg] = useState();

  const formData = {
    name:name,
    email:email,
    msg:msg
  }

  const submitForm = async ()=>{
    
    await axios.post('http://localhost:8000/api/submit-form', formData).then((res)=>{
      console.log(res.data);

      
      let name = document.getElementById('name');
      let email = document.getElementById('email');
      let msg = document.getElementById('msg');

      name.value = '';
      email.value = '';
      msg.value = '';

    }).catch((err)=>{
      console.log(err);
    });

  }

  const sendEmail = async ()=>{
    
    await axios.post().then().catch();

  }
 
 

  return (
    <div>
      <section className="flex flex-col items-center min-h-screen w-ful pt-[120px] pb-[100px] ss:pb-[40px] justify-center">
        <div className="flex flex-col items-center w-full frame-container">
          <div className="flex w-full sm:flex-col ss:flex-col ns:flex-col">
            <div className=" flex-1 h-auto set-bg-smart ss:w-full ss:mb-[30px] ss:h-[300px] ss:flex-none ns:w-full ns:mb-[30px] ns:h-[200px] ns:flex-none">
              <Image src={ContactImage} fill className="w-full h-auto "/>
            </div>

            <div className="flex-1 h-auto  box-border p-[30px] ss:p-0">
              <div>
                <div className="text-[36px] font-family-Raleway font-medium pb-[24px]">
                  Contact us
                </div>
              </div>

              <div className="flex flex-col gap-[24px]">
                <div className="flex flex-col gap-[8px]">
                  <div>
                    <label className="font-family-Roboto text-[16px] font-normal">
                      Name
                    </label>
                  </div>
                  <input
                    type="text"
                    className="w-full h-[40px] border-[1px] px-[20px] font-family-Fira-Sans text-[15px] rounded-[12px]"
                    placeholder="eg: Adam"
                    onChange={(event)=>{event.preventDefault(), setName(event.target.value)}}
                    id="name"
                  />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <div>
                    <label className="font-family-Roboto text-[16px] font-normal">
                      Email
                    </label>
                  </div>
                  <input
                    type="email"
                    className="w-full h-[40px] border-[1px] px-[20px] font-family-Fira-Sans text-[15px] rounded-[12px]"
                    placeholder="example@domain.com"
                    onChange={(event)=>{event.preventDefault(), setEmail(event.target.value)}}
                    id="email"
                  />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <div>
                    <label className="font-family-Roboto text-[16px] font-normal">
                      Massage
                    </label>
                  </div>
                  <textarea
                    type="text"
                    className="w-full h-[120px] min-h-[80px] max-h-[280px] border-[1px] px-[20px] py-[20px] font-family-Fira-Sans text-[15px] rounded-[12px]"
                    placeholder="Type Your Message"
                    onChange={(event)=>{event.preventDefault(),setMsg(event.target.value)}}
                    id="msg"
                  />
                </div>

                <div className="pt-[20px] pb-[30px]">
                  <div>
                    <button onClick={submitForm} className="w-full h-[40px] bg-black rounded-[12px] text-white">
                      Sent
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
