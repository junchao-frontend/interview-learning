<template>
  <div class="container">
    <!-- vue的常用指令 -->
    <!-- v-html: 按照HTML格式进行解析，显示对应的内容 后面接string类型 -->
    <p v-html="a"></p>
    <!-- v-once: 元素和组件只渲染一次，后面不需要表达式 -->
    <p v-once></p>
    <!-- v-bind:  相当于 : 绑定动态的数据 -->
    <!-- v-if: 条件渲染指令  v-for 循环遍历   v-show -->
    <!-- v-model   v-on/@ -->
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      a: '<span>121212</span>'
    }
  },
  computed: {},
  created () { },
  mounted () { },
  methods: {}
}
</script>

<style lang='less' scoped>
</style>
