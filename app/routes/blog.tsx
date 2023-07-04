import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { BlogList } from "~/data/blogList.server";
import { blogList } from "~/data/blogList.server";
import { motion } from "framer-motion";
import { BlogPostPreviewCard } from "~/components/BlogPostPreviewCard/BlogPostPreviewCard";

export const loader: LoaderFunction = async () => {
  return json(blogList);
};

export default function Blog() {
  const posts = useLoaderData<BlogList[]>();

  return (
    <motion.div
      //   variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mx-auto my-0 w-full max-w-[42em]"
    >
      <motion.h1
        // variants={textVariants}
        className="mb-20 text-2xl font-bold leading-[1.3] md:text-4xl"
      >
        Blog
      </motion.h1>

      {posts.map((post, index) => {
        return <BlogPostPreviewCard post={post} key={index} />;
      })}
    </motion.div>
  );
}
