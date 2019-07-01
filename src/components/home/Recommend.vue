<template>
  <div class="recommend">
    <div class="recommend-title">猜你喜欢</div>
    <ul>
        <router-link :to="{name:'detail',params:{id:item.id}}" tag="li" class="item" v-for="item of list" :key="item.id">
            <div class="item-img-wrapper">
                <img :src="item.imgUrl" alt="" class="item-img">                
            </div>
            <div class="item-info">
                <div class="item-title">{{item.title}}</div>
                <div class="item-desc">{{item.desc}}</div>
                <div class="item-price">
                    <span class="strong">{{item.price}}<span class="strong-color">元</span> 
                    <span class="del">门市价：{{item.del}}元</span> </span>
                    <span class="line-right">已售{{item.saled}}</span> 
                </div>
            </div>
        </router-link>
    </ul>
    <div class="more">
        <div class="more-title">
            查看全部团购 
        </div>
        <div class="right iconfont">&#xe912;</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Recommend",
  props:{
      list:Array
  }
};
</script>
<style lang="stylus" scoped>
.recommend 
  background: #fff
  margin-top: 0.2rem
  text-indent .2rem
  .recommend-title
    font-size .34rem
    line-height: 0.8rem
    padding-bottom .2rem
  .item
    overflow hidden
    padding .1rem 0
    display flex
    height 1.8rem
    border-bottom 1px solid #ddd8ce
    .item-img-wrapper
        width 1.8rem
        height 1.64rem
        text-align center
        overflow hidden
        .item-img
            width 100%
            background-color #f0efed;
            background-size 100%
    .item-info
        flex 1
        padding .1rem
        font-size .24rem
        .item-title
            font-size .3rem
            margin-bottom .12rem
        .item-desc
            
            height .68rem
            color #666
            text-overflow ellipsis
            -webkit-line-clamp 2
            -webkit-box-orient vertical
            overflow hidden
        .item-price
            width 100%
            display flex
            justify-content space-between
            .del
                font-size .24rem
                color #666
                margin-left .1rem
            .strong
                font-size .38rem
                color #06c1ae
            .strong-color
                font-size .26rem
                color #06c1ae
            .line-right
                font-size .24rem
                color #666
  .more
      color #06c1ae
      font-weight 700
      height .8rem
      line-height .8rem
      font-size .3rem          
      display flex
      justify-content space-between
      .right
          padding-right .2rem
</style>
