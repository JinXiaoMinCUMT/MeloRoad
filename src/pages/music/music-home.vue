<template>
    <scroll :data="discList">
      <div class="music-home">
        <div class="lunbo">
          <mt-swipe>
            <mt-swipe-item v-for="item in recommends" :key="item.id">
              <a :href="item.linkUrl">
                <img :src="item.picUrl">
              </a>
            </mt-swipe-item>
          </mt-swipe>
        </div>
        <div class="card-top">
          <div class="card-head">
            <h1 class="title">爆款歌单</h1>
            <span class="card-more" @click="moreList">更多 ></span>
          </div>
          <div class="card-body">
            <ul class="items">
              <li class="item" v-for="item in discList.slice(0, 6)" :key="item.dissid" @click="selectItem(item)">
                <div class="img-wrapper">
                  <img :src="item.imgurl">
                </div>
                <div class="desc-wrapper">
                  <span>{{item.dissname}}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="card-mid">
          <div class="card-head">
            <h1 class="title">当红炸子鸡</h1>
            <span class="card-more" @click="moreSingers">更多 ></span>
          </div>
          <div class="card-body">
            <ul class="items">
              <li class="item" v-for="item in singers" :key="item.id" @click="selectSinger(item)">
                <div class="img-wrapper">
                  <img :src="item.avater">
                </div>
                <div class="desc-wrapper">
                  <span>{{item.name}}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </scroll>
</template>

<script>
import { getRecommend, getDiscList } from '@/api/recommend'
import { ERR_OK } from '@/api/config'
// import Scroll from '@/base/scroll/scroll'
import { getSingerList } from '@/api/singer'
// import { getMusicList } from '@/api/rank'
import Singer from 'assets/js/singer.js'
import Scroll from '@/base/scroll/scroll'
// import { createSong } from 'assets/js/song.js'
import { mapMutations } from 'vuex'

const HOT_NAME = '热门数据'
const HOT_SINGER_LEN = 6

export default {
  name: 'MusicHome',
  data () {
    return {
      recommends: [],
      discList: [],
      singers: []
    }
  },
  components: {
    Scroll
  },
  methods: {
    // 获取 qq 首页轮播图
    _getRecommend () {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider
        }
      })
    },
    // 获取 qq 歌单
    _getDiscList () {
      getDiscList().then((res) => {
        if (res.code === ERR_OK) {
          this.discList = res.data.list
        }
      })
    },
    moreList () {
      this.$router.push('/music/music-desc')
    },
    moreSingers () {
      this.$router.push('/music/music-singer')
    },
    // 获取 6 位歌手
    _getSingerList () {
      getSingerList().then((res) => {
        if (res.code === ERR_OK) {
          this.singers = this._normalizeSinger(res.data.list)[0].items
          console.log(this.singers)
        }
      })
    },
    _normalizeSinger (list) {
      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      }
      list.forEach((item, index) => {
        if (index < HOT_SINGER_LEN) {
          map.hot.items.push(
            new Singer({
              id: item.Fsinger_mid,
              name: item.Fsinger_name
            })
          )
        }
        const key = item.Findex
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          }
        }
        map[key].items.push(
          new Singer({
            id: item.Fsinger_mid,
            name: item.Fsinger_name
          })
        )
      })
      // 为了得到有序列表， 我们需要处理 map
      let hot = []
      let ret = []
      for (let key in map) {
        let val = map[key]
        if (val.title.match(/[a-zA-Z]/)) {
          ret.push(val)
        } else if (val.title === HOT_NAME) {
          hot.push(val)
        }
      }
      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })
      return hot.concat(ret)
    },
    selectItem (list) {
      this.$router.push({
        path: `/music/music-desc/${list.dissid}`
      })
      this.setDisc(list)
    },
    selectSinger (singer) {
      this.setSinger(singer)
      this.$router.push({
        path: `/music/music-singer/${singer.id}`
      })
    },
    ...mapMutations({
      setDisc: 'SET_DISC',
      setSinger: 'SET_SINGER'
    })
  },
  created () {
    this._getRecommend()
    this._getDiscList()
    this._getSingerList()
  }
}
</script>

<style scoped lang="stylus">
  @import "~assets/styles/mixin.styl"
  .music-home
    position: fixed
    top: 2.1rem
    left: 0
    bottom: 0
    width: 100%
    display: flex
    flex-direction: column
    align-items: center
    background: #fff
    .lunbo
      width: 90%
      height: 2.5rem
      a
        dispaly: block
        width: 100%
        height: 100%
        img
          dispaly: block
          width: 100%
          height: 100%
          border-radius: .1rem
    .card-top
      width: 90%
      margin-top: .5rem
      // 占位防闪烁
      padding-bottom: 90%
      height: 0
      .card-head
        display: flex
        height: .5rem
        line-height: .5rem
        .title
          width: 85%
          font-size: .45rem
        .card-more
          color: #777
          font-size: .3rem
      .card-body
        margin-top: .3rem
        .items
          display: flex
          flex-wrap: wrap
          justify-content: space-between
          // padding-bottom: 95%
          // height: 0
          // position: relative
          .item
            width: 30%
            display: flex
            flex-wrap: wrap
            // position: absoulte
            .img-wrapper
              width: 100%
              padding-bottom: 100%
              height: 0
              img
                width: 100%
                border-radius: 10%
            .desc-wrapper
              margin: .1rem 0 .3rem 0
              width: 100%
              height:.6rem
              line-height: .3rem
              no-wrap()
    .card-mid
      width: 90%
      margin-top: .5rem
      // 占位防闪烁
      padding-bottom: 90%
      height: 0
      .card-head
        display: flex
        height: .5rem
        line-height: .5rem
        .title
          width: 85%
          font-size: .45rem
        .card-more
          color: #777
          font-size: .3rem
      .card-body
        margin-top: .3rem
        .items
          display: flex
          flex-wrap: wrap
          justify-content: space-between
          .item
            width: 30%
            display: flex
            flex-wrap: wrap
            .img-wrapper
              width: 100%
              img
                width: 100%
                border-radius: 10%
            .desc-wrapper
              margin: .1rem 0 .3rem 0
              width: 100%
              height:.6rem
              line-height: .3rem
</style>
