"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import EmailIcon from "@mui/icons-material/Email";
import HttpsIcon from "@mui/icons-material/Https";
import GenderSelect from "../../components/GenderSelect";
import bgimg from "../../public/cardimg4.jpg";
import Image from "next/image";

const Login = () => {
  const router = useRouter();

  const navigateToHome = () => {
    router.push("/", { scroll: false });
  };

  const [changeView, setChangeView] = useState(true);

  //resgiser state
  const [value, setValue] = useState("2");
  const [email, setEmail] = useState();
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [mobile, setMobile] = useState();
  const [password, setPassword] = useState();

  //login state
  const [loginEmail, setGetEmail] = useState(null);
  const [loginPassword, setGetPassword] = useState(null);

  const register = async (email, fname, lname, mobile, password, genderId) => {
    const obj = {
      email: email,
      fname: fname,
      lname: lname,
      mobile: mobile,
      password: password,
      status_id: "1",
      gender_id: genderId,
    };

    await axios
      .post("http://localhost:8000/api/reg-user", obj)
      .then((res) => {
        setChangeView(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const login = async (email, password) => {
    await axios
      .post("http://localhost:8000/api/login-user", {
        email: email,
        password: password,
      })
      .then((res) => {
        sentCookie(res.data.email, res.data.password);
        navigateToHome()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const sentCookie = async (email, password) => {
    await axios
      .post("http://localhost:3000/api/cookie", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };



  const getCookie = async () => {
    await axios
      .get("http://localhost:3000/api/get-cookie")
      .then((res) => {
        setGetEmail(res.data.email);
        setGetPassword(res.data.password);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(()=>{
    getCookie()
  },[])

  return (
    <section className="flex flex-row items-center justify-center w-full min-h-screen">
      <div className=" flex justify-center items-center ss:invisible sm:invisible md:w-2/5 lg:w-2/5 xl:w-2/5 2xl:w-2/5 3xl:w-2/5 h-[100vh]  bg-slate-900">
        <Image src={bgimg} className="login-reg-image" />
      </div>

      <div className=" flex flex-col justify-center items-center ss:w-full sm:w-full md:w-3/5 lg:w-3/5 xl:w-3/5 2xl:w-3/5 3xl:w-3/5  h-[100vh] bg-slate-900">
        <div className="flex flex-col gap-[8px] box-border p-5 bg-login md:w-[500px]  lg:[500px] xl:[500px] 2xl:[500px] 3xl:[500px]">
          {changeView ? (
            <>
              <div className="i-view relative ">
                <EmailIcon className="absolute" />
                <input
                  className="i-m md:w-[440px] "
                  placeholder="First Name"
                  onChange={(e) => {
                    e.preventDefault, setFname(e.target.value);
                  }}
                />
              </div>
              <div className="i-view relative">
                <EmailIcon className="absolute" />
                <input
                  className="i-m md:w-[440px]"
                  placeholder="Last Name"
                  onChange={(e) => {
                    e.preventDefault, setLname(e.target.value);
                  }}
                />
              </div>
              <div className="i-view relative">
                <EmailIcon className="absolute" />
                <input
                  className="i-m md:w-[440px]"
                  placeholder="Email"
                  onChange={(e) => {
                    e.preventDefault, setEmail(e.target.value);
                  }}
                />
              </div>

              <div className="i-view relative">
                <EmailIcon className="absolute" />
                <input
                  className="i-m md:w-[440px]"
                  placeholder="Mobile"
                  onChange={(e) => {
                    e.preventDefault, setMobile(e.target.value);
                  }}
                />
              </div>

              <div className="i-view relative">
                <HttpsIcon className="absolute" />
                <input
                  className="i-m md:w-[440px]"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    e.preventDefault, setPassword(e.target.value);
                  }}
                />
              </div>
              <GenderSelect value={value} setValue={setValue} />
            </>
          ) : (
            <>
              <div className="i-view relative">
                <EmailIcon className="absolute" />
                <input
                  className="i-m md:w-[440px]"
                  placeholder="Email"
                  onChange={(e) => {
                    e.preventDefault, setGetEmail(e.target.value);
                    
                  }}

                  value={loginEmail}
                />
              </div>

              <div className="i-view relative">
                <HttpsIcon className="absolute" />
                <input
                  className="i-m md:w-[440px]"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    e.preventDefault, setGetPassword(e.target.value);
                  }}

                  
                  value={loginPassword}
                />
              </div>
            </>
          )}

          <button
            className="reg-btn"
            onClick={() => {
              setChangeView(true);
              register(email, fname, lname, mobile, password, value);
            }}
          >
            Create Account
          </button>
          <button
            className="login-btn"
            onClick={() => {
              setChangeView(false);
              login(loginEmail, loginPassword);
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
