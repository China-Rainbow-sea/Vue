<template>
    <div class="s1">
        <div>
            <h2>市</h2>
            <ul>

                <!-- 声明式的路由导航，只适合超链接 -->
                <li><input type="checkbox">
                    <router-link active-class="selected" :to="{
                        path : '/hebei/city',
                        query : {
                            a1 : sjz[0],
                            a2 : sjz[1],
                            a3 : sjz[2],
                        }
                    }">
                        石家庄
                    </router-link>
                    <button @click="gosjz">石家庄</button>
                </li>

                <li><input type="checkbox">
                    <router-link active-class="selected" :to="{
                        path : '/hebei/city',
                        query : {
                            a1 : hd[0],
                            a2 : hd[1],
                            a3 : hd[2],
                        }
                    }">邯郸


                    </router-link>
                    <button @click="goHd">邯郸</button>
                </li>

                <li><input type="checkbox">唐山</li>
                <li><input type="checkbox">保定</li>
            </ul>
        </div>
        <!-- 区组件 -->
        <router-view></router-view>

    </div>
</template>

<script>
    export default {
        name :'HeBei',
        data() {
            return {
                sjz : ['长安区3', '裕华区2', '新华区2'],
                hd : ['邯山区3', '复兴区2', '丛台区2']
            }
        },
        beforeDestroy() {
            console.log('@河北省下面的市,这个组件被销毁了!')
            // 删除定时器
            // clearInterval(this.timer)
        },

        mounted() {
            // 挂载完毕之后，创建一个定时器，每隔1秒打印一句话
            this.timer = setInterval(()=>{
                console.log('我是一个定时器: ')
            },1000)
        },

        activated() {
            console.log('激活了')
        },
        deactivated() {
            console.log('失效了')
        },



        methods:{
            gosjz(){
                // 这里编写代码，完成路由组件的切换
                // 这种通过编程的方式完成路由组件的切换，被称为“编程式路由导航”
                // 调用现有的API就可以完成路由组件的切换
                // 先获取到路由器对象，不是路由对象，是路由器对象。
                // this.$route 获取的是路由对象
                // this.$router 获取到整个项目的路由器对象。（路由器对象一般一个项目只需要一个）
                // 这是 push 模式
                // 注意：在使用编程式的路由导航时，push以及replace方法会返回一个Promise对象
                // Promise对象期望你通过参数的方式给它两个回调函数，一个是成功的回调，一个是失败的回调
                // 如果你没有给这两个回调函数，则会出现错误，怎么解决；在参数位置上给两个回调函数。
                this.$router.push({
                    name:'shi',
                    params:{
                        a1:this.sjz[0],
                        a2:this.sjz[1],
                        a3:this.sjz[2],
                    }
                },()=>{},()=>{})
            },
            goHd(){
                // 这是 replace 模式
                this.$router.replace({
                    name:'han',
                    params:{
                        a1:this.hd[0],
                        a2:this.hd[1],
                        a3:this.hd[2],
                    }
                },()=>{},()=>{})
            }
        }
    }
</script>