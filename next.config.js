/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["learnbay-wb.s3.ap-south-1.amazonaws.com"],
  },

  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // this will match `/english(default)/something` being requested
      {
        source:
          "/top-5-Job-ready-data-science-course-for-managers-and-leaders-in-2022",
        destination:
          "/top-5-Job-ready-data-science-course-for-managers-and-leaders-in-2023",
        permanent: true,
      },

      {
        source: "/know-the-top-10-data-science-trends-2022",
        destination: "/know-the-top-10-data-science-trends-2023",
        permanent: true,
      },

      {
        source:
          "/top-data-science-certifications-in-2022-exclusive-to-banking-professionals",
        destination:
          "/top-data-science-certifications-in-2023-exclusive-to-banking-professionals",
        permanent: true,
      },

      {
        source: "/necessity-of-machine-learning-in-retail",
        destination: "/the-necessity-of-machine-learning-in-retail",
        permanent: true,
      },

      {
        source:
          "/oops-why-2022-is-too-late-for-video-based-data-science-learning",
        destination:
          "/oops-why-2023-is-too-late-for-video-based-data-science-learning",
        permanent: true,
      },

      {
        source:
          "/a-few-fascinating-facts-of-artificial-intelligence-in-2022-and-beyond",
        destination:
          "/a-few-fascinating-facts-about-artificial-intelligence-in-2023-and-beyond",
        permanent: true,
      },

      {
        source:
          "/a-few-fascinating-facts-about-artificial-intelligence-in-2022-and-beyond",
        destination:
          "/a-few-fascinating-facts-about-artificial-intelligence-in-2023-and-beyond",
        permanent: true,
      },

      {
        source:
          "/why-has-generative-ai-for-deepfake-and-synthetic-data-been-so-popular-till-now",
        destination: "/what-is-generative-ai-all-you-need-to-know",
        permanent: true,
      },

      {
        source: "/category/uncategorized",
        destination: "/blogs",
        permanent: true,
      },

      {
        source: "/[id]",
        destination: "/category/hot-topic",
        permanent: true,
      },

      {
        source: "/category/ai",
        destination: "/category/artificial-intelligence",
        permanent: true,
      },

      {
        source: "/category/hot-topic",
        destination: "/category/hot-topics",
        permanent: true,
      },

      {
        source: "/xgboost-classifier",
        destination: "/everything-about-the-xgboost-classifier",
        permanent: true,
      },

      {
        source: "/types-of-machine-learning-odels-quickly-explained",
        destination: "/types-of-machine-learning-models-quickly-explained",
        permanent: true,
      },

      {
        source:
          "/you-could-be-a-pro-in-data-science-by-self-assisting-data-scientist",
        destination: "/you-could-be-a-pro-in-data-science-by-self-assisting",
        permanent: true,
      },

      {
        source: "/why-you-need-data-science",
        destination: "/data-science-is-important-why-we-need-it",
        permanent: true,
      },

      {
        source: "/data-preprocessing",
        destination: "/everything-about-data-preprocessing",
        permanent: true,
      },

      {
        source: "/decision-tree",
        destination: "/everything-about-decision-tree-from-scratch",
        permanent: true,
      },

      {
        source: "/top-50-interview-question-on-statistics",
        destination: "/top-25-interview-question-on-statistics",
        permanent: true,
      },
      {
        source:
          "/successful-data-scientist-without-a-tech-degree-yes-i-is-possible",
        destination:
          "/successful-data-scientist-without-a-tech-degree-yes-it-is-possible",
        permanent: true,
      },
      {
        source:
          "/media-hospitality-and-transportation-know-how-data-science-will-help-you-to-survive",
        destination: "/data-science-in-media-hospitality-and-transportation",
        permanent: true,
      },

      {
        source: "/reliable-resources-for-data-science",
        destination: "/reliable-sources-to-understand-about-data-science",
        permanent: true,
      },

      {
        source: "/how-to-get-the-best-data-science-internship-in-2023",
        destination: "/data-science-at-intern-level",
        permanent: true,
      },

      {
        source: "/why-data-science-actually-matters-in-2023",
        destination: "/data-science-is-important-why-we-need-it",
        permanent: true,
      },

      {
        source:
          "/fundamentals-of-bagging-and-boosting-in-machine-learning-ensemble-meth",
        destination:
          "/fundamentals-of-bagging-and-boosting-in-machine-learning-ensemble-method",
        permanent: true,
      },

      {
        source:
          "/data-scientist-vs-data-analyst-know-the-ultimate-career-difference",
        destination: "/data-analyst-vs-data-scientist ",
        permanent: true,
      },

      {
        source: "/blogs",
        destination: "/",
        permanent: true,
      },

      {
        source: "/category/artificial-intelligence-",
        destination: "/category/artificial-intelligence",
        permanent: true,
      },

      // {
      //   source: '/Search?q=',
      //   destination: '/',
      //   permanent: true,
      // },

      // {
      //   source: "/author/learnbay",
      //   destination: "/",
      //   permanent: true,
      // },

      // {
      //   source: "/author",
      //   destination: "/",
      //   permanent: true,
      // },

      {
        source: "/full-stack-development-for-techies",
        destination: "/full-stack-development-for-non-techies",
        permanent: true,
      },

      {
        source:
          "/multimodal-Ddeep-learning-enabling-fusion-of-multiple-modalities-and-deep-learning",
        destination:
          "/multimodal-deep-learning-enabling-fusion-of-multiple-modalities-and-deep-learning",
        permanent: true,
      },
      {
        source:
          "/real-world-data-science-applications-of-transforming-data-into-actionable-insights",
        destination:
          "/transforming-data-into-actionable-insights-real-world-data-science-applications",
        permanent: true,
      },
      {
        source:
          "/introduction-to-vertex-ai-models-the-new-horizon-of-google-cloud",
        destination:
          "/introduction-to-vertex-ai-models-the-new-horizon-of-google-cloud's-success",
        permanent: true,
      },
      {
        source: "/category/-cloud-computing",
        destination: "/category/cloud-computing",
        permanent: true,
      },
      {
        source: "/category/-devops",
        destination: "/category/devops",
        permanent: true,
      },
      {
        source: "/top-courses-in-2023-for-a-full-stack-software-developer",
        destination: "/top-courses-for-a-full-stack-software-developer",
        permanent: true,
      },
      {
        source:
          "/top-data-science-certifications-in-2023-exclusive-to-banking-professionals",
        destination:
          "/top-data-science-certifications-exclusive-to-banking-professionals",
        permanent: true,
      },
      {
        source:
          "/top-technical-and-soft-skills-required-for-data-scientists-in-fintech-2023-update",
        destination:
          "/top-technical-and-soft-skills-required-for-data-scientists-in-fintech",
        permanent: true,
      },
      {
        source: "/time-series-forecasting-methods-trends-of-2023",
        destination: "/time-series-forecasting-methods-trends",
        permanent: true,
      },
      {
        source: "/top-8-machine-learning-tools-you-should-know-in-2023",
        destination: "/top-8-machine-learning-tools-you-should-know",
        permanent: true,
      },
      {
        source: "/top-8-ai-predictions-whats-next-for-ai-in-2023",
        destination: "/top-8-ai-predictions-whats-next-for-ai",
        permanent: true,
      },
      {
        source:
          "/top-5-fascinating-ai-blockchain-projects-to-master-in-the-year-2023",
        destination:
          "/top-5-fascinating-ai-blockchain-projects-to-master-in-the-year",
        permanent: true,
      },
      {
        source:
          "/top-data-visualization-tools-every-data-scientist-must-know-in-2023",
        destination:
          "/top-data-visualization-tools-every-data-scientist-must-know",
        permanent: true,
      },
      {
        source:
          "/ai-in-automotive-industry-maneuvering-the-automobile-sector-of-2023",
        destination:
          "/ai-in-automotive-industry-maneuvering-the-automobile-sector",
        permanent: true,
      },
      {
        source: "/8-most-demanded-data-science-tools-in-2023",
        destination: "/8-most-demanded-data-science-tools",
        permanent: true,
      },
      {
        source:
          "/learnbay-top-2023-data-science-courses-for-career-advancement-and-success",
        destination:
          "/learnbay-top-data-science-courses-for-career-advancement-and-success",
        permanent: true,
      },
      {
        source:
          "/learnbay-top-12-data-science-courses-for-professionals-in-2023",
        destination: "/learnbay-top-12-data-science-courses-for-professionals",
        permanent: true,
      },
      {
        source:
          "/oops-why-2023-is-too-late-for-video-Based-data-science-learning",
        destination: "/oops-why-2023-is-too-late-for-video-based-data-science-learning",
        permanent: true,
      },
      {
        source:
          "/full-stack-developer-langages",
        destination: "/full-stack-developer-languages",
        permanent: true,
      },



      {
        source:
          "/top-15-cloud-",
        destination: "/top-15-cloud-computing-challenging-issues-and-effective-solutions",
        permanent: true,
      },

      {
        source:
          "/10-mu",
        destination: "/10-must-know-machine-learning-algorithms-for-beginners-in-2023",
        permanent: true,
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
