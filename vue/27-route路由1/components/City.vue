<template>
    <div class="s2">
        <h2>区</h2>
        <ul>
            <li>{{$route.params.a1}}</li>
            <li>{{$route.params.a2}}</li>
            <li>{{$route.params.a3}}</li>
            <li>{{x}}</li>
            <li>{{y}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "City",
        props:['x','y','a1','a2','a3']

        /*computed:{
            a1(){
                return this.$route.params.a1
            },
            a2(){
                return this.$route.params.a2
            },
            a3(){
                return this.$route.params.a3
            }
        }*/
    }
</script>

<style scoped>

</style>