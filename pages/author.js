import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Authors.module.css";
import { getAllAuthors } from "../lib/posts";
import Image from "next/image";
import Banner from "../components/AuthBanner/AuthBanner";


const profileImages = {
  "Manas Kochar": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/manas-kochar.webp",
  "Nivin Biswas": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/nivin.webp",
  "Milan Jain": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/milan.webp",
  "Abhishek Gupta": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/abhishek-gupta.webp",
  "Sonalisha Mohanty": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/sonalisha.webp",
  "Learnbay": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/learnbay-admin.webp",
  "Vineeth Kumar": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/vineeth-kumar.webp",
  "Trisha Manna": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/trisha-manna.webp",
  "Krishna Kumar": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/krishna-kumar.webp",
  "Nisha Kumari": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/nisha-kumari.webp",
  "Sayantika Mandal": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/syantika_blogger.jpeg",
  "Amit Tikkiwal": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/amit.webp",
};

export default function AuthorsPage({ authors }) {
  return (
    <div className={styles.mainHead}>
      <Head>
        <title>All Authors</title>
        <meta name="description" content="List of all blog authors." />
      </Head>


      <Banner
        title="Meet Our Amazing Authors"
        description="Explore the writers behind our insightful blog posts. Discover their unique perspectives and expertise."
        imageUrl="https://example.com/your-banner-image.jpg" // Replace with a banner image URL
      />

      <main className={styles.container}>
        <h1 className={styles.title}>Meet Our Authors</h1>
        <div className={styles.cardGrid}>

          {authors.length === 0 ? (
   
            Array(6).fill().map((_, index) => (
              <div key={index} className={`${styles.card} ${styles["skeleton-card"]}`}>
                <div className={styles["skeleton-img"]}></div>
                <div className={styles["skeleton-title"]}></div>
                <div className={styles["skeleton-text"]}></div>
              </div>
            ))
          ) : (

            authors.map((author) => {
              const slug = author.toLowerCase().replace(/\s+/g, "-");
              const profileImg = profileImages[author] || "/default-profile.png"; // fallback image

              return (
                <Link href={`/author/${slug}`} key={author} className={styles.card}>
                  <div>
                    <Image
                      src={profileImg}
                      alt={`Profile of ${author}`}
                      priority={true}
                      width={96}
                      height={96}
                    />
                    <h2>{author}</h2>
                    <p>View posts by {author}</p>
                  </div>
                </Link>
              );
            })
          )}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const authors = getAllAuthors();

  const priorityAuthors = ["Krishna Kumar", "Nisha Kumari", "Abhishek Gupta", "Trisha Manna"];
  const prioritized = [];

  priorityAuthors.forEach((priority) => {
    if (authors.includes(priority)) {
      prioritized.push(priority);
    }
  });

  const rest = authors.filter((author) => !priorityAuthors.includes(author));
  const finalAuthors = [...prioritized, ...rest];

  return {
    props: { authors: finalAuthors },
  };
}
