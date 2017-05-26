<template>
    <div class="books">
        <a href="javascript:window.history.go(-1);">
            <i class="iconfont">返回</i>
        </a>
        <h4>{{item.title}}</h4>
        <h5>{{item.author}}著</h5>
        <p>{{item.content}}</p>
        <button><i class="iconfont">&#x3449;</i>&nbsp;添加到书签</button>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                item:{}
            }
        },
        mounted(){
            this.$http.get('src/data/books.data').then((res)=>{
                this.item=res.data[this.$route.params.aid-1];
            }).catch((res)=>{
                alert(res.status)
            })
        }
    }
</script>

<style scoped>
    .books>a{margin:0.5rem 0 0 0.5rem;width:2rem;display:block;border:2px solid #1296db;font-weight:bold;color:#1296db;text-align:center;}
    .books h4{text-align:center;width:100%;font-size:0.8rem;}
    .books h5{text-align:center;font-size:0.7rem;}
    .books p{font-size:0.6rem;margin:0 0.5rem;text-indent:1.2rem;}
    .books button{margin:1rem 0 0 1rem;font-size:0.6rem;}
</style>