<template>
    <User></User>
</template>

<script>
    import emitter from './utils/event-bus.js'
    import User from './components/User3.vue'
    import {onMounted} from 'vue'
    export default {
        name: "App",
        components:{User},

        setup(){
            // 生命周期钩子: mounted
            onMounted(()=>{
                // 生命周期总线绑定事件
                emitter.on('event1',showInfo)
            })

            // methods
            function showInfo(user) {
                alert(`姓名: ${user.name},年龄: ${user.age}`)
            }

            // 返回一个对象
            return {showInfo}

        }
    }
</script>

<style scoped>

</style>