<template>
    <div>
        <h1>B组件</h1>
        <button @click="doB1">doB1 BUTTON</button>
        <button @click="doB2">doB2 BUTTON</button>
<!--        <h3>state: {{$store.state.b}}</h3>-->
        <h3>state: {{b}}</h3>
<!--        <h3>getters: {{// $store.getters.computedB}}</h3>-->
        <h3>getters: {{computedB}}</h3>
    </div>
</template>

<script>
    import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
    export default {

        name: "B",
        computed:{
            /*    computedA(){
                    return this.$store.getters.computedA
                } 平替*/
            ...mapState('bModule',['b']),
            ...mapGetters('bModule',['computedB'])
        },
        methods:{
    /*        doB1(){
                this.$store.dispatch('doB1')
            },
            doB2(){
                this.$store.commit('doB2')
            } 平替 */
            ...mapActions('bModule',['doB1','displayBugs']),
            ...mapMutations('bModule',['doB2'])
        }
    }
</script>

<style scoped>

</style>