<template>
    <div class="container">

        <!-- 底部描述 -->
        <div class="box">

            <!-- 左侧描述 -->
            <div class="left">
                <div class="bottomName">
                    武汉市源本圣电子商务有限公司
                </div>
                <div class="sign">
                    <p>以人为本</p>
                    <p>服务于民</p>
                </div>
            </div>

            <!-- 右边版权信息 -->
            <div class="right">
                <p>联系我们:</p>
                <p>027-86559130</p>
                <p>©2018武汉源本圣电子商务有限公司版权所有</p>
            </div>

        </div>

        <div style="width:300px;margin:0 auto; padding:20px 0;">
		 	<a target="_blank" href=" " style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img src="../assets/images/onlineProlice.png" style="float:left;"/><p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">鄂公网安备 42010602002933号</p ></a>
		</div>
    </div>
</template>
<script>
    
</script>
<style lang="scss" scoped>
    .container {
        width: 100%;
        height: 200px;            
        background: rgb(247,247,247);
        cursor:default;
        .box {
            margin: 0 auto;
            width: 1400px;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: rgb(247,247,247);
            cursor:default;
            .left {
                display: flex;
                justify-content: space-between;
                align-items: center;
                .bottomName {
                    font-size: 36px;
                    font-weight: 700;
                    color: rgb(131,198,131);
                }
                .sign {
                    height: 98px;
                    padding-left: 50px;
                    border-left: 1px solid #d9d9d9;
                    margin-left: 50px;
                    p {
                        font-size: 32px;
                        font-weight: 400;
                        color: rgb(171,171,171);
                        line-height: 50px;
                    }
                }
            }
            .right {
                display: flex;
                height: 98px;
                flex-direction: column;
                align-items: flex-start;
                justify-content: space-between;
                p {
                    font-weight: 400;
                    &:nth-child(1) {
                        color: rgb(153,153,153);
                        font-size: 24px;
                    }
                    &:nth-child(2) {
                        color: rgb(255,128,44);
                        font-size: 36px;
                    }
                    &:nth-child(3) {
                        color: rgb(171,171,171);
                        font-size: 20px;
                    }
                }
            }
        }
    }
</style>
