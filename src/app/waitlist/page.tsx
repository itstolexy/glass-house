"use client";

import React, { useState } from "react";
import Image from "next/image";

const Waitlist = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch(
        "https://docs.google.com/spreadsheets/d/1X-u42EhQPs19JM7vNDqZ1DGMVzRvc3IuhpalX_r9TFk/edit?gid=0#gid=0",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (result.status === "success") {
        setMessage("Form submitted successfully!");
        setFormData({ name: "", email: "", phone: "" });
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("Failed to submit. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="md:mx-16 mx-5 md:pb-8">
      <div className="md:p-4 p-2">
        <Image src="/images/logo.png" alt="bar" height={60} width={60} />
      </div>
      <div className="flex flex-col items-center min-h-screen mt-5">
        <div className="flex flex-col space-y-6 items-start text-left max-w-[800px]">
          <div className="md:text-[56px] text-[38px] text-black font-bold raleway text-left">
            <p>The Glass House is</p>
            <p className="text-[#B8860B]"> almost Here!</p>
          </div>
          <h2 className="roboto font-normal md:text-lg text-base text-pretty">
            Step into Lagos’s ultimate destination for refined dining and
            unforgettable social moments. With sleek modern design, exceptional
            cuisine, and an atmosphere buzzing with vibrant energy, The Glass
            House redefines elegance and style.
          </h2>
          <span className="roboto font-normal md:text-lg text-base text-pretty space-y-1">
            <p>
              <b> Be Among the First ✨ </b>✨
            </p>
            <p>
              Join our waitlist to secure your spot and experience the perfect
              blend of sophistication, flavor, and allure.
            </p>
          </span>
        </div>
        <div className="flex flex-col items-center justify-center mt-5">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-md space-y-4 w-full max-w-md"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border roboto rounded-md focus:outline-none focus:ring-2 focus:ring-[#B8860B]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-md roboto focus:outline-none focus:ring-2 focus:ring-[#B8860B]"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded-md roboto focus:outline-none focus:ring-2 focus:ring-[#B8860B]"
              required
            />
            <button
              type="submit"
              className={`w-full bg-[#B8860B] text-white py-3 rounded-md font-bold transition duration-200 ${
                isSubmitting
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-[#B8860B]"
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "I'm in!"}
            </button>
            {message && (
              <p
                className={`mt-4 text-sm text-center roboto ${
                  message.includes("success")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
