import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '前端',
  description: '一个记录实现算法、设计结构的网站。主要为了记录学习进度。',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '算法', link: '/' },
      { text: 'JS', link: '/markdown-examples' },
      { text: 'CSS', link: '/empty-page' },
      { text: 'layout doc', link: '/layout-doc' },
      { text: 'layout page', link: '/layout-page' },
    ],

    sidebar: [
      {
        text: '算法',
        items: [
          {
            text: 'wtf',
            link: '/wtf',
          },
        ],
      },
      {
        text: 'JS',
        items: [
          {
            text: 'Markdown Examples',
            link: '/markdown-examples',
          },
          {
            text: 'Runtime API Examples',
            link: '/api-examples',
          },
        ],
      },
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/vuejs/vitepress',
      },
    ],
  },
})
