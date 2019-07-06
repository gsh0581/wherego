<template>
    <div>
        <detail-header></detail-header>
        <home-ad></home-ad>
        <detail-banner></detail-banner>
    </div>
</template>
<script>
import HomeAd from "@/components/Ad";
import detailHeader from '@/components/detail/Header'
import detailBanner from '@/components/detail/Banner'
export default {
   name:"detail",
    components:{
        detailHeader,
        detailBanner,
        HomeAd
    }
}


</script>
<style lang="stylus" scoped>

</style>
