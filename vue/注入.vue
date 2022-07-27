<template>
  <div class="container">
    <!-- 跨级通信 --provide/inject -->
    <!-- provide(提供)是一个对象或者一个返回对象的函数 -->
    <!-- inject(注入), 可以是一个字符串的数组，也可以是一个对象 -->
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
    }
  },
  inject: ['message'],
  provide () {
    return {
      message: this.message
    }
  }
}
</script>

<style lang='less' scoped>
</style>
