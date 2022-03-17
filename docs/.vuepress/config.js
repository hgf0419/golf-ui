module.exports = {
    theme: '',
    title: 'petty-ui',
    description: 'VuePress搭建的petty-ui组件库文档',
    base: '/',
    port: '6061',
    themeConfig: {
      nav: [
        {
          text: '指南',
          link: '/guide/'
        },
        {
          text: '组件',
          link: '/comps/'
        },
        {
          text: '指令',
          link: '/directs/'
        }
      ],
      // 配置侧边栏部分
      sidebar: { 
        '/comps/': ['/comps/', '/comps/helloWord.md', '/comps/button.md'],
        '/directs/': ['/directs/', '/directs/debounce.md']
      },
    },
    head: [],
    plugins: [],
    markdown: {}
  }
  