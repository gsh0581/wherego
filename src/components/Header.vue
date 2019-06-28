<template>
  <div class="header">
    <div class="header-left ">{{this.city}}<i class="iconfont"> &#xe65f;</i></div>
    <div class="header-input"> <i class="iconfont">&#xe760;</i> 输入商家/品类/商圈</div>
    <div class="header-right"><i class="iconfont"> &#xe600;</i> 我的</div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  props:{
    city:String
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
      float left
      text-align center
      font-size .32rem
      height  1.01rem
      width 1.35rem
      line-height 1.01rem
      .iconfont{
        font-size .24rem
      }
    .header-input
      flex 1
      height .64rem
      padding 0 0 0 .3rem
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

