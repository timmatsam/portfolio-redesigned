import { useEffect, useState } from "react";
import Link from "next/link";
import { readdirSync } from "fs";

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
  //!for some reason, merely putting posts within readDirSync works but not in readDir. why?
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
      <p className="text-gray-700 dark:text-gray-300  text-base">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
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

const titles = [
  "Exploring the New Features of React 20",
  "Understanding Async/Await in JavaScript",
  "10 Tips for Writing Clean Code",
  "Getting Started with GraphQL",
  "A Deep Dive into Node.js Streams",
  "How to Build a REST API with Express.js",
  "A Guide to Modern Front-End Development",
  "Demystifying CSS Grid and Flexbox",
  "Top 5 Libraries for Data Visualization in JavaScript",
  "Why TypeScript is a Game Changer for JavaScript Developers",
];

const Blog = ({ posts, slugs }: StaticProps) => {
  const [darkMode, setDarkMode] = useState(false);

  // Check the local storage on initial render
  useEffect(() => {
    const theme = window.localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <div className="font-sans min-h-screen text-gray-900 bg-blogPrimary dark:bg-darkBlogP">
      <header className="flex flex-row justify-end py-6 px-8 text-white">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-300 mx-5">
          blog.tim-samuel.com
        </h1>
        <button onClick={toggleDarkMode}>
          {!darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 fill-blogAccent"
            >
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 fill-blogAccent"
            >
              <path
                fill-rule="evenodd"
                d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                clip-rule="evenodd"
              />
            </svg>
          )}
        </button>
      </header>
      <main className="flex flex-wrap justify-around px-8 py-6">
        {posts.map((postTitle, index) => (
          <Card key={index} title={postTitle} slug={slugs[index]} />
        ))}
      </main>
    </div>
  );
};

export default Blog;
