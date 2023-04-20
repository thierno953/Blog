import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import ArticleCard from "../../../components/ArticleCard";
import { getAllPosts } from "../../../services/index/posts";

const Articles = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: () => getAllPosts(),
    queryKey: ["posts"],
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  return (
    <section className="max-w-[1000px] mx-auto flex flex-wrap md:gap-x-5 gap-y-5 px-5 py-10">
      <div className="flex flex-wrap pb-10 md:gap-x-5 gap-y-5">
        {!isLoading &&
          !isError &&
          data.map((post) => (
            <ArticleCard
              key={post._id}
              post={post}
              className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
            />
          ))}
      </div>
      <button className="flex items-center px-6 py-3 mx-auto font-bold border-2 rounded-lg gap-x-2 text-primary border-primary">
        <span>More articles</span>
        <FaArrowRight className="w-3 h-3" />
      </button>
    </section>
  );
};

export default Articles;
