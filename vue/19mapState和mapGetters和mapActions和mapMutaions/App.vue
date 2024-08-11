<template>
    <div>
        <User></User>
        <hr>
<!--        <Vip></Vip>-->
        <Name></Name>
    </div>
</template>

<script>
    import User from './components/User'
    import Vip from './components/Vip'
    import Name from './components/Name'

    export default {
        name:'App',
        // 导入
        components:{User,Vip,Name}
    }

</script>