import React from "react";
import fs from "fs";
import { NextSeo } from "next-seo"; // Add this import statement
import path from "path";
import matter from "gray-matter";
import { getSortedPostsData } from "../../lib/posts";
import styles from "../../styles/blogM.module.css";
import Head from "next/head";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import { sortByDate } from "../../utils";
import { useState } from "react";

export default function CategoryBlog({ categoryPosts }) {
  const [visible, setVisible] = useState(9);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 9);
  };
  const firstPost =
    categoryPosts && categoryPosts.length > 0 ? categoryPosts[0] : null;

  const cattitle = categoryPosts[0]?.cattitle || "";
  const catdesc = categoryPosts[0]?.catdesc || "";
  const cath1 =
    categoryPosts[0]?.h1 ||
    (categoryPosts[0]?.category
      ? `${categoryPosts[0].category} Courses and Articles`
      : "Category Articles");

  return (
    <>
      <NextSeo
        title={`${cattitle}`}
        description={`${catdesc}`}
        h1={`${cath1}`}

        // Add other SEO properties as needed
      />

      <Head>
        {categoryPosts.slice(0, 1).map(({ category, categoryPosts }) => {
          let makeUrl = category.toLowerCase().replace(/\s+/g, "-");

          return (
            <>
              <link
                rel="canonical"
                href={"https://blog.learnbay.co/category/" + makeUrl}
              />
            </>
          );
        })}
        {/* <html lang="en" /> */}
        <meta name="robots" content="index, follow" />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
      </Head>

      {/* <section className={styles.blogHead}>
      {categoryPosts.slice(0, 1).map((category) => {
        return <p key={category.tag}>{category.tag}</p>;
      })}
    </section> */}
      <br></br>
      <br></br>
      <br></br>
      <section>
        <div
          style={{
            display: "flex",
            justifyContent: "center", // centers horizontally
            alignItems: "center", // centers vertically
            height: "14vh", // adjust as needed for your page
            textAlign: "center",
            letterSpacing: "-1.5px",
          }}
        >
          <h1 style={{ color: "black", margin: 0 }}>
            {cath1 || `${categoryPosts[0]?.category} Courses and Articles`}
          </h1>
        </div>
      </section>

      <section className={styles.blogWrap}>
        {categoryPosts
          .slice(0, visible)
          .map(
            ({
              id,
              date,
              h1,
              title,
              author,
              readTime,
              headerImg,
              categoryPosts,
            }) => {
              const url = `/${id}`;
              return (
                <div
                  className={styles.blog}
                  key={id}
                  style={{
                    background: `linear-gradient(0deg, rgba(0,0,0,0.8) 34%, rgba(255,255,255,0) 200%), url(${headerImg}) no-repeat center center `,
                    backgroundSize: "cover",
                  }}
                >
                  <a href={url}>
                    <h4>{title}</h4>
                  </a>
                  <div className={styles.profileWrap}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/avatar-02.webp"
                      width="80"
                      height="45"
                      layout="intrinsic"
                      alt="blog_writer"
                      className={styles.blogIMg}
                    />
                    <span>
                      <h5>{author}</h5>
                      <p>
                        {date} <BsDot className={styles.dot} />
                        <IoTimeOutline className={styles.time} />
                        {readTime}
                      </p>
                    </span>
                  </div>
                </div>
              );
            }
          )}
      </section>

      <div className={styles.loadMore}>
        <button onClick={showMoreItems}>Load More...</button>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const categories = files.map((fileName) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", fileName),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    const categoryLower = frontMatter.category.toLowerCase();
    let categoryUrl = categoryLower.replace(/\s+/g, "-");

    return categoryUrl;
  });

  const paths = categories.map((category) => ({
    params: { id: category },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  const allPostsData = getSortedPostsData();

  //Filter post by categories
  const categoryPosts = allPostsData.filter(
    (post) => post.category.toLowerCase().replace(/\s+/g, "-") === id
  );

  return {
    props: {
      categoryPosts: categoryPosts.sort(sortByDate),
    },
  };
}
