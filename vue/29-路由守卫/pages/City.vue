<template>
    <div class="s2">
        <h2>区</h2>
        <ul>
            <!-- <li>{{$route.query.a1}}</li>
            <li>{{$route.query.a2}}</li>
            <li>{{$route.query.a3}}</li> -->

            <li v-for="areaName", propertyName in $route.query" :key="propertyName">
                {{areaName}}
            </li>

        </ul>
    </div>
</template>

<script>
    export default {
        name :'City',
        mounted() {
            // 所有的路由组件都有一个属性 $route，通过这个属性可以获取到该“路由组件”关联的“路由对象”
            console.log(this.$route)
            // 路由对象中有一个query属性，这个query属性可以接收query方式传递过来的数据。
            console.log(this.$route.query)
        },

        // 1. 代码写在哪里？局部路由守卫之component 守卫,代码是写在component 当中的(写到组件当中的XXx.vue)
        // 2 . beforeRouteEnter执行时机，进入路由组件之前执行
        beforeRouteEnter(to,from,next){
            console.log('进入路由组件之前: ${to.meta.title}')
            next()
        },
        // beforeRouteLeave 执行时机，离开路由组件之前执行
        beforeRouteLeave(to,from,next){
            console.log('进入路由组件之前: ${to.meta.title}')
            next()

        }
    }
</script>