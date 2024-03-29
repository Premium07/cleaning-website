"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import Image from "next/image";
import pic from "../../../public/image/Layer_1.png";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const NavBar = () => {
  const [subs, setSubs] = useState(false);
  const [showID, setShowID] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };
  const links = [
    {
      title: "Home",
    },
    {
      title: "Services",
      icon: <IoIosArrowDown />,

      sub: [
        {
          subTitle: "Home service",
        },
        {
          subTitle: "Car service",
        },
        {
          subTitle: "Toilet service",
        },
        {
          subTitle: "Laundry service",
        },
      ],
    },
    {
      title: "Pages",
    },
    {
      title: "About",
    },
    {
      title: "Contact",
    },
  ];
  return (
    <>
      <div
        className={`flex w-full justify-between items-center py-2 px-4 mobile:py-2 mobile:gap-2 mobile:mb-0 mobile:fixed mobile:z-20 mobile:left-0 mobile:top-0 mobile:bg-slate-100 mobile:shadow-sm transition-all duration-500 ease-out mobile:flex-col mobile:items-start mobile:h-[10vh]`}
      >
        <div className="h-[100%] w-[20%] flex items-center justify-center mobile:w-[100%] mobile:flex mobile:justify-between">
          <Image
            src={pic}
            alt="logo"
            height={100}
            width={100}
            quality={100}
            className="object-contain h-20 w-36 mobile:w-32 mobile:h-auto"
          />
          <div
            onClick={toggleNavBar}
            className="text-3xl shadow-sm rounded-md p-1 tablet:hidden desktop:hidden laptop:hidden mobile:absolute right-1 pr-2"
          >
            {isOpen ? <RxCross1 /> : <RxHamburgerMenu />}
          </div>
        </div>
        <div
          className={`${
            isOpen
              ? "mobile:translate-x-0 mobile:bg-slate-100"
              : "mobile:-translate-x-full"
          } transition-all duration-500 mobile:absolute mobile:left-0 mobile:top-[10vh] mobile:px-4 mobile:w-full w-[80%] mobile:justify-between mobile:items-start mobile:gap-10 flex justify-around`}
        >
          <div className="flex items-center justify-center gap-10 tablet:gap-5 mobile:flex-col mobile:items-start mobile:gap-2 mobile:py-2 mobile:text-2xl">
            {links.map((link, index) => {
              // console.log(showID);
              return (
                <div key={index} className="relative text-gray-600 text-lg">
                  <div
                    className="cursor-pointer flex items-center justify-center gap-1"
                    onClick={() => {
                      setSubs(!subs), setShowID(index);
                    }}
                  >
                    {link.title}
                    {link.icon}
                  </div>
                  {showID === index && subs ? (
                    <div className="absolute mt-4 rounded-lg pb-2 px-2 shadow-lg transition-all ease-in-out z-[2] mobile:left-12 mobile:top-0 mobile:bg-slate-100">
                      {link?.sub?.map((subs, ind) => {
                        return (
                          <div
                            key={ind}
                            className="w-40 mt-2 hover:text-blue-500 hover:bg-[#f0f4fd] rounded-sm p-1 cursor-pointer"
                          >
                            {subs.subTitle}
                          </div>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
          <div className="flex items-center w-[10%] gap-4 text-2xl cursor-pointer mobile:w-full mobile:mt-2 mobile:text-2xl tablet:text-3xl">
            <CiSearch className="border-r-2" />
            <CiShoppingCart />
            <BsPerson />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
