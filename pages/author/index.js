// pages/authors.js

import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Authors.module.css";
import { getAllAuthors } from "../../lib/author";
import Image from "next/image";
import HeroBanner from "../../components/AuthBanner/AuthBanner";

export default function AuthorsPage({ authors }) {
    const title = "Welcome to My Blog";
  const subtitle = "Sharing knowledge and insights on the latest trends in tech and development.";
  const backgroundImageUrl = "https://via.placeholder.com/1500x800"; // Replace with dynamic or static image URL

  return (
    <>
      <Head>
        <title>All Authors</title>
        <meta name="description" content="List of all blog authors." />
      </Head>
      <main className={styles.container}>
      <HeroBanner
        title={title}
        subtitle={subtitle}
        backgroundImageUrl={backgroundImageUrl}
      />
        <h1 className={styles.title}>Meet Our Authors</h1>
        <div className={styles.cardGrid}>
          {authors.map((author) => {
            const slug = author.toLowerCase().replace(/\s+/g, "-");
            return (
                <>
        
              <Link href={`/author/${slug}`} key={author} className={styles.card}>
                <div>
 <Image
            src=""
            alt=""
            priority={true}
            width={170}
            height={170}

          />
                  <h2>{author}</h2>
                  <p>View posts by {author}</p>
                </div>
              </Link>
              </>
            );
          })}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const authors = getAllAuthors();
  return {
    props: { authors },
  };
}
