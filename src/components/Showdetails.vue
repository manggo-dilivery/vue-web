<template>
    <div class="container" @click="toDetail">
        <!-- 封面 -->
        <div class="cover">
            <img src="../assets/images/detail1.png" alt="">
        </div>
        <!-- 右侧文章 -->
        <div class="article">
            <h5>{{dataDetail.title}}</h5>
            <p class="desc">{{dataDetail.contents}}</p>
            <div class="label">[{{dataDetail.name}}]</div>
            <div class="time">{{dataDetail.addtime}}</div>
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            dataDetail:{
                type:Object,
                required:true
            }
        },
        methods: {
            toDetail(){
                let id = this.dataDetail.newsid
                this.$router.push({name:'detail',params:{id}})
            }
        }
    }
</script>
<style lang="scss" scoped>
    .container {
        width: 1068px;
        display: flex;
        justify-content: flex-start;
        height: 160px;
        box-sizing: border-box;
        border-bottom: 1px dashed #d9d9d9;
        cursor: pointer;
        padding-top: 20px;
        &:hover {
            background: #eee;
        }
        .cover {
            width: 160px;
            height: 120px;
            margin-right: 30px;
            img {
                max-width: 160px;
                max-height: 120px;
                object-fit: cover;
            }
        }
        .article {
            height: 120px;
            width: 868px;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            h5 {
                color: #555;
                font-size: 26px;
                font-weight: 400;
                max-width: 600px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
            .desc {
                color: #888;
                font-size: 16px;
                line-height: 26px;
                max-height: 52px;
                max-width: 868px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: pre-wrap;
            }
            .time {
                position: absolute;
                right: 0;
                color: #666;
                font-size: 18px;
            }
        }
    }
</style>
