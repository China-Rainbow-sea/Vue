<template>
    <h2>计数器: {{data.counter1}}</h2>
    <button @click="data.counter1++">点我加1</button>

    <h2>计数器: {{data.x}}</h2>
    <button @click="data.x.counter2++">点我加1</button>


    <button @click="getRawObject">获取data的原始对象</button>
    <br><br>
    <button @click="addX">给data扩展一个x属性</button>

</template>

<script>
    import {reactive,toRaw,markRaw} from 'vue'

    export default {
        name: "App",

        setup() {
            // data
            // data 是具备响应式的
            let data = reactive({
                counter1: 100,
            })

            // 获取data这个响应式对象的原始对象
            // 操作原始对象的时候，没有响应式处理的
            function getRawObject() {
                // rawObj就是一个原始对象，是data的原始对象
                let rawObj = toRaw(data)
                // 修改原始对象，不会具有响应式
                rawObj.counter1++
                console.log('原始对象',rawObj)
            }


            // 给data扩展一个X属性
            function addX() {
                // 给data扩展一个x属性，这样扩展的属性，具有响应式
                // data.x = {counter2:100}

                // markRaw 扩展的属性，不具有响应式
                data.x = markRaw({counter2: 100})
            }
            // 返回一个对象
            return {data,getRawObject,addX}
        }

    }
</script>

<style scoped>

</style>


