<template>
    <header>
        <div class="nav" @click="shownav">
            <i class="iconfont">&#x343a;</i>
        </div>
        <form action="#" name="fm1">
            <i class="iconfont">&#xe86e;</i>
            <input type="text" v-model="iptValue"  @click="showsearch" @keyup.down="down">
        </form>
        <div class="bookmark">
            <i class="iconfont">&#xe705;</i>
        </div>
        <div class="code" @click="show">
            <i class="iconfont">&#xe749;</i>
        </div>
        <div class="coder" v-show="bl"></div>
        <div class="navall" v-show="bl2">
            <router-link to="/home" tag="a" active-class="active" @click.native="bl2=false">首页</router-link>
            <router-link to="/booklist" tag="a" active-class="active" @click.native="bl2=false">图书</router-link>
            <router-link to="/write" tag="a" active-class="active" @click.native="bl2=false">随笔</router-link>
            <router-link to="/user" tag="a" active-class="active" @click.native="bl2=false">我的</router-link>
        </div>
        <ul class="search" v-show="bl3">
            <router-link tag="li" :key='index' :to="{name:'book',params:{aid:index+1}}" v-for="(val,index) in arr" :class="{gray:index==now}" @click.native="hide">{{val.bookname}}</router-link>
        </ul>
    </header>
</template>

<script>
    export default{
        data(){
            return{
                bl:false,
                bl2:false,
                bl3:false,
                iptValue:'输入你喜欢的书籍...',
                arr:[{"id":1,"bookname":"三体"},{"id":2,"bookname":"人民的名义"},{"id":3,"bookname":"琅琊榜"},{"id":4,"bookname":"嫌疑人X的献身"},{"id":5,"bookname":"烈火青春"}],
                now:-1
            }
        },
        methods:{
            get(ev){
                if(ev.keyCode==40||ev.keyCode==38) return;
            },
            down(){
                this.now++;
                if(this.now>=0&&this.now<=this.arr.length-1){
                    this.iptValue=this.arr[this.now].bookname;
                }else{
                    this.now=0;
                    this.iptValue=this.arr[this.now].bookname;
                }
            },
            showsearch(){
                this.bl3=true;
                this.iptValue="";
            },
            show(){
                if(this.bl==false){
                    this.bl=true;
                }else{
                    this.bl=false;
                }
            },
            shownav(){
                if(this.bl2==false){
                    this.bl2=true;
                }else{
                    this.bl2=false;
                }
            },
            hide(){
                this.bl3=false;
            }
        }
    }
</script>

<style scoped>
    .coder{position:absolute;width:4rem;height:4rem;background:url(../assets/images/code.jpg) no-repeat;top:2rem;right:0;background-size:100% 100%;}
    .navall{background:#777;width:3rem;position:absolute;left:0;top:2rem;}
        .navall>a{line-height:2.5;text-align:center;color:#fff;display:block;text-decoration:none;border:1px solid #fff;}
        .navall>a.active{background:#fff;color:#1296db;font-weight:bold;}
    .search{background:#fff;width:7rem;position:absolute;left:3.5rem;top:1.6rem;overflow:hidden;border:1px solid #666;}
    .gray{background:#666;color:#fff;}
    .mark{width:1rem;backgrund:yellow;position:absolute;top:0.4rem;left:3rem;}
</style>