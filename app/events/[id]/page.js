'use client'
import { useState, useEffect } from "react";
import { DonationCards } from "../../../components/Cards";
import axios from 'axios'
import Link from "next/link";

export default function EventDetails({ params }) {

  const [eventData, setEventData] = useState([]);
  const [allEvents, setAllEVents] = useState([]);

  const searchAllEvents = async () => {
    await axios.get("http://localhost:8000/api/get-all-event")
      .then((response) => {
        setAllEVents(response.data.allEvent);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const searchEventData = async () => {
    await axios.get(`http://localhost:8000/api/get-event/${params.id}`)
    .then((res) => {
      if (Array.isArray(res.data.searchEvent) && res.data.searchEvent.length > 0) {
        const eventData = res.data.searchEvent[0];
        setEventData(eventData);
        console.log(eventData);
      } else {
        console.log("No data found for the given ID.");
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    searchEventData();
    searchAllEvents();
  }, [params.id]);

  return (
    <div>
      {eventData && (
        <div className="mt-[100px] mb-10 flex-col">
          <div className="flex w-full h-auto justify-end">
            <div className="flex w-3/4 h-[100px] items-center bgs-yellow-300" style={{ borderRadius: '50px 0px 0px 50px' }}>
              <span className="text-white text-[28px] font-family-Raleway font-semibold ms-11">{eventData.title}</span>
            </div>
          </div>
          <div className="flex box-border px-11 sm:px-1 ns:px-1 ss:px-1  py-4 mt-6 md:flex-col sm:flex-col ss:flex-col ns:flex-col">
            <div className="flex-col w-3/4 md:w-full sm:w-full ss:w-full ns:w-full box-border px-5">
              <div className="mt-4 flex-col mb-5">
                <div className="text-[24px] font-semibold font-family-Lora color-blue-900">Event Details:</div>
                <div className="mt-4 text-[20px] font-family-Roboto-Serif color-yellow-800">Event Date: {eventData.time}</div>
                <div className="mt-1 text-[20px] font-family-Roboto-Serif color-yellow-800" id="location">Location:  {eventData.location_link}</div>
              </div>
              <div className="text-justify font-family-Roboto-Serif text-[20px] color-bw">{eventData.description}</div>
            </div>
            <div className="flex-col w-1/4 md:w-full sm:w-full ss:w-full ns:w-full ms-5 md:ms-0 sm:ms-0 ss:ms-0 ns:ms-0 md:mt-7 sm:mt-7 ss:mt-7 ns:mt-7 ">
              <div className="bgs-gray-90 w-full h-[650px] box-border px-4 py-4 justify-center items-center">
                <div className="flex-col overflow-y-auto h-[600px]">
                  {allEvents.map((event) => (
                    <DonationCards
                      key={event.id}
                      events={{
                        id: event.id,
                        name: event.title,
                        description: event.description,
                      }}
                    />
                  ))}

                </div>
              </div>
              <div className="flex-col justify-center items-center text-center mt-4 h-auto w-full bg-yellow-100 box-border px-7 py-10 shadow-lg rounded-[16px]">
                <span className="text-[18px] font-family-Raleway font-semibold text-gray-700">Donate and Participate for <br /> our Events.</span>
                <div className="flex w-full justify-center items-center mt-3">
                  <Link href="/contact" className="w-[200px] bg-orange-600 h-[50px] rounded-full flex justify-center items-center hover:cursor-pointer">
                    <span className="text-white text-[18px] font-semibold">Contact Us</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

