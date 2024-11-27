import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";

const Contact = () => {
  return (
    <div>
      <Header />
      <section id="about-us" className="md:mx-16 mx-5 my-16">
        <div className="flex md:flex-row flex-col md:space-x-16 space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div className="flex flex-col space-y-4 items-center">
              <Image src="/images/time.png" alt="time" height={40} width={40} />
              <div className="flex flex-col space-y-2 items-center text-center">
                <p className="raleway text-2xl font-bold">Open hours</p>
                <span className="roboto text-base font-normal">
                  <p>Tuesday - Sunday</p>
                  <p>6pm - 2am</p>
                </span>
              </div>
            </div>

            <div className="flex flex-col space-y-4 items-center">
              <Image
                src="/images/location.png"
                alt="location"
                height={40}
                width={40}
              />
              <div className="flex flex-col space-y-2 items-center text-center">
                <p className="raleway text-2xl font-bold">Location</p>
                <span className="roboto text-base font-normal space-y-2">
                  <p className="mb-4">
                    KM 143, Lekki Epe expressway, Ikate Lagos
                  </p>
                  <a
                    href="https://www.google.com/maps?q=KM+143,+Lekki+Epe+expressway,+Ikate+Lagos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-blue-700 transition-colors duration-300"
                  >
                    Get directions &gt;
                  </a>
                </span>
              </div>
            </div>

            <div className="flex flex-col space-y-4 items-center text-center">
              <Image
                src="/images/contact.png"
                alt="contact"
                height={40}
                width={40}
              />
              <div className="flex flex-col space-y-2 items-center text-center">
                <p className="raleway text-2xl font-bold">Contact Us</p>
                <div className="roboto text-base font-normal flex flex-col space-y-2 md:items-center text-center">
                  <span className="flex flex-row space-x-2 items-center justify-center">
                    <LocalPhoneOutlinedIcon />
                    <a href="tel:+2348091460009" className="text-black">
                      08091460009
                    </a>
                  </span>

                  <span className="flex flex-row space-x-2 items-center justify-center">
                    <InstagramIcon />
                    <a
                      href="https://www.instagram.com/theglasshouselagos/"
                      className="text-black"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @theglasshouselagos
                    </a>
                  </span>

                  <span className="flex flex-row space-x-2 items-center justify-center">
                    <MailOutlinedIcon />
                    <a
                      href="mailto:info@glasshouselagos.com"
                      className="text-black"
                    >
                      info@glasshouselagos.com
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-auto">
            <iframe
              src="https://www.google.com/maps?q=KM+143,+Lekki+Epe+expressway,+Ikate+Lagos&output=embed"
              width="100%"
              height="100%"
              allowFullScreen={true}
              loading="lazy"
              style={{ border: 0 }}
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
