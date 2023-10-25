import React, { useEffect, useState } from "react";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const donateAmounts = [
  {
    id: "1",
    amount: "40",
    type:"K"
  },
  {
    id: "2",
    amount: "30",
    type:"K"
  },
  {
    id: "3",
    amount: "15",
    type:"K"
  },
  {
    id: "4",
    amount: "8000",
    type:"rs"
  },
  {
    id: "5",
    amount: "4000",
    type:"rs"
  },
  {
    id: "6",
    amount: "3000",
    type:"rs"
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
  const [isGiveOnce, setIsGiveOnce] = useState(false);
  const [isCommentPage, setIsCommentPage] = useState(false);
  const [defaultAmount, setDefaultAmount] = useState('4000');
  const [selectedAmont, setSelectedAmont] = useState(''); 
  const [selectedOtion, setSelectedOption] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('Rs');
 
  const handleInputChange = (event) => {
    setSelectedAmont(event.target.value); // Update selectedAmount when typing
  };

  const toggleDedicated = () => {
    setIsDedicated(!isDedicated);
  };

  const toggleCommentPage = () => {
    setIsCommentPage(!isCommentPage);
  };

  useEffect(()=>{
    isGiveOnce?setSelectedAmont('8000'):setSelectedAmont('4000')
  },[])

  
  const toggleGiveOnce = (type) => {type==='once'?setIsGiveOnce(true):setIsGiveOnce(false);}

  return (
    <div className="w-[400px] hide-scrollbar ss:w-[90%] ns:w-full h-auto max-h-[90vh] overflow-y-scroll bg-white  z-50 rounded-[12px] box-border p-[30px] flex flex-col items-center">
      {isCommentPage ? (
        <div className="flex flex-col w-full">
          <div className="flex items-center gap-[16px] border-b-[1px] border-color pb-[24px]">
            <div onClick={toggleCommentPage} className="cursor-pointer">
              <ArrowBackIosNewIcon />
            </div>
            <div className="text-[26px] font-family-Roboto font-medium">
              Comment
            </div>
          </div>
          
          <textarea className="w-full border-[1px] h-[300px] border-color rounded-[12px] mt-[40px] px-[24px] py-[26px]" placeholder="Add your comment here..."/>
          <button
            onClick={click}
            className="font-family-Roboto w-full text-white bg-black py-[12px] rounded-[8px] mt-[32px] font-medium"
          >
            Add Comment
          </button>
        </div>
      ) : (
        <div>
          <div className="flex items-center gap-[8px] pb-[30px]">
            <div>
              <div className="font-family-Roboto text-[26px] font-bold">
                Secure Donation
              </div>
            </div>
            <HttpsOutlinedIcon sx={{ width: "18px", height: "18px" }} />
          </div>

          <div className="w-full h-[50px] flex border-color border-[1px] rounded-[12px] mb-[24px]">
            <div onClick={()=>{toggleGiveOnce('once');setSelectedAmont('8000');setSelectedOption('8000'); defaultAmount==='4000'?setDefaultAmount('8000'):setDefaultAmount('4000')}} className={`${"flex items-center justify-center w-1/2 h-full font-family-Roboto cursor-pointer"} ${isGiveOnce?'bg-red-600 text-white rounded-l-[12px]':''}`}>
              Give Once
            </div>
            <div onClick={()=>{toggleGiveOnce('month');setSelectedAmont('4000');setSelectedOption('4000'); defaultAmount==='4000'?setDefaultAmount('8000'):setDefaultAmount('4000')}} className={`${"flex items-center justify-center w-1/2 h-full font-family-Roboto cursor-pointer"} ${isGiveOnce?'':'text-white bg-red-600 rounded-r-[12px]'}`}>
              <FavoriteIcon
                sx={{ fill: "#fff", width: "16px", height: "16px",marginRight:'6px' }}
              />
               Monthly
            </div>
           
          </div>

          <div className="flex flex-wrap gap-[10px] w-full">
            {donateAmounts.map((donate) => (
              <div
                key={donate.id}
          
                className={`${"py-[10px] donateChip flex justify-center items-center cursor-pointer  border-color border-[2px] rounded-[8px]"} ${donate.amount===selectedOtion?'bg-red-600 text-white shadow-md border-slate-300':''}`}
                onClick={() => {
                  {donate.type==='K'?setSelectedAmont(donate.amount * 1000):setSelectedAmont(donate.amount)}
                  setDefaultAmount('');
                  setSelectedOption(donate.amount);
                }}
              >
                <div className="font-family-Roboto text-[16px]">
                {selectedCurrency} {donate.amount}{donate.type==='K'?donate.type:''}
                </div>
              </div>
            ))}
          </div>

          <div className="w-full h-auto pt-[16px] mb-[24px]">
            <div className="w-full h-[60px] flex justify-between rounded-[6px] border-[1px] border-solid border-color box-border px-[18px] py-[10px]">
              <div className="flex items-center h-full gap-[16px]">
                <div className="font-family-Roboto text-[18px] text-gray-400">
                  {selectedCurrency}
                </div>
                <input
                  type="text"
                  className="w-2/3 h-full text-[24px] font-family-Roboto font-normal text-blue-600 focus:outline-none"
                  value={selectedAmont}
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex-1">
                <select className="px-[12px] py-[8px] focus:outline-none hover:bg-gray-100 rounded-[8px] after:right-[10px] after:absolute after:pointer-events-none" onChange={(event)=>{event.target.value==='LKR'?setSelectedCurrency('Rs'):event.target.value==='USD'?setSelectedCurrency('$'):event.target.value==='EUR'?setSelectedCurrency('€'):''}}>
                  {currency.map((currency) => (
                    <option key={currency.code}>{currency.code}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* dedicate */}
          <div className="flex flex-col w-full pb-[6rem] gap-[10px]">
            <div className="flex items-center w-full gap-[8px]">
              <input
                type="checkbox"
                className="w-[16px] h-[16px] rounded-[6px]"
                onChange={toggleDedicated}
              />
              <div>Dedicate this donation</div>
            </div>
            {isDedicated ? (
              <div>
                <input
                  type="text"
                  className="w-full font-family-Roboto h-[40px] px-[16px] border-[1px] border-color rounded-[8px]"
                  placeholder="Name of someone special to me"
                />
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="pb-[2rem]">
            <div
              className="underline font-family-Roboto text-[15px] cursor-pointer"
              onClick={toggleCommentPage}
            >
              Add Comment
            </div>
          </div>

          <button
            onClick={click}
            className="font-family-Roboto w-full text-white bg-black py-[12px] rounded-[8px]"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default DonateModal;
