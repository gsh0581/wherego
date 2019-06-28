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
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      },
      iconList: [
        {
          id: 1,
          title: "美食",
          content: "iconmeishi",
          color: "meishi"
        },
        {
          id: 2,
          title: "猫眼电影",
          content: "iconArtboard",
          color: "maoyan"
        },
        {
          id: 3,
          title: "酒店",
          content: "iconjiudian",
          color: "jiudian"
        },
        {
          id: 4,
          title: "休闲娱乐",
          content: "iconxiuxian",
          color: "xiuxian"
        },
        {
          id: 5,
          title: "外卖",
          content: "iconicon-test",
          color: "waimai"
        },
        {
          id: 6,
          title: "KTV",
          content: "iconKTV",
          color: "ktv"
        },
        {
          id: 7,
          title: "周边游",
          content: "iconlvyou",
          color: "travel"
        },
        {
          id: 8,
          title: "丽人",
          content: "iconliren",
          color: "liren"
        },
        {
          id: 9,
          title: "小吃快餐",
          content: "iconshutiao",
          color: "xiaochi"
        },
        {
          id: 10,
          title: "生活服务",
          content: "iconshenghuofuwu",
          color: "fuwu"
        },
        {
          id: 11,
          title: "美食",
          content: "iconmeishi",
          color: "meishi"
        },
        {
          id: 12,
          title: "猫眼电影",
          content: "iconArtboard",
          color: "maoyan"
        },
        {
          id: 13,
          title: "酒店",
          content: "iconjiudian",
          color: "jiudian"
        },
        {
          id: 14,
          title: "休闲娱乐",
          content: "iconxiuxian",
          color: "xiuxian"
        },
        {
          id: 15,
          title: "外卖",
          content: "iconicon-test",
          color: "waimai"
        },
        {
          id: 16,
          title: "KTV",
          content: "iconKTV",
          color: "ktv"
        },
        {
          id: 17,
          title: "周边游",
          content: "iconlvyou",
          color: "travel"
        },
        {
          id: 18,
          title: "丽人",
          content: "iconliren",
          color: "liren"
        },
        {
          id: 19,
          title: "小吃快餐",
          content: "iconshutiao",
          color: "xiaochi"
        },
        {
          id: 20,
          title: "生活服务",
          content: "iconshenghuofuwu",
          color: "fuwu"
        }
      ]
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 10);
        if (!pages[page]) pages[page] = [];
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
  background: #06c1ae !important;
}

.wrapper {
  overflow: hidden;
  padding-bottom: 48%; // 保持宽高比 或 height 48vw
  width: 100%;
  height: 0;
}

.icons {
  width: 100%;

  .icon {
    float: left;
    width: 20%;
    text-align: center;
    box-sizing: border-box;

    .item-icon {
      padding: 0.2rem 0;

      .icon-circle {
        display: block;
        width: 0.8rem;
        height: 0.8rem;
        margin: auto;
        border-radius: 10rem;
        line-height: 0.8rem;
        font-size: 0.5rem;
        color: #fff;
        margin-bottom: 0.14rem;
      }

      .title {
        text-align: center;
        color: #666;
        font-size: 0.24rem;
      }
    }
  }
}

.meishi {
  background: #fd9d21;
}

.maoyan {
  font-size: 0.8rem !important;
  background: #ff6767;
}

.jiudian {
  background: #8a90fa;
}

.xiuxian {
  background: #fed030;
}

.waimai {
  background: #fd9d21;
}

.ktv {
  background: #fed030;
}

.travel {
  background: #4dc6ee;
}

.liren {
  background: #ff80c2;
}

.xiaochi {
  background: #fd9d21;
}

.fuwu {
  background: #A8DD99;
}
</style>
