// We do not import the mdx files here inorder to make use of dynamic imports inside $postId file
export interface BlogList {
  slug: string;
  title: string;
  publishDate: string;
  description: string;
  pathName: string;
  readingTime: string;
  tags?: string[];
}

export const blogList: Array<BlogList> = [
  {
    slug: "one-way-to-become-a-software-developer",
    title: "One way to become a software developer",
    publishDate: "01 Dec 2021",
    description:
      "An overview of how I and others I know got into Software Development.",
    pathName: "/blog/one-way-to-become-a-software-developer",
    readingTime: "5 min",
  },
];
