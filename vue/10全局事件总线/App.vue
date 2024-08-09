<template>
    <div>
        <User></User>
    </div>
</template>


<script>
    import User from './components/User'
    export default {
        name:'App',
        mounted() {
            // 绑定事件
            this.x.$on('eventx',this.test)
        },
        methods:{
            test(name){
                console.log('name')
            }
        },
        components:{User}
    }

</script>