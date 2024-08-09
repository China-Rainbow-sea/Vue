// 每一个插件都时一个对象
const p1 = {
    // 每一个插件对象中必须有一个 install 方法
    // 这个 install方法会被自动调用
    // install 方法上的参数：包括两部分：
    // 第一部分：Vue构造函数
    // 第二部分：可以接收用户在使用这个插件时传过来的数据，参数个数无限制
    install(Vue,a,b,c){
        console.log('这个插件正在显示一个可爱的封面...')
        console.log(Vue)
        console.log(a,b,c)

        // 获取Vue的原型对象
        // 给Vue的原型对象扩展一个counter属性
        // 通过 Vue的原型对象扩展的属性，通过Vue和 Vc 都可以访问
        Vue.prototype.counter=1000
    }
}