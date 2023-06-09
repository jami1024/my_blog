import type { SidebarConfig } from "vuepress-theme-gungnir";

export const en: SidebarConfig = {
  "/docs/golang/": [
    {
      text: "基础",
      children: [
        "/docs/golang/basic/array.md",
        "/docs/golang/basic/copy.md",
        "/docs/golang/basic/func.md",
        "/docs/golang/basic/goroutine.md",
        "/docs/golang/basic/make_and_new.md",
        "/docs/golang/basic/map.md",
        "/docs/golang/basic/method.md",
        "/docs/golang/basic/point.md",
        "/docs/golang/basic/slice.md",
        "/docs/golang/basic/struct.md"
      ]
    },
    {
      text: "Gin",
      children: [
        "/docs/golang/gin/basic.md",
        "/docs/golang/gin/router.md",
        "/docs/golang/gin/params.md",
        "/docs/golang/gin/04.md"
      ]
    }
  ],
  "/docs/jksj/jksj-monitor/": [
    {
      text: "学习笔记",
      children: ["/docs/jksj/jksj-monitor/01.md"]
    }
  ]
};
