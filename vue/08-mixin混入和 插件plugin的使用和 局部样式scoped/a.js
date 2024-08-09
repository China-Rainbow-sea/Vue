import App from "./App1"
const vm  = new Vue({
    el:'#root',
    template:
        '<app></app>'
    ,

    // 注册app组件
    components:{app}
})