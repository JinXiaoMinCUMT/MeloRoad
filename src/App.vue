<template>
  <div>
    <nav-header></nav-header>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <player></player>
  </div>
</template>

<script>
import NavHeader from 'pages/header/header'
import Player from 'pages/music/player'
export default {
  name: 'App',
  components: {
    NavHeader,
    Player
  },
  created () {
    console.log(this.$router)
  }
}
</script>

<style>
</style>
