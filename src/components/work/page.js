import React from "react";
import Image from "next/image";

function WorkCard({ name, desc, image }) {
  return (
    <div className="flex gap-2 items-center justify-center p-2 cursor-pointer mobile:h-200px mobile:w-full mobile:flex-col mobile:center">
      <Image
        src={image}
        width={100}
        height={100}
        alt="featureimage"
        className="h-12 w-12 object-contain tablet:h-8 tablet:w-8 tablet:object-contain"
      />
      <div className="flex flex-col items-start justify-center p-2 tablet:p-0 rounded-md">
        <h4 className="font-bold text-md text-[#222] mobile:text-[13px]">
          {name}
        </h4>
        <h5 className="font-medium text-[#222] text-sm mobile:text-[12px]">
          {desc}
        </h5>
      </div>
    </div>
  );
}

export default WorkCard;
