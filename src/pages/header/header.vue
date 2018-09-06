<template>
  <div class="header">
    <div class="logo">
      <i class="iconfont icon-logo"></i>
    </div>
    <router-link to="/home" class="icon">
      <i class="iconfont icon-read"></i>
      <div class="iconinfo">思想</div>
    </router-link>
    <router-link to="/music" class="icon">
      <i class="iconfont icon-music"></i>
      <div class="iconinfo">音乐</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NavHeader'
}
</script>

<style scoped lang="stylus">
  .header
    padding: .1rem
    height: .9rem
    position: relative
    z-index: 200
    background: #fff
    display: flex
    .logo
      width: 50%
      color: #30bd9c
      .iconfont
        font-size: .6rem
    .icon
      color: #ccc
      margin-left: .7rem
      .iconfont
        font-size: .4rem
      .iconinfo
        font-size: .2rem
        margin-top: .05rem
    // 路由选中变色
    .router-link-active
      color: #30bd9c
</style>
