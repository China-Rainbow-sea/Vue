<template>
    <div>
        <h1>数字: {{$store.state.num}}</h1>
        <button @click="plusOne">点我加1</button>
    </div>
</template>


<script>
    export default {
        name:'App',
        data(){
            return {
                startNum : 0
            }
        },
        methods:{
            plusOne(){
                // this.startNum++
                // 这里的代码在实际开发中可能会比较复杂。
                // 业务逻辑复杂，代码比较多
                // 如果你将这些代码放到这里的话，这些业务逻辑代码无法得到复用
                // 无法在其他组件中使用，在其他组件中使用的时候，你还需要把这些代码再写一遍。
                // this.$store.state.num++
                // 调用 vuex的API
                // dispatch是 vuex 的API，调用这个方法之后，store对象中的 plusOne这个action回调函数会被自动调用
                // dispatch:分发
                // 交给plusOne这个action去处理这个事情
                this.$store.dispatch('plusOne',this.startNum)
            }
        },
    }
</script>