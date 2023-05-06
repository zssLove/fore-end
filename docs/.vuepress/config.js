
const headConf = require("./config/headConf");
const pluginConf = require("./config/pluginConf");
// const nav = require("./nav");
const navConf = require("./config/navConf");
const slidebarConf = require("./config/slidebarConf");


module.exports = {
  // base: "/fore-end/",
  title: '周帅帅',
  description: '前端每日面试题',
  head: headConf,
  plugins: pluginConf,
  themeConfig: {
    lastUpdated: '更新时间',
    // logo: '/assets/img/hero.png',
    nav: navConf,
    // sidebar: slidebarConf,
    // 搜索功能配置
    search: true,
    searchMaxSuggestions: 10
  },
}