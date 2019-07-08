<template>

        <div class="container" @click="handleGalleryClick">
            <div class="wrapper">
           <swiper :options="swiperOption">
                <!-- slides -->
            <swiper-slide>
                <img class="gallery-img" src="https://p1.meituan.net/deal/83e8003955dca2d4ff04adc4175580af65509.jpg" >
            </swiper-slide>
             <swiper-slide>
                <img class="gallery-img" src="https://p0.meituan.net/440.0/dealwatera/06b1371dacdc3418a4e82826c30f67d760653.jpg" >
            </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
            </div>
        </div>

</template>
<script>
export default {
    name:'detailGallery',
   
    data() {
        return {
            swiperOption:{
                  pagination: {
                    el: '.swiper-pagination',
                    type : 'fraction',
                   
                },
                 observeParents:true,
                    observer:true
            }
        }
    },
     methods:{
        handleGalleryClick(){
            this.$emit('handleGallery')
        }
    },
}
</script>
<style lang="stylus" scoped>
    .container >>> .swiper-container
        overflow inherit
    .container
        display flex
        justify-content center
        flex-direction column
        position fixed
        top 0
        left 0
        right 0 
        bottom 0
        background #000
        z-index 9
        .wrapper
            height 0
            width 100%
            padding-bottom 100%

            .gallery-img
                width 100%
            .swiper-pagination
                color #fff
                font-size 0.4rem
                top  -2.5rem
</style>
