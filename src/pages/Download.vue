<template>
    <div class="container">
        <!-- 中间公用banner图 -->
        <div class="banner"></div>
        <div class="otherTitleBox">产品特征</div>
        <ul class="grid">
            <li>
                <img src="../assets/images/grid1.png" alt="">
                <h4>品类丰富</h4>
                <p>种类丰富 商品齐全</p>
            </li>
            <li>
                <img src="../assets/images/grid2.png" alt="">
                <h4>新鲜健康</h4>
                <p>健康美味 自然新鲜</p>
            </li>
            <li>
                <img src="../assets/images/grid3.png" alt="">
                <h4>食品安全</h4>
                <p>严格质检 新鲜健康</p>
            </li>
            <li>
                <img src="../assets/images/grid4.png" alt="">
                <h4>优质商家</h4>
                <p>坚守源头 严格优选</p>
            </li>
            <li>
                <img src="../assets/images/grid5.png" alt="">
                <h4>送货上门</h4>
                <p>专职配送 准时到达</p>
            </li>
            <li>
                <img src="../assets/images/grid6.png" alt="">
                <h4>售后服务</h4>
                <p>专业客服 解疑答惑</p>
            </li>
        </ul>
        <div class="otherTitleBox">下载指引</div>
        <Lb :urls="lunBo.step"></Lb>
    </div>
</template>
<script>
    import Lb from '../components/Lunbo.vue'
    import { mapState } from 'vuex'
    export default {
        components: {
            Lb
        },
        computed: {
            ...mapState([
                'lunBo'
            ])
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
    background: url("../assets/images/downloadBanner.png") no-repeat center
      center;
    background-size: cover;
    margin-bottom: 30px;
  }
  .otherTitleBox {
    width: 1400px;
    height: 90px;
    line-height: 90px;
    font-size: 36px;
    color: #ff802c;
    font-weight: 400;
    position: relative;
    &::after {
      content: "";
      height: 2px;
      width: 1200px;
      background: #efefef;
      position: absolute;
      right: 0;
      top: 50%;
      margin-top: -1px;
    }
    &::before {
      content: "";
      height: 4px;
      width: 4px;
      background: #ff802c;
      position: absolute;
      left: 180px;
      top: 50%;
      margin-top: -2px;
    }
  }
  .grid {
      overflow: hidden;
      li {
          float: left;
          width: 33%;
          margin-bottom: 70px;
          cursor: default;
          img {
              margin: 0 auto;
              display: block;
              width: 137px;
              height: 137px;
          }
          h4 {
              text-align: center;
              color: #555;
              font-size: 30px;
              margin-top: 20px;
              margin-bottom: 30px;
          }
          p {
              text-align: center;
              font-size: 24px;
              color: #888;
          }
      }
  }
}
</style>
