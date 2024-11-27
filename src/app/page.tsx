/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "./components/header";
import WelcomeSection from "./components/welcomeSection";
import Footer from "./components/footer";
import ContactUs from "./components/contactUs";
import AboutUs from "./components/aboutUs";

const Home = () => {
  return (
    <div>
      <Header />
      <WelcomeSection />
      <figure className="h-[70vh] relative overflow-hidden md:mx-16 mx-5">
        <img
          src="/images/bar.png"
          alt="bar"
          className="w-full h-full object-cover"
        />
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
    </div>
  );
};

export default Home;
