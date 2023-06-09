import type { NavbarConfig } from "vuepress-theme-gungnir";

export const en: NavbarConfig = [
  {
    text: "Home",
    link: "/",
    icon: "fa-fort-awesome"
  },
  {
    text: "Tags",
    link: "/tags/",
    icon: "fa-tag"
  },
  {
    text: "Links",
    link: "/links/",
    icon: "fa-satellite-dish"
  },
  {
    text: "Golang",
    link: "/docs/golang/README.md",
    icon: "ri-book-2-fill"
  },
  {
    text: "极客时间",
    // link: "/docs/jksj/README.md",
    icon: "ri-book-2-fill",
    children: [
      {
        text: "运维监控系统实战",
        link: "/docs/jksj/jksj-monitor/README.md"
        // icon: "ri-github-line"
      }
    ]
  }
];
