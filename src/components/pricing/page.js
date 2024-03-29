import React from "react";
import PricingDesc from "./pricing1/page";
import PricingCard from "./pricingcard/page";

function Pricing() {
  return (
    <div className="flex justify-evenly tablet:justify-between w-full p-2 tablet:p-0 mt-20 items-center mobile:flex-col mobile:p-0">
      <PricingDesc />
      <div className="flex gap-4 items-center justify-between w-[40%] tablet:w-[60%] tablet:gap-2 tablet:px-2 mobile:w-full mobile:gap-1 mobile:mt-2">
        <PricingCard type="Commercial" price="$20/" duration="Month" />
        <PricingCard type="Personal" price="$60/" duration="Month" />
      </div>
    </div>
  );
}

export default Pricing;
