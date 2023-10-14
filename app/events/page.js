import { EventCard } from "@/components/Cards";
import React from "react";

const Events = () => {
  return (
    <div>
      <section className="flex flex-col items-center min-h-screen w-ful pt-[120px] pb-[100px] overfl">
        <div className="flex flex-col items-center w-full frame-container">

          <div className="flex flex-col items-center w-full">
            <div><div className="text-[64px] font-bold font-family-Raleway text-center leading-normal">Events</div></div>
            <div><div className="text-[24px] font-medium text-center font-family-Raleway leading-normal">Explore Completed, Ongoing and Upcoming Events</div></div>
          </div>

          <section className="w-full pt-[80px]">
            <div className="h-[100px] flex items-center w-full bg-blue-500 rounded-[16px] shadow-blue-500"><div className="text-[36px] pl-[80px] h-fit font-semibold text-white">Ongoing Events</div></div>

            <div className="flex flex-wrap justify-center gap-[24px] mt-[20px]">
              <EventCard/>
              <EventCard/>
              <EventCard/>
              <EventCard/>
              <EventCard/>
              <EventCard/>
            </div>
          </section>

          <section className="w-full pt-[80px]">
            <div className="h-[100px] flex items-center w-full bg-emerald-500 rounded-[16px] shadow-blue-500"><div className="text-[36px] pl-[80px] h-fit font-semibold text-white">Completed Events</div></div>

            <div className="flex flex-wrap justify-center gap-[24px] mt-[20px]">
              <EventCard/>
              <EventCard/>
              <EventCard/>
              <EventCard/>
              <EventCard/>
              <EventCard/>
            </div>
          </section>

          <section className="w-full pt-[80px]">
            <div className="h-[100px] flex items-center w-full bg-orange-500 rounded-[16px] shadow-blue-500"><div className="text-[36px] pl-[80px] h-fit font-semibold text-white">Upcoming Events</div></div>

            <div className="flex flex-wrap justify-center gap-[24px] mt-[20px]">
              <EventCard/>
              <EventCard/>
              <EventCard/>
              <EventCard/>
              <EventCard/>
              <EventCard/>
            </div>
          </section>
          
        </div>
      </section>
    </div>
  );
};

export default Events;
