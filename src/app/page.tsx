/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "./components/header";
import WelcomeSection from "./components/welcomeSection";
import AboutUs from "./components/aboutUs";
import Footer from "./components/footer";

const Home = () => {
  return (
    <div>
      <Header />
      <WelcomeSection />
      <figure className="w-full h-[70vh] relative overflow-hidden">
        <img
          src="/images/bar.png"
          alt="bar"
          className="w-full h-full object-cover"
        />
      </figure>
      <section id="about-us" className="md:mx-16 mx-5 my-16">
        <AboutUs />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
