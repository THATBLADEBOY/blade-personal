import { json } from "@remix-run/node";
import type { LoaderFunction, V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { LandingPage } from "~/components/LandingPage";
import type { BlogList } from "~/data/blogList.server";
import { blogList } from "~/data/blogList.server";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader: LoaderFunction = async () => {
  return json(blogList);
};

export default function Index() {
  const posts = useLoaderData<BlogList[]>();

  return (
    <div className="">
      <LandingPage posts={posts} />
    </div>
  );
}
