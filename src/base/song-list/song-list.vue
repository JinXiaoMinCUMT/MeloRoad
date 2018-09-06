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

<style scoped lang="stylus">
  .song-list
    .item
      display: flex
      align-items: center
      box-sizing: border-box
      height: 1.2rem
      .content
        padding-left: .4rem
        .name
          font-size: .36rem
          margin-bottom: .2rem
        .desc
          font-szie: .24rem
          color: #888
          no-wrap-one()
</style>
