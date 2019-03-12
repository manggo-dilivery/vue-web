<template>
    <div class="container">
        <!-- 中间公用banner图 -->
        <Lb :urls="lunBo.teamwork"></Lb>
        <!-- 底部tab切换栏 -->
        <div class="toggleTab">
            <ul class="leftList">
                <li v-for="(item,index) in leftTitle" :key="index" :class="{isChoose:item.isActive}" @click="tap(index,item)">{{item.title}}</li>
            </ul>
            <div class="rightArticle">
                <Title :titleName="titleName"></Title>
                <template v-if="componentId == 'Xmzs'">
                    <Descs></Descs>
                </template>
                <template v-if="componentId == 'Sctz'">
                    <Sctz></Sctz>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
    import Xmzs from '../components/Xmzs.vue'
    import Title from '../components/Title.vue'
    import Sctz from '../components/Sctz.vue'
    import Descs from '../components/Desc.vue'
    import Lb from '../components/Lunbo'
    import { mapState } from 'vuex'
    export default {
        data(){
            return {
                leftTitle:[
                    {
                        title:'项目招商',
                        isActive:true,
                        componentName:'Xmzs'
                    },
                    {
                        title:'市场拓展',
                        isActive:false,
                        componentName:'Sctz',
                        NewsType:2
                    }
                ],
                componentId:'Xmzs',
                titleName:'项目招商',
                Page:'teamwork'
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
            Xmzs,
            Title,
            Sctz,
            Lb,
            Descs
        },
        computed: {
            ...mapState([
                'lunBo'
            ])
        },
        beforeCreate () {
            this.$store.dispatch('getBanner',{AdvertType:78})
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
            background:url('../assets/images/teamworkBanner1.png') no-repeat center center;
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
