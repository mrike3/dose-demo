import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:'/dose-demo/',
  head: [["link", { rel: "icon", href: "/svg/logo.svg" }]],
  title: "北笙",
  description: "make myself VitePress Web",
  themeConfig: {
    search: {
      provider: 'local',
      options:{
        translations:{
          button:{
            buttonText:'搜索对应文档',
            buttonAriaLabel:'搜索对应文档'
          },
          modal:{
            noResultsText:'无法找到相关结果',
            resetButtonTitle:'清除筛选条件',
            footer:{
              selectText:'选择文档',
              navigateText:'切换文档',
              closeText:'关闭搜索'
            }
          }
        }
      }
    },
    // https://vitepress.dev/reference/default-theme-config
    siteTitle:'北笙的VitePress',
    logo:'/svg/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Java',
        items:[
          {text:'Java基础',link:'/Java基础'},
          {text:'Java面向对象',link:'/Java面向对象'},
          {text:'Java高级',link:'/'},
          {text:'JavaWeb',link:'/'},
          {text:'JavaEE',link:'/'},
          {text:'Spring MVC',link:'/'},
          {text:'Spring boot',link:'/'},
        ]
      },
      { text: '数据库',
        items:[
          {text:'Mysql',link:'/'},
          {text:'SqlServer',link:'/'},
          {text:'Redis',link:'/'},
          {text:'Mybaitis',link:'/'},
          {text:'MybaitisPlus',link:'/'},
        ]
      },
    ],
    outlineTitle:'文章目录',
    outline:[2,6],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Java基础',
        items: [
          { text: 'Java基础', link: '/Java基础' },
          { text: 'Java面向对象', link: '/Java面向对象' }
        ]
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: {
        svg:'<svg t="1721745398207" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4296" width="128" height="128"><path d="M337.387283 341.82659c-17.757225 0-35.514451 11.83815-35.514451 29.595375s17.757225 29.595376 35.514451 29.595376 29.595376-11.83815 29.595376-29.595376c0-18.49711-11.83815-29.595376-29.595376-29.595375zM577.849711 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763zM501.641618 401.017341c17.757225 0 29.595376-12.578035 29.595376-29.595376 0-17.757225-11.83815-29.595376-29.595376-29.595375s-35.514451 11.83815-35.51445 29.595375 17.757225 29.595376 35.51445 29.595376zM706.589595 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763z" fill="#28C445" p-id="4297"></path><path d="M510.520231 2.959538C228.624277 2.959538 0 231.583815 0 513.479769s228.624277 510.520231 510.520231 510.520231 510.520231-228.624277 510.520231-510.520231-228.624277-510.520231-510.520231-510.520231zM413.595376 644.439306c-29.595376 0-53.271676-5.919075-81.387284-12.578034l-81.387283 41.433526 22.936416-71.768786c-58.450867-41.433526-93.965318-95.445087-93.965317-159.815029 0-113.202312 105.803468-201.988439 233.803468-201.98844 114.682081 0 216.046243 71.028902 236.023121 166.473989-7.398844-0.739884-14.797688-1.479769-22.196532-1.479769-110.982659 1.479769-198.289017 85.086705-198.289017 188.67052 0 17.017341 2.959538 33.294798 7.398844 49.572255-7.398844 0.739884-15.537572 1.479769-22.936416 1.479768z m346.265896 82.867052l17.757225 59.190752-63.630058-35.514451c-22.936416 5.919075-46.612717 11.83815-70.289017 11.83815-111.722543 0-199.768786-76.947977-199.768786-172.393063-0.739884-94.705202 87.306358-171.653179 198.289017-171.65318 105.803468 0 199.028902 77.687861 199.028902 172.393064 0 53.271676-34.774566 100.624277-81.387283 136.138728z" fill="#28C445" p-id="4298"></path></svg>'
        }, link: 'https://weixin.qq.com/' },
      { icon: {
        svg:'<svg t="1721745439336" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5557" width="128" height="128"><path d="M512 1021.72444445A509.72444445 509.72444445 0 1 1 512 2.27555555a509.72444445 509.72444445 0 0 1 0 1019.4488889z m257.99338667-566.37667556H480.54272a25.19495111 25.19495111 0 0 0-25.19495111 25.19495111v62.91456c0 13.90819555 11.28675555 25.19495111 25.12213333 25.19495111h176.21902223c13.98101333 0 25.19495111 11.28675555 25.1949511 25.12213334v12.59747555c0 41.72458667-33.78744889 75.51203555-75.51203555 75.51203555H367.23825778a25.19495111 25.19495111 0 0 1-25.12213333-25.12213333V417.62816c0-41.72458667 33.78744889-75.51203555 75.43921777-75.51203555h352.43804445c13.83537778 0 25.12213333-11.28675555 25.12213333-25.19495112v-62.91456a25.19495111 25.19495111 0 0 0-25.12213333-25.19495111h-352.43804445a188.74368 188.74368 0 0 0-188.74368 188.81649778v352.36522667c0 13.90819555 11.28675555 25.19495111 25.19495111 25.19495111h371.22503112a169.88387555 169.88387555 0 0 0 169.95669333-169.88387556V480.54272a25.19495111 25.19495111 0 0 0-25.19495111-25.19495111z" fill="#C71D23" p-id="5558"></path></svg>'
        }, link: 'https://gitee.com/' },
    ],
    footer:{
      copyright: 'Copyright @ Mrike 2024-7-23',
    },
  },
})
