<template>
  <div>
    <music-list :bg-image="bgImage" :songs="songs" :title="title"></music-list>
  </div>
</template>

<script>
import MusicList from 'pages/music/components/music-list'
import { mapGetters } from 'vuex'
import { getSingerDetail } from '@/api/singer.js'
import { createSong } from 'assets/js/song'
import {ERR_OK} from '@/api/config.js'
export default {
  name: 'MusicSingerDetail',
  data () {
    return {
      songs: []
    }
  },
  components: {
    MusicList
  },
  computed: {
    bgImage () {
      return this.singer.avater
    },
    title () {
      return this.singer.name
    },
    ...mapGetters(['singer'])
  },
  methods: {
    _getSingerDetail (id) {
      // 当在歌手详情页刷新时，会直接跳到歌手页
      if (!this.singer.id) {
        this.$router.push('/music/music-singer')
      }
      // 获取QQ音乐接口返回的歌手的详情
      getSingerDetail(id).then((res) => {
        if (res.code === ERR_OK) {
          // console.log(res.data.list)
          this.songs = this._normalizeSongs(res.data.list)
          // console.log(this.songs)
        }
      })
    },
    _normalizeSongs (list) {
      let ret = []
      // forEach() 遍历数组的每一个对象，并将其传递给回调函数处理，没有返回值哦
      list.forEach((item) => {
        // 对象的解构赋值，变量和对象名相同能够拿到值
        let {musicData} = item
        if (musicData.songid && musicData.albummid) {
          ret.push(createSong(musicData))
        }
      })
      // 返回数组，包含该歌手所有歌对象实例
      return ret
    }
  },
  activated () {
    this._getSingerDetail(this.singer.id)
  },
  deactivated () {
    this.songs = []
  }
}
</script>

<style scoped lang="stylus">
</style>
