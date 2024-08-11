// 等同于引入 vue.js文件
import Vue from 'vue'

import App from './App'


// 关闭生产提示信息
Vue.config.productionTip = false

// 获取VueComponent 构造函数
// const VueComponentConstructor = Vue.extend({})

// 创建一个共享的vc对象
// const globalvc = new VueComponentConstructor()

// 给 "Vue 的原型对象" 扩展一个 x 属性，x属性指向了这个共享的 vc对象
// 给"Vue 的原型对象" 扩展的这个 x 属性，其他的组件 vc都是可以直接访问到的
// Vue.prototype.x = globalvc

// 引入Vuex插件中的核心对象 store
import store from './vuex/store'

// 创建Vue实例
const vm = new Vue({
    el: '#app',
    // 一个全新的配置项，以前没有学过: store
    // 加上这个配置项之后看，vm以及所有的vc对象上都会多一个属性: $store
    // 以后通过vm.$store 或者 vc.$store 来获取store对象。
    // store : store, 如果两者的名字是一样的，可以省略其中一个，
    store, // 简写形式
    render: h => h(App),

})

// console.log(vm)
