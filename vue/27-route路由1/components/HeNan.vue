<template>
    <div class="s1">
        <h2>市区</h2>
        <ul>
            <li>安阳</li>
            <li>洛阳</li>
            <li>郑州</li>
            <li>开封</li>
            <router-link to="/hebei/shi"></router-link>
        </ul>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeNan"
    }
</script>

<style scoped>

</style>