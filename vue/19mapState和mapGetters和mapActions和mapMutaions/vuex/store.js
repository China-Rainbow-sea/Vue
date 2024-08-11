import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {
    saveUser(context, value) {
        context.commit('SAVE_USER', value)
    },
/*    saveVip(context, value) {
        context.commit('SAVE_VIP', value)
    },*/
}
const mutations = {
    SAVE_USER(state, value) {
        state.users.unshift(value)
    },
    SAVE_VIP(state, value) {
        state.vips.unshift(value)
    }
}
const state = {
    uname: '',
    users: [
        {id: '001', name: '孙悟空'},
        {id: '002', name: '猪八戒'},
        {id: '003', name: '沙和尚'}
    ],
    vips: [
        {id: '001', name: '高启强'},
        {id: '002', name: '高启盛'},
        {id: '003', name: '高启兰'}
    ]
}


// 全新的配置项 getters
const getters = {
    // 有很多getter，每一个getter 可以看做一个计算属性
    // 每一个 getter方法都会自动接收一个state 对象。
    reverseName(state) {  // 可以看做Vue中的computed
        return state.uname.split('').reverse().join('')
    }
}


export default new Vuex.Store({actions, mutations, state,getters})