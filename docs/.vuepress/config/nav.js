module.exports = [
  { text: '首页', link: '/', icon: 'tc-home-fill', },
  {
    text: '前端',
    link: '/frontend/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    icon: 'tc-frontend-fill',
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      { text: 'Vuepress', link: '/frontend/vuepress/' },
      { text: 'Vue', link: '/frontend/vue/' },
    ],
  },
  {
    text: '后端',
    link: '/backend/',
    icon: 'tc-backend-fill',
    items: [
      { text: 'Flask', link: '/backend/flask/' },
      { text: 'Django', link: '/backend/django/' },
      { text: 'Nginx', link: '/backend/nginx/' },
    ],
  },
  {
    text: '其他',
    link: '/others/',
    icon: 'tc-others-fill',
    items: [
      { text: 'Git', link: '/others/git/' },
    ],
  },
  {
    text: '索引',
    link: '/archives/',
    icon: 'tc-tag-fill',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
