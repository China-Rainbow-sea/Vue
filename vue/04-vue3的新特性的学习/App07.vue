<template>
    <YeYe></YeYe>
</template>

<script>

    import YeYe from './components/YeYe.vue'
    export default {
        name: "App",
        components:{YeYe}

    }
</script>

<style scoped>

</style>

<!--
在祖宗组件中使用 provide提供数据
在后代组件中使用inject 完成数据的注入
这样就完成了数据的传递
这种方式比较适合于使用在祖宗给后代组件中传递数据的方式

-->