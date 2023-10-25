import React, { useState } from "react";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";

const donateAmounts = [
  {
    id: "1",
    amount: "Rs 40K",
  },
  {
    id: "2",
    amount: "Rs 30K",
  },
  {
    id: "3",
    amount: "Rs 15K",
  },
  {
    id: "4",
    amount: "Rs 8,000",
  },
  {
    id: "5",
    amount: "Rs 4,000",
  },
  {
    id: "6",
    amount: "Rs 3,000",
  },
];

const currency = [
  {
    code: "LKR",
    name: "Sri Lankan Rupee",
  },
  {
    code: "USD",
    name: "US Dollar",
  },
  {
    code: "EUR",
    name: "Euro",
  },
];

const DonateModal = ({ click }) => {
  const [isDedicated, setIsDedicated] = useState(false);
  const [selectedDonate, setSelectedDonate] = useState("");
  const [isDonateModalPageHome, setIsCommentPage] = useState(false);

  const toggleDedicated = () => {
    setIsDedicated(!isDedicated);
  };

  return (
    <div className="w-[400px] h-auto bg-white  z-50 rounded-[12px] box-border p-[30px] flex flex-col items-center">
     {

     }
    </div>
  );
};

export default DonateModal;
