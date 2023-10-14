"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

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

const Navbar = () => {
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
    <section className="z-50 flex justify-center h-auto">
      <div
        className="absolute flex items-center justify-between frame-container ns:hidden ss:hidden sm:hidden nav-bar"
        style={{ paddingTop: 26 }}
      >
        <div>
          <div className="color-bw hover:cursor-pointer" onClick={navigateToHomePage}>Donor</div>
        </div>
        <div className="flex items-center" style={{ columnGap: 24 }}>
          <div className={page == "home" ? "relative w-[53px]" : ""}>
            <div
              className={
                page == "home"
                  ? "cursor-pointer color-yellow-100"
                  : " cursor-pointer color-bw"
              }
              onClick={navigateToHomePage}
            >
              Home
            </div>
            {page == "home" ? (
              <div className="w-[6px] h-[6px] rounded-full  flex-shrink-0 absolute top-0 right-0 bgs-yellow-100"></div>
            ) : (
              ""
            )}
          </div>

          <div className={page == "about" ? "relative w-[54px]" : ""}>
            <div
              className={
                page == "about"
                  ? "cursor-pointer color-yellow-100"
                  : "cursor-pointer color-bw"
              }
              onClick={navigateToAboutPage}
            >
              About
            </div>
            {page == "about" ? (
              <div className="w-[6px] h-[6px] rounded-full  flex-shrink-0 absolute top-0 right-0 bgs-yellow-100"></div>
            ) : (
              ""
            )}
          </div>

          <div className={page == "events" ? "relative w-[71px]" : ""}>
            <div
              className={
                page == "events"
                  ? "cursor-pointer color-yellow-100"
                  : "cursor-pointer color-bw"
              }
              onClick={navigateToEventsPage}
            >
              Events
            </div>
            {page == "events" ? (
              <div className="w-[6px] h-[6px] rounded-full  flex-shrink-0 absolute top-0 right-0 bgs-yellow-100"></div>
            ) : (
              ""
            )}
          </div>

          <div className={page == "contact" ? "relative w-[71px]" : ""}>
            <div
              className={
                page == "contact"
                  ? "cursor-pointer color-yellow-100"
                  : " cursor-pointer color-bw"
              }
              onClick={navigateToContactPage}
            >
              Contact
            </div>
            {page == "contact" ? (
              <div className="w-[6px] h-[6px] rounded-full  flex-shrink-0 absolute top-0 right-0 bgs-yellow-100"></div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div >
          <div className="w-[20px] h-[20px] theme-icon set-bg hover:cursor-pointer" onClick={toggleTheme}></div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;


