<template>
    <div >
        <city-header></city-header>
        <city-location 
         :hot="hot"
         :all="all"
         :letter="letter"
         @change="handleLetterChange"
         ></city-location>
         <city-alphabet 
         :letter="letters"
         @change="handleLetterChange"
         ></city-alphabet>
    </div>
</template>
<script>
import CityHeader from '@/components/city/Header'
import CityLocation from '@/components/city/Locate'
import CityAlphabet from '@/components/city/AlphaBet'
import axios from 'axios'
export default {
    name:'city',
    components:{
        CityHeader,
        CityLocation,
        CityAlphabet
    },
    data() {
        return {
            hot:[],
            all:[],
            letter:'',
            letters:[]
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
        this.letters = res.data.allCities;
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
