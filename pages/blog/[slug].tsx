import Layout from "@/components/blog/Layout";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import { readFileSync } from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
//TODO: figure out how to dynamically generate slugs in getStaticPaths instead of explicitly defining it e.g. {params: {slug: "kittens"}}

export default function Post({
  title,
  author,
  date,
  dateISO,
  tags,
  content,
}: StaticProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <article className="flex flex-col flex-wrap mx-4 lg:mx-28  dark:text-gray-300">
        <h1 className="text-2xl font-semibold mb-2 ">
          {title}
        </h1>
        <p className="italic">
          On{" "}
          <time dateTime={dateISO}>{date}</time>
        </p>
        <Markdown
          children={content}
          className="flex flex-col space-y-4 "
        />
      </article>
    </>
  );
}

interface StaticProps {
  content: string;
  title: string;
  author: string;
  date: string;
  dateISO: string;
  tags: Array<string>;
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const slug = params?.slug;
  const { data, content } = matter(
    readFileSync(`./posts/${slug}.mdx`, "utf-8"),
  );
  const { title, author, date, tags } = data;

  return {
    props: {
      title,
      author,
      date: date.toDateString(),
      dateISO: date.toISOString(),
      tags,
      content,
    },
  };
}
export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "kittens" } },
      { params: { slug: "be-in-action" } },
      { params: { slug: "time" } },
    ],
    fallback: false,
  };
}
Post.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
