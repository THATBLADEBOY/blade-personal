import clsx from "clsx";

type BlogCategoryPillProps = {
  category: string;
};

export const BlogCategoryPill = ({ category }: BlogCategoryPillProps) => {
  return (
    <div
      className={clsx(
        "text-xs font-serif font-bold uppercase px-2 py-1 max-w-fit",
        {
          "bg-green-500 text-white": category === "javascript",
          "bg-pink-500 text-white": category === "career",
          "bg-blue-500 text-white": category === "software",
          "bg-yellow-500 text-black": category === "nextjs",
          "bg-purple-500 text-white": category === "tailwindcss",
          "bg-red-500 text-white": category === "contentlayer",
          "bg-indigo-500 text-white": category === "career",
        }
      )}
    >
      {category}
    </div>
  );
};

export const CategoryMap = {
  javascript: "green-500",
  career: "pink-500",
  software: "blue-500",
  nextjs: "yellow-500",
  tailwindcss: "purple-500",
  contentlayer: "red-500",
};
