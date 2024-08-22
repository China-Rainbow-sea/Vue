<template>
    <input type="text" v-model="name">
    <br><br>
    {{name}}
</template>

<script>
    import {ref, customRef} from 'vue'

    export default {
        name: "App",
        setup() {
            // data
            // 使用Vue3内置的ref
            // let name = ref('test')

            // 创建一个防抖 ref
            // 以下这个代码就是真正的属于自己定义的ref了
            // ref是一个函数，那么我们自定义的ref同样是一个函数
            function useDebouncedRef(value) {
                let t
                // 自定义的ref这个函数体当中的代码不能随便写，必须符合ref规范
                // 通过调用customRef函数来获取一个自定义的ref对象
                // 调用customRef函数的时候必须给该函数传递一个回调函数，这个回调可以叫做factory
                const x = customRef((track, trigger) => {
                    // 对于这个factory回调来说，必须返回一个对象，并且对象中要有get
                    return {
                        // 模板语句中只要使用到该数据，get会自动调用
                        get() {
                            console.log('get执行了')
                            // 告诉vue去追踪这个value的变化
                            track()
                            return value
                        },
                        // 当模板语句中修改该数据的时候,set胡自动调用
                        set(newValue) {
                            console.log('set执行了', newValue)
                            clearTimeout(t)
                            t = setTimeout(() => {
                                value = newValue
                                // 触发(通知去调用get方法)
                                trigger()
                            }, 300)
                        }
                    }
                })

                // 返回自定义的ref对象实例
                return x
            }

            // 使用自定义的ref同样具备响应式
            let name = useDebouncedRef('test')


            // 返回一个对象
            return {name, customRef}
        }
    }
</script>

<style scoped>

</style>