<template>
  <div class="song-list">
    <ul>
      <li class="item" v-for="(song, index) in songs" @click="selectItem(song, index)" :key="index">
        <div class="content">
          <h2 class="name">{{song.name}}</h2>
          <p class="desc">{{getDesc(song)}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    songs: Array
  },
  methods: {
    selectItem (item, index) {
      this.$emit('select', item, index)
    },
    getDesc (song) {
      return `${song.singer} - ${song.album}`
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/styles/mixin.styl"
  .song-list
    margin-left: .4rem
    margin-top: .3rem
    .item
      display: flex
      align-items: center
      box-sizing: border-box
      height: 1.2rem
      margin: .1rem 0
      .content
        width: 90%
        // margin: 0 .4rem
        .name
          font-size: .36rem
          margin-bottom: .2rem
        .desc
          // margin-right: .5rem
          // width: 80%
          font-szie: .24rem
          color: #888
          // display: block
          no-wrap1()
</style>
