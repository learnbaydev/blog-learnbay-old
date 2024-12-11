import "../styles/globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "../styles/form.css";
import React, { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Initialize GA and GTM
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }

    // Initial GA page tracking
    gtag("js", new Date());
    gtag("config", "G-H7NXFE6T4E", {
      page_path: window.location.pathname,
    });

    console.log("Google Analytics initialized:");

    // Track route changes
    const handleRouteChange = (url) => {
      gtag("config", "G-H7NXFE6T4E", {
        page_path: url,
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Google Tag Manager (GTM) */}
      <Script
        strategy="lazyOnload"
        id="gtm-script"
        src="https://www.googletagmanager.com/gtag/js?id=G-H7NXFE6T4E" // Replace with your GTM ID
        onLoad={() => console.log("GTM script loaded successfully")}
        onError={(err) => console.error("Failed to load GTM script:", err)}
      />

      {/* GTM noscript fallback */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/gtag/js?id=G-H7NXFE6T4E" // Replace with your GTM ID
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      {/* Google Analytics (GA4) */}
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-H7NXFE6T4E"
        onLoad={() => console.log("GA script loaded successfully")}
        onError={(err) => console.error("Failed to load GA script:", err)}
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-H7NXFE6T4E');
        `}
      </Script>

      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
