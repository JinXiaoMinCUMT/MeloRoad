<template>
  <div class="show-container">
    <div class="show-slogan">灵魂和身体总要一个在路上</div>
    <div class="show-detail"></div>
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
      margin-top: 1rem
      font-size: .8rem
      font-weight: 300
      line-height: 1.2rem
    .show-detail
      font-size: .2rem
      margin: 1rem 0
      color: #c7eddc
      line-height: .4rem
</style>
