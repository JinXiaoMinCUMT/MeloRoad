<template>
  <div>
    <div class="head">
      <router-link to="/music/music-desc">
        <span class="head-item act">歌单</span>
      </router-link>
      <router-link to="/music/music-home">
        <span class="head-item act">推荐</span>
      </router-link>
      <router-link to="/music/music-rank">
        <span class="head-item act">排行</span>
      </router-link>
      <router-link to="/music/music-singer">
        <span class="head-item act">歌手</span>
      </router-link>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="stylus">
  .head
    position: absolute
    top: .88rem
    height: 1.2rem
    padding-left: .4rem
    padding-top: .2rem
    z-index: 100
    background: #fff
    width: 100%
    .head-item
      font-size: .3rem
      color: #444
      margin: 0 .08rem
    .router-link-active
      .act
        font-size: .7rem
        color: #444
        font-weight: 500
</style>
