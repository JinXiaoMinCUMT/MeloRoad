<template>
  <div class="wrapper">
    <iframe :src="address" id="web" class="note" :width="getWidth" ref="web" :height="getHeight"></iframe>
    <!-- <div ref="web">{{this.addres}}</div> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  computed: {
    getWidth () {
      return document.documentElement.clientWidth
    },
    getHeight () {
      return document.documentElement.clientHeight + '1rem'
    },
    address () {
      return `https://touch.travel.qunar.com/youji/${this.noteID}`
    },
    ...mapGetters(['noteID'])
  }
}
</script>

<style scoped lang="stylus">
  .wrapper
    -webkit-overflow-scrolling: touch
    overflow-y: auto
    position: fixed
    top: -1rem
    bottom: 0
    left: 0
    right: 0
    .note
      width: 100%
      border: 0
</style>
