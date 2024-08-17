<template>
    <div class="s2">
        <h2>区</h2>
        <ul>
            <li>新华区</li>
            <li>长安区</li>
            <li>榕华区</li>
            <router-link to="/hebei/sjz/:a1/:a2/:a3">市</router-link>
        </ul>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ShijiaZhuang"
    }
</script>

<style scoped>

</style>