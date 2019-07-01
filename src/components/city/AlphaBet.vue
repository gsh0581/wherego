<template>
    <ul class="list">
        <li class="item" 
        v-for="(items, index) in letters" 
        :key="index"
        :ref="items"
        @click="handleLetterClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
         >
        {{items}}
            </li>  
    </ul>
</template>
<script>
export default {
    name:'CityAlphabet',
    props:{
        letter:Array
    },
    data() {
        return {
            touchStatus:false,
            startY:0
        }
    },
    updated() {
        // 页面更新时获取，不再是滑动时获取
        this.startY = this.$refs['A'][0].offsetTop
    },
    computed: {
      letters(){
          const letters = []
          for (const i in this.letter) {
              letters.push(this.letter[i].initial)
          }
          return letters
      }  
    },
    methods:{
        handleLetterClick(e){
            this.$emit('change',e.target.innerText)
        },
         handleTouchStart(){
            this.touchStatus=true
        } ,
        handleTouchMove(e){
            if(this.touchStatus){
                // 节流限制
                if(this.timer){
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(()=>{
                    const touchY = e.touches[0].clientY -50.5
                    const index= Math.floor((touchY-this.startY)/20)-1
                    if(index >= 0 && index< this.letters.length)
                        this.$emit('change',this.letters[index])
                },16)
            }
        },
         handleTouchEnd(e){
               this.touchStatus=false
        }

    }
}
</script>
<style lang="stylus" scoped>
@import '~@styles/varibles'
.list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    .item
        line-height .4rem
        text-align center
        color $bgColor
</style>
