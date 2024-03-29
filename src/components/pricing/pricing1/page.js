import React from "react";
import Image from "next/image";
import Player from "../../../../public/image/player.png";

function PricingDesc() {
  return (
    <div className="w-[40%] flex flex-col gap-6 mobile:w-full">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold text-[#222]">Save 30% Monthly</h2>
        <p className="text-gray-500 text-xl tablet:text-sm mobile:text-sm">
          Training programs can bring you a super exciting experience of
          learning through online! You never face any negative experience while
          enjoying your classes Awesome site. on the top advertising.
        </p>
      </div>
      <div className="flex justify-center items-center mt-2 w-fit mobile:mt-1">
        <Image
          src={Player}
          width={100}
          height={100}
          quality={100}
          alt="Play"
          className="w-[50px] h-[50px] object-cover cursor-pointer"
        />
        <h5 className="font-semibold">Video Presentation</h5>
      </div>
    </div>
  );
}

export default PricingDesc;
