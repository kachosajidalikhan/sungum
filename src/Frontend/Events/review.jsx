import React from "react";
import { FaStar } from "react-icons/fa";

// Reusable Review Card Component
const ReviewCard = ({ name, rating, quote }) => {
  return (
    <div className="bg-white p-6 rounded review-card mb-6">
      <div className="review-user flex items-center gap-4">
        <div className="review-profile w-10 h-10 bg-[#c2c3c7] rounded-full"></div>
        <p className="review-name font-semibold">{name || "Unknown"}</p>
        <div className="flex items-center gap-1 text-[#c59a63]">
          <FaStar />
          <span className="text-sm font-semibold">{rating}</span>
        </div>
      </div>
      {quote && <p className="user-quote mt-2 text-gray-600">{quote}</p>}
    </div>
  );
};

const Review = () => {
  const reviews = [
    { name: "John Doe", rating: 5.0, quote: "Amazing experience at the venue!" },
    { name: "Jane Smith", rating: 4.5, quote: "Great service and ambiance!" },
    {
      name: "Mark Wilson",
      rating: 5.0,
      quote:
        "I had the pleasure of hosting my event at Ritz Marquee, and it was an absolutely phenomenal experience! The venue is the epitome of luxury, with a stunning ambiance that sets the perfect tone for any special occasion.",
    },
  ];

  return (
    <div className="review-container p-2 bg-[#c2c3c7] rounded-lg shadow-md">
      {/* Header */}
      <div className="review-header flex flex-wrap items-center justify-between mb-4">
        <div className=" flex items-center gap-4">
          <h4 className="text-lg font-semibold text-[#293941]">429 Reviews</h4>
          <p className="flex items-center gap-2 text-[#c59a63]">
            <FaStar />
            <span className="text-sm">4.2</span>
          </p>
        </div>
        <p className="text-sm text-gray-500">
          *Ratings and Reviews gathered from online sources
        </p>
      </div>

      {/* Review Bars */}
      <div className="bg-white p-2 rounded review-bars flex flex-wrap gap-4 mb-6">
        {[
          { stars: 5, count: 238 },
          { stars: 4, count: 102 },
          { stars: 3, count: 61 },
          { stars: 2, count: 32 },
          { stars: 1, count: 16 },
        ].map((item, index) => (
          <div key={index} className="review-bar flex items-center gap-4 w-full">
            <p className="text-sm font-medium">{item.stars} stars</p>
            <div className="bar-line flex-1 h-2 bg-gray-300 rounded-full">
              <div
                className={`bg-[#c59a63] h-2 rounded-full`}
                style={{ width: `${(item.count / 429) * 100}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500">({item.count})</p>
          </div>
        ))}
      </div>

      {/* Reviews */}
      <div className="the429Reviews">
        <h5 className="text-lg text-[#293941] font-semibold mb-4">Customer Reviews</h5>
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            name={review.name}
            rating={review.rating}
            quote={review.quote}
          />
        ))}
      </div>
    </div>
  );
};

export default Review;
