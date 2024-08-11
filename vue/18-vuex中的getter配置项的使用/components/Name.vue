<template>
    <div>
        <input type="text"  v-model="$store.state.username">
        <br></br>
        <h3>用户名: {{$store.state.username}}</h3>
        <h3>反转之后的用户名: {{$store.getters.reverseName}}</h3>
    </div>
</template>

<script>
    export default {
        name: "Name",
        /*data(){
            return{
                username:'',
                // reversedName:''
            }
        },
        methods:{
            reverseName(){
                this.reversedName = this.username.split('').reverse().join('')
            }
        }*/

    }
</script>

<style scoped>

</style>