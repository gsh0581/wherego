import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import City from './views/city/City.vue'
import Search from './views/search/Search.vue'
import Profile from './views/profile/Profile.vue'
import Detail from './views/detail/Detail.vue'
Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/city',
      name:'city',
      component:City
    },
    {
      path:'/search',
      name:'search',
      component:Search
    },
    {
      path:'/detail',
      name:'detail',
      component:Detail
     
    },   
    {
      path:'/profile',
      name:'profile',
      component:Profile
     
    },  
  ]
})
