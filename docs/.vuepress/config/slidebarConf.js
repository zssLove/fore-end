module.exports = [
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