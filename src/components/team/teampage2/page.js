import React from "react";
import TeamCard from "./teamcard/page";
import Pic1 from "../../../../public/image/pic1.png";
import Pic2 from "../../../../public/image/pic2.png";
import Pic3 from "../../../../public/image/pic3.png";
import Pic4 from "../../../../public/image/pic4.png";
function TeamPage2() {
  return (
    <div className="mt-10 flex justify-evenly w-[90vw] tablet:gap-2 tablet:py-2 py-4 mobile:flex-col mobile:gap-16 mobile:items-center">
      <TeamCard name="Avril Lavigne" job="Cleaner" pic={Pic1} />
      <TeamCard name="Alexa Bliss" job="Cleaner" pic={Pic2} />
      <TeamCard name="Steave Smith" job="Cleaner" pic={Pic3} />
      <TeamCard name="Jescia" job="Cleaner" pic={Pic4} />
    </div>
  );
}

export default TeamPage2;
