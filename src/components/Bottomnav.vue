<template>
    <div class="container">
        <!-- 底部nav项目展示 -->
        <router-link class="item" :to="info.href" tag="div">
            <img :src="this.info.url" alt="">
            <div class="desc">{{this.info.title}}</div>
        </router-link>
    </div>
</template>
<script>
    export default {
        props:{
            info:{
                type:Object,
                required:true
            }
        }
    }
</script>
<style lang="scss" scoped>
    .container {
        width: 328px;
        height: 200px;
        .item {
        width: 328px;
        height: 200px;
        position: relative;
        cursor: pointer;
            img {
                width: 328px;
                height: 200px;
            }
            .desc {
                position: absolute;
                width: 328px;
                height: 60px;
                line-height: 60px;
                cursor: pointer;
                background:rgb(51,51,51);
                opacity: 0.5;
                color: #fff;
                bottom: 30px;
                left: 0;
                text-align: center;
                font-size: 24px;
                font-weight: 400;
            }
        }
    }
</style>
