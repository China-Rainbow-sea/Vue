<template>
    <div>
        <button @click="goodbye">再见</button>
        <Vip></Vip>
    </div>
</template>



<script>
    import Vip from './Vip'

    export default {
        name: "User",
        data(){
            return{
                name:'李华',
                age:18,
                gender:'男'
            }
        },
        components:{Vip},

        methods:{
            goodbye(){
                console.log('ccc')
            }
        }
    }
</script>

<style scoped>

</style>