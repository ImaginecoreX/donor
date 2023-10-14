"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const scrollToTop = ()=>{window.scrollTo(top)}

// theme #################################################
const toggleTheme = () => {
  const root = document.documentElement;
  if (root.getAttribute("theme") === "light") {
    root.setAttribute("theme", "dark");
    localStorage.setItem("theme", "dark"); // Store the theme preference
  } else {
    root.setAttribute("theme", "light");
    localStorage.setItem("theme", "light"); // Store the theme preference
  }
};

// toggle nav option pane class
const toggleOptionPane = () => {
  const pane = document.getElementById("nav-option-pane");
  pane?.classList.toggle("nav-option-pane");
};

// loadTheme
const loadTheme = () => {
  const root = document.documentElement;
  const storedTheme = localStorage.getItem("theme"); // Get the stored theme preference
  root.setAttribute("theme", storedTheme || "light"); // Use the stored theme or default to 'light'
};

// theme #################################################

const Footer = () => {
  const [page, setPage] = useState("home");

  useEffect(loadTheme, []); // Load the theme preference on component mount

  // ########## routes #####################################
  const router = useRouter();
  const navigateToHomePage = () => {
    router.push("/", { scroll: false });
  };
  const navigateToAboutPage = () => {
    router.push("/about", { scroll: false });
  };
  const navigateToEventsPage = () => {
    router.push("/events", { scroll: false });
  };
  const navigateToContactPage = () => {
    router.push("/contact", { scroll: false });
  };

  // ########## routes #####################################

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // const url = `${pathname}?${searchParams}`
    // console.log(pathname)
    // You can now use the current URL
    if (pathname == "/") {
      setPage("home");
    } else if (pathname == "/about") {
      setPage("about");
    } else if (pathname == "/events") {
      setPage("events");
    } else if (pathname == "/contact") {
      setPage("contact");
    }
  }, [pathname, searchParams]);

  return (
    <section className="flex justify-center h-auto bgs-blue-100  pt-[40px] pb-[40px]">
      <div className="flex flex-col items-center justify-center frame-container ">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-[24px]">
            <div>
              <div className="font-family-Raleway text-[16px] font-semibold leading-normal text-white hover:cursor-pointer" onClick={navigateToAboutPage}>
                About
              </div>
            </div>
            <div>
              <div className="font-family-Raleway text-[16px] font-semibold leading-normal text-white hover:cursor-pointer" onClick={navigateToEventsPage}>
                Events
              </div>
            </div>
            <div>
              <div className="font-family-Raleway text-[16px] font-semibold leading-normal text-white hover:cursor-pointer" onClick={navigateToContactPage}>
                Contact
              </div>
            </div>
          </div>
          <div>
            <div className="w-[40px] h-[40px] bgs-yellow-100 flex justify-center items-center rounded-[12px] hover:cursor-pointer" onClick={scrollToTop}>
              <div className="bg-upArrow-img set-bg w-[20px] h-[20px]"></div>
            </div>
          </div>
        </div>


        <div className="flex items-center justify-between w-full pt-[20px]">
          <div><div className="font-family-Raleway text-[12px] font-medium leading-normal text-white">Copyright © 2023 <span className="font-semibold">ImaginecoreX (Pvt) Ltd.</span> All rights reserved | <span className="hover:text-blue-500 hover:cursor-pointer">Privacy Policy</span></div></div>

          <div className="flex items-center gap-[24px]">
            <div className="hover:cursor-pointer"><div className="twitter-icon set-bg w-[16px] h-[16px]"></div></div>
            <div className="hover:cursor-pointer"><div className="dribble-icon set-bg w-[16px] h-[16px]"></div></div>
            <div className="hover:cursor-pointer"><div className="instagram-icon set-bg w-[16px] h-[16px]"></div></div>
            <div className="hover:cursor-pointer"><div className="threads-icon set-bg w-[16px] h-[16px]"></div></div>
            <div className="hover:cursor-pointer"><div className="facebook-icon set-bg w-[16px] h-[16px]"></div></div>
            <div className="hover:cursor-pointer"><div className="discord-icon set-bg w-[16px] h-[16px]"></div></div>
            <div className="hover:cursor-pointer"><div className="github-icon set-bg w-[16px] h-[16px]"></div></div>
            <div className="hover:cursor-pointer"><div className="linkedin-icon set-bg w-[16px] h-[16px]"></div></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Footer;
