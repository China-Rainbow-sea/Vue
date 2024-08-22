<template>
    <div>
        <h2>我是儿子组件{{counter}}</h2>
        <SunZi></SunZi>
    </div>
</template>

<script>
    import {inject} from 'vue'
    import SunZi from "./SunZi.vue";
    export default {
        name: "ErZi",
        components: {SunZi},

        setup(){
            // 注入
            let counter = inject('c')

            // 返回一个对象
            return {counter}
        }
    }
</script>

<style scoped>

</style>