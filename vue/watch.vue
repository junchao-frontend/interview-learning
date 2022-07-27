<template>
  <div class="container">watch对对象深度监听</div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      name: '123',
      person: {
        name: 'wjc',
        age: 22
      }
    }
  },
  watch: {
    // 普通监听
    name (newValue, oldValue) {
      console.log(newValue)
    },
    // 深度监听对象
    person: {
      handler: function (newValue, oldValue) {

      },
      deep: true // 代表是否深度监听，默认false 监听会一层层的向下遍历

    },
    // 如果想监听对象的某一个属性
    'person.name': {
      handler: function (newValue, oldValue) {

      },
      deep: true
    }
  },
  methods: {}
}
</script>

<style lang='less' scoped>
</style>
