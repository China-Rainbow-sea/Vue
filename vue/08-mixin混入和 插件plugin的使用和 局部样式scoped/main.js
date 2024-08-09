// 等同于引入 vue.js文件
import Vue from 'vue'

// 导入App组件(根组件)
// import App from './App1.vue'
// import App from './App'
// import App from './App2'
import App from './App3'

// 全局混入
/*Vue.mixin(mixl)
Vue.mixin(mix2)
Vue.mixin(mix3)*/

// 插件的使用通常放在创建 Vue 实例之后
// 插上插件，（剩余就是按下插件）
// 导入插件
/*
import {p1} from './plugins'
Vue.use(p1,1,2,3,4)
*/


// 关闭生产提示信息
Vue.config.productionTip = false

// 创建Vue实例
new Vue({
  render: h => h(App),
}).$mount('#app')
/*new Vue({
  el:'#app',*/
  // 您正在使用Vue的仅运行时版本，其中模板编译器不可用
  // 目前使用的 vue.js 是一个缺失了模板编译器的 vue.js 文件
  // 怎么解决，两种方案：
  // 第一种：使用完整的 Vue.js
  // 第二种：使用 render函数
  // 为什么采用缺失模板编辑器的 vue.js?
  // 目的：减小体积，vue.js 包括两块，vue的核心+模板编辑器(模板编辑器可能占用vue.js文件体积的三分之一)
  // 将来程序使用 webpack进行打包处理之后，模板编辑器就没有存在的必要了，因为这时候打包就是已经都编译好对应成（html）
  // 等等对应的文件了，不需要再用模板编辑器了。
  // template:'<h1>render 函数</h1>',

  // render 函数被自动调用
/*  render(){
    console.log(111)
  }*/

  // 这个函数被调用的时候会自动传过来一个粗那还是：createElement:createElement是一个函数
  // createElement 函数可以用来创建元素
/*  render(createElement){

    // 创建了一个 div 元素
    console.log(111)
    // return createElement('div','render函数')
    return createElement(App)
  }*/
  // 简写就是
  // render:h=>h(App)

// })

