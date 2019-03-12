<template>
  <div id="app">
    <Head></Head>
    <topnav></topnav>
    <router-view/>
    <Foot></Foot>
  </div>
</template>

<script>
import Head from './components/Head'
import Topnav from './components/Topnav'
import Foot from './components/Foot.vue'
export default {
  name: 'App',
  components: {
    Head,
    Topnav,
    Foot
  }
}
</script>

<style>
  #app {
    width: 100%;
    height: 100%;
    position: relative;
    box-sizing: border-box;
    background: #fff;
  }
</style>
