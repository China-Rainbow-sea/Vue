<template>
    <h1>User组件</h1>
    <h2>计数器: {{counter}}</h2>

    <button @click="counter++">计数</button>
</template>

<script>

    // 采用组合式API，
    import {ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue'

    export default {
        name: "User",
        setup(){
            // data
            let counter = ref(0)

            // 采用组合式API，生命周期钩子函数
            onBeforeMount(()=>{
                console.log('onBeforeMount')
            })

            onMounted(()=>{
                console.log('onMounted')
            })

            onBeforeUpdate(()=>{
                console.log('onBeforeUpdate')
            })

            onUpdated(()=>{
                console.log('onUpdated')
            })


            onBeforeUnmount(()=>{
                console.log('onBeforeUnmount')
            })

            onUnmounted(()=>{
                console.log('onUnmounted')
            })

            // 返回一个对象
            return {counter}
        },

        // Vue3当中，生命周期钩子函数有两种写法:
        // 第二种写法: 组合式API























        // 第一种写法: 选项式API（以下这种方式就是选项式API）
       /* beforeCreate() {
            console.log('beforeCreate')
        },

        created() {
            console.log('created')
        },

        mounted() {
            console.log('mounted')
        },

        beforeUpdate() {
            console.log('beforeUpdate')
        },

        updated() {
            console.log('updated')
        },

        beforeUnmount() {
            console.log('beforeUnmount')
        },

        unmounted() {
            console.log('unmounted')
        }*/













        /*// 使用pros配置项，接收父组件传递过来的数据
        props:['name','age','sex'],
        // 在setup函数中如何使用这个props呢？
        // setup 函数中可没有this这个关键字
        // 将来vue3调用setup函数之前，会给setup函数传递参数，第一个参数是: props
        setup(props){
            // props被包装成了一个代理对象，也是具有响应式的Proxy对象。
            console.log(props)
            console.log(props.name)
            console.log(props.age)
            console.log(props.sex)

        }*/
    }
</script>

<style scoped>

</style>