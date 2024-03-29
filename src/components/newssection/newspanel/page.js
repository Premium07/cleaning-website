import React from "react";
import News from "./newscard/page";

const NewsPanel = ({ cardsData }) => {
  return (
    <div className="grid grid-cols-2 gap-4 w-[100%] p-2 mt-5 place-items-center tablet:gap-2 tablet:p-0 mobile:flex mobile:flex-col">
      {cardsData.map((news, index) => (
        <News
          key={index}
          title={news.title}
          content={news.content}
          image={news.image}
          link={news.link}
        />
      ))}
    </div>
  );
};

export default NewsPanel;
