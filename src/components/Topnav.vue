<template>
    <div class="container">
        <!-- 顶部导航栏 -->
        <ul>
            <router-link v-for="(items,index) in nav" :key="index" tag="li" :to="items.href">{{items.name}}</router-link>
        </ul>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
        computed: {
            ...mapState([
                'nav'
            ])
        }
    }
</script>
<style lang="scss" scoped>
    .container {
        width: 100%;
        background: #65b6f8;
        ul {
            height: 60px;
            width: 1400px;
            margin: 0 auto;
            display: flex;
            justify-content: space-around;
            align-items: center;
            background: #65b6f8;
            li {
                cursor: pointer;
                padding: 0 30px;
                box-sizing: border-box;
                color: #fff;
                height: 60px;
                line-height: 60px;
                background: #65b6f8;
                font-size: 20px;
                &.active {
                    color: #65b6f8;
                    background: #fff;
                }
            }
        }
    }
</style>
