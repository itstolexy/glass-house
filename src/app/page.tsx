/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Header from "./components/header";
import WelcomeSection from "./components/welcomeSection";
import Footer from "./components/footer";
import ContactUs from "./components/contactUs";
import AboutUs from "./components/aboutUs";
import ReservationModal from "./components/reservationModal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div>
      <Header />
      <WelcomeSection />
      <figure className="h-[70vh] relative overflow-hidden md:mx-16 mx-5 group">
        <img
          src="/images/bar.png"
          alt="bar"
          className="w-full h-full object-cover rounded-md"
        />
        <span className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h1 className="raleway md:text-5xl text-2xl text-center font-medium">
            The Glass House
          </h1>
          <p className="italic roboto font-thin md:text-lg text-base mt-3">
            Even stones are edible
          </p>
          <button
            onClick={() => {
              toggleModal();
            }}
            className="roboto text-[14px] p-2 w-[167px] bg-[#B8860B] text-white rounded-md hover:bg-[#B8860B] transition-colors duration-300 mt-4"
          >
            Make Reservation
          </button>
        </span>
      </figure>

      <section id="about-us" className="md:mx-16 mx-5 my-16">
        <ContactUs />
      </section>
      <section className="bg-black text-white">
        <div className="md:mx-16 mx-5 mt-16">
          <AboutUs />
        </div>
      </section>
      <footer>
        <Footer />
      </footer>

      <ReservationModal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
};

export default Home;
