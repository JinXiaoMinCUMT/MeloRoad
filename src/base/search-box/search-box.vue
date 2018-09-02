<template>
  <div class="search-box">
    <i class="iconfont icon-search"></i>
    <input class="box" :placeholder="placeholder" v-model="query">
  </div>
</template>

<script>
import { debounce } from 'assets/js/util'
export default {
  name: 'Home',
  props: {
    placeholder: {
      type: String,
      default: '搜索歌曲、歌手'
    }
  },
  data () {
    return {
      query: ''
    }
  },
  methods: {
    setQuery (query) {
      this.query = query
    }
  },
  created () {
    // 监听输入框中的数据是否发生变化
    // 调用了截流函数，减少发送请求次数
    this.$watch('query', debounce((newQuery) => {
      this.$emit('query', newQuery)
    }, 200))
  }
}
</script>

<style scoped lang="stylus">
  .search-box
    display: flex
    align-items: center
    box-sizing: border-box
    width: 100%
    padding: 0 .1rem
    height: .8rem
    background: #999
    border-radius: .12rem
    .icon-search
      font-size: .5rem
      color: #fff
    .box
      flex: 1
      margin: 0 .1rem
      line-height: .36rem
      background: #999
      color: #fff
</style>
