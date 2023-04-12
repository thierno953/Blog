import React from "react";
import { BsCheckLg } from "react-icons/bs";
import { images } from "../constants";

const ArticleCard = ({ className }) => {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`}
    >
      <img
        src={images.Post1Image}
        alt="title"
        className="object-cover object-center w-full h-auto md:h-52 lg:h-48 xl:h-60"
      />
      <div className="p-5">
        <h2 className="font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]">
          Future of Work
        </h2>
        <p className="mt-3 text-sm text-dark-light md:text-lg">
          Majority of peole will work in jobs that don’t exist today.
        </p>
        <div className="flex items-center justify-between mt-6 flex-nowrap">
          <div className="flex items-center gap-x-2 md:gap-x-2.5">
            <img
              src={images.PostProfileImage}
              alt="post profile"
              className="rounded-full w-7 h-7 md:w-10 md:h-10"
            />
            <div className="flex flex-col">
              <h4 className="text-sm italic font-bold text-dark-soft md:text-base">
                admin
              </h4>
              <div className="flex items-center gap-x-2">
                <span className="bg-[#36B37E] w-fit bg-opacity-20 p-1.5 rounded-full">
                  <BsCheckLg className="w-1.5 h-1.5 text-[#36B37E]" />
                </span>
                <span className="text-xs italic text-dark-light md:text-sm">
                  Verified writer
                </span>
              </div>
            </div>
          </div>
          <span className="text-sm italic font-bold text-dark-light md:text-base">
            12 April
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
