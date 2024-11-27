/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Menu() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back(); // This will navigate to the previous page
  };

  return (
    <div className="p-8 flex-col">
      <div className="cursor-pointer" onClick={handleBackClick}>
        <ArrowBackIcon />
      </div>

      <div className="flex flex-col justify-center font-light min-h-screen items-center raleway md:text-5xl text-3xl space-y-8">
        <p className="transform transition-all duration-300 hover:translate-x-16">
          Fine Dining
        </p>
        <p className="transform transition-all duration-300 hover:translate-x-16">
          Casual Dining
        </p>
        <p className="transform transition-all duration-300 hover:translate-x-16">
          Bar
        </p>
        <p className="transform transition-all duration-300 hover:translate-x-16">
          Dessert
        </p>
        <div className="-mt-10">
          <img
            src="/images/cocktail.png"
            alt="bar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Menu;
