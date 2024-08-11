<template>
    <div>
        <h1>用户列表</h1>
        <input type="text" v-model="vipname">
        <button @click="saveVip">保存用户</button>
        <ul>
            <li v-for="vip in $store.state.vips" :key="vip.id">
                会员名: {{vip.name}}
            </li>
        </ul>
        <h3>当前用户数量: {{users.length}}</h3>
        <h3>当前会员数量: {{vips.length}}</h3>
        <h3>用户名: {{username}}</h3>
<!--        <h3>反转之后的用户名: {{reversedName}}</h3>-->
        <!--      <h3>用户名: {{$store.state.username}}</h3>
              <h3>反转之后的用户名: {{$store.state.username.split('').reverse().join('')}}</h3>-->
    </div>
</template>

<script>
    import {mapGetters,mapState} from "vuex";

    export default {
        name: "Vip",
        data() {
            return {
                vipname: '',
            }
        },
        methods: {
            saveVip() {
                // this.vips.unshift({id:Date.now(),name:this.vipname})
                this.$store.dispatch('saveVip', {id: Date.now(), name: this.vipname})

            }
        },
        computed:{
            ...mapState(['vips','users','username']),
            ...mapGetters(['reversedName']),
            // 对象形式
            // ...mapMutations({saveVip:'SAVE_VIP'})
            // 数组形式
            ...mapMutations('SAVE_VIP')
            // 上面的数组形式等同于下面的代码:
            // ...mapMutations({SAVE_VIP:'SAVE_VIP'})
        }

    }
</script>

<style scoped>

</style>