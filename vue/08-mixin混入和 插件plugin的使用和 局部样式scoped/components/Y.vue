<template>
    <div>
        <h3>X1组件</h3>
        <y1></y1>
<!--        <随意的></随意的>-->
    </div>
</template>

<script>

    // 导入组件 Y1(Y1可以使用其它名字)
    import Y1 from './Y1'
    // import 随意的aaa from './Y1'
    export default {

        // 注册组件
        components:{Y1}
        // components:{随意的aaa}
    }
</script>