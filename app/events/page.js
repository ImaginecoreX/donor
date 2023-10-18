import { EventCard } from "@/components/Cards";
import React from "react";
import EventImageSlider from "@/components/EventImageSlider";

const Events = () => {
  return (
    <div className="items-center min-h-screen w-full overflow-hidden">
      <div className="flex md:flex-col sm:flex-col ss:flex-col ss:items-center sm:items-center md:items-center mt-[120px] ">
        <div className="flex   flex-col justify-center items-center md:items-center sm:items-center ss:items-center md:mb-8 w-1/4 box-border ps-9 md:w-[80%] 2xl:ms-[70px] sm:w-[80%] ss:w-[90%]">
          <div><div className="text-[64px] color-yellow-400 font-bold font-family-Raleway  leading-normal">Events</div></div>
          <div><div className="text-[24px] color-blue-900 font-medium text-center ss:text-center font-family-Raleway leading-normal">Explore Completed, Ongoing and Upcoming Events</div></div>
        </div>

        <div className="flex  w-3/4 sm:items-center sm:mt-[40px] ss:mt-[40px] md:w-[80%] sm:w-[80%] ss:w-[80%]">
          <EventImageSlider />
        </div>

      </div>
      <section className="flex flex-col items-center min-h-screen w-full pt-[30px] pb-[100px]">
        <div className="flex flex-col items-center w-full frame-container">

          <section className="w-full pt-[80px]">
            <div className="h-[100px] flex items-center w-full bgs-blue-400 rounded-[16px] "><div className="text-[36px] pl-[80px] h-fit font-semibold text-white">Ongoing Events</div></div>

            <div className="flex flex-wrap justify-center gap-[24px] mt-[20px]">
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
            </div>
          </section>

          <section className="w-full pt-[80px]">
            <div className="h-[100px] flex items-center w-full bg-emerald-500 rounded-[16px] shadow-blue-500"><div className="text-[36px] pl-[80px] h-fit font-semibold text-white">Completed Events</div></div>

            <div className="flex flex-wrap justify-center gap-[24px] mt-[20px]">
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
            </div>
          </section>

          <section className="w-full pt-[80px]">
            <div className="h-[100px] flex items-center w-full bg-orange-500 rounded-[16px] shadow-blue-500"><div className="text-[36px] pl-[80px] h-fit font-semibold text-white">Upcoming Events</div></div>

            <div className="flex flex-wrap justify-center gap-[24px] mt-[20px]">
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
            </div>
          </section>

        </div>
      </section>
    </div>
  );
};

export default Events;
