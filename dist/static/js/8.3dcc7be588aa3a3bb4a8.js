webpackJsonp([8],{M14R:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=n("P5LN"),s=n("HVJf"),o=n("BRgg"),r=n("T452"),a=n("G3uJ"),c=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}return t},u={name:"MusicRankDetail",data:function(){return{songs:[]}},components:{MusicList:e.a},created:function(){this._getMusicList()},computed:c({},Object(s.c)(["topList"]),{title:function(){return this.topList.topTitle},bgImage:function(){return this.topList.picUrl}}),methods:{_getMusicList:function(){var t=this;this.topList.id?Object(o.a)(this.topList.id).then(function(i){i.code===r.a&&(t.songs=t._normalizeSongs(i.songlist))}):this.$router.push("/music-rank")},_normalizeSongs:function(t){var i=[];return t.forEach(function(t){var n=t.data;n.songid&&n.albummid&&i.push(Object(a.a)(n))}),i}}},l={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("music-list",{attrs:{title:this.title,"bg-image":this.bgImage,songs:this.songs}})],1)},staticRenderFns:[]};var f=n("vSla")(u,l,!1,function(t){n("eBTF")},"data-v-5c35ca70",null);i.default=f.exports},eBTF:function(t,i){}});
//# sourceMappingURL=8.3dcc7be588aa3a3bb4a8.js.map