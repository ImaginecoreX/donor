"use client";
import { CatCard, RequestCard } from "../components/Cards";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React, { useState } from "react";
import DonateModal from "../components/DonateModal";

export default function Home() {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <section>
      <Navbar />
      {show && show == true ? (
        <div className="fixed z-[100] flex items-center justify-center   w-full h-[100vh]">
          <div
            className="   w-full h-[100vh] bg-[#00000070] backdrop-blur-sm fixed"
            onClick={toggleShow}
          ></div>

          <div className="z-[200]">
            <DonateModal click={toggleShow} />
          </div>
        </div>
      ) : (
        ""
      )}
      <section className="flex flex-col items-center justify-between w-full min-h-screen bg-hero-img set-bg-cover">
        <div className="flex flex-col items-center justify-center frame-container ">
          <div className="flex w-full h-[90vh] pt-[8vh]">
            {/* main col 1 */}
            <div className="flex flex-1 w-fit  h-full  z-4 box-border pt-[60px] gap-[24px] ss:hidden ns:hidden">
              {/* card col 1 */}
              <div className="box-border flex flex-col   items-end  h-full  gap-[24px]">
                <CatCard />
                <CatCard />
              </div>

              {/* card col 2 */}
              <div className="flex flex-col items-start  h-full gap-[24px]  mt-[-24px]">
                <CatCard />
                <CatCard />
              </div>
            </div>

            {/* main col 2 */}

            <div className="box-border z-50 flex flex-col items-end justify-center flex-1 w-full h-full">
              <div className="w-[80%] text-[48px] font-semibold leading-[52px] text-right text-white font-family-Roboto ss:w-full ss:text-center">
                Champions of Compassion:{" "}
                <span className="italic font-family-Lora">
                  Uniting for a Better World
                </span>
              </div>
              <div className="font-family-Roboto text-[36px] leading-normal font-bold pt-[12px] pb-[12px] ss:w-full ss:text-center">
                Over LKR 300 Milions
              </div>
              <div
                className="px-[80px] py-[6px] bgs-red-200 hover:cursor-pointer rounded-[12px] ss:w-full ss:text-center"
                onClick={toggleShow}
              >
                <div className="font-family-Roboto text-[36px] text-white font-bold ">
                  Donate
                </div>
              </div>
              <div className="pt-[12px] ss:w-full ss:text-center ss:pt-[20px]">
                We are nonprofit organiorganization{" "}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-auto pb-[100px] pt-[100px] flex flex-col items-center">
        <div className="flex flex-col items-center justify-center frame-container ">
          <div>
            <div className="font-family-Raleway text-[64px] text-center font-extrabold leading-normal color-bw">
              Active Requests
            </div>
            <div className="font-family-Raleway text-[24px] text-center font-medium leading-normal color-bw">
              Explore and contribute to requests bellow
            </div>
          </div>

          <div className="w-full pt-[60px] flex flex-wrap justify-center gap-[24px]">
            <RequestCard />
            <RequestCard />
            <RequestCard />
          </div>
        </div>
      </section>

      <Footer />
    </section>
  );
}
