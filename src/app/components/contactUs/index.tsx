import React from "react";
import Image from "next/image";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";

const ContactUs = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
      <div className="flex flex-row space-x-4 items-start">
        <Image src="/images/time.png" alt="time" height={40} width={40} />
        <div className="flex flex-col space-y-2">
          <p className="raleway text-2xl font-bold">Open hours</p>
          <span className="roboto text-base font-normal">
            <p>Tuesday - Sunday</p>
            <p>6pm - 2am</p>
          </span>
        </div>
      </div>

      <div className="flex flex-row space-x-4 items-start">
        <Image
          src="/images/location.png"
          alt="location"
          height={40}
          width={40}
        />
        <div className="flex flex-col space-y-2">
          <p className="raleway text-2xl font-bold">Location</p>
          <span className="roboto text-base font-normal space-y-2">
            <p className="mb-4">KM 143, Lekki Epe expressway, Ikate lagos</p>
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

      <div className="flex flex-row space-x-4 items-start">
        <Image src="/images/contact.png" alt="contact" height={40} width={40} />
        <div className="flex flex-col space-y-2">
          <p className="raleway text-2xl font-bold">Contact Us</p>
          <div className="roboto text-base font-normal flex-col space-y-2">
            <span className="flex flex-row space-x-2">
              <LocalPhoneOutlinedIcon />
              <a href="tel:+2348091460009" className="text-black">
                08091460009
              </a>
            </span>

            <span className="flex flex-row space-x-2">
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

            <span className="flex flex-row space-x-2">
              <MailOutlinedIcon />
              <a href="mailto:info@glasshouselagos.com" className="text-black">
                info@glasshouselagos.com
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
