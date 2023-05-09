const moment = require('moment');

const secret = require('./secret');

moment.locale("zg-cn")

module.exports = {
  '@vssue/vuepress-plugin-vssue': {
    // 设置 `platform` 而不是 `api`
    platform: 'github-v4',
    clientId: secret.clientId,
    clientSecret: secret.clientSecret,
    // 其他的 Vssue 配置
    owner: 'zssLove',
    repo: 'fore-end',

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
    'ga': secret.ga
  },
  '@vuepress/medium-zoom': {
    selector: 'img',
  },
  "vuepress-plugin-auto-sidebar": {},
  'vuepress-plugin-code-copy': {
    successText: '复制成功'
  }
  
}