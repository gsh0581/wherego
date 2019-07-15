<template>
  <div>
    <div class="list-group tags-container">
      <div class="group-item">
        <div class="more more-weak comment-headline">
          <span class="stars">
            <i class="iconfont" style="width:0.32rem;height:0.32rem;">&#xe61b;</i>
            <i class="iconfont" style="width:0.32rem;height:0.32rem;">&#xe61b;</i>
            <i class="iconfont" style="width:0.32rem;height:0.32rem;">&#xe61b;</i>
            <i class="iconfont" style="width:0.32rem;height:0.32rem;">&#xe61b;</i>
            <em class="star-text">4.3</em>
          </span>
          <span class="pull-right">3523人评价</span>
        </div>
        <ul class="agree dd-padding">
          <router-link
            to="http://#"
            tag="li"
            v-for="(item, index) in comment_labels"
            :key="index"
            class="btn btn-tag btn-tag-light"
          >
            <span class="tag-title">
              {{item.content}}
              <span class="tag-num">{{item.label_count}}</span>
            </span>
          </router-link>
        </ul>
      </div>
      <div class="group-item">
        <div class="group-title dd-padding">
          <span>评价</span>
          <span class="stars pull-right">
            <i class="iconfont" style="width:0.32rem;height:0.32rem;">&#xe61b;</i>
            <i class="iconfont" style="width:0.32rem;height:0.32rem;">&#xe61b;</i>
            <i class="iconfont" style="width:0.32rem;height:0.32rem;">&#xe61b;</i>
            <i class="iconfont" style="width:0.32rem;height:0.32rem;">&#xe61b;</i>
            <em class="star-text">4.3</em>
          </span>
        </div>
        <div class="feedback-container dd-padding">
          <div class="feedback-card" v-for="item in comments" :key="item.user_id">
            <div class="user-wrapper">
              <div class="user-pic">
                <div class="imgbox" style="height: 0.74rem; width: 0.74rem;">
                  <img
                    :src="item.user_pic_url"
                    alt
                  />
                </div>
              </div>
              <div class="user-info-text">
                <div class="user-info">
                  <span class="user-name">{{item.user_name}}</span>
                </div>
                <div class="score " >
                  <span class="stars">
                        <i class="iconfont" style="width:0.32rem;height:0.32rem;">&#xe61b;</i>
                        <i class="iconfont" style="width:0.32rem;height:0.32rem;">&#xe61b;</i>
                        <i class="iconfont" style="width:0.32rem;height:0.32rem;">&#xe61b;</i>
                        <i class="iconfont" style="width:0.32rem;height:0.32rem;">&#xe61b;</i>
                  </span>
                  <span class="time">{{item.date}}</span>
                </div>
              </div>
            </div>
            <div class="comment">
              <div class="toggle-content">
                <div class="comment-container">
                        {{item.comment}}
                  <i class="text-icon icon-ell"></i>
                  <span class="feedback-more">，口感会更好， 整体来说还不错，期待能变得更好</span>
                  <i class="text-icon icon-toggle-arrow"></i>
                </div>
              </div>
            </div>
            <div class="pics">
              <span v-for="(pic, index) in item.comment_pics" :key="index">
                <div class="imgbox" style="height: 1.1rem; width: 1.1rem;">
                  <img :src="pic.url"
                  />
                </div>
              </span>
            </div>
            <div class="poi-name">
              <a href="/i/poi/177506000" class>奶茶嫁给粉（长楹天街购物中心店）</a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      comment_labels: [
        {
          content: "风雨无阻",
          label_count: 1033
        },
        {
          content: "仪表整洁",
          label_count: 193
        },
        {
          content: "礼貌热情",
          label_count: 110
        },
        {
          content: "快速准时",
          label_count: 15
        },
        {
          content: "穿戴工服",
          label_count: 6
        },
        {
          content: "货品完好",
          label_count: 76
        }
      ],
      comments: [
        {
          user_name: "LVMING588",
          user_pic_url:
            "https://p1.meituan.net/mmc/e663563d638f3f2c56274e28ac949a143761.png@148w_148h_1e_1c",
          ship_score: 4.0,
          create_time: "2019-02-23",
          comment:
            "在长楹天街购物中心东区地下一层，买的套餐35，酸辣粉还可以，又酸又辣，价格和西少爷有的一拼，但口感上略输给西少爷一些，强烈建议饼，真的是好硬，如果能做的松软一些",
          comment_type: 4,
          user_id: 280770501,
          comment_pics: [
            {
              url:
                "http://p0.meituan.net/wmcomment/a568bfc3d475d81a68af464e3137c5e7257213.jpg",
              thumbnail_url: ""
            },
            {
              url:
                "http://p0.meituan.net/wmcomment/320e5b9efcf0e9f565c0b7757c790e34397016.jpg",
              thumbnail_url: ""
            }
          ]
        },
        {
          user_name: "LVMI32450",
          user_pic_url:
            "https://p1.meituan.net/mmc/e663563d638f3f2c56274e28ac949a143761.png@148w_148h_1e_1c",
          ship_score: 4.0,
          create_time: "2019-02-23",
          comment:
            "在长楹天街购物中心东区地下一层，买的套餐35，酸辣粉还可以，又酸又辣，价格和西少爷有的一拼，但口感上略输给西少爷一些，强烈建议饼，真的是好硬，如果能做的松软一些",
          comment_type: 4,
          user_id: 280770531,
          comment_pics: [
            {
              url:
                "http://p0.meituan.net/wmcomment/a568bfc3d475d81a68af464e3137c5e7257213.jpg",
              thumbnail_url: ""
            },
            {
              url:
                "http://p0.meituan.net/wmcomment/320e5b9efcf0e9f565c0b7757c790e34397016.jpg",
              thumbnail_url: ""
            }
          ]
        }
      ]
    };
  }
};
</script>
<style  scoped>
.list-group {
  margin-top: 0.2rem;

}
.more {
  position: relative;
  padding-right: 0.3rem;
  width: 100%;
  box-sizing: border-box;
}
.tags-container .star-row {
  display: block;
  height: 100%;
  padding: 0.28rem 0.2rem;
}
.tags-container .comment-headline {
  color: #999;
  line-height: 0.75rem;
}
.stars {
  display: inline-block;
  color: #fa952f;
}
.pull-right {
  float: right;
}
.group-item{
      background: #fff;
    margin-bottom: .2rem
}
.btn-tag {
  height: 0.62rem;
  padding: 0 0.11rem;
  margin-bottom: 0.14rem;
  margin-right: 0.1rem;
  line-height: 0.62rem;
  background: 0;
  border: 0.02rem solid #acacac;
  color: #999;
}
.btn-tag-light {
  margin-bottom: 0.14rem;
  margin-right: 0.1rem;
  border: 0.02rem solid #fdb338;
  color: #fdb338;
}
.dd-padding {
  padding: 0.28rem 0.2rem;
}

