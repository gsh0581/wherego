<template>
  <div class="header">
    <router-link to="/">
    <div class="header-left"><i class="iconfont iconfanhui"></i></div>
    </router-link>
    <div class="header-input">选择城市 </div>
    <div class="header-right"><i class="iconfont"> &#xe600;</i> 首页</div>
    <div class="header-right"><i class="iconfont"> &#xe760;</i> 搜索</div>
  </div>
</template>

<script>
export default {
  name: "CityHeader",
  props:{
  }
};
</script>

<style lang="stylus" scoped>
  @import "~@styles/varibles"
  .header
    display -webkit-box
    height 1.01rem
    background $bgColor
    color #fff
    .header-left 
      padding 0 .2rem
      height 1.01rem
      line-height 1.01rem
      .iconfont{
        color #fff
        font-size .44rem
      }
    .header-input
      -webkit-box-flex  1
      line-height 1rem
      font-size .36rem
      text-align center
      text-overflow: ellipsis
      white-space: nowrap
      overflow: hidden
    .header-right
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

