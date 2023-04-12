import React from "react";
import MainLayout from "../../components/MainLayout";
import BreadCrumbs from "../../components/BreadCrumbs";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import SuggestedPosts from "./container/SuggestedPosts";

const breadCrumbsData = [
  { name: "Home", link: "/" },
  { name: "Blog", link: "/blog" },
  { name: "Article title", link: "/blog/1" },
];

const postsData = [
  {
    _id: "1",
    image: images.Post1Image,
    title: "Help children get better education",
    createdAt: "2023-04-11T22:08:55.725Z",
  },
  {
    _id: "2",
    image: images.Post1Image,
    title: "Help children get better education",
    createdAt: "2023-04-11T22:08:55.725Z",
  },
  {
    _id: "3",
    image: images.Post1Image,
    title: "Help children get better education",
    createdAt: "2023-04-11T22:08:55.725Z",
  },
  {
    _id: "4",
    image: images.Post1Image,
    title: "Help children get better education",
    createdAt: "2023-04-11T22:08:55.725Z",
  },
  {
    _id: "5",
    image: images.Post1Image,
    title: "Help children get better education",
    createdAt: "2023-04-11T22:08:55.725Z",
  },
];

const tagsData = [
  "Medical",
  "Lifestyle",
  "Learn",
  "Healthy",
  "Food",
  "Diet",
  "Education",
];

const ArticleDetailPage = () => {
  return (
    <MainLayout>
      <section className="flex flex-col max-w-[1000px] px-5 py-5 mx-auto lg:flex-row lg:gap-x-5 lg:items-start">
        <article className="flex-1">
          <BreadCrumbs data={breadCrumbsData} />
          <img
            src={images.Post1Image}
            alt="demo"
            className="object-cover w-full rounded-xl"
          />
          <Link
            to="/blog?category=selectedCategory"
            className="inline-block mt-4 text-sm text-primary font-roboto md:text-base"
          >
            EDUCATION
          </Link>
          <h1 className="mt-4 text-xl font-medium font-roboto text-dark-hard md:text-[26px]">
            Help children get better education
          </h1>
          <div className="mt-4 text-dark-soft">
            <p className="leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis esse officiis, pariatur cumque consequuntur ratione
              fugiat ut fuga, aut saepe debitis aperiam sunt libero rerum
              tenetur, est enim quae obcaecati?
            </p>
            <p className="leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis esse officiis, pariatur cumque consequuntur ratione
              fugiat ut fuga, aut saepe debitis aperiam sunt libero rerum
              tenetur, est enim quae obcaecati?
            </p>
          </div>
        </article>
        <SuggestedPosts
          header="Latest Article"
          posts={postsData}
          tags={tagsData}
          className="mt-8 lg:mt-0 lg:max-w-xs"
        />
      </section>
    </MainLayout>
  );
};

export default ArticleDetailPage;
