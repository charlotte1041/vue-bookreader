<template>
    <ul class="bookinfo">
        <router-link v-for="(item,index) in arr" tag="li" :to="{name:'book',params:{aid:item.id}}" :key="item.id">
            <img :src="item.img" alt="">
            <div class="inforight">
                <h3>{{item.title}}&nbsp;&nbsp;<span>{{item.author}}著</span></h3>
                <p class="t1">[简介]&nbsp;{{item.info}}</p>
                <p class="t2">
                    <span>阅读量:{{item.number}}</span>
                    <button><i class="iconfont">&#x3449;</i>&nbsp;添加到收藏夹</button>
                </p>
            </div>
        </router-link>
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
            this.$http.get('/src/data/todayhot.data').then((res)=>{
                this.arr=res.data;
        }).catch((res)=>{
                alert(res.status);
        })
        }
    }
</script>