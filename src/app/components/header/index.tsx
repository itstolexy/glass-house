"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ReservationModal from "../reservationModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      {/* Large Screens (md and above) */}
      <div className="hidden md:flex flex-row justify-between md:mx-16 mx-5 md:p-6 p-4 items-center border-b-2 border-b-[#EDF8FA] md:mb-20 mb-10">
        {/* Navigation Links */}
        <div className="raleway font-normal text-sm">
          <ul className="flex flex-row space-x-4">
            <li>
              <Link href="/menu">
                <p className="hover:text-[#E33629] transition-colors duration-300">
                  Menu
                </p>
              </Link>
            </li>
            <li>
              <Link href="/about-us">
                <p className="hover:text-[#E33629] transition-colors duration-300">
                  About Us
                </p>
              </Link>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <div className="flex justify-center items-center">
          <Image src="/images/logo.png" alt="logo" height={50} width={50} />
        </div>

        {/* Reservation Button */}
        <button
          onClick={toggleModal}
          className="roboto text-[14px] p-2 w-[167px] bg-[#E33629] text-white rounded-md hover:bg-[#c72a22] transition-colors duration-300"
        >
          Make Reservation
        </button>
      </div>

      {/* Small Screens (sm and below) */}
      <div className="flex md:hidden flex-row justify-between mx-5 p-4 items-center border-b-2 border-b-[#EDF8FA] mb-10">
        {/* Logo */}
        <div className="flex justify-center items-center">
          <Image src="/images/logo.png" alt="logo" height={50} width={50} />
        </div>

        {/* Menu Image (for opening mobile navigation, if applicable) */}
        <div className="flex justify-center items-center">
          <Image src="/images/menu.png" alt="menu" height={50} width={50} />
        </div>
      </div>

      {/* Reservation Modal */}
      <ReservationModal isOpen={isModalOpen} onClose={toggleModal} />
    </>
  );
};

export default Header;
