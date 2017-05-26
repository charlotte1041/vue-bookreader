<template>
    <div class="sentence">
        <ul>
            <li id='lis' v-for="(item,index) in arr" :key="index">{{item}}</li>
        </ul>
        <p class="record">
            <input type="text" v-model="iptValue" @click="clear" />
            <button @click="send">发送</button>
        </p>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                arr:["悄悄是别离的笙箫，沉默是今晚的康桥。",
                    "世上本没有路，走的人多了，也就成了路。",
                    "生如夏花之绚烂，死如秋叶之静美。",
                    "这是一个最好的时代，这是一个最坏的时代。这是一个智慧的年代，这是一个愚蠢的年代。这是一个光明的季节，这是一个黑暗的季节。这是希望之春，这是失望之冬。人们面前应有尽有，人们面前一无所有。人们正踏上天堂之路，人们正走向地狱之门。",
                    "我们经历着生活中突然降临的一切，毫无防备，就像演员进入初排。如果生活中的第一次彩排便是生活的本身，那生活有什么价值呢？"
                ],
                iptValue:'快来记录你现在的感想...'
            }
        },
        methods:{
            clear(){
                this.iptValue="";
            },
            send(){
                let val = this.iptValue;
                this.arr.push(val);
                this.iptValue="";
            }
        }
    }
</script>