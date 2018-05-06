module.exports = {
  title: '为了爱与和平',
  description: 'for love and peace',
  port: '8085',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' }
    ],
    // 假定 GitHub。也可以是一个完整的 GitLab 网址
    repo: 'artiely/chebian-docs',
    repoLabel: '查看源码',
    // 如果你的文档不在仓库的根部
    // docsDir: 'docs',
    // 可选，默认为 master
    docsBranch: 'master',
    // 默认为 true，设置为 false 来禁用
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
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
      children: ['', 'desgin', 'html', 'css', 'js', 'vue', 'file', 'question']
    }
  ]
}
