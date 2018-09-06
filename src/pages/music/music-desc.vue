<template>
  <div class="music-desc">
    <scroll class="wrapper" :data="discList">
      <ul class="list-items">
        <li class="item" v-for="item in discList" :key="item.dissid" @click="selectItem(item)" :list="item">
          <div class="item-img">
            <img v-lazy="item.imgurl">
            <div class="item-creator">
              <i class="iconfont icon-creator"></i>
              <span>{{item.creator.name}}</span>
            </div>
          </div>
          <div class="item-text">
            <span>{{item.dissname}}</span>
          </div>
        </li>
      </ul>
    </scroll>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import { getDiscList } from '@/api/recommend'
import { ERR_OK } from '@/api/config'
import Scroll from '@/base/scroll/scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'MuiscDesc',
  data () {
    return {
      discList: []
    }
  },
  components: {
    Scroll
  },
  activated () {
    this._getDiscList()
  },
  methods: {
    // 获取 qq 歌单
    _getDiscList () {
      getDiscList().then((res) => {
        if (res.code === ERR_OK) {
          this.discList = res.data.list
          // console.log(res.data.list)
        }
      })
    },
    selectItem (list) {
      this.$router.push({
        path: `/music/music-desc/${list.dissid}`
      })
      this.setDisc(list)
    },
    ...mapMutations({
      setDisc: 'SET_DISC'
    })
  }
}
</script>

<style scoped lang="stylus">
  .music-desc
    position: fixed
    top: 2.1rem
    bottom: 0
    .wrapper
      height: 100%
      .list-items
        display: flex
        flex-wrap: wrap
        padding: 0 .1rem
        justify-content: space-between
        .item
          width: 49%
          .item-img
            position: relative
            img
              display: block
              width: 100%
              border-radius: 3%
            .item-creator
              position: absolute
              bottom: .15rem
              left: .15rem
              color: #fff
          .item-text
            overflow: hidden
            margin: .1rem 0 .25rem 0
</style>
