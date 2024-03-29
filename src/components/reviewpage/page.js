import React from "react";
import Reviewers from "./reviewers/page";
import Reviews from "./reviews/page";
// import Ratings from "./reviews/ratings/page";

function ReviewPage() {
  return (
    <div className="mt-20 flex flex-col w-full justify-center items-center">
      <Reviewers />
      <Reviews />
    </div>
  );
}

export default ReviewPage;
