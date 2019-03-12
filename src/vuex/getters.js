const getters = {
    // 企业动态下面的
    // 获得企业文化数据列表
    getQywh(state){
        return state.newsList.dynamic[0]
    },
    // 获得精彩视频数据列表
    getJcsp(state){
        return state.newsList.dynamic[1]
    },
    // 获得员工风采数据列表
    getYgfc(state){
        return state.newsList.dynamic[2]
    },
    // 获取行业资讯
    getHyzx(state) {
      return state.newsList.dynamic[3]
    },



    // 健康美食下面的
    // 美食更新
    getMsgx(state){
        return state.newsList.food[0]
    },
    // 生活百科
    getShbk(state){
        return state.newsList.food[1]
    },
    // 养生专栏
    getYszl(state){
        return state.newsList.food[2]
    },


    // 招商合作下面的市场拓展
    getSctz(state){
        return state.newsList.teamwork[0]
    },


    // 招贤纳士下面的招聘信息
    getZpxx(state){
        return state.newsList.invite[0]
    },
    // 员工培训
    getYgpx(state){
        return state.newsList.invite[1]
    }
}
export default getters