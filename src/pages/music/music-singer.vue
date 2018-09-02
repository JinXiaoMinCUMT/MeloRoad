<template>
  <div>
    <router-view></router-view>
    <div class="music-singer">
      <scroll :data="singers" class="wrapper">
        <ul>
          <li class="list-group" v-for="(group, index) in singers" :key="index">
            <h2 class="list-group-title">{{group.title}}</h2>
            <ul>
              <li @click="selectSinger(item)" class="list-group-item" v-for="item in group.items" :key="item.id">
                <img v-lazy="item.avater" class="avatar">
                <span class="name">{{item.name}}</span>
              </li>
            </ul>
          </li>
        </ul>
      </scroll>
    </div>
  </div>
</template>

<script>
import { getSingerList } from '@/api/singer'
import { ERR_OK } from '@/api/config'
import Singer from 'assets/js/singer.js'
import Scroll from '@/base/scroll/scroll'
import { mapMutations } from 'vuex'

const HOT_NAME = '热门数据'
const HOT_SINGER_LEN = 10

export default {
  name: 'MusicSinger',
  data () {
    return {
      singers: []
    }
  },
  components: {
    Scroll
  },
  methods: {
    _getSingerList () {
      getSingerList().then((res) => {
        if (res.code === ERR_OK) {
          this.singers = this._normalizeSinger(res.data.list)
          // this.setSingers(this.singers)
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
    selectSinger (singer) {
      this.setSinger(singer)
      this.$router.push({
        path: `/music/music-singer/${singer.id}`
      })
    },
    ...mapMutations({
      setSinger: 'SET_SINGER'
      // setSingers: 'SET_SINGERS'
    })
  },
  created () {
    this._getSingerList()
  }
}
</script>

<style scoped lang="stylus">
  .music-singer
    position: fixed
    top: 2.1rem
    bottom: 0
    .wrapper
      height: 100%
      .list-group
        padding-bottom: .6rem
        .list-group-title
          height: .6rem
          line-height: .6rem
          padding-left: .4rem
          font-size: .2rem
        .list-group-item
          display: flex
          align-items: center
          padding: .4rem 0 0 .6rem
          .avatar
            display: block
            width: 1rem
            height: 1rem
            border-radius: 50%
          .name
            margin-left: .3rem
</style>
