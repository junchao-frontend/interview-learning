<template>
  <div class="container">
    <!-- 局部过滤器  全局的在main定义-->
    <ul>
      <li v-for="item in list" :key="item">
        <span>名字：{{ item.name }}</span>
        <span>性别：{{ item.sex | sexFilter }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      list: [
        { name: '12', sex: 0 },
        { name: '12', sex: 1 }
      ]
    }
  },
  filters: {
    sexFilter: function (value) {
      if (value == 0) {
        return '男'
      } else {
        return '女'
      }
    }
  }
}
</script>

<style lang='less' scoped>
</style>
