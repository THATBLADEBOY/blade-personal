import { SectionHeading } from "../SectionHeading";
import type { BlogList } from "~/data/blogList.server";
import { BlogPostPreviewCard } from "../BlogPostPreviewCard/BlogPostPreviewCard";
import { InternalLink } from "../InternalLink";

type BlogSectionProps = {
  posts: BlogList[];
};

export const BlogSection = ({ posts }: BlogSectionProps) => {
  return (
    <div>
      <div className="w-full flex justify-center items-center relative">
        <SectionHeading plainText="Recent" highlightedText="Posts" />
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {posts?.map((post, index) => {
          return <BlogPostPreviewCard post={post} key={index} />;
        })}
        <div className="hidden md:block h-full w-full bg-white/10 col-span-2">
          <div className="h-full w-full flex items-center justify-center">
            <p className="text-5xl font-bold text-white">More coming soon!</p>
          </div>
        </div>
      </div>
      <InternalLink href="/blog" label="View all posts" className="" />
    </div>
  );
};
