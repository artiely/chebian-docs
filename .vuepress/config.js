module.exports = {
  title: '车边前端开发文档',
  description: '人生除了眼前的苟且，还有未知的bug和看不懂的code',
  port: '8085',
  themeConfig: {
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Guide', link: '/guide/' },
    //   { text: 'External', link: 'https://google.com' }
    // ],
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
    label: '简体中文',
    selectText: '选择语言',
    editLinkText: '在 GitHub 上编辑此页',
    nav: [{
        text: '规范',
        link: '/guide/'
      },
      {
        text: '文档',
        link: '/chebian/'
      },
      // {
      //   text: '组件',
      //   link: '/ui/'
      // },
      // {
      //   text: '技术分享',
      //   link: '/share/'
      // }
    ],
    sidebar: {
      '/guide/': [{
        title: '',
        collapsable: false,
        children: ['', 'desgin', 'html', 'css', 'js', 'vue', 'file', 'question']
      }],
      '/chebian/': [{
        title: '',
        collapsable: false,
        children: ['','2.model']
      }],
      // '/ui/': [{
      //   title: '',
      //   collapsable: false,
      //   children: ['', 'button']
      // }],
      // '/share/': [{
      //   title: '',
      //   collapsable: false,
      //   children: ['', 'git']
      // }]
    }
  }
}