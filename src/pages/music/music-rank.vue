<template>
  <div class="rank">
    <scroll class="top-list" :data="topList">
      <ul>
        <li class="item" v-for="item in topList" :key="item.id" @click="selectItem(item)">
          <div class="icon">
            <img v-lazy="item.picUrl">
          </div>
          <ul class="song-list">
            <li class="song" v-for="(song, index) in item.songList" :key="index">
              <span>{{index + 1}}</span>
              <span>{{song.songname}} - {{song.singername}}</span>
            </li>
          </ul>
        </li>
      </ul>
    </scroll>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import { getTopList } from '@/api/rank'
import { ERR_OK } from '@/api/config'
import Scroll from '@/base/scroll/scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      topList: []
    }
  },
  components: {
    Scroll
  },
  methods: {
    _getTopList () {
      getTopList().then((res) => {
        if (res.code === ERR_OK) {
          this.topList = res.data.topList
        }
      })
    },
    selectItem (item) {
      this.$router.push({
        path: `/music/music-rank/${item.id}`
      })
      this.setTopList(item)
    },
    ...mapMutations({
      setTopList: 'SET_TOP_LIST'
    })
  },
  activated () {
    this._getTopList()
  }
}
</script>

<style scoped lang="stylus">
  .rank
    position: fixed
    top: 2.1rem
    bottom: 0
    .top-list
      height: 100%
      overflow: hidden
      .item
        display: flex
        margin: 0 .4rem
        padding-top: .4rem
        height: 2rem
        margin-bottom: .4rem
        .icon
          width: 2rem
          height: 2rem
          img
            display: block
            width: 100%
            height: 100%
        .song-list
          flex: 1
          display: flex
          flex-direction: column
          justify-content: center
          padding: 0 .4rem
          height: 2rem
          overflow: hidden
          background: #ccc
          font-size: .24rem
          .song
            line-height: .42rem
</style>
