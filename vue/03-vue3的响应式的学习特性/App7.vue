<template>
    数字1: <input type="number" v-model="data.num1">
    <br><br>
    数字2: <input type="number" v-model="data.num2">

    求和结果: {{data.result}}
    <button @click="sum">求和</button>
</template>

<script>
    import {reactive} from 'vue'
    export default {
        name: "App",
        setup(){
            // data
            let data = reactive({
                num1:0,
                num2:0,
                result:0
            })

            // methods
            function sum() {
                data.result = data.num1 + data.num2
            }

            // 返回一个对象
            return {data,sum}
        }
    }
</script>

<style scoped>

</style>