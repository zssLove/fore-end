/*
 * @Descripttion: 
 * @version: 
 * @Author: zss
 * @Date: 2023-04-11 09:53:44
 * @LastEditors: zss
 * @LastEditTime: 2023-04-11 23:01:10
 */

module.exports = {
  themeConfig: {
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
          ] }
        ]
      },
      { text: 'External', link: 'https://google.com' },
    ]
  },
}