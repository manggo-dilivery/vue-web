<template>
    <div class="container" id="map">
    </div>
</template>
<script>
// import {MP} from '../assets/js/map.js'
export default {
    methods:{
        mapInit(){
            this.$nextTick(()=>{
                // MP('wOXrqbjPg9ghkBzi7ScWAH8saGxuHsv3')
                let map = new BMap.Map('map',{maxZoom:22,minZoom:10})
                let point = new BMap.Point(this.m.longitude,this.m.latitude)
                map.centerAndZoom(point,16)
                let marker = new BMap.Marker(point)
                map.addOverlay(marker)
                marker.setAnimation(BMAP_ANIMATION_BOUNCE)
                map.enableScrollWheelZoom(true);
            })
        }
    },
    props: ['m'],
    mounted() {
        this.mapInit()
    },
};
</script>
<style lang="scss" scoped>
.container {
  width: 1400px;
  height: 650px;
}
</style>
