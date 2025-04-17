import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
   title: '算法记录',
   description: '一个记录实现算法、设计结构的网站。主要为了记录学习进度。',
   themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
         { text: '算法', link: '/' },
         { text: 'Examples', link: '/markdown-examples' },
      ],

      sidebar: [
         {
            text: 'Examples',
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
