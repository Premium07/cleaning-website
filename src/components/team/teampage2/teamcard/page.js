import Image from "next/image";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function TeamCard({ name, job, pic }) {
  return (
    <div className="w-[300px] flex flex-col justify-center items-center relative">
      <Image
        src={pic}
        height={200}
        width={500}
        quality={100}
        alt="cleanersPic"
        className="w-[250px] object-cover"
      />
      <div className="bg-white w-[70%] absolute z-10 tablet:h-[90px] tablet:py-2 h-[100px] bottom-[-20%] border-t-8 border-blue-600 text-center shadow-md rounded-b-xl">
        <h4 className="font-semibold text-lg tablet:text-md">{name}</h4>
        <h5 className="text-gray-500 tablet:text-md">{job}</h5>
        <div className="flex gap-2 items-center justify-center mt-1 text-blue-500 text-sm cursor-pointer">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
