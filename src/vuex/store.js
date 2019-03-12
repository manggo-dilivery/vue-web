import Vue from 'vue'
import vuex from 'vuex'

// 引入其他属性
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

//注册vuex
Vue.use(vuex)

// 数据层
let state = {
  // 顶部导航
  nav: [{name: '首页', active: true, href: '/home'},
    {name: '关于源本圣', active: false, href: '/about'},
    {name: '企业动态', active: false, href: '/dynamic'},
    {name: 'APP下载', active: false, href: '/download'},
    {name: '健康美食', active: false, href: '/food'},
    {name: '招商合作', active: false, href: '/teamwork'},
    {name: '招贤纳士', active: false, href: '/invite'},
    {name: '联系我们', active: false, href: '/contact'}
  ],
  // 轮播图数组
  lunBo: {
    index: [
      // {
      //   url: require('@/assets/images/index1.png')
      // },
      // {
      //   url: require('@/assets/images/index2.jpg')
      // },
      // {
      //   url: require('@/assets/images/index3.jpg')
      // }
    ],
    dynamic: [
      // {
      //   url: require('@/assets/images/dynamicBanner1.png')
      // },
      // {
      //   url: require('@/assets/images/dynamicBanner2.jpg')
      // }
    ],
    food: [
      // {
      //   url: require('@/assets/images/step1.png')
      // }, {
      //   url: require('@/assets/images/step2.jpg')
      // }, {
      //   url: require('@/assets/images/step3.jpg')
      // }

    ],
    teamwork:[
      // {
      //   url: require('@/assets/images/teamworkBanner1.png')
      // }, {
      //   url: require('@/assets/images/teamworkBanner2.jpg')
      // }, {
      //   url: require('@/assets/images/teamworkBanner3.jpg')
      // }
    ],
    invite:[
      // {
      //   url: require('@/assets/images/inviteBanner1.png')
      // }, {
      //   url: require('@/assets/images/inviteBanner2.png')
      // }
    ],
    step: [{
      url: require('@/assets/images/step1.png')
    }, {
      url: require('@/assets/images/step2.jpg')
    }, {
      url: require('@/assets/images/step3.jpg')
    }]
  },
  //新闻列表
  newsList:{
    // 企业动态下面的企业文化，精彩视频，员工风采，行业资讯
    dynamic:[
      // 企业文化
      {type:6, total:10, list:[]},
      // 精彩视频
      {type: 3, total: 20, list: []},
      // 员工风采
      {type: 4, total: 15, list: []},
      // 行业资讯
      {type: 5, total: 11, list: []}
    ],
    // 健康美食下面的美食更新，生活百科，养生专栏
    food:[
      // 美食更新
      {type:1, total:11, list:[]},
      // 生活百科
      {type: 13, total: 1, list:[]},
      // 养生专栏
      {type: 15, total: 1, list:[]}
    ],
    // 招商合作下面的市场拓展
    teamwork:[
      {type: 2, total: 10, list:[]}
    ],
    // 招贤纳士下面的招聘信息和员工培训
    invite:[
      // 招聘信息
      {type:16, total:10, list:[]},
      // 员工培训
      {type:17, total:20, list:[]}
    ]
  },
  article:{}
}

export default new vuex.Store({
  state,
  mutations,
  actions,
  getters
})
