import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:'/dose-demo/',
  head: [["link", { rel: "icon", href: "/dose-demo/svg/logo.svg" }]],
  title: '枫笙',
  description: "make myself VitePress Web",
  themeConfig: {
    editLink:{
      pattern:'/:path',
      text:'编辑'
    },
    search: {
      provider: 'local',
      options:{
        translations:{
          button:{
            buttonText:'搜索文档',
            buttonAriaLabel:'搜索文档'
          },
          modal:{
            noResultsText:'无法找到相关结果',
            resetButtonTitle:'清除筛选条件',
            footer:{
              selectText:'选择',
              navigateText:'切换',
              closeText:'关闭'
            }
          }
        }
      }
    },
    // https://vitepress.dev/reference/default-theme-config
    siteTitle:'枫笙博客',
    logo:'/svg/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/docx/init/markdown-examples' },
      { text: 'Java',link:'/docx/Java/Java教程'},
      { text: '个人博客搭建',
        items:[
          {text:'VuePress',link:'https://vuepress.vuejs.org/zh/guide/introduction.html'},
          {text:'VitePress',link:'/docx/Blog/VitePress/项目创建'},
        ]
      },
    ],
    outlineTitle:'文章目录',
    outline:[2,6],
    sidebar:{
      '/docx/Java':[
        {
          text: 'Java基础',
          items: [
            { text: 'Java教程', link: '/docx/Java/Java教程' },
            { text: 'Java简介', link: '/docx/Java/Java简介' }
          ]
        },
        {
          text: 'Java面向对象',
          items: [
            { text: 'Java面向对象', link: '/docx/Java/Java面向对象' }
          ]
        },
        {
          text: 'Java高级教程',
          items: [

          ]
        }
      ],
      '/docx/init':[
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/docx/init/markdown-examples' },
            { text: 'Runtime API Examples', link: '/docx/init/api-examples' }
          ]
        }
      ],
      '/docx/Blog/VitePress/':[
        {
          text: 'VitePress项目',
          items: [
            { text: '项目创建', link: '/docx/Blog/VitePress/项目创建' },
            { text: '主页面配置', link: '/docx/Blog/VitePress/自定义配置' },
            { text: '目录侧边栏', link: '/docx/Blog/VitePress/文章侧边栏' },
            { text: 'GitHub部署', link: '/docx/Blog/VitePress/GitHub部署' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mrike3/dose-demo' },
      { icon: {
        svg:'<svg t="1721745439336" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5557" width="128" height="128"><path d="M512 1021.72444445A509.72444445 509.72444445 0 1 1 512 2.27555555a509.72444445 509.72444445 0 0 1 0 1019.4488889z m257.99338667-566.37667556H480.54272a25.19495111 25.19495111 0 0 0-25.19495111 25.19495111v62.91456c0 13.90819555 11.28675555 25.19495111 25.12213333 25.19495111h176.21902223c13.98101333 0 25.19495111 11.28675555 25.1949511 25.12213334v12.59747555c0 41.72458667-33.78744889 75.51203555-75.51203555 75.51203555H367.23825778a25.19495111 25.19495111 0 0 1-25.12213333-25.12213333V417.62816c0-41.72458667 33.78744889-75.51203555 75.43921777-75.51203555h352.43804445c13.83537778 0 25.12213333-11.28675555 25.12213333-25.19495112v-62.91456a25.19495111 25.19495111 0 0 0-25.12213333-25.19495111h-352.43804445a188.74368 188.74368 0 0 0-188.74368 188.81649778v352.36522667c0 13.90819555 11.28675555 25.19495111 25.19495111 25.19495111h371.22503112a169.88387555 169.88387555 0 0 0 169.95669333-169.88387556V480.54272a25.19495111 25.19495111 0 0 0-25.19495111-25.19495111z" fill="#C71D23" p-id="5558"></path></svg>'
        }, link: 'https://gitee.com/tianzhengrong/demo' },
    ],
    footer:{
      message:'',
      copyright: 'Copyright  @ Mrike 2024-7-23',
    },
  },
})
