import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsDot } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import Sidebar from "../components/Sidebar";
import generateCategoryRssFeed from "../lib/geneRateCategoryRss";
import generateRssFeed from "../lib/generateRss";
import { getSortedPostsData } from "../lib/posts";
import styles from "../styles/blogM.module.css";
import utilStyles from "../styles/utils.module.css";
import { sortByDate } from "../utils";

export default function blog({ allPostsData }) {
  const length = parseInt(allPostsData.length);
  let singleCategoryPost = allPostsData.map((post) => {
    return post.category;
  });
  let categoryPostTag = Array.from(new Set(singleCategoryPost));

  return (
    <>
      <Head>
        <title>
          Learnbay Blogs - Latest Career Upskilling Trends and Learning
          Resources
        </title>

        <meta
          name="description"
          content="Stay Ahead with Learnbay Blogs on Upskilling Resources & IT Careers in AI, Data Science, Machine Learning & Full Stack Development For Learners & Professionals "
        />
        <link href="/Learnbay-Favicon-L.png" />
        <meta
          name="google-site-verification"
          content="q2xA2OZrvhAj8r1YGNF_3x5m5GuWCqo9rNb7atG4mXU"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link rel="canonical" href="https://blog.learnbay.co/" />
        <meta name="publisher" content="Learnbay" />
        <meta name="keywords" content="Learnbay Blogs" />
        <meta name="robots" content="index, follow" />
      </Head>
      <div className={styles.BackP} style={{ marginTop: "70px" }}>
        {/* <h4>
        <b>Our Blogs</b>

      </h4> */}
      </div>
      <section className={styles.blogHead}>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <p>Latest Blogs</p>

          <Sidebar />
        </section>
      </section>
      <section className={styles.blogWrap}>
        {allPostsData
          .slice(0, 3)
          .map(({ id, date, title, author, readTime, headerImg }) => {
            const url = `/${id}`;
            let makeUrl = author.toLowerCase().replace(/\s+/g, "-");
            let aurl = `/author/${makeUrl}`;
            return (
              <div key={id}>
                <Link href={url} legacyBehavior>
                  <div
                    className={styles.blog}
                    key={id}
                    style={{
                      background: `linear-gradient(0deg, rgba(0,0,0,0.8) 34%, rgba(255,255,255,0) 200%), url(${headerImg}) no-repeat center center `,
                      backgroundSize: "cover",
                    }}
                  >
                    <h4>{title}</h4>

                    <Link href={aurl} legacyBehavior>
                      <div className={styles.profileWrap}>
                        <Image
                          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/avatar-02.webp"
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
                    </Link>
                  </div>
                </Link>
              </div>
            );
          })}
      </section>
      {[...categoryPostTag].map((post, i) => {
        let tag = post;
        const categoryPosts = allPostsData.filter(
          (post) => post.category === tag
        );
        let makeUrl = post.toLowerCase().replace(/\s+/g, "-");
        let url = `/category/${makeUrl}`;
        // let amakeUrl = author.toLowerCase().replace(/\s+/g, "-");
        // let aurl = `/author/${makeUrl}`;
        return (
          <section className={styles.categoryPosts} key={i}>
            <span>
              <p className={styles.tagNameH}>
                {post}{" "}
                <a href={url}>
                  <button>View More</button>
                </a>
              </p>{" "}
            </span>
            <div className={styles.categoryWrapper}>
              <div>
                {categoryPosts
                  .slice(0, 2)
                  .map(
                    ({
                      id,
                      date,
                      title,
                      author,
                      readTime,
                      headerImg,
                      tag,
                      category,
                      desc,
                    }) => {
                      let url = `/${id}`;
                      let tUrl = `/category/${category
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`;

                      let amakeUrl = author.toLowerCase().replace(/\s+/g, "-");
                      let aurl = `/author/${amakeUrl}`;
                      return (
                        <Link href={url} key={id} legacyBehavior>
                          <div className={styles.categoryPost} key={id}>
                            <div className={styles.leftCategoryPost}>
                              <Image
                                src={headerImg}
                                width="300"
                                height="180"
                                alt={categoryPosts.id}
                                layout="intrinsic"
                                className={styles.categoryPostImg}
                              />
                            </div>
                            <div className={styles.rightCategoryPost} key={id}>
                              <a
                                href={tUrl}
                                target="_blank"
                                rel="noreferrer"
                                className={styles.link}
                              >
                                {/* <span className={styles.tagSpan}>{category}</span> */}
                              </a>
                              <a href={url} target="_blank" rel="noreferrer">
                                <h4>{title}</h4>
                              </a>
                              <p>{desc}</p>

                              <Link href={aurl} legacyBehavior>
                                <div className={styles.profileWrap}>
                                  <Image
                                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/avatar-02.webp"
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
                              </Link>
                            </div>
                          </div>
                        </Link>
                      );
                    }
                  )}
              </div>
              <div className={styles.categoryPostRightSide}>
                {categoryPosts
                  .slice(2, 3)
                  .map(
                    ({
                      id,
                      date,
                      title,
                      author,
                      readTime,
                      headerImg,
                      tag,
                      category,
                      desc,
                    }) => {
                      let url = `/${id}`;
                      let tUrl = `/category/${category
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`;

                      let amakeUrl = author.toLowerCase().replace(/\s+/g, "-");
                      let aurl = `/author/${amakeUrl}`;
                      return (
                        <Link href={url} key={id} legacyBehavior>
                          <div className={styles.categoryPost} key={id}>
                            <div className={styles.leftCategoryPost}>
                              <Image
                                src={headerImg}
                                width="400"
                                height="190"
                                alt={categoryPosts.id}
                                layout="intrinsic"
                                className={styles.categoryPostImg}
                              />
                            </div>
                            <div className={styles.rightCategoryPost} key={id}>
                              <a
                                href={tUrl}
                                target="_blank"
                                rel="noreferrer"
                                className={styles.link}
                              >
                                <span className={styles.tagSpan}>
                                  {category}
                                </span>
                              </a>
                              <a href={url} target="_blank" rel="noreferrer">
                                <h4>{title}</h4>
                              </a>
                              <p>{desc}</p>

                              <Link href={aurl} legacyBehavior>
                                <div className={styles.profileWrap}>
                                  <Image
                                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/avatar-02.webp"
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
                              </Link>
                            </div>
                          </div>
                        </Link>
                      );
                    }
                  )}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}

export async function getStaticProps(_context) {
  await generateRssFeed();
  await generateCategoryRssFeed();
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData: allPostsData.sort(sortByDate),
    },
  };
}
