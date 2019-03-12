<template>
    <div class="container">
        <!-- 轮播图 -->
        <Lb :urls="lunBo.index"></Lb>
        <!-- 底部展示 -->
        <nav>
            <Bottomnav v-for="(item,index) in infos" :key="index" :info="item"></Bottomnav>
        </nav>
    </div>
</template>
<script>
    // 按需导入组件
    import Lb from '../components/Lunbo'
    import Bottomnav from '../components/Bottomnav.vue'
    import { mapState } from 'vuex'
    import banner from '../assets/js/mock.js'
    export default {
        data(){
            return {
                infos:[
                    {
                        url:require('../assets/images/nav1.png'),
                        title:'关于源本圣',
                        href:'/about'
                    },
                    {
                        url:require('../assets/images/nav2.png'),
                        title:'企业动态',
                        href: '/dynamic'
                    },
                    {
                        url:require('../assets/images/nav3.png'),
                        title:'健康美食',
                        href:'/food'
                    },
                    {
                        url:require('../assets/images/nav4.png'),
                        title:'APP下载',
                        href:'/download'
                    },
                ]
            }
        },
        components: {
            Lb,
            Bottomnav
        },
        computed: {
            ...mapState([
                'lunBo'
            ])
        },
        beforeCreate () {
            this.$store.dispatch('getBanner',{AdvertType:75})
        }
    }
</script>
<style lang="scss" scoped>
    .container {
        nav {
            width: 1400px;
            height: 260px;
            margin: 0 auto;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }
    }
</style>
