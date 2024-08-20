<template>
    <button @click="triggerEvent1">触发event1事件</button>
</template>

<script>
    export default {
        name: "User2",
        // context 代表组件上下文对象
        // context 是 setup当中的第二个参数
        setup(props,context){
            // data
            // methods
            function triggerEvent1() {
                // 触发事件 event1,传递数据
                context.emit('event1','张三',20)
            }

            // 返回一个对象
            return {triggerEvent1}
        }
    }
</script>

<style scoped>

</style>