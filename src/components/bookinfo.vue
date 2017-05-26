<template>
    <ul class="bookinfo">
        <a href="javascript:window.history.go(-1);">
            <i class="iconfont">返回</i>
        </a>
        <li v-for="(item,index) in arr">
            <img :src="item.img" alt="">
            <div class="inforight">
                <h3>{{item.title}}&nbsp;&nbsp;<span>{{item.author}}著{{item.list}}</span></h3>
                <p class="t1">[简介]&nbsp;{{item.info}}</p>
                <p class="t2">
                    <span>阅读量:{{item.number}}</span>
                    <button><i class="iconfont">&#x3449;</i>&nbsp;<a href="javascript:;">添加到收藏夹</a></button>
                </p>
            </div>
        </li>
    </ul>
</template>

<script>
    export default{
        data(){
            return{
                arr:[]
            }
        },
        mounted(){
            this.$http.get('/src/data/bookinfo.data').then((res)=>{
                //this.item=res.data[this.$route.params.aid-1];
                this.arr=res.data;
            //console.log(res.data)
            }).catch((res)=>{
                alert(res.status);
            })
        }
    }
</script>

<style scoped>
    .bookinfo{margin-top:2rem;}
    .bookinfo>a{margin:0.5rem 0 0 0.5rem;width:2rem;display:block;border:2px solid #1296db;font-weight:bold;color:#1296db;text-align:center;}
</style>