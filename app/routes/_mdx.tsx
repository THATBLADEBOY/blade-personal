import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import type { BlogList } from "~/data/blogList.server";
import { blogList } from "~/data/blogList.server";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const pathname = url.pathname;

  const currentPost = blogList.find(({ pathName }) => pathName === pathname);

  return json(currentPost);
};

export default function BlogLayout() {
  const currentPost = useLoaderData<BlogList>();

  return (
    <div>
      {currentPost ? (
        <header className="text-center">
          <div className="h-48 flex justify-center items-center bg-gradient-to-tr space-x-2 from-pink-500 to-orange-500">
            <div className="w-full px-4 flex flex-wrap space-x-2 space-y-2 items-center justify-center">
              {currentPost.title.split(" ").map((word, i) => (
                <p
                  key={word + i}
                  className="text-xl mt-2 font-bold text-white uppercase px-2  bg-black"
                >
                  {word}
                </p>
              ))}
            </div>
          </div>
          <p className="font-sans font-semibold uppercase text-text-secondary dark:text-d-text-secondary">
            {currentPost.publishDate} ~ {currentPost.readingTime} read
          </p>
        </header>
      ) : (
        <></>
      )}

      <div className="flex justify-center">
        <div className="prose w-screen py-[1em] px-[2em] dark:prose-invert md:prose-lg lg:prose-xl prose-headings:text-text-primary prose-a:no-underline prose-pre:p-0 dark:prose-headings:text-d-text-primary">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
