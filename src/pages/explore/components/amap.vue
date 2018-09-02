<template>
  <div>
    <div class="map-view" id="mapview">
    </div>
    <div @click='placeSearch' class="map-btn">开始探索</div>
    <div class="panel" id="panel"></div>
  </div>
</template>

<script>
import AMap from 'AMap'
export default {
  mounted () {
    this.init()
    this.placeSearchLayer()
  },
  data () {
    return {
      mapOption: {
        zoom: 8,
        mapStyle: 'amap://styles/b6a42bbbea6281fd3f864b4720a78794',
        center: null
      },
      map: null,
      placeSearchOption: {
        pageSize: 8,
        pageIndex: 1,
        city: '010',
        map: this.map,
        panel: 'panel',
        autoFitView: true
      }
    }
  },
  methods: {
    init () {
      console.log(this)
      // this.getRandomLocation()
      this.map = new AMap.Map('mapview', this.mapOption)
    },
    placeSearchLayer () {
      let that = this
      AMap.plugin(['AMap.PlaceSearchLayer'], function () {
        let searchLayer = new AMap.PlaceSearchLayer({
          map: that.map,
          keywords: '植物'
        })
        searchLayer.setMap(that.map)
      })
    },
    placeSearch () {
      let opt = this.placeSearchOption
      AMap.service(['AMap.PlaceSearch'], function () {
        let placeSearch = new AMap.PlaceSearch(opt)
        placeSearch.search('植物')
      })
    },
    getCity () {
      let that = this
      this.map.getCity(callback)
      function callback (r) {
        that.placeSearchOption.city = r.city
      }
    },
    getRandomLocation () {
      let lat = this.getRandomNum(24, 39)
      let lng = this.getRandomNum(102, 116)
      let position = [lng, lat]
      this.mapOption.center = position
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
  .panel
    height: 9rem
</style>
