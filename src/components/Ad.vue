<template>
    <div class="ad-wrapper">
     <img class="ad-img" :src="imgUrl">
    </div>
</template>
<script>
export default {
    name:"ad",
    data() {
        return {
            imgUrl:"https://ms0.meituan.net/touch/img/download_banner.png"
        }   
    },
}
</script>
<style lang="stylus" scoped>
.ad-wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 29.3%
  .ad-img
    width: 100%
</style>

