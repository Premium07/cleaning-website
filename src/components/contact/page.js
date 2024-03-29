import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { HiClock } from "react-icons/hi2";

const contacts = [
  {
    number: "123455678",
    email: "support@gmail.com",
    street: "380 Address, Street",
    timings: "Sunday-Friday 9:00am-10pm",
  },
];

function Contact() {
  return (
    <div className="w-full h-10 bg-blue-700 flex justify-evenly tablet:p-1 p-2 mobile:hidden">
      <div className=" h-[100%] flex text-white items-center gap-4 text-lg cursor-pointer tablet:w-[20%]">
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
        <FaBehance />
      </div>
      <div className="flex h-[100%] text-white gap-4 items-center justify-end tablet:-[80%]  tablet:justify-end">
        {contacts.map((contact, index) => {
          // console.log(contact.number);
          return (
            <ul
              key={index}
              className="text-[16px] text-white flex gap-4 tablet:text-right tablet:text-sm"
            >
              <li className="border-r-2 px-2 flex items-center justify-center gap-1 tablet:px-1">
                <FaPhone />
                {contact.number}
              </li>
              <li className="border-r-2 px-2 flex items-center justify-center gap-1 tablet:px-1">
                <IoMail />
                {contact.email}
              </li>
              <li className="border-r-2 px-4 flex items-center justify-center gap-1 tablet:px-1">
                <FaLocationDot />
                {contact.street}
              </li>
              <li className="px-2 flex items-center justify-center gap-1 tablet:px-1">
                <HiClock />
                {contact.timings}
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default Contact;
