<template>
  <div class="home">
    <home-view></home-view>
    <home-notes></home-notes>
  </div>
</template>

<script>
import HomeView from '@/pages/home/components/view'
import HomeNotes from 'pages/home/components/homeNotes'
export default {
  name: 'Home',
  components: {
    // HomeHeader,
    HomeView,
    HomeNotes
  }
}
</script>

<style scoped lang="stylus">
</style>
