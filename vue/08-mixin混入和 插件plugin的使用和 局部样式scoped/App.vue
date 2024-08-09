<template>
    <div>
        <h1>{{msg}}</h1>
        <!--        在App这个组件当中，找到子组件Car，然后给Car这个子组件传数据，通过属性的形式传数据-->
<!--        <Car brand="宝马520" color="黑色" v-bind:price="10"></Car>-->
<!--         简写方式，省略掉：v-bind 即可-->
        <Car brand="宝马520" color="黑色" :price="10"></Car>
        <hr>
        <Car brand="比亚迪汉" color="白色" price="20"></Car>
        <button @click="printCarInfo">打印汽车信息</button>
        <hr>
<!--        <Car></Car>-->
    </div>
</template>


<script>
    // 导入组件
    import Car from './components/Car'

    export default {
        name: 'App',
        data() {
            return {
                msg: '汽车信息'
            }
        },
        methods:{
            printCarInfo(){
                // 获取子组件
                console.log(this.$refs.car1)
                console.log(this.$refs.car2)

                console.log(this.$refs.car1.brand)
                console.log(this.$refs.car1.color)
                console.log(this.$refs.car1.price)

                // 这个就不是组件了
                console.log(this.$refs.hh)


            }
        },

        // 注册组件
        components: {Car}
    }

</script>