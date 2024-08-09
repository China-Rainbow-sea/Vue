<template>
    <div>
        <button @click="getBugs">获取bug列表信息</button>
    </div>
</template>

<script>

    import axios from 'axios'
    export default {
        name: "Bugs",
        methods:{
            getBugs(){
                // 发送AjAX请求，访问 http://localhost:8080/vue/bugs
                // 使用axios库发送AJAX请求
                // 报错: 'Access-Control-Allow-Origin'
                // 原理: 发送AJAx请求的时候，会优先从自己的服务器当中找vue/bugs资源
                // 如果找不到，就会找代理，然后去: http://locahost:8080找/vue/bugs 资源
                // 当前按钮这个页面就是在8080服务器上，又去访问8080服务器上的资源，所以: http://locahost:8080可以省略
                // axios.get('http://localhost:8080/vue/bugs').then(
                /*axios.get('/vue/bugs').then(
                // axios.get('https://www.baidu.com/').then(
                    response=>{
                        console.log('服务器响应回来的数据: ',response.data)
                    },
                    error=>{
                        console.log("错误信息: ",error.message)
                    }
                )*/


                axios.get('/api/vue/bugs').then(
                    // axios.get('https://www.baidu.com/').then(
                    response=>{
                        console.log('服务器响应回来的数据: ',response.data)
                    },
                    error=>{
                        console.log("错误信息: ",error.message)
                    }
                )
            }
        }
    }
</script>

<style scoped>

</style>