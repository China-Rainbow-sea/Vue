import Vue from 'vue'

import Vuex from 'vuex'

// 异步通信
import axios from "axios";

Vue.use(Vuex)
// 怎么拆分模块？vuex建议，一个功能最好对应一个模块
// 这里业务非常简单，我就把整个系统拆分为两个模板，a模块和 b模块(a业务和b业务)
// a模块
const a ={
    // 开启命名空间
    namespaced:true,
    actions:{
        doA1() {
            console.log('doA1 action')
        }
    },
    mutations:{
        doA2(){
            console.log('doA2 mutation...')
        }
    },
    state:{
        a:1
    },
    getters:{
        computedA(){
            return 1
        }
    }
}



// b模块
const b ={
    namespaced:true,
    actions:{
        doB1() {
            console.log('doB1 action')
        }
    },
    mutations:{
        doB2(){
            console.log('doB2 mutation...')
        }
    },
    state:{
        b:2
    },
    getters:{
        computedB(){
            return 2
        }
    }
}


const c = {
    namespaced:true,
    actions:{
        doA1(){
            console.log('c模块的doA1执行了')
        }
    }
}

/*
const actions = {
    doA1() {
        console.log('doA1 action')
    },
    doB1() {
        console.log('doB1 action')
    }
}

const mutations = {
    doA2(){
        console.log('doA2 mutation...')
    },
    doB2(){
        console.log('doB2 mutation...')
    }
}

const state = {
    a:1,
    b:2
}


// 全新的配置项 getters
const getters = {
    computedA(){
        return 1
    },

    computedB(){
        return 2
    }
}*/


import aModule from './a'
import bModule from './b'
import cModule from './c'

export default new Vuex.Store({
    modules:{
        // aModule 是 a 模块的名字
        aModule:a,
        // // bModule 是 b 模块的名字
        bModule:b
    }})
// 简写形式
/*
export default new Vuex.Store({actions,mutations,state,getters
})*/
