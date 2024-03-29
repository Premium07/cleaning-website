import Image from "next/image";
import React from "react";
import Picture from "../../../../public/image/clean.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";

const Footer1 = () => {
  let icons = [
    <FaFacebook />,
    <FaTwitter />,
    <FaInstagram />,
    <FaLinkedin />,
    <FaGoogle />,
  ];
  return (
    <div className="w-[30%] flex flex-col gap-5 p-2 mobile:mt-5 mobile:w-full">
      <Image
        src={Picture}
        height={100}
        width={100}
        quality={100}
        alt="footer-image link to home page"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis.
      </p>
      <div className="flex gap-4 cursor-pointer text-sm">
        {icons.map((icon, index)=> {
          return <Link key={index} href="#" className="hover:text-gray-400">{icon}</Link>;
        })}
      </div>
    </div>
  );
};

export default Footer1;
