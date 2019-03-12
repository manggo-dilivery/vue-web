import Vue from 'vue'
import Router from 'vue-router'
// 引入对应组件
// 首页
import Index from '@/pages/index'
// 关于我们
import About from '@/pages/About'
// 企业动态
import Dynamic from '@/pages/Dynamic'
//下载
import Download from '@/pages/Download'
//美食
import Food from '@/pages/Food'
//合作
import Teamwork from '@/pages/Teamwork'
//招贤纳士
import Invite from '@/pages/Invite'
//联系我们
import Contact from '@/pages/Contact'
// 新闻详情页面
import Detail from '@/pages/Detail'
Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  scrollBehavior (to, from, savedPosition){
    if (savedPosition) {
      return savedPosition
    } else {
      return {x:0,y:0}
    }
    
  },
  routes: [
    // 首页
    {
      path:'*',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'index',
      component: Index
    },
    // 关于我们
    {
      path:'/about',
      name:'about',
      component:About
    },
    // 企业动态
    {
      path: '/dynamic',
      name: 'dynamic',
      component: Dynamic
    },
    // 下载app
    {
      path:'/download',
      name:'Download',
      component:Download
    },
    // 健康美食
    {
      path:'/food',
      name:'food',
      component:Food
    },
    //企业合作
    {
      path:'/teamwork',
      name:'teamwork',
      component:Teamwork
    },
    // 招贤纳士
    {
      path:'/invite',
      name:'invite',
      component:Invite
    },
    //联系我们
    {
      path:'/contact',
      name:'contact',
      component:Contact
    },
    {
      path:'/detail/:id',
      name:'detail',
      component:Detail,
      beforeEnter: (to, from, next) => {
        let rgx = /\d/
        if (rgx.test(to.params.id)){
          next()
        } else {
          next({
            path:'/'
          })
        }
        
      }
    }
  ]
})
