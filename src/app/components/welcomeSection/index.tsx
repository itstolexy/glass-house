import Link from "next/link";
import React from "react";

function WelcomeSection() {
  return (
    <section className="flex md:flex-row flex-col md:mx-16 mx-5 md:mb-20 mb-16 md:items-start">
      <span className="md:text-[56px] text-[38px] md:w-[610px] text-black font-bold raleway">
        Welcome to The Glass House
      </span>
      <div className="flex flex-col mt-12 md:mt-0 space-y-6 md:ml-8">
        <div className="flex flex-col space-y-4 raleway font-normal md:text-lg text-base text-pretty">
          <p>
            The Glass House Lagos is a sophisticated mid-scale restaurant and
            lounge designed to redefine dining and social experiences in Lagos.
          </p>
          <p>
            It embodies elegance, innovation, and vibrant energy, offering a
            seamless blend of upscale cuisine, exceptional service, and a
            stylish and alluring ambiance.
          </p>
          <p>
            With our modern architecture and warm, inviting atmosphere, The
            Glass House serves as a haven for food lovers, trendsetters, and
            socialites alike.
          </p>
        </div>

        <Link href="/menu">
          <button className="p-3 border rounded-md w-32 bg-black text-white">
            View Menu
          </button>
        </Link>
      </div>
    </section>
  );
}

export default WelcomeSection;
