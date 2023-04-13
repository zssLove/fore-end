/*
 * @Descripttion: 
 * @version: 
 * @Author: zss
 * @Date: 2023-04-11 09:53:44
 * @LastEditors: zss
 * @LastEditTime: 2023-04-13 23:16:01
 */

const moment = require('moment');

module.exports = {
  // base: "/fore-end/",
  title: '每日笔记',
  description: '前端每日面试题',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'author', content: '周帅帅' }],
    ['meta', { name: 'Keywords', content: '前端面试题介绍' }]
  ],
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          // moment.locale(lang)
          moment.locale("zh-cn")
          return moment(timestamp).fromNow("LLLL"); // http://momentjs.cn/
        }
      }
    ]
  ],
  themeConfig: {
    lastUpdated: '更新时间',
    logo: '/assets/img/hero.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/about' },
      {
        text: 'Languages',
        items: [
          { text: 'Group1', items: [
            { text: 'Home', link: '/' },
            { text: 'Home', link: '/' },
          ] },
          { text: 'Group2', items: [
            { text: 'Home', link: '/' },
            { text: 'Home', link: '/' },
          ] },
          { text: 'Group2', items: [
            { text: 'Home', link: '/' },
            { text: 'Home', link: '/' },
          ] }
        ]
      },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      '/',
      '/about',
      {
        title: 'css标题',   // 必要的
        path: '/css/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/css/a-css',
          '/css/b-css',
          '/css/c-css'
        ]
      },
    ]
  },
}