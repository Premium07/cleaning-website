import React from "react";
import Pic from "../../../../public/reviewsimage/pic1.png";
import Pic2 from "../../../../public/reviewsimage/pic2.png";
import Image from "next/image";

function Reviewers() {
  const reviewers = [Pic, Pic2, Pic, Pic2, Pic];
  return (
    <div className="flex p-2 gap-2">
      {reviewers.map((reviewer, index) => {
        return (
          <div key={index} className="">
            <Image
              src={reviewer}
              alt="Reviwers Picture"
              height={50}
              width={50}
              quality={100}
              className="object-cover cursor-pointer hover:scale-150 transition-all duration-500"
            />
          </div>
        );
      })}
    </div>
  );
}

export default Reviewers;
