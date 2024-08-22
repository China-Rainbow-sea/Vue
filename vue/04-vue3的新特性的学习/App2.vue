<template>
    <h2>计数器: {{data.a.b.c.counter2}}</h2>
    <button @click="data.a.b.c.counter2++">点我加1</button>

    <h2>计数器: {{data.counter1}}</h2>
    <button @click="data.counter1++">点我加1</button>
</template>

<script>
    import {reactive, readonly, shallowReadonly} from 'vue'

    export default {
        name: "App",

        setup() {
            // data
            let data = reactive({
                counter1: 100,
                a: {
                    b: {
                        c: {
                            counter2: 1
                        }
                    }
                }
            })

            // 深只读(具有响应式的对象中所有的属性，包括了对象中的子对象中的属性，
            // 它的所有值都是只读的不可修改的)
            // data = readonly(data)


            // 浅只读(具有响应式的对象的第一层属性值是只读的)
            data = shallowReadonly(data)

            /*
            浅和深的应用场景:
            如果其它组件，给你传过来了一个响应式的数据。
            但是人家告诉你，千万别修改，我传给你的这个响应式的数据，
            的时候，你为了防止，自己忘记了，而修改了，就可以设置为只读的
            * */
            // 返回一个对象
            return {data}
        }

    }
</script>

<style scoped>

</style>


<!--


-->