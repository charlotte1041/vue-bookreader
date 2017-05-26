<template>
    <div class="booklist">
        <div class="list">
            <ul>
                <li>类别:</li>
                <router-link tag="li" to="/bookinfo" v-for="(item,index) in arr" :key="index">
                    <a href="javascript:;">{{item.list}}</a>
                </router-link>
            </ul>
            <button>
                <i class="iconfont">&#xf0118;</i>
            </button>
        </div>
        <todayhot></todayhot>
    </div>
</template>

<script>
    import '../assets/js/jquery.min';
    import bookinfo from './bookinfo.vue';
    import todayhot from './todayhot.vue';
    export default{
        data(){
          return{
              arr:[{"list":"科幻"},{"list":"推理"},{"list":"校园"},{"list":"现代"},{"list":"悬疑"},{"list":"教育"},{"list":"古风"},{"list":"名著"}]
          }
        },
        mounted(){
            $(function(){
                //alert($('.list button .iconfont').html())
                var $list = $('.list ul li:gt(4)');
                $list.hide();
                var $btn = $('.list button');
                $btn.click(function(){
                    if($list.is(":visible")){
                        $list.hide();
                        $('.list button .iconfont').html('&#xf0118;');
                    }else{
                        $list.show();
                        $('.list button .iconfont').html('&#xf0117;');
                    }
                })
            })
        },
        components:{
            todayhot
        }
    }
</script>