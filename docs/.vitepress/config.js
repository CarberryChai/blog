module.exports = {
  lang: 'zh-CN',
  base: '/blog/',
  title: `Carberry⚡`,
  description: 'Vite & Vue powered static site generator.',
  head: [
    [
      'style',
      {},
      'img { border-radius: 10px }' + 'h1.title { margin-left: 0.5em }',
    ],
  ],
  themeConfig: {
    repo: 'carberrychai/blog',
    docsDir: 'docs',
    lastUpdated: 'Last Updated',
    nav: [
      { text: '前端', link: '/frontend/' },
      { text: '后端', link: '/backend/' },
      { text: '开发工具', link: '/tools/' },
    ],
    sidebar: {
      '/frontend/': getFrontendSidebar(),
      '/backend/': getBackendSidebar(),
      '/tools/': getToolsSidebar(),
    },
  },
}

function getFrontendSidebar() {
  return [
    {
      text: 'Basic',
      children: [
        { text: 'Vue常见题目', link: '/frontend/vue-common-question' },
        { text: '前端常见问题', link: '/frontend/FrontEnd-common-question' },
        {
          text: 'input number 那些坑',
          link: '/frontend/input-number-bugs',
        },
        { text: 'Promise', link: '/frontend/Promise' },
        { text: '阿里OSS小试', link: '/frontend/Having-ali-OSS-a-try' },
      ],
    },
    {
      text: 'Advanced',
      children: [
        { text: '前端部署的一点经验', link: '/frontend/FrontEnd-deploy' },
        { text: '设计模式', link: '/frontend/FrontEnd-Design-Patterns' },
      ],
    },
  ]
}

function getBackendSidebar() {
  return [
    {
      text: 'C++',
      children: [{ text: 'const限定符', link: '/backend/const-determiner' }],
    },
    {
      text: 'Java',
      children: [{ text: 'LeetCode题解', link: '/backend/LeetCode' }],
    },
    {
      text: '其他',
      children: [
        {
          text: '客户端访问docker部署MySQL',
          link: '/backend/docker-client-deploy-mysql',
        },
      ],
    },
  ]
}

function getToolsSidebar() {
  return [
    {
      text: '工具',
      children: [{ text: 'Git', link: '/tools/Git' }],
    },
  ]
}
