// 引入 Vue,因为下面使用Vuex插件的时候需要 Vue
import Vue from 'vue'


// 引入 vuex 插件
import Vuex from 'vuex'


// 使用插件
Vue.use(Vuex)

// 创建三个对象: actions对象，mutations对象，state对象
/*const a = {}
const b = {}
const c = {}*/



// 创建三个对象: actions对象，mutations对象，state对象
const actions = {
    // N 多个 action
    // 每一个action都是一个 callback(回调函数)

  /*  plusOne:function(){

    } 方法简写：
   */
    // context 参数: context 是 vue 的上下文,可以简记为 缩小版的 state
    // value 参数：传过来的数据
    plusOne(context,value) {
        // 处理业务
        value = value + 1

        // 调用其它的 action这个回调函数
        context.dispatch('otherAction',value)
        // 业务逻辑处理完成之后，继续向下一个环节走，就轮到了数据的更新
        context.commit('PLUS_ONE',value)
    },

    // 这里可能还会有其他的 action
    // ...
    otherAction(context,value){
        console.log(666)
    }


}
const mutations = {
    // N多i个 mutation
    // 每一个mutation 都是一个 callback(回调函数)
    // 每一个 mutation 这个回调函数的作用就是：更新 state
    // 只要 state 更新，因为是响应式的，所有页面就重新渲染了。
    // state 参数：状态对象，还是原来的这个 state 对象
    // value 参数：上一个环节传过来的数据
    PLUS_ONE(state,value){
        state.num += value
    },

}


/*
 等同于 Vue 当中 data (只不过这里我们不叫做数据，叫做状态)
 状态对象(数据对象)，已经做了响应式处理的
* */
const state = {
    num:0
}

// 创建store 对象（这个 store对象是 vuex 插件中的老大，最核心的对象，这个对象store是用来管理action对象
// ，mutations对象，state对象）
/*const store = new Vuex.Store({

    // 它是一个负责执行某个行为的对象
    // actions:{},
    // actions: a,
    actions: actions,
    // 它是一个负责更新的对象
    // mutations:{},
    // mutations: b,
    mutations: mutations,
    // 它是一个状态对象
    // state:{}
    // state: s
    state: state
})*/


// 简写形式
export default new Vuex.Store({actions,mutations,state})

// 导出 store 对象（暴露之后，别人想用可以使用 import 进行引入）
// export default store