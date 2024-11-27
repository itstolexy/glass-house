import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import ContactUs from "../components/contactUs";

const Contact = () => {
  return (
    <div>
      <Header />
      <section id="about-us" className="md:mx-16 mx-5 my-16">
        <ContactUs />
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
