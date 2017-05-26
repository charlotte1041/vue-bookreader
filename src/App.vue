<template>
  <div class="app">
      <loading v-if="loadingState"></loading>
    <navbar v-show="navState"></navbar>
    <keep-alive>
        <transition mode="out-in"
        leave-active-class="animated fadeOut">
            <router-view></router-view>
        </transition>
    </keep-alive>
    <footbar v-show="footState"></footbar>
  </div>
</template>

<script>
import navbar from './components/navbar.vue';
import footbar from './components/footbar.vue';
import {mapGetters} from 'vuex';
export default {
  name: 'app',
  data(){
      return{
          msg:''
      }
  },
  components:{
     navbar,footbar
  },
  computed:mapGetters(
     ['navState','footState','loadingState']
  ),
  mounted(){
      this.routeChange(this.$route.path);
  },
  watch:{
      $route(to){
          this.routeChange(to.path);
      }
  },
    methods:{
        routeChange(path){
            path = path.substring(1);
            if(
                    path.indexOf('book/')!=-1||
                    path=='login'||
                    path=='reg'||
                    path.indexOf('books')!=-1
            ){
                this.$store.dispatch('hideNav');
                this.$store.dispatch('hideFoot');
            }else{
                this.$store.dispatch('showNav');
                this.$store.dispatch('showFoot');
            }
            if(path=='user'){
                this.$store.dispatch('hideNav');
                this.$store.dispatch('showFoot');
            }
        }
    }
}
</script>