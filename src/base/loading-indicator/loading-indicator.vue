<template>
  <div></div>
</template>

<script>
import { Indicator } from 'mint-ui'
export default {
  name: 'LoadingIndicator',
  props: {
    data: Number
  },
  methods: {
    show () {
      if (this.data === 0) {
        Indicator.open()
      } else {
        Indicator.close()
      } 
    }
  },
  created () {
    this.show()
  }
}
</script>

<style scoped lang="stylus">
</style>
