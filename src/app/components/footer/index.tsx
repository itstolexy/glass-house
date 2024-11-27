"use client";

import React from "react";
import Image from "next/image";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black md:p-8 p-4 text-white">
      <div className=" flex md:flex-row flex-col md:justify-between space-y-16 md:space-y-0 md:mx-16 mx-5">
        <div className=" space-y-4">
          <Link href="/">
            <Image src="/images/logo.png" alt="logo" height={50} width={50} />
          </Link>
          <div className="flex flex-col space-y-2">
            <p className="raleway text-base  font-semibold">Address</p>
            <span className="roboto text-sm font-normal">
              <p>142 Lekki Epe, Expressway</p>
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
            <span className="flex flex-row space-x-2 roboto text-sm font-normal">
              <FacebookOutlinedIcon />
              <p>Facebook</p>
            </span>
            <span className="flex flex-row space-x-2 roboto text-sm font-normal">
              <InstagramIcon />
              <p>Instagram</p>
            </span>
            <span className="flex flex-row space-x-2 roboto text-sm font-normal">
              <XIcon />
              <p>Twitter</p>
            </span>
            <span className="flex flex-row space-x-2 roboto text-sm font-normal">
              <LinkedInIcon />
              <p>LinkedIn</p>
            </span>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-t-[#FFFFFF80] md:mt-20 mt-10 md:mx-16 mx-5">
        <div className="flex md:flex-row flex-col-reverse justify-between mt-8 roboto text-sm font-normal">
          {/* Left Section */}
          <span className="mt-4 md:mt-0">
            <p>&copy; 2024 Relume. All rights reserved.</p>
          </span>

          {/* Right Section */}
          <div className="flex md:flex-row flex-col md:space-x-4 space-y-2 md:space-y-0">
            <p className="underline">Privacy Policy</p>
            <p className="underline">Terms of Service</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
