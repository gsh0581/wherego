<template>
    <div >
        <city-header></city-header>
        <div class="city-wrapper">
           <div>
        <city-location 
         :hot="hot"
         :all="all"
         :letter="letter"
         @change="handleLetterChange"
         ></city-location>
        <foot></foot>
        </div>
      </div>
    </div>
</template>
<script>
import CityHeader from '@/components/city/Header'
import CityLocation from '@/components/city/Locate'
import Foot from "@/components/Footer"
import axios from 'axios'
export default {
    name:'city',
    components:{
        CityHeader,
        CityLocation,
        Foot
    },
    data() {
        return {
            hot:[],
            all:[],
            letter:''
        }
    },
    methods: {
    getCityInfo() {
      axios.get("/api/static/city.json").then(this.getCityInfoSucc);
    },
    getCityInfoSucc(res) {
      res = res.data
      if(res.ret && res.data){
        this.hot = res.data.hotCities;
        this.all = res.data.allCities;
      }
    },
    handleLetterChange(letter){
      this.letter = letter
    }
  },
   mounted() {
     this.getCityInfo();
  }
}
</script>
<style lang="stylus" scoped>
 
</style>
