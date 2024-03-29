import React from "react";
import Image from "next/image";
import Pic from "../../../public/image/hero.png";
import AboutUs from "../buttons/page";
import Book from "../buttons/book";
import Star from "../../../public/image/stars.png";

const Hero = () => {
  return (
    <div className="flex justify-between w-full mt-5 p-5 relative tablet:p-2 mobile:flex-col mobile:p-0 mobile:mt-10 ">
      <div className="w-[50%] flex flex-col gap-5 items-start tablet:gap-2 mobile:w-full mobile:gap-2 mobile:mt-2">
        <h3 className="uppercase text-[#4977e5] font-semibold py-4 tracking-widest mobile:text-lg">
          learn from today
        </h3>
        <h1 className="text-6xl font-bold leading-tight text-[#222] tablet:text-3xl mobile:text-[10vw] mobile:leading-[15vw]">
          <Image
            src={Star}
            height={100}
            width={100}
            quality={100}
            alt="star"
            className="absolute -left-2 top-[32%] h-12 w-12 object-contain md:top-[30%] tablet:-left-2 tablet:h-6 tablet:w-6 mobile:top-28 mobile:-left-4"
          />
          Happiness is Freely <br></br>
          <span className="text-[#4977e5]">Cleaning</span> House
        </h1>
        <h4 className="text-[1.3rem] mt-5 text-gray-400 tablet:text-lg mobile:text-sm">
          Awesome site. on the top advertising a Courses available business
          online includes assembling having awesome site on the top advertising
          a Courses available business having..
        </h4>
        <div>
          <AboutUs />
          <Book />
        </div>
      </div>
      <div className="flex justify-center items-center w-[50%]  mobile:mt-4 mobile:w-auto mobile:h-[30vh] overflow-hidden relative">
        <Image
          src={Pic}
          width={700}
          height={700}
          alt="Hero image"
          className="object-cover h-full w-full tablet:w-[80vw] tablet:object-cover mobile:w-[100%] mobile:h-auto mobile:object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
