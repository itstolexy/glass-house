/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
// import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
// import XIcon from "@mui/icons-material/X";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black md:p-8 p-4 text-white">
      <div className="border-t-2 border-t-[#FFFFFF80]">
        <div className=" flex md:flex-row flex-col md:justify-between space-y-16 md:space-y-0 md:mx-16 mx-5 mt-10 ">
          <div className=" space-y-4">
            <Link href="/">
              <p className="roboto md:font-semibold font-medium text-lg md:text-3xl">
                {" "}
                The Glass House
              </p>
            </Link>
            <div className="flex flex-col space-y-2">
              <p className="raleway text-base  font-semibold">Address</p>
              <span className="roboto text-sm font-normal">
                <p>KM 143, Lekki Epe expressway, Ikate lagos</p>
              </span>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="raleway text-base font-semibold">Contact Us</p>
              <span className="roboto text-sm font-normal flex flex-col space-y-2">
                <a href="tel:+2348091460009">08091460009</a>
                <a href="mailto:info@glasshouselagos.com">
                  info@glasshouselagos.com
                </a>
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <p className="raleway text-base font-semibold">Follow Us</p>
            <div className="flex flex-col space-y-4">
              {/* <span className="flex flex-row space-x-2 roboto text-sm font-normal">
                <FacebookOutlinedIcon />
                <p>Facebook</p>
              </span> */}
              <span className="flex flex-row space-x-2 roboto text-sm font-normal">
                <InstagramIcon />
                <a href="https://www.instagram.com/theglasshouselagos/">
                  Instagram
                </a>
              </span>
              {/* <span className="flex flex-row space-x-2 roboto text-sm font-normal">
                <XIcon />
                <p>Twitter</p>
              </span> */}
              {/* <span className="flex flex-row space-x-2 roboto text-sm font-normal">
                <LinkedInIcon />
                <p>LinkedIn</p>
              </span> */}
              <span className="flex flex-row space-x-2 roboto text-sm font-normal">
                <div>
                  <img src="/images/snap.png" alt="bar" className="w-7 h-5" />
                </div>
                <a href="https://www.snapchat.com/add/glasshouselagos?share_id=gRwzQ7i9uxs&locale=en-GB">
                  Snapchat
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-t-[#FFFFFF80] md:mt-20 mt-10 md:mx-16 mx-5">
          <div className="flex justify-center mt-8 roboto text-sm font-normal">
            {/* Left Section */}
            <span className="mt-4 md:mt-0">
              <p>&copy; 2024. The Glass House.</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
