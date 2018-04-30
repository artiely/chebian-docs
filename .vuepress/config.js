module.exports = {
  title: '开发文档',
  description: '前端开始开发文档',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' }
    ]
  },
  themeConfig: {
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          {
            text: '规范',
            link: '/guide/'
          },
          {
            text: '技术分享',
            link: '/config/'
          },
          {
            text: '默认主题配置',
            link: '/default-theme-config/'
          }
        ],
        sidebar: {
          '/guide/': genSidebarConfig()
        }
      }
    }
  }
}

function genSidebarConfig() {
  return [
    {
      title: '',
      collapsable: false,
      children: ['', 'html', 'css', 'js', 'vue', 'file']
    }
  ]
}
