<template>
    <div>
        <div>
            <h1>省份</h1>
            <ul>
<!--                如果使用的路由方式，就不能使用超链接a 标签了，需要使用vue-router插件提供的一个标签-->
<!--                router-link 将来回被自动编译为 a 标签-->
                <li><router-link to="/hebei" active-class="selected">河北省</router-link></li>
                <li><router-link to="/henan" active-class="selected">河南省</router-link></li>
            </ul>
        </div>

<!--        这个位置将来写显示对应的组件-->
<!--        路由视图，其实就是起到一个占位的作用-->
        <router-view></router-view>
<!--        <HeBei></HeBei>
        <HeNan></HeNan>-->
    </div>
</template>

<script>

    import HeBei from './components/HeBei'
    import HeNan from './components/HeNan'


    export default {
        name:'App',
        // 导入
        components:{HeBei,HeNan}
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