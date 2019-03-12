<template>
    <div class="container">
        <!-- 中间公用banner图 -->
        <Lb :urls="lunBo.invite"></Lb>
        <!-- 底部tab切换栏 -->
        <div class="toggleTab">
            <ul class="leftList">
                <li v-for="(item,index) in leftTitle" :key="index" :class="{isChoose:item.isActive}" @click="tap(index,item)">{{item.title}}</li>
            </ul>
            <div class="rightArticle">
                <Title :titleName="titleName"></Title>
                <template v-if="componentId == 'Rcln'">
                    <Rcln></Rcln>
                </template>
                <template v-if="componentId == 'Zpxx'">
                    <Zpxx></Zpxx>
                </template>
                <template v-if="componentId == 'Ygpx'">
                    <Ygpx></Ygpx>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
    import Rcln from '../components/Rcln.vue'
    import Title from '../components/Title.vue'
    import Zpxx from '../components/Zpxx.vue'
    import Ygpx from '../components/Ygpx.vue'
    import Lb from '../components/Lunbo'
    import { mapState } from 'vuex'
    export default {
        data(){
            return {
                leftTitle:[
                    {
                        title:'人才理念',
                        isActive:true,
                        componentName:'Rcln'
                    },
                    {
                        title:'招聘信息',
                        isActive:false,
                        componentName:'Zpxx',
                        NewsType:16
                    },
                    {
                        title:'员工培训',
                        isActive:false,
                        componentName:'Ygpx',
                        NewsType:17
                    }
                ],
                componentId:'Rcln',
                titleName:'人才理念',
                Page:'invite'
            }
        },
        methods: {
            tap(i,item) {
                this.leftTitle.forEach(item => {
                    item.isActive = false
                })
                this.leftTitle[i].isActive = true
                this.componentId = this.leftTitle[i].componentName
                this.titleName = this.leftTitle[i].title
                
                let NewsType = item.NewsType;
                this.$store.dispatch("getNewsList", {
                    PageIndex: 1,
                    NewsType,
                    Page: this.Page
                });
            }
        },
        components: {
            Rcln,
            Title,
            Zpxx,
            Ygpx,
            Lb
        },
        computed: {
            ...mapState([
                'lunBo'
            ])
        },
        beforeCreate () {
            this.$store.dispatch('getBanner',{AdvertType:79})
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
            background:url('../assets/images/inviteBanner1.png') no-repeat center center;
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
            }
        }
    }
</style>
