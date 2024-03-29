import React from "react";
import NewsDesc from "./newsdesc/page";
import NewsPanel from "./newspanel/page";
import Picture from "../../../public/newsimages/news.png";

const NewsSection = () => {
  const cardsData = [
    {
      title: "The Surprising Reason College Tuition Is Crazy Expensive",
      content:
        "Lorem ipsum dolor sit consectetur adipiscing elit Nunc vulputate libero...",
      image: Picture,
      link: "Learn More",
    },
    {
      title: "The Surprising Reason College Tuition Is Crazy Expensive",
      content:
        "Lorem ipsum dolor sit consectetur adipiscing elit Nunc vulputate libero...",
      image: Picture,
      link: "Learn More",
    },
    {
      title: "The Surprising Reason College Tuition Is Crazy Expensive",
      content:
        "Lorem ipsum dolor sit consectetur adipiscing elit Nunc vulputate libero...",
      image: Picture,
      link: "Learn More",
    },
    {
      title: "The Surprising Reason College Tuition Is Crazy Expensive",
      content:
        "Lorem ipsum dolor sit consectetur adipiscing elit Nunc vulputate libero...",
      image: Picture,
      link: "Learn More",
    },
  ];
  return (
    <div className="w-full p-3 flex flex-col justify-center items-center mobile:mt-10">
      <NewsDesc />
      <NewsPanel cardsData={cardsData} />
    </div>
  );
};

export default NewsSection;
