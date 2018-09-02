<template>
  <div class="music-list">
    <div class="back">
      <i class="iconfont icon-left"></i>
    </div>
    <h1 class="title" >{{title}}</h1>
    <div class="bg-image" :style="bgStyle" ref="bgImage"></div>
    <scroll class="list" ref="list" :data="songs">
      <div class="song-list-wrapper">
        <song-list :songs="songs" @select="selectItem"></song-list>
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
  },
  mounted () {
    // console.log(this.$refs.bgImage.clientHeight)
    this.$refs.list.$el.style.top = `${this.$refs.bgImage.clientHeight}px`
    // console.log(this.$refs.list.style.top)
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
    background: pink
    .back
      position absolute
      top: 6px
      left: 6px
      z-index: 10
      .iconfont
        color: #fff
        font-size: .6rem
    .title
      position: absolute
      top: 0
      left: 10%
      width: 80%
      text-align: center
      line-height: 40px
      color: #fff
      z-index: 10
      font-size: .4rem
    .bg-image
      position: relative
      width: 100%
      height: 0
      padding-top: 70%
      transform-origin: top
      background-size: cover
    .list
      position: fixed
      top: 0
      bottom: 0
      width: 100%
      background: #fff
      overflow: hidden
      .song-list-wrapper
        padding: .2rem .3rem
</style>
