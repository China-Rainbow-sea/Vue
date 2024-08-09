<template>
  <div id="app2">
    <h1>App组件</h1>
<!--    使用组件-->
    <X></X>
    <Y></Y>
  </div>
</template>

<script>
  import X from './components/X'
  import Y from './components/Y'
export default {

    // 注册组件
  components: {X,Y}
}
</script>

