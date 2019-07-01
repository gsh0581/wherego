<template>
    <div>
        <search-header></search-header>
        <ad></ad>
        <div class="search-wrapper">
        <form id="search-form" method="get">
            <div class="box-search border">
                <i class="iconfont icon">&#xe760;</i>
        <input 
         type="text" 
         v-model="keyword" 
         class="search-input"
         @focus="handleDisplayList"
         placeholder="输入商家名、品类或商圈"
         />
            </div>
        <button type="submit" class="btn">搜索</button>
        </form>
        <div class="search-hot" v-show="condition">
      
            <ul>
                <li class="border-rightbottom">
                    <h4>周边热门</h4>                    
                </li>
                <li class="border-rightbottom">北京动物园</li>
                <li class="border-rightbottom">欢乐水魔方</li>
                <li class="border-rightbottom">北京欢乐谷</li>
                <li class="border-rightbottom">故宫博物院</li>
                <li class="border-rightbottom">八达岭长城</li>
                <li class="border-rightbottom">速8酒店</li>
                <li class="border-rightbottom">北京世界园</li>
                <li class="border-rightbottom">北京杜莎夫人北京杜莎夫人</li>
                <li class="border-rightbottom">星巴克</li>
            </ul>
        </div>
        </div>
        <foot></foot>
    </div>
</template>
<script>
import searchHeader from '@/components/search/Header'
import Ad from '@/components/Ad'
import Foot from '@/components/Footer'
export default {
    name:"search",
    components:{
        searchHeader,
        Ad,
        Foot
    },
    props:{
        list:Array
    },
    data(){
        return {
            keyword:'',
            items:[],
            timer:null,
            condition:true
        }
    },
    methods:{
      handleDisplayList  (){
          this.condition = !this.condition
      }
    },
    watch:{
        // keyword(){
        //     if(this.timer){
        //         clearTimeout(this.timer)
        //     }
        //     this.timer = setTimeout(()=>{
        //         const result = []
               
        //     },100)
        // }
    }
}
</script>
<style lang="stylus" scoped>
#search-form 
    margin-top .2rem
    margin-bottom .2rem
    height .8rem
    position relative
    padding 0 0.2rem
    .btn
        position absolute
        top 0
        right .2rem
        width 1.2rem
        height .8rem
        background-color #dcdcdc
        text-align center
        color #999
    .icon
        position absolute
        left .2rem
.box-search

    height .8rem
    border-radius .06rem
    background #fff
    vertical-align middle
    position relative
    margin-right 1.4rem
    line-height .8rem
    padding 0 .7rem 0 .7rem
    .search-input
        width 100%
        border none
        background rgba(255, 255, 255, 0)
        outline-style none
        display block
        line-height .28rem
        height 100%
        font-size .28rem
    
li
    box-sizing border-box;
    display inline-block
    width 25%
    height .8rem
    line-height .8rem
    font-size .28rem
    margin-bottom -1px
    padding 1px
    overflow hidden
    text-align center
    text-overflow ellipsis
    white-space nowrap
    h4
        color #fdb338

.search-hot
    background #fff
    
</style>
