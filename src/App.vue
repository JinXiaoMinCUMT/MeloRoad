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
  }
}
</script>

<style>
</style>
