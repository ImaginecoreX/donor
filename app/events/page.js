'use client'
import { EventCard } from "../../components/Cards";
import React, { useState, useEffect } from "react";
import EventImageSlider from "../../components/EventImageSlider";
import axios from 'axios'

const Events = () => {

  const [eventData, setEventData] = useState([]);

  const loadEvents = async () => {
    await axios.get("http://localhost:8000/api/get-all-event")
      .then((response) => {
        console.log(response.data);
        setEventData(response.data.allEvent);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  useEffect(() => {
    loadEvents();
  }, [])

  return (
    <div className="flex flex-col items-center min-h-screen w-full overflow-hidden">
      <div className="flex md:flex-col ns:flex-col sm:flex-col ss:flex-col ss:items-center sm:items-center md:items-center ns:items-center mt-[120px] 3xl:items-center 3xl:w-[70%]">
        <div className="flex flex-col justify-center items-center md:items-center sm:items-center ss:items-center md:mb-8 w-1/4 box-border ps-9 md:w-[80%] 2xl:ms-[70px] sm:w-[80%] ss:w-[90%] ns:w-[90%] ">
          <div><div className="text-[64px] ns:text-[40px] color-yellow-400 font-bold font-family-Raleway  leading-normal">Events</div></div>
          <div><div className="text-[24px] ns:text-[16px] color-blue-900 font-medium text-center ss:text-center font-family-Raleway leading-normal">Explore Completed, Ongoing and Upcoming Events</div></div>
        </div>

        <div className="flex w-3/4 sm:items-center sm:mt-[40px] ns:mt-[40px] ss:mt-[40px] md:w-full sm:w-[80%] ss:w-[80%] ">
          <EventImageSlider />
        </div>

      </div>
      <section className="flex flex-col items-center min-h-screen w-full pt-[30px] pb-[100px]">
        <div className="flex flex-col items-center w-full frame-container">

          <section className="w-full pt-[80px]">
            <div className="h-[100px] flex items-center w-full bgs-blue-400 rounded-[16px] "><div className="text-[36px] pl-[80px] h-fit font-semibold text-white">Ongoing Events</div></div>

            <div className="bgs-gray-90 flex box-border px-6 py-6 h-auto overflow-y-auto w-full mt-6 rounded-[10px]">
              <div className=" flex gap-[24px] mt-[20px]">
                {eventData.map((event) => {
                  if (event.event_statuses_id === 1) {
                    return (
                      <EventCard
                        key={event.id}
                        events={{
                          id: event.id,
                          name: event.title,
                          description: event.description,
                          time: event.time,
                          location: event.location_link
                        }}
                      />
                    );
                  } else {
                    return null; // Or you can return a placeholder or empty element
                  }
                })}
              </div>
            </div>
          </section>

          <section className="w-full pt-[80px]">
            <div className="h-[100px] flex items-center w-full bgs-green-60 rounded-[16px] "><div className="text-[36px] pl-[80px] h-fit font-semibold text-white">Completed Events</div></div>

            <div className="bgs-gray-90 flex box-border px-6 py-6 h-auto overflow-y-auto w-full mt-6 rounded-[10px]">
              <div className=" flex gap-[24px] mt-[20px]">
                {eventData.map((event) => {
                  if (event.event_statuses_id === 2) {
                    return (
                      <EventCard
                        key={event.id}
                        events={{
                          id: event.id,
                          name: event.title,
                          description: event.description,
                          time: event.time,
                          location: event.location_link
                        }}
                      />
                    );
                  } else {
                    return null; // Or you can return a placeholder or empty element
                  }
                })}

              </div>
            </div>
          </section>

          <section className="w-full pt-[80px]">
            <div className="h-[100px] flex items-center w-full bgs-orange-30 rounded-[16px] "><div className="text-[36px] pl-[80px] h-fit font-semibold text-white">Upcoming Events</div></div>

            <div className="bgs-gray-90 flex box-border px-6 py-6 h-auto overflow-y-auto w-full mt-6 rounded-[10px]">
              <div className=" flex gap-[24px] mt-[20px]">
                {eventData.map((event) => {
                  if (event.event_statuses_id === 3) {
                    return (
                      <EventCard
                        key={event.id}
                        events={{
                          id: event.id,
                          name: event.title,
                          description: event.description,
                          time: event.time,
                          location: event.location_link
                        }}
                      />
                    );
                  } else {
                    return null; // Or you can return a placeholder or empty element
                  }
                })}
              </div>
            </div>
          </section>

        </div>
      </section>
    </div>
  );
};

export default Events;
