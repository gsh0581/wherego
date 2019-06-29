<template>
    <ul class="list">
        <li class="item" 
        v-for="(items, index) in letter" 
        :key="index"
        @click="handleLetterClick" >
                {{items.initial}}
            </li>  
    </ul>
</template>
<script>
export default {
    name:'CityAlphabet',
    props:{
        letter:Array
    },
    methods:{
        handleLetterClick(e){
            this.$emit('change',e.target.innerText)
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
