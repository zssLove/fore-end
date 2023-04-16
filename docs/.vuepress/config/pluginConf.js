const moment = require('moment');

moment.locale("zg-cn")

module.exports = {
  '@vssue/vuepress-plugin-vssue': {
    // 设置 `platform` 而不是 `api`
    platform: 'github-v4',

    // 其他的 Vssue 配置
    owner: 'zssLove',
    repo: 'fore-end',
    clientId: '7596633d235dd8fa1d35',
    clientSecret: '7ebfc193f65a8ea7da1bcbc8b0fdf66db1da69ab',
    autoCreateIssue: true
  },
  '@vuepress/last-updated': {
    transformer: (timestamp, lang) => {
      // 不要忘了安装 moment
      // moment.locale(lang)
      moment.locale("zh-cn")
      return moment(timestamp).fromNow("LLLL"); // http://momentjs.cn/
    }
  },
  '@vuepress/pwa': {
    serviceWorker: true,
    updatePopup: {
      message: "发现新内容可用",
      buttonText: "刷新"
    }
  },
  '@vuepress/back-to-top': true,
  '@vuepress/google-analytics': {
    'ga': 'G-XKBN1QST3N' // UA-00000000-0
  }
}