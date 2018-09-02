<template>
  <div class="music-search">
    <div class="search-box-wrapper">
      <search-box ref="searchBox" @query="onQueryChange"></search-box>
    </div>
    <div class="shortcut-wrapper" v-show="!query">
      <div class="shortcut">
        <div>
          <div class="hot-key">
            <h1 class="title">热门搜索</h1>
            <ul>
              <li @click="addQuery(item.k)" class="item" v-for="item in hotKey" :key="item.n">
                <span>{{item.k}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="search-result" v-show="query">
      <music-search-suggest :query="query"></music-search-suggest>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import SearchBox from '@/base/search-box/search-box'
import { getHotKey } from '@/api/search'
import { ERR_OK } from '@/api/config'
import MusicSearchSuggest from 'pages/music/music-search-suggest'
export default {
  name: 'Home',
  data () {
    return {
      hotKey: [],
      query: ''
    }
  },
  components: {
    SearchBox,
    MusicSearchSuggest
  },
  created () {
    this._getHotKey()
  },
  methods: {

    onQueryChange (query) {
      this.query = query
    },
    addQuery (query) {
      this.$refs.searchBox.setQuery(query)
    },
    _getHotKey () {
      getHotKey().then((res) => {
        if (res.code === ERR_OK) {
          this.hotKey = res.data.hotkey.slice(0, 10)
        }
      })
    }
  }
}
</script>

<style scoped lang="stylus">
  .music-search
    .search-box-wrapper
      margin: .4rem
    .shortcut-wrapper
      position: fixed
      top: 3.6rem
      bottom: 0
      width: 100%
      .shortcut
        height: 100%
        overflow: hidden
        .hot-key
          margin: 0 .4rem .4rem .4rem
          .title
            margin-bottom: .4rem
          .item
            display: inline-block
            padding: .1rem .2rem
            margin: 0 .2rem .1rem 0
            border-radius: .12rem
            background: #777
            color: #fff
            font-size: .24rem
    .search-result
      position: fixed
      width: 100%
      top: 3.5rem
      bottom: 0
</style>
