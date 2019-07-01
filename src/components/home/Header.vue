<template>
  <div class="header">
    <router-link to="/city" tag="div" class="header-left ">
    {{this.city}}<i class="iconfont"> &#xe65f;</i>
    </router-link>
    <router-link to="/search" tag="div" class="header-input" :list="list">
   <i class="iconfont">&#xe760;</i> 输入商家/品类/商圈
    </router-link>
    <div class="header-right"><i class="iconfont"> &#xe600;</i> 我的</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "HomeHeader",
  props:{
    list:Array
  },
  computed:{
    ...mapState(['city'])
  }
};
</script>

<style lang="stylus" scoped>
  @import "~@styles/varibles"
  .header
    display flex
    height 1.01rem
    background $bgColor
    color #fff
    .header-left 
      color #fff
      float left
      text-align center
      font-size .32rem
      height  1.01rem
      min-width 1.35rem
      padding 0 .1rem
      line-height 1.01rem
      .iconfont{
        font-size .24rem
      }
    .header-input
      flex 1
      height .64rem
      padding 0 2.2rem 0 .3rem
      line-height .64rem
      font-size .26rem
      color #68dbce
      margin-top .2rem
      border-radius .06rem
      background rgba(0,0,0,.15)
      position relative
      .iconfont{
        color #fff;
      }
    .header-right
      float right
      line-height 1
      text-align center
      width .94rem
      font-size .2rem
      height 100%
      vertical-align middle
      .iconfont{
        display block
        font-size .4rem
        margin .12rem auto
      }
      
</style>

