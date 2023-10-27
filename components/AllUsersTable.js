'use client'
import { Card, Typography } from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect, useState } from "react";


const TABLE_HEAD = [
  "Email",
  "First Name",
  "Last Name",
  "Mobile",
  "Gender",
  "Action",
];

export default function AllUsersTable({editView,setEditView}) {
  const [open, setOpen] = useState();
  const [updateData, setUpdateData] = useState();

  const [TABLE_ROWS, SETTABLE_ROWS] = useState([
    {
      mobile: "Yasith",
      fname: "Yasith",
      lname: "Sandesh",
      email: "yaithsandesh@gmail.com",
      company: "0",
    },

  ]);


  const allUsersFetch =async ()=>{
    await axios.get('http://localhost:8000/api/all-user').then((res)=>{console.log(res.data.allUser)}).catch((error)=>{console.log(error)});
  }
 

  return (
    <Card className="overflow-scroll h-[300px]   ss:w-full  border w-[1000px] xl:w-full 2xl:w-full 3xl:w-full ">
    
      <table className="w-full min-w-max table-auto text-left table-dark">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map((data, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={data.mobile}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {data?.mobile}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {data.fname}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {data.lname}
                  </Typography>
                </td>

                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {data.lname}
                  </Typography>
                </td>

                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {data.email}
                  </Typography>
                </td>
          

                <td className={classes}>
                  <div className=" flex flex-row gap-3 items-center">
                    <Typography
                      as="a"
                      variant="small"
                      color="blue"
                      className="font-medium cursor-pointer"
                      onClick={() => {
                        setOpen(true);
                        {editView=="flex flex-wrap mt-5 gap-5 invisible"?setEditView("flex flex-wrap mt-5 gap-5 visible"):setEditView("flex flex-wrap mt-5 gap-5 invisible")}
                      }}
                    >
                      Edit
                    </Typography>
                    
                    {/* <button className="block-btn">Block</button> */}
                    <button className="unblock-btn ">Unblock</button>
                 
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}
