<template>
  <div>
    <music-list :title="title" :bgImage="bgImage" :songs="songs"></music-list>
  </div>
</template>

<script>
import MusicList from 'pages/music/components/music-list'
import { mapGetters } from 'vuex'
import { getSongList } from '@/api/recommend.js'
import { ERR_OK } from '@/api/config.js'
import { createSong } from 'assets/js/song.js'
export default {
  name: 'MusicListDetail',
  data () {
    return {
      songs: []
    }
  },
  components: {
    MusicList
  },
  computed: {
    title () {
      return this.disc.dissname
    },
    bgImage () {
      return this.disc.imgurl
    },
    ...mapGetters(['disc'])
  },
  methods: {
    _getSongList () {
      getSongList(this.disc.dissid).then((res) => {
        if (res.code === ERR_OK) {
          // console.log(res.cdlist[0].songlist)
          this.songs = this.normalizeSongs(res.cdlist[0].songlist)
          // console.log(this.songs)
        }
      })
    },
    normalizeSongs (list) {
      let ret = []
      list.forEach((musicData) => {
        if (musicData.songid && musicData.albumid) {
          ret.push(createSong(musicData))
        }
      })
      return ret
    }
  },
  created () {
    this._getSongList()
  }
}
</script>

<style scoped lang="stylus">
</style>
