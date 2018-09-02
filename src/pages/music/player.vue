<template>
  <div class="player" v-show="playlist.length">
    <div class="normal-player" v-show="fullScreen">
      <div class="background">
        <img :src="currentSong.image">
      </div>
      <div class="top">
        <div class="back" @click="back">
          <i class="iconfont icon-back"></i>
        </div>
        <h1 class="title" v-html="currentSong.name"></h1>
        <h2 class="subtitle" v-html="currentSong.singer"></h2>
        <div class="image-wrapper">
          <img :src="currentSong.image">
        </div>
      </div>
      <!-- 歌曲播放进度条 -->
      <div class="progress-wrapper">
          <span class="time time-l">{{format(currentTime)}}</span>
          <progress-bar class="bar" :percent="percent()"></progress-bar>
          <span class="time time-r">{{format(currentSong.duration)}}</span>
      </div>
      <div class="bottom">
        <div class="operators">
          <!-- 播放模式 -->
          <div class="icon i-left" @click="prev">
            <i class="iconfont icon-prev"></i>
          </div>
          <div class="icon i-center" @click="togglePlaying">
            <i :class="playIcon"></i>
          </div>
          <div class="icon i-right" @click="next">
            <i class="iconfont icon-next"></i>
          </div>
        </div>
      </div>
    </div>
    <!-- 顶部音乐小圆点 -->
    <div class="mini-player" v-show="!fullScreen" @click="open">
      <div class="icon animated infinite pulse">
        <img :src="currentSong.image">
      </div>
    </div>
    <!-- html 音乐播放标签 -->
    <audio ref="audio" @timeupdate="updatetime" :src="currentSong.url"></audio>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import ProgressBar from 'base/progress-bar/progress-bar'
export default {
  name: 'Home',
  data () {
    return {
      currentTime: 0
    }
  },
  components: {
    ProgressBar
  },
  computed: {
    playIcon () {
      return this.playing ? 'iconfont icon-play' : 'iconfont icon-pause'
    },
    ...mapGetters([
      'fullScreen',
      'playlist',
      'currentSong',
      'playing',
      'currentIndex',
      'mode',
      'sequenceList'
    ])
  },
  methods: {
    // 格式化时间
    format (interval) {
      interval = interval | 0
      const minute = interval / 60 | 0
      const second = this._pad(interval % 60)
      return `${minute}:${second}`
    },
    _pad (num, n = 2) {
      let len = num.toString().length
      while (len < n) {
        num = '0' + num
        len++
      }
      return num
    },
    updatetime (event) {
      // console.log(event.target.currentTime)
      // 当前播放事件的事件进度
      this.currentTime = event.target.currentTime
    },
    // 计算歌曲播放的进度
    percent () {
      return this.currentTime / this.currentSong.duration
    },
    prev () {
      let index = this.currentIndex - 1
      if (index === -1) {
        index = this.playlist.length - 1
      }
      this.setCurrentIndex(index)
    },
    next () {
      let index = this.currentIndex + 1
      if (index === this.playlist.length) {
        index = 0
      }
      this.setCurrentIndex(index)
    },
    togglePlaying () {
      if (this.playing) {
        this.$refs.audio.play()
      } else {
        this.$refs.audio.pause()
      }
      this.setPlayingState(!this.playing)
    },
    open () {
      this.setFullScreen(true)
    },
    back () {
      this.setFullScreen(false)
    },
    ...mapMutations({
      setFullScreen: 'SET_FULLSCREEN',
      setPlayingState: 'SET_PLAYING_STATE',
      setCurrentIndex: 'SET_CURRENT_INDEX',
      setPlayMode: 'SET_PLAY_MODE',
      setPlaylist: 'SET_PLAYLIST'
    })
  },
  watch: {
    // 监听 currentSong 数据变化，变化时调用 audio 的 play 方法
    currentSong () {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.$refs.audio.play()
      }, 1000)
    }
  }
}
</script>

<style scoped lang="stylus">
  .player
    .normal-player
      position: fixed
      left: 0
      right: 0
      top: 0
      bottom: 0
      background: #fff
      z-index: 201
      .background
        position: absolute
        top: 0
        left: -30
        width: 100%
        height: 100%
        z-index: -1
        opacity: .5
        filter: blur(40px)
        img
          width: 100%
          height: 100%
      .top
        position: relative
        top: 0
        left: 0
        right: 0
        padding-bottom: 100%
        .back
          position: absolute
          top: .2rem
          left: .3rem
          .icon-back
            font-size: .6rem
            color: #666
        .title
          width: 70%
          margin: 0 auto
          text-align: center
          line-height: .8rem
          font-size: .4rem
        .subtitle
          line-height: .4rem
          font-size: .25rem
          text-align: center
        .image-wrapper
          position: absolute
          width: 70%
          top: 20%
          left: 15%
          img
            width: 100%
            display: block
      .progress-wrapper
        padding: 0 .1rem
        display: flex
        .time
          flex: 0 0 .6rem
          margin: -.1rem .1rem
          &.time-l
            color: #fff
          &.time-r
            color: #666
            padding-left: .2rem
        .bar
          flex: 1
      .bottom
        margin-top: 20%
        width: 100%
        .operators
          display: flex
          align-items: center
          justify-content: center
          padding: 0 .4rem
          .icon
            width: 20%
          .iconfont
            font-size: .8rem
            color: #777
          .i-left
            text-align: left
          .i-center
            text-align: center
            .iconfont
              font-size: 1.1rem
              color: #30bd9c
          .i-right
            text-align: right
    .mini-player
      position: fixed
      top: .1rem
      right: .1rem
      z-index: 300
      img
        display: block
        width: .6rem
        height: .6rem
        border-radius: 50%
</style>
