<template>
    <h2>姓名: {{userProxy.name}}</h2>
    <h2>年龄: {{userProxy.age}}</h2>
    <h2>城市: {{userProxy.addr.city}}</h2>
    <h2>地区: {{userProxy.addr.street}}</h2>
    <h2>addr: {{userProxy.addr.a.b}}</h2>
    <h2>addr: {{userProxy.addr.a.b.c}}</h2>
    <h2>性别: {{userProxy.sex}}</h2>
    <h2>选课列表</h2>
    <ul>
        <li v-for="(c,index) in userProxy.courses" :key="index">
            {{index}},{{c}}
        </li>
    </ul>
    <button @click="modifyUser">修改用户信息</button>
    <br>
    <button @click="addSex">添加 Sex 属性</button>
    <br>
    <button @click="delSex">删除 Sex 属性</button>
    <br>
    <button @click="modifyCourse">修改课程</button>
</template>

<script>
    import {reactive} from 'vue'
    export default {
        name: "App",

        setup(){
            // data
            // 基本数据类型不能使用reactive包裹，如果是基本数据类型，请使用ref
            // reactive 函数，可以将一个对象直接包裹，实现响应式，底层生成一个Proxy对象
            let userProxy = reactive({
                name:'张三',
                age : 20,
                // 基本数据类型，非要用 reactive 包裹的话，可以使用定义到对象里面
                counter:200,
                addr:{
                    city:'北京',
                    street:'大兴区',
                    a:{
                        b:{
                            c:111
                        }
                    }
                },
                courses:['英语','信息技术','政治','数学']
            })

            console.log(userProxy)
            // methods
            function modifyUser() {
                userProxy.name = '李华'
                userProxy.age = 18
                userProxy.counter = 200
                userProxy.addr.city = '邯郸'
                userProxy.addr.street = '太极二路'
                userProxy.addr.a.b.c = 666
            }

            function addSex() {
                userProxy.sex = '男'
            }

            function delSex() {
                // 删除性别
                delete userProxy.sex
            }

            function modifyCourse() {
                // 通过数组下标修改数组，会不会有响应式呢
                userProxy.courses[2] = '政治2'
            }

            // 返回对象
            return{userProxy,modifyUser,addSex,delSex,modifyCourse}
        }
    }
</script>

<style scoped>

</style>