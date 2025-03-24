import { createElement } from "react";

function BookReviews({ book }) {
  const reviews = book.reviews;
  const toStar = (rating) => {
    const starArr = [];
    for (let index = 0; index < rating; index++) {
      const star = createElement("li", { className: "star", key: index }, "★");
      starArr.push(star);
    }
    return starArr;
  };
  const reviewList = reviews.map((review, index) => {
    return (
      <li key={index} className="list-row flex flex-wrap items-center">
        <div>
          <div className="text-xl text-slate-600 font-medium ">
            {review.reviewer}
          </div>
          <div className="text-base text-slate-600  opacity-60">
            {review.comment}
          </div>
        </div>
        <ul className="flex items-center gap-2 ml-auto">
          {toStar(review.rating)}
        </ul>
      </li>
    );
  });

  return (
    <ul className="col-span-1 mx-4 md:mx-0 md:col-span-6 md:col-start-2 lg:col-span-20 lg:col-start-3 self-center list bg-base-100 rounded-box shadow-md p-4">
      <li className="p-4 pb-2 text-2xl font-semibold opacity-60 tracking-wide">
        Reviews
      </li>
      {reviewList}
    </ul>
  );
}

export default BookReviews;