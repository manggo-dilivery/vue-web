<template>
    <div class="container">
        <h2>{{article.Title}}</h2>
        <h6>{{article.AddTime}}</h6>
        <div class="content" v-html="article.Description">

        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  },
  created() {
    this.$store.dispatch("getNewsDetails", {
      id: this.id
    });
  },
  computed: {
    ...mapState(["article"])
  }
};
</script>
<style lang="scss" scoped>
  .container {
    width: 1400px;
    margin: 0 auto;
    h2 {
      font-size: 42px;
      font-weight: normal;
      text-align: center;
      height: 65px;
      line-height: 65px;
      color: #666;
      margin-top: 40px;
    }
    h6 {
      font-size: 22px;
      text-align: center;
      height: 40px;
      line-height: 40px;;
      margin-bottom: 35px;
    }
  }
</style>
