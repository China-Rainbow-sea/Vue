<template>
    <div>
        <button @click="triggerEvent1">触发event1事件</button>
        <button @click="triggerEvent2">触发event2事件</button>
        <button @click="unbinding">解绑事件</button>
    </div>
</template>

<script>
    export default {
        name: "User",
        data(){
            return{
                name:'李华',
                age:18,
                gender:'男'
            }
        },

        methods:{
            triggerEvent1(){
                // 编写触发event1事件的代码
                // this 是当前的组件实例：vc
                // 触发事件的同时，可以给事件绑定的回调函数传数据
                this.$emit('event1',this.name,this.age,this.gender)
            },
            triggerEvent2(){
                this.$emit('event2')
            },
            // 解绑事件
            unbinding(){

                // 仅仅解绑this指向的这个组件实例上的 event1事件
                // 不要忘记了“一个组件一个按钮”
                // this.$off('event1')
                // this.$off(['event1','event2'])

                // 解绑所有
                this.$off()
            }
        }
    }
</script>

<style scoped>

</style>