const siteConfig = {
  title: "Rosemite Docs",
  tagline: "Documentation for a few apps I build.",
  url: "https://rosemitedocs.web.app/", // Todo: Url
  baseUrl: "/",
  projectName: "Rosemite-Docs",
  organizationName: "solomonrosemite",
  favicon: "img/favicon/favicon.ico",
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "../docs",
          sidebarPath: require.resolve("./sidebars.json"),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  themeConfig: {
    image: "img/logo-og.png",
    algolia: {
      apiKey: "3be60f4f8ffc24c75da84857d6323791",
      indexName: "rosemite docs",
    },
    navbar: {
      title: "Rosemite Docs",
      logo: {
        alt: "Rosemite Docs Logo",
        src: "img/logo.svg",
      },
      items: [
        { to: "docs/getting-started", label: "Docs", position: "right" },
        {
          href: "https://github.com/SolomonRosemite",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()}-present, Solomon Rosemite`,
    },
  },
};

module.exports = siteConfig;
