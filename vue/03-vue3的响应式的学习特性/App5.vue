<template>
    <h1>计数器: {{counterRefImpl}}</h1>
    <button @click="counterRefImpl++">点我加1</button>


    <h1>计数器: {{data.a.b.c.counter}}</h1>
    <button @click="data.a.b.c.counter++">点我加1</button>

</template>

<script>
    import {watch,ref} from 'vue'
    export default {
        name: "App",
        setup(){
            // data
            let counterRefImpl = ref(1)

            let data = ref({
                a:{
                    b:{
                        c:{
                            counter:1
                        }
                    }
                }
            })

            console.log(counterRefImpl.value)

            // watch
            // 错误的
          /*  watch(counterRefImpl.value,(newValue,oldValue)=>{

            })*/

            // 可以监视到
         /*   watch(()=>counterRefImpl.value,(newValue,oldValue)=>{
                console.log(newValue,oldValue)
            })*/

            // 监视 data
            // oldValue 又是拿不到
            // deep配置无效
       /*     watch(data.value,(newValue,oldValue)=>{
                console.log(newValue,oldValue)
            },{deep:false})*/

            // 当data返回的是一个REfImpl对象，支持deep配置的，默认是没有开启深度监视的
            watch(data,(newValue,oldValue)=>{
                console.log(newValue,oldValue)
            },{deep:true})

            // 返回一个对象
            return {counterRefImpl,data}
        }
    }
</script>

<style scoped>

</style>