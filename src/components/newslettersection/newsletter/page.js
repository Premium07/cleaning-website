"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoMailOutline } from "react-icons/io5";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <div className="flex flex-col gap-4 items-start py-4 justify-center tablet:w-[50%] tablet:justify-around tablet:gap-2 mobile:w-[90vw] h-[50vh] mobile:justify-center mobile:mt-[50px] mobile:gap-3 mobile:px-2 tablet:h-auto">
      <h1 className="text-3xl text-white tablet:text-xl mobile:text-lg text-left">
        Subscribe to our newsletter to get <br></br> updates to our latest
        collections
      </h1>
      <p className="text-white tablet:text-md mobile:text-sm">
        Get 20% off on your first order just by subscribing to our newsletter
      </p>
      <div className="flex justify-center bg-[#668de9] rounded-full p-1 pl-2 backdrop-blur-md text-white items-center mobile:justify-center mobile:w-[100%] mobile:px-1 tablet:w-full">
        <form
          onSubmit={handleSubmit}
          className="mobile:flex mobile:w-[100%] mobile:items-center tablet:flex tablet:items-center mobile:justify-around tablet:justify-between flex w-full justify-between items-center"
        >
          <IoMailOutline className="mobile:w-[10%] tablet:w-[10%] w-[10%]" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="rounded-full p-2 bg-transparent outline-none border-none text-white placeholder:text-white mobile:w-[60%] tablet:w-[50%] w-[50%]"
          />
          <button
            type="submit"
            className="mobile:w-[30%] px-4 py-2 bg-white text-black rounded-full text-md font-medium mobile:text-sm"
          >
            Subscribe
          </button>
        </form>
      </div>
      <p className="text-white font-normal mobile:text-sm">
        You will be able to unsubscribe at any time. <br></br>
        Read our privacy policy{" "}
        <Link href="#" className="underline">
          here
        </Link>
      </p>
    </div>
  );
};

export default Newsletter;
