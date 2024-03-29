import React from "react";
import Image from "next/image";
import Pic from "../../../public/image/area.png";
const Area = () => {
  return (
    <div className=" flex w-full gap-4 mt-5 items-center py-2 justify-between mobile:flex-col mobile:mt-2">
      <div className="flex flex-col gap-4 mt-5 items-start tablet:gap-2 mobile:w-full">
        <h2 className="text-3xl font-bold text-[#222] tablet:text-2xl">
          We Make Clots Look Great
        </h2>
        <div className="w-[42vw] flex flex-col gap-4 tablet:gap-2 mobile:w-full">
          <p className="text-[17px] tablet:text-sm text-gray-600">
            Training programs can bring you a super exciting experience of
            learning through online! You never face any negative experience
            while enjoying your classes Awesome site. on the top advertising a
            Courses available available business having..
            <br></br> <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate ad litora torquent
          </p>
        </div>
        <ul className="flex flex-col gap-4 tablet:mt-2 tablet:gap-2">
          {[
            "Residential Cleaning Services Near You!",
            "Commercial Cleaning Service In Australia.",
            "Professional Floor & Carpet Cleaning.",
          ].map((item, index) => {
            return (
              <li key={index} className="list-['-'] font-semibold">
                {item}
              </li>
            );
          })}
        </ul>
        <button className="px-8 py-[12px] font-medium bg-[#4977e5] rounded-full text-white mt-6 text-[16px] mr-4 tablet:px-4 tablet-[8px] mobile:py-2 mobile:px-4">
          Learn More
        </button>
      </div>
      <div className="h-full">
        <Image
          src={Pic}
          width={500}
          height={500}
          quality={100}
          alt="section-image"
          className="w-[100%] h-[100%] object-cover mobile:p-4"
        />
      </div>
    </div>
  );
};

export default Area;
