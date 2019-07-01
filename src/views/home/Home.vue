<template>
  <div>
  <home-header  :list="recommendList"></home-header>
  <div class="list" ref="wrapper">
    <div>
    <home-ad></home-ad>
    <home-swiper :list="swiperList"></home-swiper>
    <recommend :list="recommendList"></recommend>
    <foot></foot>
    </div>
  </div>
  </div>
</template>

<script>
import HomeHeader from "@/components/home/Header";
import HomeAd from "@/components/Ad";
import HomeSwiper from "@/components/home/Swiper";
import Recommend from "@/components/home/Recommend";
import Foot from "@/components/Footer";
import axios from "axios";
import Scroll from 'better-scroll'
export default {
  name: "home",
  components: {
    HomeHeader,
    HomeAd,
    HomeSwiper,
    Recommend,
    Foot
  },
  data() {
    return {

      swiperList :[],
      recommendList:[]
    }
  },
  methods: {
    getHomeInfo() {
      axios.get("/api/static/list.json").then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      res = res.data
      if(res.ret && res.data){
        const data = res.data
        this.swiperList = data.iconList,
        this.recommendList = data.recommendList
      }
    }
  },
  mounted() {
    this.getHomeInfo();
    this.scroll = new Scroll(this.$refs.wrapper,{
            scrollY: true,
              click: true
          })
  }
};
</script>
<style lang="stylus" scoped>
.list
    position absolute
    width 100%
    top 1rem
    left: 0
    bottom: 0
    right: 0
    background #f0efed
    overflow hidden
</style>

