"use client";
import Image from "next/image";
import React, { useState } from "react";
import Pic from "../../../../public/image/officeclean.png";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    residence: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // console.log(formData);
  };

  return (
    <div className="w-[35%] mx-auto shadow-xl rounded-lg relative tablet:w-[50%] mobile:w-[100%] mobile:mt-5">
      <Image
        src={Pic}
        height={100}
        width={100}
        quality={100}
        alt="contactimage"
        className="w-[85px] absolute -top-10 -left-10 transform translate-x-4 translate-y-4 -rotate-[35deg] mobile:h-10 mobile:w-10 mobile:object-cover mobile:-left-6 mobile:-top-6"
      />
      <div className="text-center">
        <h2 className="text-4xl font-semibold">
          Having Question ? <br></br> Get in{" "}
          <span className="text-[#4477e5]">touch !</span>
        </h2>
      </div>
      <form
        className="bg-white rounded px-2 pt-4 pb-4 m-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Your Name
          </label>
          <input
            className="text-sm shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-[#4477e5]"
            id="name"
            type="text"
            placeholder="Enter your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Your Email
          </label>
          <input
            className="text-sm shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-[#4477e5]"
            id="email"
            type="email"
            placeholder="Enter your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="residence"
          >
            Your Residence
          </label>
          <select
            className="text-sm shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-[#4477e5]"
            id="residence"
            placeholder="Select your Residence"
            name="residence"
            value={formData.residence}
            onChange={handleChange}
          >
            <option value="" className="text-gray-500">
              Select your Residence
            </option>
            <option value="option1">option1</option>
            <option value="option2">option2</option>
            <option value="option3">option3</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 w-full rounded-full text-white font-semibold py-2 px-4 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
