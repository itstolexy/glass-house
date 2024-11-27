/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

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
        <span className="raleway md:text-3xl text-xl font-bold">
          <p>Why Choose The Glass House?</p>
        </span>
        <span className="flex flex-col space-y-1">
          <h1 className="raleway md:text-lg text-base font-bold">
            Iconic Design & Aesthetics
          </h1>
          <p className="raleway md:text-base text-sm font-medium">
            A breathtaking blend of glass architecture and stylish interiors,
            perfect for unforgettable photos and Instagram-worthy moments.
          </p>
        </span>
        <span className="flex flex-col space-y-1">
          <h1 className="raleway md:text-lg text-base font-bold">
            Innovative Menu
          </h1>
          <p className="raleway md:text-base text-sm font-medium">
            Experience a fusion of international fine dining and elevated
            African cuisine, paired with signature cocktails for a truly unique
            culinary journey.
          </p>
        </span>
        <span className="flex flex-col space-y-1">
          <h1 className="raleway md:text-lg text-base font-bold">
            Vibrant Entertainment
          </h1>
          <p className="raleway md:text-base text-sm font-medium">
            Enjoy exclusive events, live performances, and themed nights that
            keep the energy alive and guests coming back for more.
          </p>
        </span>

        <h1 className="raleway md:text-base text-sm italic">
          The Glass House - Where Elegance, Flavor, and Entertainment Meet.
        </h1>
      </div>

      <div className="md:w-[50%] w-full mt-10 md:mt-0 md:ml-20">
        <img
          src={images[currentImageIndex]}
          alt="carousel"
          className="w-full md:h-[500px] h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default AboutUs;
