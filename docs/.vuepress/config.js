
const headConf = require("./config/headConf");
const pluginConf = require("./config/pluginConf");
const navConf = require("./config/navConf");
const slidebarConf = require("./config/slidebarConf");


module.exports = {
  // base: "/fore-end/",
  title: '每日笔记',
  description: '前端每日面试题',
  head: headConf,
  plugins: pluginConf,
  themeConfig: {
    lastUpdated: '更新时间',
    logo: '/assets/img/hero.png',
    nav: navConf,
    sidebar: slidebarConf
  },
}