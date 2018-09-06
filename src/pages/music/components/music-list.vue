<template>
  <div class="music-list">
    <scroll :data="songs" class="scroll">
      <div>
      <h1 class="title" >{{title}}</h1>
      <div class="bg-image" :style="bgStyle" ref="bgImage"></div>
      <div class="list" ref="list">
        <song-list :songs="songs" @select="selectItem"></song-list>
      </div>
    </div>
    </scroll>
  </div>
</template>

<script>
import SongList from '@/base/song-list/song-list'
import Scroll from '@/base/scroll/scroll'
import { mapActions } from 'vuex'
export default {
  name: 'Home',
  props: {
    bgImage: {
      type: String,
      default: ''
    },
    songs: Array,
    title: String
  },
  methods: {
    selectItem (item, index) {
      this.selectPlay({
        list: this.songs,
        index: index
      })
    },
    ...mapActions(['selectPlay'])
  },
  computed: {
    bgStyle () {
      return `background-image: url(${this.bgImage})`
    }
  },
  components: {
    SongList,
    Scroll
  }
}
</script>

<style scoped lang="stylus">
  .music-list
    position: fixed
    top: .9rem
    left: 0
    bottom: 0
    right: 0
    z-index: 200
    background: #fff
    .scroll
      position: absolute
      top: 0
      width: 100%
      height: 100%
      .title
        position: absolute
        top: 3rem
        left: 10%
        width: 80%
        text-align: center
        line-height: 40px
        color: #fff
        z-index: 10
        font-size: .4rem
      .bg-image
        width: 100%
        height: 0
        padding-top: 70%
        transform-origin: top
        background-size: cover
      .list
        width: 100%
        background: #fff
        overflow: hidden

</style>
