<template>
    <div>
        <detail-header></detail-header>
        <div class="content">
        <home-ad></home-ad>
        <detail-banner></detail-banner>
        <detail-list></detail-list>
        <foot></foot>
        </div>
    </div>
</template>
<script>
import HomeAd from "@/components/Ad";
import detailHeader from '@/components/detail/Header'
import detailBanner from '@/components/detail/Banner'
import detailList from '@/components/detail/List'
import Foot from '@/components/Footer'
export default {
   name:"detail",
    components:{
        detailHeader,
        detailBanner,
        HomeAd,
        detailList,
        Foot
    },
    data (){
        return {
            list:[{
                
            }]
        }
    
    }
}

</script>
<style lang="stylus" scoped>
  
</style>
