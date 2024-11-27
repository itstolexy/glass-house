/* eslint-disable @next/next/no-img-element */
import React from "react";

const AboutUs = () => {
  return (
    <div className="flex md:flex-row flex-col items-center p-8">
      <div className="flex flex-col space-y-6 md:w-[50%] w-full">
        <h1 className="raleway text-5xl font-bold">The Glass House</h1>
        <p className="raleway text-lg font-medium">
          Glass House, established in 2018, is dedicated to providing an
          exceptional experience for relaxation and unwinding. We offer a warm
          and welcoming ambience suitable for both leisure and business
          gatherings. Our prime location in Lekki, Lagos, offers stunning views
          of the city while providing a tranquil escape. We cater to a diverse
          clientele, offering these distinct experiences
        </p>
        <p className="raleway text-lg font-medium">
          FoLiXx Hospitality offers a variety of spaces to suit your needs and
          preferences. Whether you&apus;re seeking a casual hangout, a romantic
          rendezvous, or a comfortable workspace, we create an atmosphere that
          makes you feel right at home.
        </p>
      </div>
      <div className="md:w-[50%] w-full mt-10 md:mt-0 md:ml-20">
        <img src="/images/gh1.png" alt="bar" />
      </div>
    </div>
  );
};

export default AboutUs;
