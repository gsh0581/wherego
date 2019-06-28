<template>
  <div>
    <home-header :city="city"></home-header>
    <home-ad></home-ad>
    <home-swiper :list="swiperList"></home-swiper>
    <recommend :list="recommendList"></recommend>
    <foot></foot>
  </div>
</template>

<script>
import HomeHeader from "@/components/Header";
import HomeAd from "@/components/Ad";
import HomeSwiper from "@/components/Swiper";
import Recommend from "@/components/Recommend";
import Foot from "@/components/Footer";
import axios from "axios";
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
      city:'',
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
        this.city = data.city
        this.swiperList = data.iconList,
        this.recommendList = data.recommendList
      }
    }
  },
  mounted() {
    this.getHomeInfo();
  }
};
</script>
<style>
</style>

