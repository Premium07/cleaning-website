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
    item: "123455678",
    icon: <FaPhone />,
  },
  {
    item: "support@gmail.com",
    icon: <IoMail />,
  },
  { item: "380 Address, Street", icon: <FaLocationDot /> },
  { item: "Sunday-Friday 9:00am-10pm", icon: <HiClock /> },
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
        <ul className="text-[16px] text-white flex gap-4 tablet:text-right tablet:text-sm">
          {contacts.map((contact, index) => {
            // console.log(contact.number);
            return (
              <li
                key={index}
                className="border-r-2 px-2 flex items-center justify-center gap-1 tablet:px-1"
              >
                {contact.icon}
                {contact.item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Contact;
