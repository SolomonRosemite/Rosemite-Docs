import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";

import Layout from "@theme/Layout";
import CodeBlock from "@theme/CodeBlock";

import clsx from "clsx";

import styles from "./styles.module.css";

const features = [
  {
    title: "All in One Place",
    content:
      "Every project build by me may have some documentation. Anytime you need to find some documentation it will all be listed and be easily accessible here!",
  },
  {
    title: "",
    content: "",
  },
  {
    title: "Easy to Follow",
    content:
      "The documentation is focused to make it easy to understand and follow. Including troubleshooting and support by contacting over Github!",
  },
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      permalink={"/"}
      description={"Documentation for projects I have build💖"}
    >
      <div className={clsx("hero hero--dark", styles.heroBanner)}>
        <div className="container">
          <img
            className={clsx(styles.heroBannerLogo, "margin-vert--md")}
            alt="Rosemite Docs logo"
            src={useBaseUrl("img/logo.png")}
          />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.getStarted}>
            <Link
              className="button button--outline button--primary button--lg"
              to={useBaseUrl("docs/getting-started")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "2%" }}>
        {/* <div style={{ marginLeft: "5%" }}> */}
        {features && features.length && (
          <div className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map(({ title, content }, idx) => {
                  return (
                    <div
                      key={idx}
                      className={clsx("col col--4", styles.feature)}
                    >
                      <h2>{title}</h2>
                      <p>{content}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Home;
