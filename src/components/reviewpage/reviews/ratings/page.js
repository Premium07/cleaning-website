"use client";
import React, { useState } from "react";
import { IoStar, IoStarOutline } from "react-icons/io5";

const Ratings = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="flex gap-3 text-2xl">
      {[1, 2, 3, 4, 5].map((num, index) => (
        <IoStar
          onClick={() => setRating(num)}
          onMouseOver={() => setHover(num)}
          onMouseLeave={() => setHover(rating)}
          key={index}
          className={`cursor-pointer ${
            num <= 3 ? "text-yellow-300" : "text-gray-400"
          }`}
        />
      ))}
    </div>
  );
};

export default Ratings;
