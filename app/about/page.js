import React from "react";
import image1 from "public/about_img1.jpg";
import Image from "next/image";
import sriLankaMap from "public/sri_lanka_map.png";
import { MemberCard } from "@/components/Cards";

const About = () => {
  return (
    <div>
      <section className="relative flex flex-col items-center justify-between w-full min-h-screen -z-40">
        <div className="flex flex-col items-center justify-center frame-container pt-[30vh]">
          <div>
            <div>
              <div className="font-family-Raleway text-center text-[64px] font-medium leading-normal">
                About Us
              </div>
            </div>
            <div>
              <div className="font-family-Lora italic text-[24px] text-center font-medium leading-normal">
                Our Journey Towards Compassion and Change
              </div>
            </div>
          </div>

          <div className="absolute flex justify-center w-full h-auto -z-50">
            <div className="flex frame-container ">
              <div className="relative flex-1 h-full ">
                <div className="w-[200px] h-[300px] mt-[30vh] bg-slate-100"></div>
              </div>
              <div className="relative flex justify-between flex-1 w-full h-full ">
                <div>
                  <div className="w-[200px] h-[320px] bg-lime-100 mt-[20vh]"></div>
                </div>
                <div>
                  <div className="w-[200px] h-[320px] bg-slate-200 mt-[40vh] relative "></div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="pt-[60px]">
              <div className="w-[50%] font-family-Lora text-[20px] font-normal italic leading-[28px]">
                This subtitle encapsulates the essence of the "About Us"
                section, highlighting your organization's mission, history, and
                commitment to making a positive impact. If you need more
                assistance with content or have any specific details you'd like
                to include, feel free to let me know.
              </div>
            </div>
            <div className="pt-[10px]">
              <div className="w-[50%] font-family-Lora text-[20px] font-bold italic leading-[28px]">
                --James fig
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex flex-col items-center w-full ">
 
         <div><div className="font-family-Raleway text-[64px] font-semibold leading-normal text-center ">Team Members</div></div>

         <section className="w-full">
         <div className="flex flex-col items-center w-full">
         <div className="flex gap-[24px] justify-center frame-container pt-[100px] flex-wrap w-full mb-[-150px]">
            <MemberCard/>
            <MemberCard/>
            <MemberCard/>
            <MemberCard/>
            <MemberCard/>
            <MemberCard/>
         </div>
         </div>
          <div className="h-auto pb-[64px] bgs-blue-100  flex flex-col w-full items-center gap-[8px] pt-[220px]">
            <div className="box-border "><div className="text-center font-family-Raleway text-[24px] font-bold leading-normal text-white px-[24px] py-[12px] bgs-yellow-100 w-fit">Join our Community Now </div></div>
            <div><div className="text-center text-white font-family-Raleway text-[20px] font-medium leading-normal">Subtitle Massage</div></div>
          </div>
          
         </section>

         <section className="flex justify-center w-full pb-[100px] pt-[100px]">
         <div className="relative flex flex-col items-center frame-container">
          
            <div className="w-full h-[800px] set-bg-smart">
              <Image src={sriLankaMap} layout="fill" className="w-[80%] h-[800px] set-bg-objContain"/>
            </div>

            <div className="w-[30px] h-[30px] rounded-full bg-red-600 absolute top-[600px] hover:animate-pulse hover:cursor-pointer flex justify-center items-center"><div className="img-help w-[16px] h-[16px] set-bg"></div></div>

          </div>
         </section>
          
        
      </section>
    </div>
  );
};

export default About;
