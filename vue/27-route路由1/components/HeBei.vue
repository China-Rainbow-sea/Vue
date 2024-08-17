<template>
    <div class="s1">
        <div>
            <h2>市区</h2>
            <ul>
                <li><router-link to="/hebei/shijiazhuang" active-class="selected">石家庄</router-link></li>
                <li><router-link to="/hebei/handan" active-class="selected">唐山</router-link></li>
                <li>保定</li>
                <li>邯郸</li>
            </ul>
        </div>
<!--        区组件-->
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: "HeBei"
    }
</script>

<style scoped>

</style>