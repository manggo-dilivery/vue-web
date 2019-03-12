<template>
    <div class="container">
        <ul class="gridFood">
            <li>
                <img src="../assets/images/bc.png" alt="">
                <p>爆炒</p>
            </li>
            <li>
                <img src="../assets/images/zz.png" alt="">
                <p>蒸煮</p>
            </li>
            <li>
                <img src="../assets/images/jz.png" alt="">
                <p>煎炸</p>
            </li>
            <li>
                <img src="../assets/images/zs.png" alt="">
                <p>主食</p>
            </li>
            <li>
                <img src="../assets/images/lc.png" alt="">
                <p>凉菜</p>
            </li>
            <li>
                <img src="../assets/images/lt.png" alt="">
                <p>靓汤</p>
            </li>
            <li>
                <img src="../assets/images/bk.png" alt="">
                <p>生活百科</p>
            </li>
            <li>
                <img src="../assets/images/sx.png" alt="">
                <p>生鲜常识</p>
            </li>
        </ul>
        <Title titleName="美食更新"></Title>
        <Show v-for="(item, index) in downData.list" :key="index" :dataDetail="item"></Show>
        <el-pagination layout="prev, pager, next" :total="downData.total" @current-change="getMoreCp" :key="downData.total" prev-text="上一页" next-text="下一页">
        </el-pagination>
    </div>
</template>
<script>
    import Title from '../components/Title.vue'
    import Show from '../components/Showdetails.vue'
    export default {
        components: {
            Title,
            Show
        },
        props:{
            downData:{
                type:Object,
                required:true
            }
        },
        methods: {
            getMoreCp(val){
                this.$store.dispatch("getNewsList", {
                    PageIndex: val,
                    NewsType:1,
                    Page: 'food'
                });
            }
        }
    }
</script>
<style lang="scss" scoped>
.container{
        float: right;
        width: 1068px;
    .gridFood {
        overflow: hidden;
        li {
            float: left;
            width: 243px;
            margin-right: 30px;
            cursor: default;
            &:nth-child(4n) {
                margin-right: 0;
            }
            img {
                width: 243px;
                height: 180px;
                margin-right: 30px;
                display: block;
            }
            p {
                color: #666;
                font-size: 24px;
                text-align: center;
                margin: 20px 0;
            }
        }
    }
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
</style>