.evaluation-container .feedback-container {
  padding-left: 0.2rem;
  border-bottom: 1px solid #ddd8ce;
}

.group-title {
  border-bottom: 0;
  font-size: 0.34rem;
}

.evaluation-container .group-title a {
  color: #333;
}

.imgbox, .imgbox-dp {
  display: block;
  width: auto;
  height: auto;
  background: url(/bs/file/?f=meis/meishi.mobile:assets/bee61f5f04046d07.png@acd4d2a) center center no-repeat #e0e0e0;
  background-size: 60% auto;
}
.imgbox img, .imgbox-dp img {
  width: 100%;
  height: 100%;
}

.imgbox-dp {
  background: url(/bs/file/?f=meis/meishi.mobile:assets/fb5f2a21206efc3b.png@acd4d2a) center center no-repeat #e0e0e0;
}

.img-box.scale-img {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.img-box.scale-img img {
  position: relative;
}
.img-preview .flex {
  display: -webkit-box;
  display: -moz-box;
  display: box;
  display: flex;
}
.img-preview .flex-center {
  -webkit-box-pack: center;
  -moz-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
}
.img-preview .slide-img {
  background: #000;
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  height: 100%;
}
.img-preview .slide-img > p {
  text-align: center;
  color: #fff;
  font-size: 0.4rem;
  margin-top: 0.2rem;
  position: absolute;
  z-index: 10;
  left: 0;
  right: 0;
}
.img-preview .slide-img i {
  position: absolute;
  right: 0.1rem;
  top: 0.1rem;
  z-index: 10;
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
  border: 1px solid #fff
}
.img-preview .slide-img i:after {
  color: white;
  font-weight: bold;
}
.img-preview .slide-img ul {
  position: absolute;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
.img-preview .slide-img li {
  height: 100%;
  padding: 0;
}
.img-preview .slide-img img {
  width: 100%;
  max-height: 87%;
}
.img-preview .slide-img span {
  position: absolute;
  font-size: 0.25rem;
  color: #fff;
  right: 0.2rem;
  top: 0.1rem;
  z-index: 11;
}
.img-preview .translate {
  -webkit-transition: 0.15s all ease;
}
.img-preview .full-height {
  height: 100%;
  overflow-y: auto;
}
.feedback-card {
  position: relative;
  padding: 0.28rem 0.2rem 0.28rem 0;
  border-top: 1px solid #ddd8ce;
  background: #fff;
}
.feedback-card .imgbox {
  background-size: 50%;
}
.feedback-card .user-wrapper {
  position: relative;
}
.feedback-card .user-wrapper .imgbox {
  border-radius: 50%;
  -webkit-border-radius: 50%;
}
.feedback-card .user-wrapper .imgbox img {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  vertical-align: middle;
  border: 0;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  background: none;
}
.feedback-card .user-pic {
  position: absolute;
  width: 0.73rem;
  height: 0.73rem;
  vertical-align: top;
}
.feedback-card .user-info-text {
  margin-left: 0.8rem;
  font-size: 0.24rem;
  color: #999;
  vertical-align: top;
  height: 0.73rem;
  overflow: hidden;
}
.feedback-card .user-info-text .user-info {
  margin-bottom: 0.06rem;
  font-size: 0.24rem;
  line-height: 1.41;
  color: #666;
}
.feedback-card .user-info-text .score {
  margin-bottom: 0.4rem;
  font-size: 0.24rem;
  margin-top: -0.06rem;
}
.feedback-card .user-info-text .stars {
  display: inline-block;
  margin-right: 0.2rem;
  font-size: 0.28rem;
  vertical-align: bottom;
}
.feedback-card .serious-evaluation {
  position: absolute;
  width: 1rem;
  height: 1rem;
  top: -0.18rem;
  right: 0.25rem;
}
.feedback-card .serious-evaluation img {
  width: 100%;
  height: 100%;
}
.feedback-card .comment {
  margin-top: 0.3rem;
  margin-bottom: 0.22rem;
  font-size: 0.3rem;
}
.feedback-card .comment .comment-container {
  display: block;
  line-height: 1.41;
  text-align: justify;
  margin: -0.2em 0;
  word-break: break-all;
  color: #333;
}
.feedback-card .comment .icon-ell:after {
  content: '...';
  display: inline;
}
.feedback-card .comment .feedback-more {
  display: none;
}
.feedback-card .comment .icon-toggle-arrow {
  position: relative;
  float: right;
  width: 2em;
  text-align: center;
}
.feedback-card .comment .icon-toggle-arrow:after {
  content: '';
  display: inline-block;
  position: relative;
  top: -0.2em;
  width: 0.5em;
  height: 0.5em;
  border-bottom: 0.03rem solid #c3c5c9;
  border-left: 0.03rem solid #c3c5c9;
  -webkit-transform: rotateZ(-45deg);
  -moz-transform: rotateZ(-45deg);
  -ms-transform: rotateZ(-45deg);
}
.feedback-card .comment .toggle-content.active .icon-ell:after {
  content: '';
  display: inline;
}
.feedback-card .comment .toggle-content.active .feedback-more {
  display: inline;
}
.feedback-card .comment .toggle-content.active .icon-toggle-arrow:after {
  -webkit-transform: rotateZ(135deg);
  -moz-transform: rotateZ(135deg);
  -ms-transform: rotateZ(135deg);
}
.feedback-card .pics {
  margin-bottom: 0.26rem;
}
.feedback-card .pics .imgbox {
  display: inline-block;
  width: 1.1rem;
  height: 1.1rem;
  margin-right: 0.1rem;
  margin-bottom: 0.14rem;
  overflow: hidden;
  text-align: center;
  vertical-align: top;
}
.feedback-card .poi-name {
  font-size: 0.28rem;
}
.feedback-card .poi-name a {
  color: #666;
}
.feedback-card .block-reply {
  color: #666;
  margin-top: 0.2rem;
  background-color: #f7f7f6;
  padding: 0.2rem;
  position: relative;
  border-radius: 0.06rem;
  -webkit-border-radius: 0.06rem;
}
.feedback-card .block-reply .block-reply-head {
  border-bottom: 1px solid #e0ddd7;
  font-size: 0.24rem;
  padding-bottom: 0.2rem;
  color: #666;
}
.feedback-card .block-reply .reply-container {
  margin-top: 0.2rem;
  font-size: 0.3rem;
  color: #ed852c;
}
.feedback-card .block-reply .reply-time {
  float: right;
  color: #999;
}
.feedback-card .block-reply:before {
  content: '';
  display: block;
  position: absolute;
  width: 0.2rem;
  height: 0.2rem;
  top: -0.1rem;
  left: 0.5rem;
  background-color: #f7f7f6;
  -webkit-transform: rotateZ(45deg);
  -moz-transform: rotateZ(45deg);
  -ms-transform: rotateZ(45deg);
}
</style>
