<template>
    <div>
        <A></A>
        <B></B>
    </div>
</template>

<script>
    export default {
        name: "Vip",
        data() {
            return {
                name: 'jackson'
            }
        },
        methods: {
            triggerEvent() {
                // 获取共享的vc对象
                this.$bus.$emit('eventx', this.name)
            }
        }
    }
</script>

<style scoped>

</style>