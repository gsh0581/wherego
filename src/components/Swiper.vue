<template>
  <swiper :options="swiperOption" class="wrapper">
    <!-- slides -->
    <swiper-slide class="icons" v-for="(page, index) in pages" :key="index">
      <div class="icon" v-for="item of page" :key="item.id">
        <div class="item-icon">
          <span class="icon-circle iconfont" :class="[item.content,item.color]"></span>
          <span class="title">{{item.title}}</span>
        </div>
      </div>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: "HomeSwiper",
  props:{
    list:Array
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      }
      
    }
  },
  computed: {
    pages() {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 10)
        if (!pages[page]) pages[page] = []
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@styles/icon'

.wrapper >>> .swiper-pagination-bullet-active 
  background: #06c1ae !important

.wrapper 
  overflow: hidden
  background: #fff
  padding-bottom: 48% // 保持宽高比 或 height 48vw
  width: 100%
  height: 0
  .icons 
    width: 100%
    .icon 
      float: left
      width: 20%
      text-align: center
      box-sizing: border-box
      .item-icon 
        padding: 0.2rem 0
        .icon-circle 
          display: block
          width: 0.8rem
          height: 0.8rem
          margin: auto
          border-radius: 10rem
          line-height: 0.8rem
          font-size: 0.5rem
          color: #fff
          margin-bottom: 0.14rem
        .title 
          text-align: center
          color: #666
          font-size: 0.24rem
</style>
