import React, { useState } from "react";
import { BsFillSendCheckFill, BsFillShareFill } from "react-icons/bs";
import { BiCommentDots } from "react-icons/bi";
import { FcDislike, FcLike } from "react-icons/fc";
import { GrView } from "react-icons/gr";
import { AiOutlineDownload } from "react-icons/ai";
import { MdPreview } from "react-icons/md";
import StarRating from "./StarRating";

const Comment = () => {
  const [comment, setCommnent] = useState({ rating: 0, content: "" });
  const [rating, setRating] = useState(null);

  const handleComment = (e) => {
    setCommnent({ rating: rating, content: e.target.value });
  };

  return (
    <div>
      <div className="flex border">
        <div className="rating border w-1/6">
          <div className="flex flex-col items-center justify-center gap-3">
            <span className="text-4xl font-semibold">4.5</span>
            <span className="text-sm font-medium">out of 5 stars</span>

            <div className="flex flex-col items-start justify-center w-full gap-3 px-3">
              <span className="text-lg font-medium flex items-center justify-center gap-2">
                100 reviews
                <MdPreview />
              </span>
              <span className="text-lg font-medium flex items-center justify-center gap-2">
                100 likes
                <FcLike />
              </span>
              <span className="text-lg font-medium flex items-center justify-center gap-2">
                100 dislikes
                <FcDislike />
              </span>
              <span className="text-lg font-medium flex items-center justify-center gap-2">
                100 comments
                <BiCommentDots />
              </span>
              <span className="text-lg font-medium flex items-center justify-center gap-2">
                100 shares
                <BsFillShareFill />
              </span>
              <span className="text-lg font-medium flex items-center justify-center gap-2">
                100 views
                <GrView />
              </span>
              <span className="text-lg font-medium flex items-center justify-center gap-2 ">
                100 downloads
                <AiOutlineDownload />
              </span>
            </div>
          </div>
        </div>
        <div className="w-full">
          <h1 className="flex items-center justify-center w-full text-lg font-semibold">
            Comment
          </h1>
          <div className="flex flex-col gap-4 justify-center ">
            {Array.from({ length: 5 }, (_, i) => {
              return (
                <div key={i} className="py-1">
                  <div className=" flex items-start justify-start gap-3 px-10 ">
                    <img
                      src="https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_640.jpg"
                      alt=""
                      className="w-14 h-14 rounded-full"
                    />
                    <div className="flex flex-col">
                      <span>Nguyen Van A</span>
                      <span className="text-gray-500 text-sm">
                        <StarRating rating={5} size="10px" enable={false} />
                      </span>
                      <span>Comment</span>
                      <span className="text-gray-500 text-sm">2 days ago</span>
                    </div>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
          <div className="w-full py-10 ">
            <div className="start">
              <StarRating setRating={setRating} rating={rating} />
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Add a comment"
                className="w-full outline-double h-10 px-2"
                name=""
                onChange={(e) => handleComment(e)}
              />
              <BsFillSendCheckFill className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
