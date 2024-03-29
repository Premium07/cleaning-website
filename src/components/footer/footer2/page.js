import Link from "next/link";
import React from "react";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Footer2 = () => {
  const companylinks = ["About Us", "Services", "Community", "Testimonial"];
  const supportlinks = ["Help Center", "Tweet @ Us", "Webians", "Feedback"];
  const servicelinks = ["Courses", "Become Teacher", "Services", "All in One"];
  const contacts = [{
    number: "123455678",
    email: "support@gmail.com",
  }];

  return (
    <div className="w-[70%] flex gap-4 justify-around mobile:grid mobile:grid-cols-2 mobile:w-[100%] mobile:mt-5">
      <div className="flex flex-col gap-4 mobile:gap-2">
        <h3 className="text-lg">Company</h3>
        <div className="flex flex-col gap-1">
          {companylinks.map((item, index) => {
            return (
              <Link key={index} href="#" className="text-sm hover:text-gray-400">
                {item}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-lg">Support</h3>
        <div className="flex flex-col gap-1">
          {supportlinks.map((item, index) => {
            return (
              <Link key={index} href="#" className="text-sm hover:text-gray-400">
                {item}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-lg">Links</h3>
        <div className="flex flex-col gap-1">
          {servicelinks.map((item, index) => {
            return (
              <Link key={index} href="#" className="text-sm hover:text-gray-400">
                {item}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-lg">Contacts</h3>
        <div className="flex flex-col gap-1">
          {contacts.map((contact, index) => {
            return (
              <div key={index} className="flex flex-col gap-2">
                <Link href="#" className="text-sm flex gap-2 items-center hover:text-gray-400">
                  <FaPhone/>
                  {contact.number}
                </Link>
                <Link href="#" className="text-sm flex gap-2 items-center hover:text-gray-400">
                  <IoMail/>
                  {contact.email}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer2;
