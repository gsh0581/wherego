<template>
    <div>
        <div class="banner" @click="showGallery">
            <img class="banner-img" src="https://p1.meituan.net/deal/83e8003955dca2d4ff04adc4175580af65509.jpg" alt="">
        <div class="banner-info">
        <h1 class="banner-title">京彤轩烤肉火锅自助</h1>
        <div >火锅烤肉单人自助</div>
        </div>
        </div>
        <detail-gallery v-show="galleryShow" @handleGallery="handleGallery"></detail-gallery>
        <div class="list-group list-top">
            <div class="group-item dd-padding buy-price" >
                <div class="container" :class="{'price-fixed':topPrice === true}">
                        <div class="price">
                            <strong class="strong-color">60</strong>
                            元
                            <span class="retail-price">门市价:70元</span>
                        </div>
                <button class="btn buy-btn btn-larger btn-strong">立即抢购</button>
                </div>
            </div>
            <div class="group-item agreement">
                 <ul class="agree">
        <li class="color-ok">
                <i class="iconfont">&#xe611;</i>
        <span>支持随时退款</span></li>
        <li class="color-ok">
                   <i class="iconfont">&#xe601;</i>
        <span>支持过期自动退</span></li>
        <li class="agreement-solds">
            <i class="iconfont">&#xe613;</i>
        <span>已售22831</span></li>
    </ul>
            </div>
        </div>
    </div>
</template>
<script>
import detailGallery from './Gallery'
export default {
   name:"detailBanner",
   data() {
       return {
           topPrice:false,
           galleryShow:false      
       }
   },
   components:{
       detailGallery
   },
   activated(){
       window.addEventListener('scroll',this.handleScroll)
   },
   deactivated(){
       window.removeEventListener('scroll',this.handleScroll)
   },
   methods:{
       showGallery(){
           this.galleryShow = true
       },
       handleGallery(){
            this.galleryShow = false
       },
       handleScroll(){
           const top =  document.documentElement.scrollTop;
           if (top >= 440 ){
                this.topPrice =  true
           }
           else if(top <380){
        this.topPrice =  false
        }
       }
   }
}
</script>
<style lang="stylus" scoped>
    .banner
        position relative
        overflow hidden
        height 0
        padding-bottom 55%
        &:after 
                content ''
                height 2.22rem
                position absolute
                bottom 0
                left 0
                right 0
                background -webkit-linear-gradient( bottom, rgba(0, 0, 0, 0.58), rgba(0, 0, 0, 0.3) 64%, transparent )
            
        .banner-img
            width 100%
        .banner-info
            position absolute
            left 0.3rem
            right 0.3rem
            bottom 0.24rem
            line-height .6rem
            text-shadow 1px 1px 1px #000
            color #fff
            z-index 1
            .banner-title
                line-height 1.1
                font-size .38rem
    .list-group 
        border-top 1px solid #ddd8ce
        border-bottom 1px solid #ddd8ce
        margin-top 0.2rem
        margin-bottom 0
        background-color #fff
    .list-top 
        margin 0
        border-top 0
        
    .dd-padding 
        padding 0.28rem 0.2rem

    .container 
        line-height 1

    .buy-price 
        position relative
        top 0
        left 0
        color #999
        width 100%
        height 0 
        padding-bottom 1.1rem
        background-color #fff
        box-sizing border-box
        border-bottom 1px solid #ddd8ce
        .price 
            color #06c1ae
            display inline-block
            vertical-align text-top
        .strong-color 
            color #06c1ae
        strong,span
            font-weight bold
            margin-right 0.06rem
            font-size 0.66rem
        .buy-btn 
            position absolute
            right 0.2rem
            top 0.21rem
            height 0.8rem
            width 2.6rem
            margin 0
            line-height 0.8rem
            font-size 0.4rem
        .retail-price 
            color #999
            font-weight normal
            font-size 0.28rem
            letter-spacing -0.02rem
    .btn-strong 
        color #fff
        background-color #f90

.agreement 
  padding 0.2rem 0.2rem
  background-color #fff

.agreement ul.agree 
  line-height 1

.agreement li 
  display inline-block
  height 0.56rem
  width 50%
  padding 0
  box-sizing border-box
  line-height 0.56rem
  color #666
  text-align left
  overflow hidden
  white-space nowrap
  text-overflow ellipsis
  overflow hidden

.agreement li span 
  vertical-align middle

.agreement li.color-ok 
  color #6bbd00
  .iconfont
    font-size 20px
    vertical-align middle
.agreement li.agreement-solds 
  margin-bottom 0.1rem
  .iconfont
    font-size 20px
    vertical-align middle
.price-fixed
    position fixed
    top 0
    left 0
    right 0
    overflow hidden
    z-index 11
    background-color #fff
    padding-bottom .64rem
    padding 0.28rem 0.2rem
    box-shadow 0 0 0.3rem 0
</style>
