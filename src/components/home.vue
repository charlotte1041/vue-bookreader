<template>
    <div class="home">
        <banner></banner>
        <div class="content">
            <div class="hot">热门书籍&nbsp;&nbsp;<span>hot!</span></div>
            <div class="hotList">
                <!--<dl>
                    <dt>
                        <img src="src/assets/images/book1.jpg" alt="">
                    </dt>
                    <dd>
                        <h5>人民的名义</h5>
                        <p>作者:周梅森</p>
                        <p>阅读量:10000</p>
                        <p><span>[阅读全本]</span></p>
                    </dd>
                </dl>-->
                <router-link v-for="(item,index) in arr" :key="item.id" :to="{name:'books',params:{aid:item.id}}" tag="dl">
                    <dt>
                        <img :src="item.img" alt="">
                    </dt>
                    <dd>
                        <h5>{{item.title}}</h5>
                        <p>作者:{{item.author}}</p>
                        <p>阅读量:{{item.number}}</p>
                        <p><span>[阅读全本]</span></p>
                    </dd>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import banner from './banner.vue';
    export default{
        data(){
            return{
                arr:[]
            }
        },
        mounted(){
            let url = '/src/data/home.data';
            this.$http.get(url).then((res)=>{
                //console.log(res.data);
                this.arr=res.data;
            }).catch((res)=>{
                alert(res.status);
            });
        },
        components:{
            banner
        }
    }
</script>