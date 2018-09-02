<template>
  <div class="show-container">
    <div class="show-slogan">你身边的植物都在这</div>
    <div class="show-detail">点击「探索」按钮来寻觅你身边的植物，点击「分享」按钮来传播你所见的美好</div>
    <div class="show-btns">
      <router-link to='/explore'>
        <div class="explore-btn">探索</div>
      </router-link>
      <router-link to='/share'>
        <div class="upload-btn">分享</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped lang="stylus">
  .show-container
    height: 12rem
    display: flex
    flex-direction: column
    align-items: center
    background-image: url('~assets/images/2.jpeg')
    background-size: cover
    background-repeat: no-repeat
    padding: 1rem
    padding-top: 2rem
    color: #fff
    text-align: center
    .show-slogan
      font-size: .8rem
      font-weight: 300
      line-height: 1.2rem
    .show-detail
      font-size: .2rem
      margin: 1rem 0
      color: #c7eddc
      line-height: .4rem
    .show-btns
      .explore-btn
        display: inline-block
        width: 2rem
        height: .6rem
        line-height: .6rem
        color: #fff
        background: linear-gradient(to bottom right, #30bd9c, #70dd93)
      .upload-btn
        display: inline-block
        width: 2rem
        height: .6rem
        line-height: .6rem
        color: #fff
        background: linear-gradient(to bottom right, #30bd9c, #70dd93)
</style>
