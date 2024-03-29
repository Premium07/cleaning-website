import Image from "next/image";
import React from "react";
import Contact from "../../../../public/contactimage/contactsimg.png";

function ContactImage() {
  return (
    <div className="flex items-center justify-center tablet:justify-start w-[45%] mobile:w-full">
      <Image
        src={Contact}
        height={500}
        width={500}
        quality={100}
        className=""
        alt="ContactsImage"
      />
    </div>
  );
}

export default ContactImage;
