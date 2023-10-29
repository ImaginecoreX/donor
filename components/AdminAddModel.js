"use client";

import axios from "axios";
import { useState } from "react";

export default function AdminAddModel({ setShowModel }) {
  const [email, setEmail] = useState();
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [password, setPassword] = useState();

  const add = async () => {
    const obj = {
      email: email,
      fname: fname,
      lname: lname,
      type_id: "2",
      password: password,
    };

    await axios
      .post("http://localhost:8000/api/add-admin", obj)
      .then((res) => {
        console.log(res);
        setShowModel(false)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="flex flex-col items-center  w-[400px] hide-scrollbar ss:w-[90%] mt-5 ns:w-full h-auto max-h-[90vh] overflow-y-scroll bg-white  z-50 rounded-[12px] box-border p-[30px] ">
      <div className="flex flex-col gap-5">
        <div className=" flex flex-col  gap-2">
          <label className="text-sm font-medium leading-6">Email</label>
          <input
            className=" h-10 ss:w-full rounded input-m box-border px-2 ring-1 ring-inset ring-gray-300 w-[300px]"
            onChange={(e) => {
              e.preventDefault, setEmail(e.target.value);
            }}
          />
        </div>

        <div className=" flex flex-col  gap-2">
          <label className="text-sm font-medium leading-6">First Name</label>
          <input
            className=" h-10 ss:w-full rounded input-m box-border px-2 ring-1 ring-inset ring-gray-300 w-[300px]"
            onChange={(e) => {
              e.preventDefault, setFname(e.target.value);
            }}
          />
        </div>

        <div className=" flex flex-col  gap-2">
          <label className="text-sm font-medium leading-6">Last Name</label>
          <input
            className=" h-10 ss:w-full rounded input-m box-border px-2 ring-1 ring-inset ring-gray-300 w-[300px]"
            onChange={(e) => {
              e.preventDefault, setLname(e.target.value);
            }}
          />
        </div>

        <div className=" flex flex-col  gap-2">
          <label className="text-sm font-medium leading-6">Password</label>
          <input
            className=" h-10 ss:w-full rounded input-m box-border px-2 ring-1 ring-inset ring-gray-300 w-[300px]"
            onChange={(e) => {
              e.preventDefault, setPassword(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="flex justify-between mt-5 gap-10">
        <div className="w-[100px] bg-blue-500 border rounded-[20px] box-border py-2 px-4 flex justify-center items-center ">
          <button className="text-white" onClick={add}>
            Add{" "}
          </button>
        </div>
        <div className="w-[100px] bg-slate-900 border rounded-[20px] box-border py-2 px-4 flex justify-center items-center ">
          <button
            className="text-white"
            onClick={() => {
              setShowModel(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
}
