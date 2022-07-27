<template>
  <div class="container">
    <!-- vue中什么是$nextTick -->
    <!-- 理解：是将回调函数延迟在下次dom更新数据之后调用 -->
    <!-- vue是异步渲染的框架，数据更新之后，dom是不会立刻渲染。$nextTick会在dom渲染之后触发，用来获取最新的dom节点 -->
    <!-- 使用场景
  1. 在生命周期函数created中进行dom操作，一定要放到nextTick函数中进行
  2. 在数据变化后执行某个操作，而这个操作需要使用随数据变化而变化的dom结构时，这个操作需要放到nextTick中

 -->
    <div ref="msg">{{ message }}</div>
    <p>{{ message1 }}</p>
    <button @click="changeMessage">改变message</button>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
    }
  },
  computed: {},
  created () { },
  mounted () { },
  methods: {
    changeMessage () {
      this.message = '1111'
      this.$nextTick(() => {
        this.message1 = this.$refs.msg.innerHTML
      })
    }
  }
}
</script>

<style lang='less' scoped>
</style>
