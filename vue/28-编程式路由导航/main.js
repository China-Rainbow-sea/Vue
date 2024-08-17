// 等同于引入 vue.js文件
import Vue from 'vue'

import App from './App'


// 关闭生产提示信息
Vue.config.productionTip = false

// 导入 vue-router 插件
import VueRouter from "vue-router";

// 使用 Vue-router 路由插件
Vue.use(VueRouter)


// 导入编写的路由器对象
// import router from './router/index'

// 第二种导入编写的路由器对象的方式
import router from './router'


// 创建Vue实例
const vm = new Vue({
    el: '#app',
    // 一旦使用了vue-router插件，那么new Vue的时候就可以直接传递一个配置项: router
    // router 项目用来接收一个路由器对象

    // router:路由器对象,
    router:router,  // 这里是因为我们上面导入的路由对象，名为就为了 router 所以是一样的
    render: h => h(App),

})
