<template>
    <div>
        <User></User>
        <Vip></Vip>
    </div>

</template>

<script>
    // 导入组件
    import User from './components/User'
    import Vip from './components/Vip'

    export default {
        name:'App',
        // 注册组件
        components:{User,Vip}
    }
</script>