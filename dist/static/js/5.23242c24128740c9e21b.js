webpackJsonp([5],{BRgg:function(t,e,i){"use strict";e.b=function(){var t=Object.assign({},s.c,{uin:0,needNewCode:1,platform:"h5"});return Object(n.a)("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",t,s.e)},e.a=function(t){var e=Object.assign({},s.c,{topid:t,needNewCode:1,uin:0,tpl:3,page:"detail",type:"top",platform:"h5"});return Object(n.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",e,s.e)};var n=i("cQcd"),s=i("T452")},M14R:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("P5LN"),s=i("HVJf"),c=i("BRgg"),o=i("T452"),r=i("G3uJ"),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},u={name:"MusicRankDetail",data:function(){return{songs:[]}},components:{MusicList:n.a},created:function(){this._getMusicList()},computed:a({},Object(s.c)(["topList"]),{title:function(){return this.topList.topTitle},bgImage:function(){return this.topList.picUrl}}),methods:{_getMusicList:function(){var t=this;this.topList.id?Object(c.a)(this.topList.id).then(function(e){e.code===o.a&&(t.songs=t._normalizeSongs(e.songlist))}):this.$router.push("/music/music-rank")},_normalizeSongs:function(t){var e=[];return t.forEach(function(t){var i=t.data;i.songid&&i.albummid&&e.push(Object(r.a)(i))}),e}}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("music-list",{attrs:{title:this.title,"bg-image":this.bgImage,songs:this.songs}})],1)},staticRenderFns:[]};var g=i("C7Lr")(u,f,!1,function(t){i("tvGX")},"data-v-034c3786",null);e.default=g.exports},tvGX:function(t,e){}});
//# sourceMappingURL=5.23242c24128740c9e21b.js.map