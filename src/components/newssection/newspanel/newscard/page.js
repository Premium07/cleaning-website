import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const News = ({ title, content, image, link }) => {
  return (
    <div className="card rouded-lg shadow-lg flex items-center justify-center gap-6 w-[500px] h-[220px] tablet:w-[400px] rounded-lg p-2 cursor-pointer tablet:h-[150px] mobile:w-[100%] mobile:flex mobile:flex-col mobile:h-[250px]">
      <Image
        src={image}
        height={100}
        width={100}
        quality={100}
        alt="newPoster"
        className="object-cover w-[200px] h-[200px] rounded-lg tablet:w-[150px] tablet:h-[120px] mobile:h-[100px] mobile:w-[100%] "
      />
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold text-lg tablet:text-sm mobile:text-xs">
          {title}
        </h2>
        <p className="text-gray-500 text-md tablet:text-sm mobile:text-xs">
          {content}
        </p>
        <Link
          href="#"
          className="text-[#4977e5] flex items-center justify-start gap-2 tablet:text-sm mobile:text-xs"
        >
          {link}
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default News;
