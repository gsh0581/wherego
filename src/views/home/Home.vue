<template>
  <div>
     <home-header></home-header>
     <home-ad></home-ad>
     <home-swiper></home-swiper>
  </div>
</template>

<script>
import HomeHeader from '@/components/Header'
import HomeAd from '@/components/Ad'
import HomeSwiper from '@/components/Swiper'
export default {
  name: "home",
  components:{
    HomeHeader,
    HomeAd,
    HomeSwiper,
  }
};
</script>
<style>

</style>

