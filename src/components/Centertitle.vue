<template>
    <h4 class="container">
        <i class="leftDot"></i>
            {{centerName}}
        <i class="rightDot"></i>
    </h4>
</template>
<script>
    export default {
        props:{
            centerName:{
                type:String,
                required:true
            }
        }
    }
</script>
<style lang="scss" scoped>
    .container {
        width: 1110px;
        position: relative;
        margin: 30px auto;
        height: 36px;
        text-align: center;
        font-size: 36px;
        color: #FF802C;
        cursor: default;
        font-weight: 400;
        .leftDot,.rightDot {
            position: absolute;
            width: 6px;
            height: 6px;
            background: #FF802C;
            top: 50%;
            margin-top: -3px;
        }
        .leftDot {
            left: 445px;
        }
        .rightDot {
            right: 445px;
        }
        &::after,&::before {
            content:'';
            position: absolute;
            top: 50%;
            width: 430px;
            height: 4px;
            background: #efefef;
            margin-top: -2px;
        }
        &::after {
            left: 0;
        }
        &::before {
            right: 0;
        }
    }
</style>
