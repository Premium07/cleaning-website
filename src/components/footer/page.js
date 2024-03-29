import React from "react";
import Footer1 from "./footer1/page";
import Footer2 from "./footer2/page";
import Link from "next/link";

function Footer() {
  const footerlinks = ["Privacy Policy", "Terms of Use", "Legal", "Site Map"];
  return (
    <div className="w-full bg-[#051625] px-5 mt-[300px] text-white flex flex-col justify-end h-[50vh] tablet:h-[40vh] mobile:py-2 mobile:pt-10 mobile:h-full">
      <div className="flex justify-around mobile:flex-col">
        <Footer1 />
        <Footer2 />
      </div>

      <div className="border-t-[1px] py-5 border-white mt-5 mobile:w-full mobile:py-2">
        <div className="flex justify-around mobile:flex-col mobile:gap-4">
          <h4 className="text-[14px]">
            <span className="text-xl">&copy;</span> Copyright by CodedUI. All
            rights reserved.
          </h4>
          <div className="flex gap-6">
            {footerlinks.map((footerlink, index) => {
              return (
                <Link key={index} href="#" className="text-sm hover:text-gray-400">
                  {footerlink}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
