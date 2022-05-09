import { defineUserConfig } from 'vuepress'
const { defaultTheme } = require('vuepress')
const { searchPlugin } = require('@vuepress/plugin-search')

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Jami\'s Blog',
  description: '个人博客',
  theme: defaultTheme({
    sidebar: {
      '/web/': [
        {
          text: 'Vue3',
          collapsible: true,
          children: ['/web/vue3/vue','/web/vue3/vue',],
        },
        {
          text: 'TypeScript',
          collapsible: true,
          children: ['/web/typescript/TypeScript',],
        },
      ],
    },
    // // 默认主题配置
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      // 前端
      {
        text: '前端',
        link: '/web/'
      },
      // // 后端
      {
          text: 'Python',
          link: '/python/'
      },
      {
        text: 'Goland',
        link: '/goland/'
    },
      {text: 'Github', link: 'https://github.com/jami1024'},
    ],
  }),
  plugins: [
    searchPlugin({
      // 配置项
      maxSuggestions: 10,
      // 排除首页
      isSearchable: (page) => page.path !== '/',
    }),
  ],
})