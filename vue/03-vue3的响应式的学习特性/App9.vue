<template>
    <h2>计数器: {{data.counter}}</h2>
    <button @click="data.counter++">点我加1</button>
    <button @click="changeCounter">修改计数器</button>
</template>

<script>
    import {ref,shallowRef} from 'vue'
    export default {
        name: "App",

        setup(){
            // data
            // let counter = ref(1)
            // shallowRef 和 ref 用在基本数据类型上，没有区别
            // 数据本身就是基本数据类型，再浅也浅不到哪里去了。
        /*    let counter = shallowRef(1)
            // 返回一个对象
            return{counter}*/



            // data
            // 当shallowRef和ref都用在对象上的时候，
            // ref是有响应式的，底层会创建Proxy代理对象
            // shallowRef是没有响应式的，底层也不会创建Proxy对象
            // 有的时候，这个对象中的属性可能永远都不可能修改，如果修改，也是换对象，显然这个时候可以使用shallowRef
            // 进行优化
            let data = ref({
                counter:1
            })

            console.log(data)

            function changeCounter() {
                data.value = {counter: 1000000}
            }

            return{data,changeCounter}
        }
    }
</script>

<style scoped>

</style>