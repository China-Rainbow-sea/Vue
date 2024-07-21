// 定义一个 vue 类
class Vue {
    // 定义构造函数
    // optioins 是一个简单的纯粹的js对象
    // options 对象中有一个data配置项
    constructor(options) {
        // 获取所有的属性名
        Object.keys(options.data).forEach((propertyName,index)=>{
            // console.log(typeof propertyName,propertyName,index);
            Object.defineProperty(this,propertyName,{
                get(){
                    return options.data[propertyName]
                },
                set(val){
                    options.data[propertyName] = val
                }
            })
        })
    }
}