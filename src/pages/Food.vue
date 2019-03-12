<template>
    <div class="container">
        <!-- 中间公用banner图 -->
        <Lb :urls="lunBo.food"></Lb>
        <!-- 底部tab切换栏 -->
        <div class="toggleTab">
            <ul class="leftList">
                <li v-for="(item,index) in leftTitle" :key="index" :class="{isChoose:item.isActive}" @click="tap(index,item)">{{item.title}}</li>
            </ul>
            <div class="rightArticle">
                <Title :titleName="titleName"></Title>
                <template v-if="componentId=='Cp'">
                    <cp :downData="msgx"></cp>
                </template>
                <template v-if="componentId=='Bk'">
                    <Show v-for="(item, index) in shbk.list" :key="index" :dataDetail="item"></Show>
                    <el-pagination layout="prev, pager, next" :total="shbk.total" @current-change="getMoreBk" :key="shbk.total" prev-text="上一页" next-text="下一页">
                    </el-pagination>
                </template>
                <template v-if="componentId=='Ys'">
                    <Show v-for="(item, index) in yszl.list" :key="index" :dataDetail="item"></Show>
                    <el-pagination layout="prev, pager, next" :total="yszl.total" @current-change="getMoreYs" :key="yszl.total" prev-text="上一页" next-text="下一页">
                    </el-pagination>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
    import Title from '../components/Title.vue'
    import Cp from '../components/Cp.vue'
    import Lb from '../components/Lunbo'
    import Show from '../components/Showdetails.vue'
    import { mapState,mapGetters } from 'vuex'
    export default {
        data(){
            return {
                leftTitle:[
                    {
                        title:'美食菜谱',
                        isActive:true,
                        componentName:'Cp',
                        NewsType:1
                    },
                    {
                        title:'生活百科',
                        isActive:false,
                        componentName:'Bk',
                        NewsType:13
                    },
                    {
                        title:'养生专栏',
                        isActive:false,
                        componentName:'Ys',
                        NewsType:15
                    }
                ],
                componentId:'Cp',
                titleName:'美食菜谱',
                Page:'food'
            }
        },
        computed: {
            ...mapState([
                'lunBo'
            ]),
            ...mapGetters({
                msgx:'getMsgx',
                shbk:'getShbk',
                yszl:'getYszl'
            })
        },
        created() {
            let NewsType = this.leftTitle[0].NewsType
            this.tap(0,{PageIndex:1,NewsType,Page:this.Page})
        },
        methods: {
            tap(i,item) {
                this.leftTitle.forEach(item => {
                    item.isActive = false
                })
                this.leftTitle[i].isActive = true
                this.componentId = this.leftTitle[i].componentName
                this.titleName = this.leftTitle[i].title

                let NewsType = item.NewsType
                this.$store.dispatch('getNewsList',{PageIndex:1,NewsType,Page:this.Page})
            },
            // 获取更多数据
            // 生活百科
            getMoreBk(val){
                let NewsType = this.leftTitle[1].NewsType;
                this.$store.dispatch("getNewsList", {
                    PageIndex: val,
                    NewsType,
                    Page: this.Page
                });
            },
            // 养生专栏
            getMoreYs(val){
                let NewsType = this.leftTitle[2].NewsType;
                this.$store.dispatch("getNewsList", {
                    PageIndex: val,
                    NewsType,
                    Page: this.Page
                });
            }
        },
        components: {
            Title,
            Cp,
            Lb,
            Show
        },
        beforeCreate () {
            this.$store.dispatch('getBanner',{AdvertType:77})
        }
    }
</script>
<style lang="scss" scoped>
    .container {
        margin: 0 auto;
        width: 1400px;
        .banner {
            width: 1400px;
            height: 650px;
            background:url('../assets/images/foodBanner.png') no-repeat center center;
            background-size: cover;
            margin-bottom: 30px;
        }
        .toggleTab {
            width: 1400px;
            overflow: hidden;
            .leftList {
                width: 280px;
                float: left;
                height: 600px;
                border-right: 1px solid #d9d9d9;
                li {
                    cursor: pointer;
                    width: 100%;
                    height: 90px;
                    color: #777;
                    text-align: center;
                    line-height: 90px;
                    font-size: 20px;
                    background: #fff;
                    &.isChoose {
                        background: rgb(105,161,255);
                        color: #fff;
                    }
                }
            }
            .rightArticle {
                width: 1068px;
                float: right;
                .el-pagination /deep/ {
                    height: 80px;
                    display: flex;
                    align-items: center;
                    .btn-prev,.btn-next {
                        height: 40px;
                        span {
                            height: 40px;
                            line-height: 40px;
                            font-size: 18px;
                        }
                    }
                    li.number {
                        font-size: 18px;
                    }
                }
            }
        }
    }
</style>
