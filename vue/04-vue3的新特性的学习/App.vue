<template>
    <h1>计数器: {{counter}}</h1>
    <h1>计数器: {{counter2}}</h1>
    <button @click="add">计数器+1</button>
    <hr>
    <User></User>

</template>

<script setup>
    import {ref,reactive} from 'vue'
    // 在对应的 script 标签中使用 setup,可以只需要导入，不需要 components 注册组件(这步可以省略)
    import User from './components/User.vue'


    let data = reactive({
        a:{
            b:{
                c:{
                    counter2 : 100
                }
            }
        }
    })


    let counter = ref(100)

    // methods
    function add() {
        counter.value++
    }




/*    export default {
        name: "App",

    }*/
</script>

<style scoped>

</style>