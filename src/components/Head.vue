<template>
    <div class="container">
        <!-- 头部信息 -->
        <div class="topInfo">
            <!-- logo -->
            <img src="../assets/images/logo.png" alt="" class="logoImg">
            <!-- 公司名字 -->
            <div class="company_name">武汉源本圣电子商务有限公司</div>
        </div>
    </div>
</template>
<script>
    
</script>
<style lang="scss" scoped>
    .container {
        width: 100%;
        height: 128px;
        background: #fff;
        cursor: default;
        .topInfo {
            margin: 0 auto;
            height: 100%;
            width: 1400px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .logoImg {
                width: 100px;
                height: 100px;
                display: block;
            }
            .company_name {
                font-weight: 700;
                height: 128px;
                font-family: MicrosoftYaHei-Bold;
                color: #85b359;
                font-size: 48px;
                line-height: 128px;
                margin-left: 32px;
            }
        }
    }
</style>
