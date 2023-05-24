import Link from "next/link";
import { readdirSync } from "fs";
import { ReactElement } from "react";
import Layout from "@/components/blog/Layout";
import Head from "next/head";
interface StaticProps {
  posts: string[];
  slugs: string[];
}

const formatTitle = (title: string) => {
  return title
    .replace(".mdx", "") // Remove the file extension
    .split("-") // Split the string into an array of words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(" "); // Join the words with a space
};
export async function getStaticProps() {
  /*
   * This assumes that the readdir function starts at the beginning of the working directory.
   */
  const slugs: string[] = [];
  const posts = readdirSync("posts").map((fileName) => {
    slugs.push(fileName.replace(".mdx", ""));
    return formatTitle(fileName);
  });

  return {
    props: {
      posts,
      slugs,
    },
  };
}
const Card = ({ title, slug }: { title: string; slug: string }) => (
  <Link
    href={`/blog/${slug}`}
    className="max-w-sm rounded-lg overflow-hidden shadow-lg dark:shadow-gray-800 m-4 bg-blogSecondary dark:bg-darkBlogS hover:opacity-60 transition-opacity duration-500"
  >
    <div className="px-6 py-4">
      <h2 className="font-bold text-xl mb-2 dark:text-gray-300">{title}</h2>
      {/* <p className="text-gray-700 dark:text-gray-300  text-base">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p> */}
      {/**
       * TODO: parse the content of the files, to add a brief introduction to the blog on the card itself
       */}
    </div>
  </Link>
);
<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="currentColor"
  className="w-6 h-6"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
  />
</svg>;

const Blog = ({ posts, slugs }: StaticProps) => {
  return (
    <main className="flex flex-wrap justify-center px-8 py-6">
      <Head>
        <title>Blog</title>
      </Head>
      {posts.map((postTitle, index) => (
        <Card key={index} title={postTitle} slug={slugs[index]} />
      ))}
    </main>
  );
};

Blog.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Blog;
