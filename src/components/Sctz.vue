<template>
    <div class="container">
        <Show v-for="(item, index) in sctz.list" :key="index" :dataDetail="item"></Show>
        <el-pagination layout="prev, pager, next" :total="sctz.total" @current-change="getMoreSc" :key="sctz.total" prev-text="上一页" next-text="下一页">
        </el-pagination>
    </div>
</template>
<script>
    import Show from '../components/Showdetails.vue'
    import {mapGetters} from 'vuex'
    export default {
        components: {
            Show
        },
        computed: {
            ...mapGetters({
                sctz:'getSctz'
            })
        },
        methods: {
            getMoreSc(val){
                let NewsType = 2;
                this.$store.dispatch("getNewsList", {
                    PageIndex: val,
                    NewsType,
                    Page: 'teamwork'
                });
            }
        }
    }
</script>
<style lang="scss" scoped>
    .container {
        width: 1068px;
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
