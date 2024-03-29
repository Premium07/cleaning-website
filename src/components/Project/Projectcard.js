import React from "react";
import Image from "next/image";

function Projectcard({ image, name, desc }) {
  return (
    <div className="flex gap-5 p-2 hover:bg-[#4977e5] transition-all duration-300 rounded-lg flex-col cursor-pointer w-[400px] tablet:w-[250px]  mobile:gap-2 mobile:justify-center mobile:w-[90%]">
      <div className="rounded-full p-2 bg-[#dadada] w-fit">
        <Image
          src={image}
          width={100}
          height={100}
          alt="project logo"
          className="h-20 w-20 object-cover rounded-full"
        />
      </div>

      <div className="flex flex-col gap-2 items-start justify-center p-2 hover:text-white">
        <h4 className="font-bold text-xl  tablet:text-2xl">{name}</h4>
        <h5 className="font-medium text-gray-400 text-lg tablet:text-md tablet:leading-6">
          {desc}
        </h5>
      </div>
    </div>
  );
}

export default Projectcard;
