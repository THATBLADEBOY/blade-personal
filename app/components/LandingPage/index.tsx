import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { AboutSection } from "./AboutSection";
import { BlogSection } from "./BlogSection";
import { HeroSection } from "./HeroSection";
import type { BlogList } from "~/data/blogList.server";
import { blogList } from "~/data/blogList.server";

export const loader: LoaderFunction = async () => {
  return json(blogList);
};

type LandingPageProps = {
  posts: BlogList[];
};

export const LandingPage = ({ posts }: LandingPageProps) => {
  return (
    <section className="space-y-16 ">
      <HeroSection />
      <AboutSection />
      <BlogSection posts={posts} />
    </section>
  );
};
