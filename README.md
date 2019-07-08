# wherego

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
路由：根据网址的不同返回不同的页面

vm.$nextTick(()=>{

})
better-scroll 横向触发方法
css的 width max-content
设置 scrollX:true ,scrollY:false

vuex 
action可省略

路由跳转功能
编程式导航
 this.$router.push('/')
 localstorage使用，注意添加try catch

保证多字城市的样式，使用min-width 

vuex代码优化

引入mapState 把vuex中的数据映射到computed计算属性里

对全局事件的解绑

由于使用keep-alive，可以使用actived，在其中添加滚动事件
但详情页中添加的滚动事件的绑定会影响到其他页面
故使用deactivated 对滚动事件解绑