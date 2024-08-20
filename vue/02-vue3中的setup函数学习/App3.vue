<template>
<!--    <h2>姓名: {{nameRefImpl}}</h2>-->
<!--    <h2>年龄: {{ageRefImpl}}</h2>-->

    <h2>姓名: {{name}}</h2>
    <h2>年龄: {{age}}</h2>
    <button @click="modifyInfo">修改用户信息</button>
</template>

<script>

    import {ref} from 'vue'

    export default {
        name: "App",

        setup() {
            // data
            // ref 对‘张三’ 这个数据进行包裹，然后返回一个全新的对象，引用对象RefImpl
            // let name = ref('张三')
            // RefImpl 对象中有value属性，这个value属性是具有响应式的，并且这个value底层使用了Object defineProperty 完成了响应式
            // RefImpl对象的value属性，有对应的set和get
            // 当读取RefImpl 对象的value 属性时，get执行
            // 当修改RefImpl对象的value属性时，set执行
            let nameRefImpl = ref('张三')
            let ageRefImpl = ref(30)
            /*console.log(nameRefImpl.value)
            nameRefImpl.value = '李华'*/

            // methods

            function modifyInfo() {
                nameRefImpl.value = '李华'
                ageRefImpl.value = 18
            }


            // return{nameRefImpl,ageRefImpl,modifyInfo}
            // 返回一个对象(只有返回了，这些数据，函数才能在模板语法中使用)
            return{name:nameRefImpl,age:ageRefImpl,modifyInfo}
        }










        /*setup(){
            // 数据data
            // 通过测试得知，如果当前的data这样写，是没有响应式的
            let name  = '张三'
            let age = 20

            // 方法 methods
            function modifyInfo() {
                // 修改这个数据data时，有没有响应式
                name = '李四'
                age = 30

            }
        // 返回一个对象
            return {name,age,modifyInfo}
        }*/


    }
</script>

<style scoped>

</style>