<template>
  <div>
    <div class="map-view" id="mapview">
    </div>
    <div class="map-btn" @click='init'>开始探索</div>
  </div>
</template>

<script>
import BMap from 'BMap'
export default {
  mounted () {
    // this.getService()
    this.init()
    // this.getCitycode()
  },
  data () {
    return {
    }
  },
  methods: {
    init () {
      let map = new BMap.Map('mapview')
      // 设置随机点
      let lat = this.getRandomNum(24, 39)
      let lng = this.getRandomNum(102, 116)
      let point = new BMap.Point(lng, lat)
      map.centerAndZoom(point, 10)
      let localSearch = new BMap.LocalSearch(map, {
        onSearchComplete(r) {
          console.log(r)
        }
      })
      localSearch.searchNearby('公园', point, 100000)
      localSearch.enableAutoViewport()

    },
    getRandomNum (min, max) {
      let range = max - min
      let rand = Math.random()
      let num = min + Math.round(rand * range)
      return num
    }
  },
  activated () {
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
