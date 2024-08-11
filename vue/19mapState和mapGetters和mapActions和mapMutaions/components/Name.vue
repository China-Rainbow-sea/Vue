<template>
    <div>
        <input type="text"  v-model="$store.state.username">
        <br></br>
        <h3>用户名: {{$store.state.username}}</h3>
        <h3>反转之后的用户名: {{reverseName}}</h3>
    </div>
</template>

<script>

    import {mapState,mapGetters} from 'vuex'
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





        computed:{
            ...mapState(['username']),
            // 实际上生成的代码是？ 以上代码生成的以下代码是简写形式的计算属性
            /*username(){
                return this.$store.state.username
            },
            */

            ...mapGetters(['reverseName']),
            username:{
                get(){
                    return this.$store.state.username
                },
                set(value){
                    this.$store.state.username = value
                },
            },
        },



    }
</script>

<style scoped>

</style>