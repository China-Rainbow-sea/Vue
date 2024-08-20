<template>
    <button @click="triggerEvent1">触发全局事件总线上的 event1事件</button>
    <button @click="clearAllEvent">解除全局事件总线上的所有绑定事件</button>
    <button @click="clearEvent">解除全局事件总线上的event1绑定事件</button>
</template>

<script>
    import emitter from '../utils/event-bus.js'

    export default {
        name: "User3",
        setup() {
            //data
            // methods
            function triggerEvent1() {
                // 触发全局事件总线上的事件event1
                emitter.emit('event1',{name:'李华',age:18})
            }

            function clearAllEvent() {
                // 清除总线上绑定的所有事件
                emitter.all.clear()
            }

            function clearEvent() {
                // 解绑指定的事件
                emitter.off('event1')
            }

            // 返回一个对象，setup()一定要返回一个对象
            return {triggerEvent1,clearAllEvent,clearEvent}
        }

    }
</script>

<style scoped>

</style>