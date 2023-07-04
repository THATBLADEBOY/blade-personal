import { Link } from "@remix-run/react";
import { BlogCategoryPill } from "./BlogCategoryPill";
import type { BlogList } from "~/data/blogList.server";

type BlogPostPreviewCardProps = {
  post: BlogList;
};

export const BlogPostPreviewCard = ({ post }: BlogPostPreviewCardProps) => (
  <Link
    key={post.slug}
    className="flex flex-col space-y-1 mb-4 bg-white/10"
    to={`/blog/${post.slug}`}
  >
    <div className="w-full flex flex-col">
      <div className="h-48 flex justify-center items-center bg-gradient-to-tr space-x-2 from-pink-500 to-orange-500">
        <div className="w-full px-4 flex flex-wrap space-x-2 space-y-2 items-center justify-center">
          {post.title.split(" ").map((word, i) => (
            <p
              key={word + i}
              className="text-xl mt-2 font-bold text-white uppercase px-2  bg-black"
            >
              {word}
            </p>
          ))}
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div>
          <p className="text-sm text-white/90 ">{post.description}</p>
        </div>

        <div className="flex space-x-1">
          {post.tags?.map((tag) => (
            <BlogCategoryPill key={tag} category={tag} />
          ))}
        </div>
        <p className="text-sm w-full text-right text-neutral-300 ">
          {new Date(post.publishDate).toLocaleDateString()}
        </p>
      </div>
    </div>
  </Link>
);
