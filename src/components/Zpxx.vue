<template>
    <div class="containter">
        <Show v-for="(item, index) in zpxx.list" :key="index" :dataDetail="item"></Show>
        <el-pagination layout="prev, pager, next" :total="zpxx.total" @current-change="getMoreXx" :key="zpxx.total" prev-text="上一页" next-text="下一页">
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
                zpxx:'getZpxx'
            })
        },
        methods: {
            getMoreXx(val){
                let NewsType = 16;
                this.$store.dispatch("getNewsList", {
                    PageIndex: val,
                    NewsType,
                    Page: 'invite'
                });

            }
        }
    }
</script>
<style lang="scss" scoped>
    .containter {
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

