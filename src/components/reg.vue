<template>
    <div class="reg1">
        <button class="back" @click="goback">
            <i class="iconfont">&#xe697;</i>
        </button>
        <img src="/src/assets/images/bg1.jpg" alt="" class="img">
        <p class="reg">
            <router-link tag="a" to="/login">登录</router-link>
            <router-link tag="a" to="/reg">注册</router-link>
        </p>
        <form action="#" class="fm1">
            <p>
                帐号：<input type="text" />
            </p>
            <p>
                密码：<input type="text" />
            </p>
            <button class="sub">注册</button>
        </form>
    </div>
</template>

<script>
    export default{
        methods:{
            goback(){
                this.$router.go(-1);
            }
        }
    }
</script>