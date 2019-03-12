import axios from 'axios'

// 定义轮播图与页面的映射表
const advertTypeMap = [{
    type: 75,
    name: 'index' //首页
  },
  {
    type: 76,
    name: 'dynamic' //动态
  },
  {
    type: 77,
    name: 'food' //步骤
  },
  {
    type: 78,
    name: 'teamwork' //团队合作
  },
  {
    type: 79,
    name: 'invite' //加入我们
  }
]


const actions = {
    // 获取轮播图数据
    getBanner(context,num){
        let trueNum = num.AdvertType
        let storeLoc = advertTypeMap.find(item => {
            return item.type == trueNum
        }).name
        axios.get('http://oa.yuanbensheng.net/UserInfo/GetWebAdvertBanner?AdvertType=' + trueNum).then(res => {
            // console.log(storeLoc + '轮播图数据', res.data.data.AdvertBanner)
            let result = res.data.data.AdvertBanner
            context.state.lunBo[storeLoc] = []
            result.forEach(item => {
                context.state.lunBo[storeLoc].push({
                  url: item.Image
                })
            })
        }).catch( err => {
            console.log(err)
        })
    },
    // 获取新闻列表
    getNewsList(context, num) {
        // num里面应该包含当前页码，查询类型，store存贮数据位置
        let pageIndex = num.PageIndex//当前页码
        let NewsType = num.NewsType//查询类型
        let pageName = num.Page// 页面在store存贮位置

        if (pageIndex && NewsType && pageName) {//三者都有才调用
            let aim = context.state.newsList
                axios.get('http://oa.yuanbensheng.net/UserInfo/GetWebNewsList?PageIndex=' + pageIndex + '&NewsType=' + NewsType).then(res => {
                    console.log(res)
                    let result = res.data.dt//数据
                    let total = 10//总条数
                    aim[pageName].forEach(item => {
                        if (item.type == NewsType) {
                            item.list = result
                            // item.total = total
                        }
                    })
                }).catch(err => {
                    console.log(err)
                })
        }
    },
    // 获取新闻详情
    getNewsDetails(context, num) {
        let id = num.id
        if (id) {
            axios.get('http://oa.yuanbensheng.net/UserInfo/FoodsDetailsInfo?ID=' + id).then(res => {
                context.state.article = res.data
            }).catch(err => {
            console.log(err)
            })
        }
    }
}
export default actions