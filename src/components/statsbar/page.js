import React from "react";
import Stats from "./stats/page";

function StatsBar() {
  return (
    <div className="w-[90%] rounded-xl bg-[#4881d6] flex justify-between items-center mt-5 mobile:w-full mobile:grid mobile:grid-cols-2 mobile:place-items-center mobile:py-2">
      <Stats stat="500+" status="Projects Done" />
      <Stats stat="800" status="Happy Clients" />
      <Stats stat="18+" status="Award Winner" />
      <Stats stat="600+" status="Team Member" />
    </div>
  );
}

export default StatsBar;
