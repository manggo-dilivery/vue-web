<template>
    <div class="container">
        <!-- 中间公用banner图 -->
        <div class="banner"></div>
        <!-- 底部tab切换栏 -->
        <div class="toggleTab">
            <ul class="leftList">
                <li v-for="(item,index) in leftTitle" :key="index" :class="{isChoose:item.isActive}" @click="tap(index)">{{item.title}}</li>
            </ul>
            <div class="rightArticle">
                <Title :titleName="titleName"></Title>
                <component :is="componentId">
                    <Descs></Descs>
                </component>
            </div>
        </div>
    </div>
</template>
<script>
    import Descs from '../components/Desc.vue'
    import Title from '../components/Title.vue'
    import Ceo from '../components/Ceo.vue'
    import Org from '../components/Org.vue'
    export default {
        data(){
            return {
                leftTitle:[
                    {
                        title:'企业介绍',
                        isActive:true,
                        componentName:'Descs'
                    },
                    {
                        title:'CEO寄语',
                        isActive:false,
                        componentName:'Ceo'
                    },
                    {
                        title:'组织架构',
                        isActive:false,
                        componentName:'Org'
                    }
                ],
                componentId:'Descs',
                titleName:'企业介绍'
            }
        },
        methods: {
            tap(i) {
                this.leftTitle.forEach(item => {
                    item.isActive = false
                })
                this.leftTitle[i].isActive = true
                this.componentId = this.leftTitle[i].componentName
                this.titleName = this.leftTitle[i].title
            }
        },
        components: {
            Descs,
            Title,
            Ceo,
            Org
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
            background:url('../assets/images/aboutBanner.png') no-repeat center center;
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
