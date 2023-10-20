import Image from "next/image";
import React from "react";
import ContactImage from "public/constact.svg";

const Contact = () => {
  return (
    <div>
      <section className="flex flex-col items-center min-h-screen w-ful pt-[120px] pb-[100px]">
        <div className="flex flex-col items-center w-full frame-container">
          <div className="flex w-full">
            <div className="flex items-start flex-1 h-auto set-bg-smart">
              <Image src={ContactImage} fill className="w-full h-auto "/>
            </div>

            <div className="flex-1 h-auto  box-border p-[30px]">
              <div>
                <div className="text-[36px] font-family-Raleway font-medium pb-[24px]">
                  Contact us
                </div>
              </div>

              <div className="flex flex-col gap-[24px]">
                <div className="flex flex-col gap-[8px]">
                  <div>
                    <label className="font-family-Roboto text-[16px] font-normal">
                      Name
                    </label>
                  </div>
                  <input
                    type="text"
                    className="w-full h-[40px] border-[1px] px-[20px] font-family-Fira-Sans text-[15px] rounded-[12px]"
                    placeholder="eg: Adam"
                  />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <div>
                    <label className="font-family-Roboto text-[16px] font-normal">
                      Email
                    </label>
                  </div>
                  <input
                    type="email"
                    className="w-full h-[40px] border-[1px] px-[20px] font-family-Fira-Sans text-[15px] rounded-[12px]"
                    placeholder="example@domain.com"
                  />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <div>
                    <label className="font-family-Roboto text-[16px] font-normal">
                      Massage
                    </label>
                  </div>
                  <textarea
                    type="text"
                    className="w-full h-[120px] min-h-[80px] max-h-[280px] border-[1px] px-[20px] py-[20px] font-family-Fira-Sans text-[15px] rounded-[12px]"
                    placeholder="Type Your Message"
                  />
                </div>

                <div className="pt-[20px] pb-[30px]">
                  <div>
                    <button className="w-full h-[40px] bg-black rounded-[12px] text-white">
                      Sent
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;