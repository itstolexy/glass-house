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
        <span className="raleway md:text-5xl text-[38px] font-bold">
          <p>Why Choose</p> <p>The Glass House?</p>
        </span>
        <span className="flex flex-col space-y-1">
          <h1 className="raleway md:text-2xl text-lg font-bold">
            Iconic Design & Instagram-Worthy Aesthetics
          </h1>
          <p className="raleway md:text-lg text-base font-medium">
            Immerse yourself in a visually stunning space featuring breathtaking
            glass architecture and stylish interiors. Every corner is crafted to
            serve as the perfect backdrop for your memorable photos and
            share-worthy moment
          </p>
        </span>
        <span className="flex flex-col space-y-1">
          <h1 className="raleway md:text-2xl text-lg font-bold">
            An Innovative Menu for Culinary Adventurers
          </h1>
          <p className="raleway md:text-lg text-base font-medium">
            Savor the fusion of international fine dining and elevated African
            cuisine. Paired with our signature cocktails, each dish delivers a
            unique culinary journey designed to delight your senses and leave
            you craving more.
          </p>
        </span>
        <span className="flex flex-col space-y-1">
          <h1 className="raleway md:text-2xl text-lg font-bold">
            Vibrant Performances & Entertainment
          </h1>
          <p className="raleway md:text-lg text-base font-medium">
            From exclusive events to captivating live performances and themed
            nights, The Glass House ensures there’s always something
            extraordinary happening. Perfect for first-time visitors and loyal
            guests alike, the energy here is unmatched.
          </p>
        </span>

        <h1 className="raleway md:text-2xl text-lg font-bold">
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
