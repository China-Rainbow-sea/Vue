<template>
    姓名: <input type="text" v-model="data.name">
    <br>
    反转之后的姓名: <input type="text" v-model="reversedName">
</template>
<script>
    import {reactive ,computed} from 'vue'
    export default {
        name: "App",
        data(){
            return{
                // 只要data中的数据更新，则计算属性就会重新计算
                name : ''
            }
        },


        // vue3的计算属性，computed是一个组合式的API
        setup(){
            // data
            let data = reactive({
                name:''
            })

            // computed
           /* let reversedName = computed(()=>{
                // 这种写法式一种简写形式，如果你只需要使用计算属性的get()方法的话
                return data.name.split('').reverse().join('')
            })*/

            // computed 完整写法
            let reversedName = computed({
                get(){
                    // 读取计算属性的值的时候执行
                    return data.name.split('').reverse().join('')
                },
                set(val){
                    // 当修改计算属性的值的时候执行
                    data.name = val.split('').reverse().join('')
                    console.log(666)
                }
            })


            // 返回一个对象
            return {data,reversedName}
        }














     /*   computed:{
            reversedName: {
                get(){
                    return this.name.split('').reverse().join('')
                },
                set(value){

                }
            }
        }
        */
        // 简写形式:（只用 get 不用set方法）
      /*  reversedName(){
            return this.name.split('').reverse().join('')
        }*/

    }
</script>

<style scoped>

</style>

<!--
计算属性 computed ===> 新的属性
根据data的变化，计算属性在不断的重新计算get(){return}

watch 侦听属性/监视属性
一直在监视着某个data数据的变化，只要数据变化，则watch中的handler函数就会被调用
-->