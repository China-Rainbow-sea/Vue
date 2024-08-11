<template>
    <div>
        <A></A>
        <hr>
        <B></B>
    </div>
</template>

<script>

    import A from './components/A'
    import B from './components/B'

    export default {
        name:'App',
        // 导入
        components:{A,B}
    }

</script>