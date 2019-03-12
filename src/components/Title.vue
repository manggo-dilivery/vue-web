<template>
    <div class="titleBox">
        {{titleName}}
    </div>
</template>
<script>
    export default {
        props:{
            titleName:{
                type:String,
                required:true
            }
        }
    }
</script>
<style lang="scss" scoped>
    .titleBox {
        width: 1068px;
        height: 90px;
        line-height: 90px;
        font-size: 36px;
        color: #ff802c;
        font-weight: 400;
        position: relative;
        right: 0;
        &::after {
            content:'';
            height: 2px;
            width: 869px;
            background: #efefef;
            position: absolute;
            right: 0;
            top: 50%;
            margin-top: -1px;
        }
        &::before {
            content: '';
            height: 4px;
            width: 4px;
            background: #ff802c;
            position: absolute;
            right: 886px;
            top: 50%;
            margin-top: -2px;
        }
    }
</style>
