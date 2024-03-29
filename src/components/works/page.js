import React from "react";
import WorkCard from "../../components/work/page";
import Price from "../../../public/image/price.png";
import Delivery from "../../../public/image/delivery.png";
import Security from "../../../public/image/security.png";
import Support from "../../../public/image/support.png";

function Works() {
  const arr = [
    {
      name: "Best Price",
      des: "Cheap & best Price",
      image: Price,
    },
    {
      name: "Free Delivery",
      des: "Cheap & best Price",
      image: Delivery,
    },
    {
      name: "Customer's Protection",
      des: "Cheap & best Price",
      image: Security,
    },
    {
      name: "Live Support",
      des: "Cheap & best Price",
      image: Support,
    },
  ];
  return (
    <div className="flex w-full mt-5 gap-5 tablet:gap-2 items-center justify-around mobile:grid mobile:place-items-center mobile:grid-cols-2 mobile:gap-2">
      {arr.map((item, index) => {
        return (
          <WorkCard
            key={index}
            name={item.name}
            desc={item.des}
            image={item.image}
          />
        );
      })}
    </div>
  );
}

export default Works;
