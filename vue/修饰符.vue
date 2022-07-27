<template>
  <div class="container">
    <!-- v-on -->
    <!-- .stop 取消事件冒泡 -->
    <div @click.stop="divClick"></div>
    <!-- .prevent 取消默认事件 -->
    <a href="" @click.prevent="test"></a>
    <!-- 按下enter建才触发 -->
    <input type="text" @keyup.enter="test" />
    <!-- .native 监听自定义组件根元素的原生事件 -->
    <!-- .once 只触发一次 -->
    <button @click.once="aaa"></button>

    <!-- v-model的修饰符 -->
    <!-- .lazy  失去焦点或点enter才会更改数据-->
    <input type="text" v-model.lazy="message" />
    <p>{{ message }}</p>
    <!-- .number 将输入框里面的类型转成数字-->
    <input type="text" v-model.number="num" />
    <!-- .trim 去除首位空格 -->
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
  methods: {}
}
</script>

<style lang='less' scoped>
</style>
``