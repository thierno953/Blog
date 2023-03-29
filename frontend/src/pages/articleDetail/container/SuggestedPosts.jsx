import React from "react";
import { Link } from "react-router-dom";

const SuggestedPosts = ({ className, header, posts = [], tags }) => {
  return (
    <div
      className={`w-full shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] rounded-lg p-4 ${className}`}
    >
      <h2 className="font-medium font-roboto text-dark-hard md:text-xl">
        {header}
      </h2>
      <div className="grid mt-5 gap-y-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-1">
        {posts.map((item) => (
          <div
            key={item._id}
            className="flex items-center space-x-3 flex-nowrap"
          >
            <img
              className="object-cover w-1/5 rounded-lg aspect-square"
              src={item.image}
              alt="laptop"
            />
            <div className="text-sm font-medium font-roboto text-dark-hard">
              <h3 className="text-sm font-medium font-roboto text-dark-hard md:text-base lg:text-lg">
                {item.title}
              </h3>
              <span className="text-xs opacity-60">
                {new Date(item.createdAt).toLocaleDateString("en-EU", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        ))}
      </div>
      <h2 className="mt-8 font-medium font-roboto text-dark-hard md:text-xl">
        Tags
      </h2>
      <div className="flex flex-wrap mt-4 gap-x-2 gap-y-2">
        {tags.map((item, index) => (
          <Link
            key={index}
            to="/"
            className="inline-block rounded-md px-3 py-1.5 bg-primary font-roboto text-xs text-white md:text-sm"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SuggestedPosts;
