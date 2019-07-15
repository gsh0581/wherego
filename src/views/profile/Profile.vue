<template>
    <div>
        <profile-header></profile-header>
        <profile-login></profile-login>
    </div>
</template>
<script>
import profileHeader from '@/components/profile/Header'
import profileLogin from '@/components/profile/Login'

export default {
    components:{
        profileLogin,
        profileHeader,
    }
}
</script>
<style lang="stylus" scoped>
    
</style>