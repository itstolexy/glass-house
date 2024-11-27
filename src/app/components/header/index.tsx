/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ReservationModal from "../reservationModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Large Screens (md and above) */}
      <div className="hidden md:flex flex-row justify-between items-center md:mx-16 mx-5 md:p-6 p-4 border-b-2 border-b-[#EDF8FA] md:mb-10 mb-5">
        <div className="raleway flex flex-row justify-between items-center font-normal text-lg w-[100%]">
          <div>
            <ul className="flex flex-row space-x-4">
              <li>
                <Link href="/menu">
                  <p className="hover:text-[#B8860B] text-lg transition-colors duration-300">
                    Menu
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#about-us">
                  <p className="hover:text-[#B8860B] text-lg transition-colors duration-300">
                    Contact Us
                  </p>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="flex flex-col items-center">
              <div>
                <img
                  src="/images/logo.png"
                  alt="bar"
                  className="w-16 h-16 object-cover"
                />
              </div>
              <p className="italic roboto font-thin text-base">
                Even stones are edible
              </p>
            </span>
          </div>

          <div>
            <button
              onClick={toggleModal}
              className="roboto text-[14px] p-2 w-[167px] bg-[#B8860B] text-white rounded-md hover:bg-[#B8860B] transition-colors duration-300"
            >
              Make Reservation
            </button>
          </div>
        </div>
      </div>

      <div className="flex md:hidden flex-row justify-between mx-5 p-4 items-center border-b-2 border-b-[#EDF8FA] mb-10">
        <div className="flex justify-center items-center">
          <div>
            <img
              src="/images/logo.png"
              alt="bar"
              className="w-12 h-12 object-cover"
            />
          </div>{" "}
        </div>

        <div className="flex justify-center items-center">
          <Image
            src="/images/menu.png"
            alt="menu"
            height={50}
            width={50}
            onClick={toggleMenu}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-50 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-2xl text-black"
        >
          ✕
        </button>

        {/* Mobile Menu Links */}
        <div className="flex flex-col mt-20 mx-10 space-y-6 h-full">
          <ul className="space-y-6">
            <li>
              <Link href="/menu">
                <p
                  className="text-lg text-[#B8860B] hover:text-[#B8860B] transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Menu
                </p>
              </Link>
            </li>
            <li>
              <Link href="#about-us">
                <p
                  className="text-lg text-[#B8860B] hover:text-[#B8860B] transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </p>
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  toggleModal();
                }}
                className="roboto text-[14px] p-2 w-[167px] bg-[#B8860B] text-white rounded-md hover:bg-[#B8860B] transition-colors duration-300"
              >
                Make Reservation
              </button>
            </li>
          </ul>
        </div>
      </div>

      <ReservationModal isOpen={isModalOpen} onClose={toggleModal} />
    </>
  );
};

export default Header;
