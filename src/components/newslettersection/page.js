import React from "react";
import NewsletterImage from "./newsletterimage/page";
import Newsletter from "./newsletter/page";

const NewsletterSection = () => {
  return (
    <div className="relative w-full flex justify-center">
      <div className="w-[80vw] bg-[#4977E5] p-4 h-[50vh] rounded-[16px] flex justify-around tablet:p-2 items-center absolute tablet:h-[30vh] tablet:justify-between tablet:-bottom-96 mobile:flex-col mobile:h-[45vh] mobile:w-[90vw] mobile:p-2 mobile:pb-0">
        <NewsletterImage />
        <Newsletter />
      </div>
    </div>
  );
};

export default NewsletterSection;
