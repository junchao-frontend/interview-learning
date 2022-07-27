<template>
  <div class="container"></div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
    }
  },
  // 局部自定义指令 全局是Vue.directive
  directives: {// 自定义zhiling,不需要写v-，使用的时候需要加v-
    focus: {
      inserted (el, binding) {// 表示被绑定的元素插入父节点的时候调用
        // el： 表示指定所绑定的元素
        // binging：对象，属性name：指令名，value：指令绑定值
        el.focus() // 获取焦点
      }
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
