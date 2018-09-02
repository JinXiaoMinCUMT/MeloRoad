<template>
  <div>
    <div class="map-view" id="mapview">
    </div>
    <div class="map-btn">开始探索</div>
  </div>
</template>

<script>
import Map from 'assets/js/loadmap.js'
let mapOtion 
export default {
  mounted () {
  },
  data () {
    return {
      mapOtion: {
        zoom: 5,
        mapStyle: 'amap://styles/b6a42bbbea6281fd3f864b4720a78794',
        center: [112, 27]
      } 
    }
  },
  methods: {
    loadMap (mapOtion) {
      Map().then(function (AMap) {
        let map = new AMap.Map('mapview', mapOtion)
      })
    },
    getRandomLocation () {
      let lat = this.getRandomNum(24, 39)
      let lng = this.getRandomNum(102, 116)
      let position = [lng, lat]
      this.$store.state.mapOtion.center = position
    },
    getRandomNum (min, max) {
      let range = max - min
      let rand = Math.random()
      let num = min + Math.round(rand * range )
      return num
    }
  },
  activated () {
    this.loadMap(this.$store.state.mapOtion)
  },
  watch: {
  }

}
</script>

<style scoped lang="stylus">
  .map-view
    height: 6rem
    background: pink
  .map-btn
    width: 2rem
    height: 1rem
    background: black
    color: white
    margin: 2rem auto
</style>
