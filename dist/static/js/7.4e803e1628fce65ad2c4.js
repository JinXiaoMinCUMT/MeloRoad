webpackJsonp([7],{CDgu:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=i("P5LN"),e=i("HVJf"),c=i("m40h"),o=i("T452"),r=i("G3uJ"),a=Object.assign||function(t){for(var s=1;s<arguments.length;s++){var i=arguments[s];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},u={name:"MusicListDetail",data:function(){return{songs:[]}},components:{MusicList:n.a},computed:a({title:function(){return this.disc.dissname},bgImage:function(){return this.disc.imgurl}},Object(e.c)(["disc"])),methods:{_getSongList:function(){var t=this;this.disc.dissid||this.$router.push("/music/music-desc"),Object(c.c)(this.disc.dissid).then(function(s){s.code===o.a&&(t.songs=t.normalizeSongs(s.cdlist[0].songlist),console.log(t.disc))})},normalizeSongs:function(t){var s=[];return t.forEach(function(t){t.songid&&t.albumid&&s.push(Object(r.a)(t))}),s}},created:function(){this._getSongList()}},d={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("music-list",{attrs:{title:this.title,bgImage:this.bgImage,songs:this.songs}})],1)},staticRenderFns:[]};var g=i("C7Lr")(u,d,!1,function(t){i("YagZ")},"data-v-4d9dac1c",null);s.default=g.exports},YagZ:function(t,s){}});
//# sourceMappingURL=7.4e803e1628fce65ad2c4.js.map