<template>
    <div class="container">
        <!-- 地图占位符 -->
            <Bmap :m="giveData"></Bmap>
        <!-- 中间内容 -->
        <div class="content">
            <Center centerName="联系我们"></Center>
            <div class="ewmBox">
                <div class="item">
                    <img src="../assets/images/dyh.png" alt="">
                    <p>微信订阅号</p>
                </div>
                <div class="item">
                    <img src="../assets/images/gzh.png" alt="">
                    <p>微信公众号</p>
                </div>
                <div class="item">
                    <img src="../assets/images/gb.png" alt="">
                    <p>官方微博</p>
                </div>
            </div>
            <Center centerName="在线客服"></Center>
            <h6 class="qq"><span>企业QQ 12312313212312</span><span>客户QQ 78798798798</span></h6>
            <div class="adreess">
                <div class="adressLeft">
                    <p class="special">工作时间</p>
                    <p>周一至周日 8:30-17:30</p>
                    <p>周六至周日 9:00-17:00</p>
                </div>
                <div class="adressRight">
                    <p>联系电话: 027-86559130</p>
                    <p>联系邮箱: 3504170640@qq.com</p>
                    <p>联系地址: 德平路怡芳苑D栋一单元三楼</p>
                </div>
            </div>
            <!-- <Center centerName="在线客服"></Center>
            <h6 class="subComment">发表您的留言</h6>
            <div class="userName">
                <label for="uname">姓名</label>
                <input type="text" id="uname" v-model="username">
            </div>
            <div class="userComment">
                <label for="comment">内容</label>
                <textarea name="" id="comment" v-model="usercomment"></textarea>
            </div>
            <a class="submitBtn" @click="subC">提交留言</a>
            <div class="comments">
                <h6>留言</h6>
                <Comment></Comment>
                <Comment></Comment>
            </div> -->
        </div>
    </div>
</template>
<script>
    import Lb from '../components/Lunbo.vue'
    import Center from '../components/Centertitle.vue'
    import Comment from '../components/Comment.vue'
    import Bmap from '../components/Bmap.vue'
    export default {
        data () {
            return {
                username:'',
                usercomment:'',
                giveData:{
                    height:650,
                    longitude:114.359881,
                    latitude:30.623335
                }
            }
        },
        components: {
            Lb,
            Center,
            Comment,
            Bmap
        },
        methods: {
            subC(){
                let uname = this.username
                let ucomment = this.usercomment
                if (uname && ucomment) {
                    console.log(uname,ucomment);
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .container {
        margin: 0 auto;
        width: 1400px;
        padding-bottom: 30px;
        .content {
            width: 1110px;
            margin: 0 auto;
            .ewmBox {
                display: flex;
                justify-content: space-between;
                .item {
                    img {
                        width: 260px;
                        height: 260px;
                        display: block;
                    }
                    p {
                        text-align: center;
                        font-size: 28px;
                        color: #666;
                        margin-bottom: 20px;
                    }
                }
            }
            h6.qq {
                color: #777;
                height: 36px;
                line-height: 36px;
                font-size: 18px;
                margin-bottom: 30px;
                span {
                    height: 36px;
                    display: inline-block;
                    padding-left: 40px;
                    margin-right: 20px;
                    background: url('../assets/images/qq.png') no-repeat left center;;
                }
            }
            .adreess {
                display: flex;
                justify-content: space-between;
                .adressLeft,.adressRight {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    font-size: 20px;
                    color: #777;
                    p {
                        line-height: 50px;
                        &.special {
                            padding-left: 40px;
                            background: url("../assets/images/cloak.png") no-repeat left center;
                        }
                    }
                }
            }
            .subComment {
                color: #666;
                font-size: 26px;
                text-align: left;
                margin-bottom: 50px;
            }
            .userName {
                width: 585px;
                box-sizing: border-box;
                display: flex;
                justify-content: space-between;
                height: 50px;
                align-items: center;
                margin-bottom: 30px;
                label {
                    font-size: 20px;
                    color: #888;
                }
                input[type=text] {
                    border: 0;
                    outline: none;
                    border: 1px solid #dadada;
                    width: 485px;
                    box-sizing: border-box;
                    height: 50px;
                    border-radius: 3px;
                    padding-left: 10px;
                    font-size: 20px;
                }
            }
            .userComment {
                width: 585px;
                box-sizing: border-box;
                display: flex;
                justify-content: space-between;
                margin-bottom: 30px;
                label {
                    font-size: 20px;
                    color: #888;
                }
                textarea {
                    border: 0;
                    outline: none;
                    border: 1px solid #dadada;
                    width: 485px;
                    box-sizing: border-box;
                    border-radius: 3px;
                    font-size: 20px;
                    height: 300px;
                    resize: none;
                }
            }
            a.submitBtn {
                width: 480px;
                height: 60px;
                text-align: center;
                color: #fff;
                font-size: 24px;
                display: block;
                margin-left: 100px;
                background: #ff7226;
                border-radius: 5px;
                line-height: 60px;
                margin-bottom: 60px;
                cursor: pointer;
            }
            .comments {
                h6 {
                color: #666;
                font-size: 26px;
                text-align: left;
                margin-bottom: 50px;
                }
            }
        }
    }
</style>
