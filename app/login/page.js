"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";
import EmailIcon from "@mui/icons-material/Email";
import HttpsIcon from "@mui/icons-material/Https";
import GenderSelect from "../../components/GenderSelect";
import bgimg from "../../public/cardimg4.jpg";
import Image from "next/image";

const Login = () => {
  const router = useRouter();
  const navigateToRegister = () => {
    router.push("/register", { scroll: false });
  };

  const [changeView, setChangeView] = useState(true);

  return (
    <section className="flex flex-row items-center justify-center w-full min-h-screen">
      <div className=" flex justify-center items-center ss:invisible sm:invisible md:w-2/5 lg:w-2/5 xl:w-2/5 2xl:w-2/5 3xl:w-2/5 h-[100vh]  bg-slate-900">
        <Image src={bgimg} className="login-reg-image" />
      </div>

      <div className=" flex flex-col justify-center items-center ss:w-full sm:w-full md:w-3/5 lg:w-3/5 xl:w-3/5 2xl:w-3/5 3xl:w-3/5  h-[100vh] ">
        <div className="flex flex-col gap-[8px] box-border p-5 bg-white md:w-[500px]  lg:[500px] xl:[500px] 2xl:[500px] 3xl:[500px]">
          {changeView ? (
            <>
              <div className="i-view relative ">
                <EmailIcon className="absolute" />
                <input
                  className="i-m md:w-[440px] "
                  placeholder="First Name"
                />
              </div>
              <div className="i-view relative">
                <EmailIcon className="absolute" />
                <input
                  className="i-m md:w-[440px]"
                  placeholder="Last Name"
                />
              </div>
              <div className="i-view relative">
                <EmailIcon className="absolute" />
                <input className="i-m md:w-[440px]" placeholder="Email" />
              </div>
              <div className="i-view relative">
                <HttpsIcon className="absolute" />
                <input
                  className="i-m md:w-[440px]"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <GenderSelect />
            </>
          ) : (
            <>
           
              <div className="i-view relative">
                <EmailIcon className="absolute" />
                <input className="i-m md:w-[440px]" placeholder="Email" />
              </div>

              <div className="i-view relative">
                <HttpsIcon className="absolute" />
                <input
                  className="i-m md:w-[440px]"
                  type="password"
                  placeholder="Password"
                />
              </div>
            </>
          )}

          <button className="reg-btn" onClick={()=>{setChangeView(true)}}>Create Account</button>
          <button
            className="login-btn"
            onClick={() => {
              setChangeView(false);
            }}
          >
            LogIn
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
