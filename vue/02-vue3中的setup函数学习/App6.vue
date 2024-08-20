<template>
    <button @click="isDisplay = !isDisplay">显示或隐藏</button>
    <User v-if="isDisplay" name="张三" age="20" :sex="sex"></User>

</template>

<script>
    import {ref} from 'vue'
    import User from './components/User.vue'
    export default {
        name: "App",
        components:{User},
        // 直接在大括号中进行的配置，叫做：选项式API(options api)
        setup(){
            // data
            let sex = ref('男')

            // console.log('setup: 安装组合式 API')

            let isDisplay = ref(false)
            // 返回对象
            return {sex,isDisplay}
        },

     /*   beforeCreate() {
            console.log('beforeCreate')
            console.log('正在初始化选项API')
        },
        created() {
            console.log('选项式API初始化完成')
            console.log('created')
        }*/
    }
</script>

<style scoped>

</style>