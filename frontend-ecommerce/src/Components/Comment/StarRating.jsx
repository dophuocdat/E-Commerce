import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const StarRating = ({ setRating, rating }) => {
  const [tempRating, setTempRating] = useState(0);
  const handleRating = (r) => {
    setRating(r);
    // console.log(rating);
  };
  return (
    <div className="p-4">
      <div className="flex gap-3">
        {Array.from({ length: 5 }, (_, i) => {
          return (
            <Star
              key={i}
              full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
              onRate={() => handleRating(i + 1)}
              onHoverIn={() => setTempRating(i + 1)}
              onHoverOut={() => setTempRating(0)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StarRating;

function Star({ full, onRate, onHoverIn, onHoverOut }) {
  return (
    <div
      className=" text-[1.9rem]"
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {full ? <AiFillStar className="text-yellow-500" /> : <AiOutlineStar />}
    </div>
  );
}
