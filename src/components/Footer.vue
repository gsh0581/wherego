<template>
    <div class="footer">
        <div class="footer-bar">
            <div class="left">
                <span class="btn btn-weak">
                    登录
                </span>
                <span class="btn btn-weak">
                    注册
                </span>
            </div>
            <div class="right">
                <span class="city-name">城市:</span> 
                <div class="space"></div>
                 <div class="btn btn-weak">北京</div>
            </div>
        </div>
        <div class="footer-nav">
            <ul>
                <li>首页</li>
                <li>我的</li>
                <li>美团下载</li>
                <li>电脑版</li>
                <li>帮助</li>
            </ul>
        </div>
        
           <div class="footer-links">友情链接：
                <a gaevent="OutLink|Click|imt/ft/maoyan" target="_blank" href="//m.maoyan.com/?channel=touch_group">猫眼电影</a>
                <a gaevent="OutLink|Click|imt/ft/dianping" target="_blank" href="//m.dianping.com">大众点评</a>
                <a gaevent="OutLink|Click|imt/ft/hoteldownload" target="_blank" href="https://i.meituan.com/awp/hfe/hotel-fe-itower_awp/journey/guide-download/index.html?refer_source=yqlj">美团旅行</a>
                <a gaevent="OutLink|Click|imt/ft/zhenguo" target="_blank" href="//i.zhenguo.com">榛果民宿</a>
                <a gaevent="OutLink|Click|imt/ft/dianpingdownload" target="_blank" href="//evt.dianping.com/synthesislink/9496.html">大众点评下载</a>
                <a gaevent="OutLink|Click|imt/ft/shouyin" target="_blank" href="https://shouyin.meituan.com?utm_source=inner&amp;utm_medium=mti ">美团收银官网</a>
                <a gaevent="OutLink|Click|imt/ft/xue" target="_blank" href="https://xue.meituan.com/?from=mt0">美团点评餐饮学院</a>
                <a gaevent="OutLink|Click|imt/ft/kuailv" target="_blank" href="https://i.meituan.com/awp/hfe/block/6c4bec785dce/11188/index.html">快驴进货商家合作</a>
            </div>
        
        <div class="copyright">
            @2019美团网 京ICP证07D791号
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="stylus" scoped>
.space
  width .12rem
  display inline-block
.btn
    display inline-block
    border .02rem solid #06c1ae
    color #06c1ae
    padding 0 .3rem
    margin-right .2rem
    border-radius: .06rem
    text-align center
    height .6rem
    font-size .28rem
    line-height .6rem
    box-sizing border-box
    cursor pointer
    vertical-align middle
                
.footer
  padding 0 .2rem .4rem
  margin-top .3rem
  .footer-bar
    font-size .28rem
    display flex
    justify-content space-between
    margin-bottom .3rem
    .right
        .btn-weak
            width 1.8rem
            padding 0  .3rem
            border .02rem solid #06c1ae
  .footer-nav 
      margin-bottom .18rem
      ul
       display -webkit-box
       margin 0
       padding .18rem 0
       font-size .24rem
       white-space nowrap
       li
        -webkit-box-flex 1
        color #06c1ae
        border-right .02rem solid #666
        text-align center
        &:last-child
           border-right 0
  .footer-links
      font-size .24rem
      margin .3rem .4rem
      text-align center
      a
        color #06c1ae
      a+a
        padding-left: .5rem;
        display: inline-block;
        padding-bottom: .15rem;
  .copyright
      color #999
      font-size .22rem
      text-align center 
      
</style>
