<template>
    <div class="container">
        <!-- 未来轮播图 -->
        <div class="block">
            <el-carousel height="650px">
            <el-carousel-item v-for="(item,index) in this.urls" :key="index">
                <img :src="item.url" alt="">
            </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            urls:{
                type:Array,
                required:true
            }
        }
    }
</script>
<style lang="scss" scoped>
    .container {
        width: 1400px;
        margin: 0 auto;
        .el-carousel__item:nth-child(2n) {
            background-color: #99a9bf;
        }
        
        .el-carousel__item:nth-child(2n+1) {
            background-color: #d3dce6;
        }
    }
</style>
