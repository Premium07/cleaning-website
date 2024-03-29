import React from "react";

function Stats({ stat, status }) {
  return (
    <div className="w-96 h-52 flex flex-col justify-center items-center mobile:w-56 mobile:h-auto">
      <div className="flex flex-col items-start justify-start gap-2 mobile:gap-x-2.5 mobile:gap-1">
        <h2 className="text-6xl text-white font-extrabold mobile:text-3xl">{stat}</h2>
        <h5 className="text-md text-white mobile:text-sm">{status}</h5>
      </div>
    </div>
  );
}

export default Stats;
