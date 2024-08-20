<template>
    <h2>姓名: {{userRefImpl.name}}</h2>
    <h2>年龄: {{userRefImpl.age}}</h2>
    <h2>计数器: {{counterRefImpl}}</h2>
    <h2>城市: {{userRefImpl.addr.city}}</h2>
    <h2>街道: {{userRefImpl.addr.street}}</h2>
    <button @click="modifyUser">修改用户信息</button>
</template>

<script>
    import {ref} from 'vue'

    /*
    ref 通常适合于基本数据类型
    reactive函数，用这个函数包裹起来的对象，直接就是一个Proxy
    reactive函数不适合基本数据类型

    ref{}
    实现的响应式:
    Object.defineProperty + Proxy
    * */
    export default {
        name: "App",
        setup(){
            // data
            // 如果这里是对一个对象的话，默认也是没有响应式处理的
            let counterRefImpl = ref(100)
            console.log(counterRefImpl)

            // 如果ref包裹的是一个对象，响应式是如何实现？Object.defineProperty + Proxy实现的
            // Proxy实现的响应式，对象中的对象，都有响应式处理。（底层是递归处理了）

            let userRefImpl = ref({
                name:'jack',
                age : 20,
                addr:{
                    city:'北京',
                    street:'大兴区'
                }
            })
            console.log(userRefImpl)

            // methods
            function modifyUser() {
                // 这种修改是有响应式处理的
                counterRefImpl.value = 200

                // 对于userRefImpl 对象来说，应该怎么改，才能有响应式呢？
            /*    userRefImpl.value={
                    name : '李华',
                    age : 18,
                }*/
                /*userRefImpl.name = '李华'
                userRefImpl.age = 20*/

                // userRefImp.value是一个代理对象Proxy:userProxy对象
                userRefImpl.value.name = '李华'
                userRefImpl.value.age = 18

                // 修改地址信息
                userRefImpl.value.addr.city = '邯郸'
                userRefImpl.value.addr.street = '太极二路'
            }

            // 两者名字一致，可以省略其中的一部分
            return {userRefImpl,counterRefImpl,modifyUser}
        }


        /*setup(){
            // data
            // 如果这里是对一个对象的话，默认也是没有响应式处理的
            let user = {
                name:'jack',
                age : 20
            }

            // methods
            function modifyUser() {
                user.name = '李华'
                user.age = 20
            }

            // 两者名字一致，可以省略其中的一部分
            return {user,modifyUser}
        }*/
    }
</script>

<style scoped>

</style>