/* eslint-disable @next/next/no-img-element */
"use client"

import React, { useState, useEffect } from "react";

const AboutUs = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = ["/images/gh1.png", "/images/gh2.png", "/images/gh3.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex md:flex-row flex-col items-center md:p-8 p-2">
      <div className="flex flex-col space-y-6 md:w-[50%] w-full">
        <h1 className="raleway md:text-5xl text-[38px] font-bold">
          The Glass House
        </h1>
        <p className="raleway md:text-lg text-base font-medium">
          Glass House, established in 2018, is dedicated to providing an
          exceptional experience for relaxation and unwinding. We offer a warm
          and welcoming ambience suitable for both leisure and business
          gatherings. Our prime location in Lekki, Lagos, offers stunning views
          of the city while providing a tranquil escape. We cater to a diverse
          clientele, offering these distinct experiences.
        </p>
        <p className="raleway md:text-lg text-base font-medium">
          FoLiXx Hospitality offers a variety of spaces to suit your needs and
          preferences. Whether you’re seeking a casual hangout, a romantic
          rendezvous, or a comfortable workspace, we create an atmosphere that
          makes you feel right at home.
        </p>
      </div>

      <div className="md:w-[50%] w-full mt-10 md:mt-0 md:ml-20">
        <img
          src={images[currentImageIndex]}
          alt="carousel"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default AboutUs;
