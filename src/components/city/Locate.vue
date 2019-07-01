<template>
<div class="list" ref="wrapper">
  <div>
    <div class="box locate border">
    当前城市： <span class="city-name ">{{this.currentCity}}</span>
    </div>
    <div class="recent ">
      <h4>最近访问</h4>
        <ul class="city-name box nopadding">
          <li class="border-rightbottom">北京</li>
          <li class="border-rightbottom">北京</li>
        </ul>
    </div>
     <div class="hot">
        <h4>热门城市</h4>
        <ul class="city-name box nopadding" >
        <li class="border-rightbottom"
         v-for="(item, index) in hot" 
         :key="index"
         @click="handleCityClick(item)"
         >{{item}}</li>
        </ul>
    </div>
     <div class="all">
        <h4>全部城市</h4>
        <ul class="city-letter box nopadding" >
            <li v-for="(items, index) in all" 
            :key="index"
            @click="handleLetterClick"
             >{{items.initial}}
            </li>
        </ul>
        <div class="abc border" 
        v-for="item in all" 
        :key="item.initial"
        :ref="item.initial"        
        >
            <ul class="box nopadding">
                <h4 class="border-rightbottom">{{item.initial}}</h4>
                <li class="border-rightbottom"
                 v-for="(citys, index) in item.list" 
                 :key="index"
                 @click="handleCityClick(citys.name)"
                 >
                    {{citys.name}}
                </li>
                <router-link  tag="li"  class="border-rightbottom" to="#">更多>></router-link>
            </ul>
        </div>
    </div>
    <foot></foot>
  </div>

  </div>
</template>
<script>
import Scroll from 'better-scroll'
import Foot from "@/components/Footer"
import { mapState,mapMutations } from 'vuex'
export default {
  name: "CityLocation",
  components:{
    Foot
  },
  props:{
    hot:Array,
    all:Array,
    letter:String
  },
  methods: {
    handleLetterClick(e){
      this.$emit('change',e.target.innerText)
    },
    handleCityClick(city){
      // this.$store.dispatch('changeCity',city)
      // this.$store.commit('changeCity',city)
      this.changeCity(city)

      this.$router.push('/')
    },
  ...mapMutations(['changeCity']),
  
    initScroll(){
      this.scroll = new Scroll(this.$refs.wrapper,{
            scrollY: true,
              click: true,
              bounce: false
          })
    }
        
  },
  watch:{
    letter(){
      if(this.letter){
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },  
  computed:{
    ...mapState({
      currentCity:'city'
    })
  },
  mounted() {
     this.initScroll()
  }
};
</script>

<style lang="stylus" scoped>
  @import "~@styles/varibles"
  @import "~@styles/city.styl"
.list
    position absolute
    top 1.1rem
    left: 0
    bottom: 0
    right: 0
    background #f0efed
    overflow hidden
    padding 0 .2rem      
  .locate
    .city-name
      color #666

.all
  .city-letter
    color $bgColor
    li
        width 20%
        height .8rem
        border none 
.abc    
  .box
    overflow hidden
    position relative
    li
        width 25%
    h4
        float left
        display inline-block
        width 25%
        text-align center
        height 1.58rem
        line-height 1.6rem
        color #b7b7b7
        font-size .8rem
        margin 0
        margin-bottom -1px
</style>

