"use client";
import Image from "next/image";
import React, { useState } from "react";
import Left from "../../../../public/reviewsimage/leftarrow.png";
import Right from "../../../../public/reviewsimage/rightarrow.png";
import Symbol from "../../../../public/reviewsimage/symbol.png";
import Ratings from "./ratings/page";
// import { FaRegStar } from "react-icons/fa";
// import { Rating } from "react-simple-star-rating";

function Reviews() {
  // const [rating, setRating] = useState(0)
  const [current, setCurrent] = useState(0);
  const reviews = [
    {
      reviewer: "John Doe",
      review: `Training programs can bring you a super exciting experience of learning through online! You never face any negative experience while enjoying your classes Awesome  site. on the top advertising a Courses available available business having..`,
    },
    {
      reviewer: "Alex Bliss",
      review: `Awesome  site. on the top advertising a Courses available business online includes assembling having awesome  site on the top advertising a Courses available business having..`,
    },
    {
      reviewer: "Steve Smith ",
      review: `Training programs can bring you a super exciting experience of learning through online! You never face any negative experience while enjoying your classes Awesome  site. on the top advertising a Courses available available business having..`,
    },
    {
      reviewer: "Jessica",
      review: `Training programs can bring you a super exciting experience of learning through online! You never face any negative experience while enjoying your classes Awesome  site. on the top advertising a Courses available available business having..`,
    },
    {
      reviewer: "Avril Lavgine",
      review: `Training programs can bring you a super exciting experience of learning through online! You never face any negative experience while enjoying your classes Awesome  site. on the top advertising a Courses available available business having..`,
    },
  ];
  // const handleRating = (rate, number) => {
  //   setRating(rate)}
  return (
    <>
      <div className="flex justify-center mt-5">
        <Ratings />
      </div>

      <div className="flex w-full items-center justify-between mt-5 py-2 h-[30vh] tablet:h-[20vh] mobile:h-[30vh]">
        {/* {console.log(reviews.length, current)} */}
        <Image
          onClick={() =>
            setCurrent(current === 0 ? reviews.length - 1 : current - 1)
          }
          src={Left}
          alt="leftarrow"
          height={100}
          width={100}
          quality={100}
          className="mobile:w-10 cursor-pointer"
        />
        <div className="w-[80%] text-center mobile:w-full">
          <div
            className={
              "text-md flex text-center transition-all duration-1000 ease-in-out mobile:w-full"
            }
          >
            {reviews.map((review, index) => {
              return (
                <>
                  {index === current && (
                    <div
                      className="flex flex-col justify-center items-center gap-3 mobile:h-[10vh] mobile:w-[100%] transition-all duration-500"
                      key={index}
                    >
                      <div key={index}>
                        <h3 className="text-xl font-semibold">
                          {review.reviewer}
                        </h3>
                      </div>
                      <div key={index} className="text-gray-500 w-1/2 tablet:w-[100%] mobile:text-sm  mobile:w-[100%]">
                        {review.review}
                      </div>
                    </div>
                  )}
                </>
              );
            })}
          </div>
        </div>
        <Image
          onClick={() =>
            setCurrent(current === reviews.length - 1 ? 0 : current + 1)
          }
          src={Right}
          alt="rightarrow"
          height={100}
          width={100}
          quality={100}
          className="mobile:w-10 cursor-pointer"
        />
      </div>
      <Image
        src={Symbol}
        alt="quotesymbol"
        height={100}
        width={100}
        quality={100}
        className="mt-4 w-5 h-5 object-cover"
      />
    </>
  );
}

export default Reviews;
