<template>
  <scroll class="music-search-suggest"
          :data="result"
          :pullup="pullup"
          @scrollToEnd="searchMore"
  >
    <ul class="suggest-list">
      <li class="suggest-item" v-for="(item, index) in result" :key="index" @click="selectItem(item)">
        <div class="icon">
          <i class="iconfont icon-search"></i>
        </div>
        <div class="name">
          <p class="text">{{getDisplayName(item)}}</p>
        </div>
      </li>
    </ul>
  </scroll>
</template>

<script>
import { search } from 'api/search'
import { ERR_OK } from 'api/config'
import { createSong } from 'assets/js/song.js'
import Scroll from 'base/scroll/scroll'
import Singer from 'assets/js/singer.js'
import { mapMutations } from 'vuex'

const TYPE_SINGER = 'singer'
const perpage = 20

export default {
  name: 'MusicSearchSuggest',
  props: {
    query: {
      type: String,
      default: ''
    },
    showSinger: {
      type: Boolean,
      default: true
    }
  },
  components: {
    Scroll
  },
  data () {
    return {
      page: 1,
      result: [],
      pullup: true,
      hasMore: true
    }
  },
  methods: {
    selectItem (item) {
      if (item.type === TYPE_SINGER) {
        const singer = new Singer({
          id: item.singermid,
          name: item.singername
        })
        this.$router.push({
          path: `/music-search/${singer.id}`
        })
        this.setSinger(singer)
      }
    },
    searchMore () {
      if (!this.hasMore) {
        return ''
      } else {
        this.page++
        search(this.query, this.page, this.showSinger, perpage).then((res) => {
          if (res.code === ERR_OK) {
            console.log(res.data)
            this.result = this.result.concat(this._genResult(res.data))
            console.log(this.result)
            this._checkMore(res.data)
          }
        })
      }
    },
    _checkMore (data) {
      const song = data.song
      if (!song.list.length || (song.curnum + song.curpage * perpage) > song.totalnum) {
        this.hasMore = false
      } else {
        this.hasMore = true
      }
    },
    _search () {
      this.hasMore = true
      search(this.query, this.page, this.showSinger, perpage).then((res) => {
        if (res.code === ERR_OK) {
          console.log(res.data)
          this.result = this._genResult(res.data)
          console.log(this.result)
          this._checkMore(res.data)
        }
      })
    },
    _genResult (data) {
      let ret = []
      if (data.zhida && data.zhida.singername) {
        ret.push({...data.zhida, ...{type: TYPE_SINGER}})
      }
      if (data.song) {
        ret = ret.concat(this._normalizeSongs(data.song.list))
      }
      return ret
    },
    _normalizeSongs (list) {
      let ret = []
      list.forEach((musicData) => {
        if (musicData.songid && musicData.albummid) {
          ret.push(createSong(musicData))
        }
      })
      return ret
    },
    getDisplayName (item) {
      if (item.type === TYPE_SINGER) {
        return item.singername
      } else {
        return `${item.name} - ${item.singer}`
      }
    },
    ...mapMutations({
      setSinger: 'SET_SINGER'
    })
  },
  watch: {
    query () {
      this._search()
    }
  }
}
</script>

<style scoped lang="stylus">
  .music-search-suggest
    height: 100%
    overflow: hidden
    .suggest-list
      padding: 0 .6rem
      .suggest-item
        display: flex
        align-items: center
        padding-bottom: .4rem
      .icon
        flex: 0 0 .6rem
        width: .6rem
      .name
        flex: 1
        font-size: .24rem
        overflow: hidden
</style>
