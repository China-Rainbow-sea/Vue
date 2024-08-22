<template>
    <div class="s3">
        <h2>我是孙子组件{{counter}}</h2>
        <button @click="isShow=true">弹窗</button>
        <!--        遮罩层-->
       <teleport to="body">
<!--       <teleport to="也可以是 #id选择器">-->
           <div v-show="isShow" class="cover">
               <!--            模态窗口-->
               <div class="s">
                   我是一个窗口...
                   <button @click="isShow = false">关闭</button>
               </div>
           </div>
       </teleport>
    </div>
</template>

<script>
    import {ref,inject} from 'vue'

    export default {
        name: "SunZi",
        setup() {
            // data
            let isShow = ref(false)

            // 注入 inject
            let counter = inject('c')


            //返回一个对象
            return {isShow,counter}
        }
    }
</script>

<style scoped>

    .s {
        width: 250px;
        height: 250px;
        background-color: cadetblue;
    }

    .s3 {
        width: 200px;
        height: 200px;
        background-color: chartreuse;
    }

    .cover {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 90%;
        background-color: darkgrey;
    }

</style>