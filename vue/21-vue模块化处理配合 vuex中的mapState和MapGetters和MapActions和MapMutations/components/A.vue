<template>
    <div>
        <h1>A组件</h1>
        <button @click="doA1">doA1 BUTTON</button>
        <button @click="doA2">doA2 BUTTON</button>
        <h3>state: {{a}}</h3>
        <h3>getters: {{computedA}}</h3>
    </div>
</template>

<script>
    import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
    export default {
        name: "A",
        computed:{
        /*    computedA(){
                return this.$store.getters.computedA
            } 平替*/
            ...mapState('aModule',['a']),
            ...mapGetters('aModule',['computedA'])
        },
        methods:{
            /*doA1(){
                this.$store.dispatch('doA1')
            },
            doA2(){
                this.$store.commit('doA2')
            }* 平替
             */
            ...mapActions('aModule',['doA1']),
            ...mapMutations('aModule',['doA2'])
        }
    }
</script>

<style scoped>

</style>