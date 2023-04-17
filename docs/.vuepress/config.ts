// import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { defineUserConfig } from "vuepress";
import { gungnirTheme, i18n } from "vuepress-theme-gungnir";
import { navbar, sidebar } from "./configs";
import rssPlugin from "@renovamen/vuepress-plugin-rss";

const isProd = process.env.NODE_ENV === "production";

export default defineUserConfig({
  base: "/",

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `/img/logo/favicon-16x16.png`
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/img/logo/favicon-32x32.png`
      }
    ],
    ["link", { rel: "manifest", href: "/manifest.webmanifest" }],
    ["meta", { name: "application-name", content: "Gungnir Theme" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "Gungnir Theme" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/img/logo/apple-touch-icon.png` }
    ],
    ["meta", { name: "theme-color", content: "#377bb5" }],
    ["meta", { name: "msapplication-TileColor", content: "#377bb5" }]
  ],

  // site-level locales config
  // locales: {
  //   "/": {
  //     lang: "en-US",
  //     title: "VuePress Theme Gungnir",
  //     description: "A blog theme for VuePress"
  //   },
  //   "/zh/": {
  //     lang: "zh-CN",
  //     title: "VuePress Theme Gungnir",
  //     description: "VuePress 博客主题"
  //   }
  // },

  // specify bundler via environment variable
  // bundler:
  //   process.env.DOCS_BUNDLER === "webpack" ? webpackBundler() : viteBundler(),

  // configure default theme
  theme: gungnirTheme({
    // repo: "Renovamen/vuepress-theme-gungnir",
    docsDir: "docs",
    navbarTitle: "cd /root/",
    hitokoto: "https://v1.hitokoto.cn?c=i", // enable hitokoto (一言) or not?

    // personal information
    personalInfo: {
      name: "Jami",
      avatar: "/img/avatar.jpeg",
      description: "记录学习",
      sns: {
        github: "jami1024",
        email: "996013797@qq.com",
        rss: "/rss.xml"
        // customized sns
      }
    },

    // header images on home page
    homeHeaderImages: [
      {
        path: "/img/home-bg/1.jpg",
        mask: "rgba(40, 57, 101, .4)"
      },
      {
        path: "/img/home-bg/2.jpg",
        mask: "rgb(251, 170, 152, .2)"
      },
      {
        path: "/img/home-bg/3.jpg",
        mask: "rgba(68, 74, 83, .1)"
      },
      {
        path: "/img/home-bg/4.jpg",
        mask: "rgba(19, 75, 50, .2)"
      }
    ],
    //可选：每页的博客数量，默认：10
    blogNumPerPage: 5,
    // other pages
    pages: {
      tags: {
        subtitle: "吼哇朋友们，这是标签页",
        bgImage: {
          path: "/img/pages/tags.jpg",
          mask: "rgba(211, 136, 37, .5)"
        }
      },
      links: {
        subtitle: "吼哇朋友们，这是链接页",
        bgImage: {
          path: "/img/pages/links.jpg",
          mask: "rgba(64, 118, 190, 0.5)"
        }
      }
    },

    // theme-level locales config
    locales: {
      /**
       * English locale config
       *
       * As the default locale is English, we don't need to set all of the locale fields
       */
      "/": {
        // navbar
        navbar: navbar.en,
        // sidebar
        sidebar: sidebar.en
      }

      /**
       * Chinese locale config
       */
      // "/zh/": {
      //   // navbar
      //   navbar: navbar.zh,
      //   // sidebar
      //   sidebar: sidebar.zh,
      //   // i18n
      //   ...i18n.zh
      // }
    },

    themePlugins: {
      // only enable git plugin in production mode
      // git: isProd,
      katex: true,
      mermaid: true,
      chartjs: true,
      //留言
      // giscus: {
      //   repo: "This-is-an-Apple/gitalk-comments",
      //   repoId: "MDEwOlJlcG9zaXRvcnkyMTA1MjQyMTQ=",
      //   category: "Announcements",
      //   categoryId: "DIC_kwDODIxYNs4CAO1u",
      //   lazyLoad: true
      // },
      mdPlus: {
        all: true
      },
      // ga: "G-EE8M2S3MPB",
      // ba: "10b7bc420625758a319d6b23aed4700f",
      rss: {
        siteURL: "https://gops.dev",
        copyright: "jami1024 2023-2023"
      },
      pwa: true,

      search: false // 禁用默认搜索
    },

    footer: `
      &copy; <a href="https://github.com/jami1024" target="_blank">Jami</a> 2020-2023
      <br>
      Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `
  }),
  markdown: {
    headers: {
      level: [2, 3, 4, 5]
    }
  },

  plugins: [
    rssPlugin({
      siteURL: "https://gops.dev", // site URL (required)
      title: "Jami's blog", // site title (optional, default: `themeConfig.title`)
      description: "A blog powered by VuePress and Gungnir", // site description (optional, default: "")
      copyright: "Jami 2023-2023", // site copyright (optional, default: "")
      count: 20, // number of posts to be generated (optional, default: 20)
      filter: (page) => true // filter function to choose which posts to be generated (optional, default: (page) => true)
    })
  ]
});
