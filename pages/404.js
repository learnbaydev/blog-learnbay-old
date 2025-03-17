import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import NotFound from "../components/NotFound/NotFound";
export default function Home() {
  return (
    <div>
      <Head>
        <title>404 - Page Not Found</title>
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
      </Head>
      <main>
        <Navbar popup={true} dataScienceCounselling={true} radio={true} />
        <NotFound />
        <Footer />
      </main>
    </div>
  );
}
