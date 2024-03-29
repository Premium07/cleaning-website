import React from "react";
import Projectcard from "./Projectcard";
import Office from "../../../public/image/officeclean.png";
import Toilet from "../../../public/image/toilet.png";
import Laundry from "../../../public/image/laundry.png";


const projects = [
  {
    name: "Office Cleaning",
    des: "Awesome  site. on the top advertising a business online includes assembling Having the most keep.",
    image: Office,
  },
  {
    name: "Toilet Cleaning",
    des: "Awesome  site. on the top advertising a business online includes assembling Having the most keep.",
    image: Toilet,
  },
  {
    name: "Laundry Cleaning",
    des: "Awesome  site. on the top advertising a business online includes assembling Having the most keep.",
    image: Laundry,
  },
];
function Projects() {
  return (
    <div>
      <div className="flex w-full mt-10 items-center justify-between gap-10 tablet:gap-5 hover:transition-all mobile:flex-col mobile:gap-2 px-4">
        {projects.map((project, index) => {
          return (
            <Projectcard
              key={index}
              name={project.name}
              desc={project.des}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
