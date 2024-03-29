import Image from "next/image";
import React from "react";
import Pic from "../../../../public/image/girl.png";

const NewsletterImage = () => {
  return (
    <div>
      <Image
        src={Pic}
        height={400}
        width={400}
        quality={100}
        alt="newsletterpicture"
        className="object-cover h-80 w-auto tablet:w-auto tablet:h-56 tablet:contain absolute -top-8 left-8 mobile:h-32 mobile:w-auto"
      />
    </div>
  );
};

export default NewsletterImage;
