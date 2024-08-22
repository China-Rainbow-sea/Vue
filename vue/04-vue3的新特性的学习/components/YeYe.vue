<template>
   <div>
       <h1>我是爷爷组件{{counter}}</h1>
       <ErZi></ErZi>
   </div>
</template>

<script>
    import {ref,provide} from 'vue'
    import ErZi from "./ErZi.vue";
    export default {
        name: "YeYe",
        components:{ErZi},
        setup(){
            let counter = ref(6)
            // 在祖宗组件中使用provide 提供数据
            provide('c',counter)
            return {counter}
        }
    }
</script>

<style scoped>

</style>