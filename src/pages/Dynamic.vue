<template>
    <div class="container">
        <!-- 中间公用banner图 -->
        <Lb :urls="lunBo.dynamic"></Lb>
        <!-- 底部tab切换栏 -->
        <div class="toggleTab">
            <ul class="leftList">
                <li v-for="(item,index) in leftTitle" :key="index" :class="{isChoose:item.isActive}" @click="tap(index,item)">{{item.title}}</li>
            </ul>
            <div class="rightArticle">
                <Title :titleName="titleName"></Title>
                <template v-if="componentId=='Wenhua'">
                    <Show v-for="(item, index) in qywh.list" :key="index" :dataDetail="item"></Show>
                    <el-pagination layout="prev, pager, next" :total="qywh.total" @current-change="getMoreWh" :key="qywh.total" prev-text="上一页" next-text="下一页">
                    </el-pagination>
                </template>
                <template v-else-if="componentId=='Tv'">
                    <Show v-for="(item, index) in jcsp.list" :key="index" :dataDetail="item"></Show>
                    <el-pagination layout="prev, pager, next" :total="jcsp.total" @current-change="getMoreTv" :key="jcsp.total" prev-text="上一页" next-text="下一页">
                    </el-pagination>
                </template>
                <template v-else-if="componentId=='Fc'">
                    <Show v-for="(item, index) in ygfc.list" :key="index" :dataDetail="item"></Show>
                    <el-pagination layout="prev, pager, next" :total="ygfc.total" @current-change="getMoreFc" :key="ygfc.total" prev-text="上一页" next-text="下一页">
                    </el-pagination>
                </template>
                <template v-else-if="componentId=='Zx'">
                    <Show v-for="(item, index) in hyzx.list" :key="index" :dataDetail="item"></Show>
                    <el-pagination layout="prev, pager, next" :total="hyzx.total" @current-change="getMoreZx" :key="hyzx.total" prev-text="上一页" next-text="下一页">
                    </el-pagination>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
import Title from "../components/Title.vue";
import Show from "../components/Showdetails.vue";
import Lb from "../components/Lunbo.vue";
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      leftTitle: [
        {
          title: "企业文化",
          isActive: true,
          componentName: "Wenhua",
          NewsType: 6
        },
        {
          title: "精彩视频",
          isActive: false,
          componentName: "Tv",
          NewsType: 3
        },
        {
          title: "员工风采",
          isActive: false,
          componentName: "Fc",
          NewsType: 4
        },
        {
          title: "行业资讯",
          isActive: false,
          componentName: "Zx",
          NewsType: 5
        }
      ],
      componentId: "Wenhua",
      titleName: "企业文化",
      Page: "dynamic"
    };
  },
  created() {
    let NewsType = this.leftTitle[0].NewsType;
    this.tap(0, { PageIndex: 1, NewsType, Page: this.Page });
  },
  methods: {
    tap(i, item) {
      // 监听页面切换，更改样式
      this.leftTitle.forEach(item => {
        item.isActive = false;
      });
      // 选中状态
      this.leftTitle[i].isActive = true;
      // 父向子传值改变右侧title
      this.titleName = this.leftTitle[i].title;
      this.componentId = this.leftTitle[i].componentName;

      // 拿到需要请求的参数类别
      let NewsType = item.NewsType;
      this.$store.dispatch("getNewsList", {
        PageIndex: 1,
        NewsType,
        Page: this.Page
      });
    },
    // 分页企业文化
    getMoreWh(val) {
      let NewsType = this.leftTitle[0].NewsType;
      this.$store.dispatch("getNewsList", {
        PageIndex: val,
        NewsType,
        Page: this.Page
      });
    },
    // 分页视频
    getMoreTv(val) {
      let NewsType = this.leftTitle[1].NewsType;
      this.$store.dispatch("getNewsList", {
        PageIndex: val,
        NewsType,
        Page: this.Page
      });
    },
    // 分页员工风采
    getMoreFc(val) {
      let NewsType = this.leftTitle[2].NewsType;
      this.$store.dispatch("getNewsList", {
        PageIndex: val,
        NewsType,
        Page: this.Page
      });
    },
    // 分页资讯
    getMoreZx(val) {
      let NewsType = this.leftTitle[3].NewsType;
      this.$store.dispatch("getNewsList", {
        PageIndex: val,
        NewsType,
        Page: this.Page
      });
    },
  },
  components: {
    Title,
    Show,
    Lb
  },
  computed: {
    ...mapState({
      lunBo: "lunBo"
    }),
    ...mapGetters({
      qywh: "getQywh",
      jcsp: "getJcsp",
      ygfc: "getYgfc",
      hyzx: "getHyzx"
    })
  },
  beforeCreate() {
    this.$store.dispatch("getBanner", { AdvertType: 76 });
  }
};
</script>
<style lang="scss" scoped>
.container {
  margin: 0 auto;
  width: 1400px;
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
          background: rgb(105, 161, 255);
          color: #fff;
        }
      }
    }
    .rightArticle {
      width: 1068px;
      float: right;
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
  }
}
</style>
