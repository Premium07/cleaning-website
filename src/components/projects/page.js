import React from "react";
import Projects from "../Project/page";

const ProjectsDet = () => {
  return (
    <>
      <div className="mt-10 py-5 w-full text-center flex flex-col gap-6 mobile:py-2 mobile:gap-3 mobile:mt-5">
        <h2 className="text-4xl font-semibold text-[#222] mobile:text-2xl mobile:mt-2 mobile:py-2">
          Keep your vision to our latest projects.
        </h2>
        <p className="text-lg text-gray-500 mobile:text-[12px] mobile:leading-5">
          Awesome site. on the top advertising a business online includes{" "}
          <br></br>
          assembling Having the most keep.
        </p>
      </div>
      <Projects />
    </>
  );
};

export default ProjectsDet;
