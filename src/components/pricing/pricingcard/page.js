import React from "react";
import { FaArrowRight } from "react-icons/fa";

function PricingCard({ type, price, duration }) {
  const features = [
    "Unlimited Access Courses",
    "Certificate After Completion",
    "High Resolution Videos",
    "24/7 Dedicated Support",
  ];
  return (
    <div className="flex flex-col gap-2 items-center shadow-xl rounded-2xl w-[100%] px-2 tablet:gap-1 py-4 tablet:p-2 mobile:p-1">
      <h3 className="text-[#4977e5] font-semibold text-xl mobile:text-sm">
        {type}
      </h3>
      <div className="flex items-center justify-center border-b-2 w-full pb-4">
        <h2 className="text-3xl font-semibold mobile:text-xl">{price}</h2>
        <span className="text-sm  text-gray-500">{duration}</span>
      </div>
      <ul className="mt-2 list-disc tablet:text-[16px] mobile:text-xs">
        {features.map((feature, index) => {
          return (
            <li key={index} className=" font-semibold mt-2 text-[#222] ">
              {feature}
            </li>
          );
        })}
      </ul>
      <div className="w-full">
        <button className="bg-[#4977e5] flex items-center justify-center gap-2 text-md rounded-full px-8 py-3 mt-4 w-full text-white font-semibold tablet:px-4 tablet:py-2 mobile:px-1 mobile:font-medium mobile:py-1 mobile:text-sm">
          Get Now <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default PricingCard;
