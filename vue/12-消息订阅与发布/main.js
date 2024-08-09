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


// 创建Vue实例
new Vue({
    el: '#app',
    render: h => h(App),

    beforeCreate() {
        // Vue.prototype.x = this
        Vue.prototype.$bus = this
    }
})
