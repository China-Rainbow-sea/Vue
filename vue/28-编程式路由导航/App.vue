<template>
    <div>
        <MyHeader></MyHeader>

        <div>
            <h1>省</h1>
            <button @click="forward">前进</button>
            <button @click="back">后退</button>
            <button @click="forwardTwo">前进2步</button>
            <button @click="backTwo">后退2步</button>

            <ul>
                <li><router-link to="/hebei" active-class="selected">河北省</router-link></li>
                <li><router-link to="/henan" active-class="selected">河南省</router-link></li>
            </ul>
        </div>
        <!--        这个标签，如果你这样编写的话，表示这个标签（div标签下）总所有的路由组件在切换的时候不会销毁-->
<!--        <keep-alive>
            <router-view></router-view>
        </keep-alive>-->

<!--        注意：include="HeBei" 表示在进行路由组件切换的时候，只有HeBei组件不被销毁，保留状态-->
<!--        <keep-alive include="HeBei">
            <router-view></router-view>
        </keep-alive>-->

<!--        include 也支持数组形式-->
  <!--      <keep-alive :include="['HeBei','HeNan']">
            <router-view></router-view>
        </keep-alive>-->
        <router-view></router-view>
    </div>
</template>

<script>
    import MyHeader from './components/MyHeader'
    export default {
        name :'App',
        components : {MyHeader},
        methods:{
            forward(){
                this.$router.forward()
            },
            back(){
                this.$router.back()
            },
            forwardTwo(){
                this.$router.go(2)
            },
            backTwo(){
                this.$router.go(-2)
            }
        }
    }
</script>

<style lang="css">
    .s1 {
        margin-left: 100px;
    }
    .s2 {
        margin-left: 100px;
    }
    .selected {
        background-color: aqua;
    }
</style>
<!--
1.浏览器的历史记录存放在栈这种数据结构当中的
2.历史记录在存放到栈这种数据结构的时候有两种不同的模式，
    第一种: push 模式
        以追加的方式入栈
    第二种: replace模式
        以替换栈顶元素的方式入栈
    3.浏览器默认的模式市: push 模式
    4.操作浏览器上的前进和后退的时候，并不会
    删除栈当中的历史记录，只是向前和向后移动指针。
-->

<!--
对于普通的组件来说，声明周期当中有8个钩子函数。
对于路由组件来说，除了以上的8个钩子函数之外，还有2个：
    activated 在路由组件被激活的时候执行
    deactivated 在路由组件被切走的时候执行
-->