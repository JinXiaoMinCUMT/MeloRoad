webpackJsonp([12],{"+aT9":function(n,t){n.exports=AMap},"0nQ+":function(n,t){},"9n10":function(n,t){},M6Sr:function(n,t){},NHnr:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={};e.d(i,"selectPlay",function(){return R}),e.d(i,"setDisc",function(){return A});var r={};e.d(r,"singer",function(){return O}),e.d(r,"playing",function(){return $}),e.d(r,"fullScreen",function(){return D}),e.d(r,"playlist",function(){return Y}),e.d(r,"sequenceList",function(){return F}),e.d(r,"mode",function(){return H}),e.d(r,"currentIndex",function(){return U}),e.d(r,"currentSong",function(){return X}),e.d(r,"disc",function(){return j}),e.d(r,"topList",function(){return J}),e.d(r,"singers",function(){return q});e("k0b/");var s=e("wccJ"),a=e.n(s),c=(e("TeEI"),e("BZYI")),o=e.n(c),u=e("IvJb"),l={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"header"},[n._m(0),n._v(" "),e("router-link",{staticClass:"icon",attrs:{to:"/home"}},[e("i",{staticClass:"iconfont icon-read"}),n._v(" "),e("div",{staticClass:"iconinfo"},[n._v("思想")])]),n._v(" "),e("router-link",{staticClass:"icon",attrs:{to:"/music"}},[e("i",{staticClass:"iconfont icon-music"}),n._v(" "),e("div",{staticClass:"iconinfo"},[n._v("音乐")])]),n._v(" "),e("router-link",{staticClass:"icon",attrs:{to:"/explore"}},[e("i",{staticClass:"iconfont icon-explore"}),n._v(" "),e("div",{staticClass:"iconinfo"},[n._v("探索")])])],1)},staticRenderFns:[function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"logo"},[t("i",{staticClass:"iconfont icon-logo"})])}]};var f=e("vSla")({name:"NavHeader"},l,!1,function(n){e("sYXW")},"data-v-02baaa01",null).exports,d=e("HVJf");var p=document.createElement("div").style,m=function(){var n={webkit:"webkitTransform",Moz:"MozTransform",O:"OTransform",ms:"msTransform",standard:"transform"};for(var t in n)if(void 0!==p[n[t]])return t;return!1}();var h=function(n){return!1!==m&&("standard"===m?n:m+n.charAt(0).toUpperCase()+n.substr(1))}("transform"),v={props:{percent:{type:Number,default:0}},watch:{percent:function(n){if(n>=0){var t=n*(this.$refs.progressBar.clientWidth-16);this.$refs.progress.style.width=t+"px",this.$refs.progressBtn.style[h]="translate3d("+t+"px, 0, 0)"}}}},g={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{ref:"progressBar",staticClass:"progress-bar"},[t("div",{staticClass:"bar-inner"},[t("div",{ref:"progress",staticClass:"progress"}),this._v(" "),t("div",{ref:"progressBtn",staticClass:"progress-btn-wrapper"},[t("div",{staticClass:"progress-btn"})])])])},staticRenderFns:[]};var S=e("vSla")(v,g,!1,function(n){e("XZfl")},"data-v-f923b6b4",null).exports,_=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},T={name:"Home",data:function(){return{currentTime:0}},components:{ProgressBar:S},computed:_({playIcon:function(){return this.playing?"iconfont icon-play":"iconfont icon-pause"}},Object(d.c)(["fullScreen","playlist","currentSong","playing","currentIndex","mode","sequenceList"])),methods:_({format:function(n){return((n|=0)/60|0)+":"+this._pad(n%60)},_pad:function(n){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,e=n.toString().length;e<t;)n="0"+n,e++;return n},updatetime:function(n){this.currentTime=n.target.currentTime},percent:function(){return this.currentTime/this.currentSong.duration},prev:function(){var n=this.currentIndex-1;-1===n&&(n=this.playlist.length-1),this.setCurrentIndex(n)},next:function(){var n=this.currentIndex+1;n===this.playlist.length&&(n=0),this.setCurrentIndex(n)},togglePlaying:function(){this.playing?this.$refs.audio.play():this.$refs.audio.pause(),this.setPlayingState(!this.playing)},open:function(){this.setFullScreen(!0)},back:function(){this.setFullScreen(!1)}},Object(d.d)({setFullScreen:"SET_FULLSCREEN",setPlayingState:"SET_PLAYING_STATE",setCurrentIndex:"SET_CURRENT_INDEX",setPlayMode:"SET_PLAY_MODE",setPlaylist:"SET_PLAYLIST"})),watch:{currentSong:function(){var n=this;clearTimeout(this.timer),this.timer=setTimeout(function(){n.$refs.audio.play()},1e3)}}},C={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:n.playlist.length,expression:"playlist.length"}],staticClass:"player"},[e("div",{directives:[{name:"show",rawName:"v-show",value:n.fullScreen,expression:"fullScreen"}],staticClass:"normal-player"},[e("div",{staticClass:"background"},[e("img",{attrs:{src:n.currentSong.image}})]),n._v(" "),e("div",{staticClass:"top"},[e("div",{staticClass:"back",on:{click:n.back}},[e("i",{staticClass:"iconfont icon-back"})]),n._v(" "),e("h1",{staticClass:"title",domProps:{innerHTML:n._s(n.currentSong.name)}}),n._v(" "),e("h2",{staticClass:"subtitle",domProps:{innerHTML:n._s(n.currentSong.singer)}}),n._v(" "),e("div",{staticClass:"image-wrapper"},[e("img",{attrs:{src:n.currentSong.image}})])]),n._v(" "),e("div",{staticClass:"progress-wrapper"},[e("span",{staticClass:"time time-l"},[n._v(n._s(n.format(n.currentTime)))]),n._v(" "),e("progress-bar",{staticClass:"bar",attrs:{percent:n.percent()}}),n._v(" "),e("span",{staticClass:"time time-r"},[n._v(n._s(n.format(n.currentSong.duration)))])],1),n._v(" "),e("div",{staticClass:"bottom"},[e("div",{staticClass:"operators"},[e("div",{staticClass:"icon i-left",on:{click:n.prev}},[e("i",{staticClass:"iconfont icon-prev"})]),n._v(" "),e("div",{staticClass:"icon i-center",on:{click:n.togglePlaying}},[e("i",{class:n.playIcon})]),n._v(" "),e("div",{staticClass:"icon i-right",on:{click:n.next}},[e("i",{staticClass:"iconfont icon-next"})])])])]),n._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!n.fullScreen,expression:"!fullScreen"}],staticClass:"mini-player",on:{click:n.open}},[e("div",{staticClass:"icon animated infinite pulse"},[e("img",{attrs:{src:n.currentSong.image}})])]),n._v(" "),e("audio",{ref:"audio",attrs:{src:n.currentSong.url},on:{timeupdate:n.updatetime}})])},staticRenderFns:[]};var E={name:"App",components:{NavHeader:f,Player:e("vSla")(T,C,!1,function(n){e("yJax")},"data-v-038f097c",null).exports},created:function(){console.log(this.$router)}},y={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",[t("nav-header"),this._v(" "),t("keep-alive",[t("router-view")],1),this._v(" "),t("player")],1)},staticRenderFns:[]};var b=e("vSla")(E,y,!1,function(n){e("O1fT")},null,null).exports,I=e("zO6J");u.default.use(I.a);var P,x=function(n){Promise.all([e.e(0),e.e(7)]).then(e.bind(null,"J/LT")).then(function(t){n(t)})},L=new I.a({routes:[{path:"/home",name:"Home",component:function(n){Promise.all([e.e(0),e.e(1)]).then(e.bind(null,"nU8l")).then(function(t){n(t)})}},{path:"/",redirect:"/home"},{path:"/explore",name:"Explore",component:function(n){e.e(3).then(e.bind(null,"It/q")).then(function(t){n(t)})}},{path:"/music",redirect:"/music/music-home"},{path:"/music",name:"Muisc",component:function(n){e.e(11).then(e.bind(null,"S1yh")).then(function(t){n(t)})},children:[{path:"/music/music-home",name:"MusicHome",component:function(n){Promise.all([e.e(0),e.e(9)]).then(e.bind(null,"M/XP")).then(function(t){n(t)})}},{path:"/music/music-desc",name:"MusicDesc",component:function(n){Promise.all([e.e(0),e.e(6)]).then(e.bind(null,"0KjZ")).then(function(t){n(t)})},children:[{path:":id",component:function(n){Promise.all([e.e(0),e.e(10)]).then(e.bind(null,"CDgu")).then(function(t){n(t)})}}]},{path:"/music/music-singer",name:"MusicSinger",component:function(n){Promise.all([e.e(0),e.e(4)]).then(e.bind(null,"O7gw")).then(function(t){n(t)})},children:[{path:":id",component:x}]},{path:"/music/music-rank",name:"MusicRank",component:function(n){Promise.all([e.e(0),e.e(5)]).then(e.bind(null,"jXX7")).then(function(t){n(t)})},children:[{path:":id",component:function(n){Promise.all([e.e(0),e.e(8)]).then(e.bind(null,"M14R")).then(function(t){n(t)})}}]}]},{path:"/music-search",name:"MusicSearch",component:function(n){Promise.all([e.e(0),e.e(2)]).then(e.bind(null,"Stxe")).then(function(t){n(t)})},children:[{path:":id",component:x}]}]}),w=e("iDdd"),N=e.n(w),k=e("zdS3"),M=e.n(k),R=function(n,t){var e=n.commit,i=(n.state,t.list),r=t.index;e("SET_SEQUENCE_LIST",i),e("SET_PLAYLIST",i),e("SET_CURRENT_INDEX",r),e("SET_PLAYING_STATE",!0),e("SET_FULLSCREEN",!0)},A=function(n,t){var e=n.commit;n.state;e("SET_DISC",t)},O=function(n){return n.singer},$=function(n){return n.playing},D=function(n){return n.fullScreen},Y=function(n){return n.playlist},F=function(n){return n.sequenceList},H=function(n){return n.mode},U=function(n){return n.currentIndex},X=function(n){return n.playlist[n.currentIndex]||{}},j=function(n){return n.disc},J=function(n){return n.topList},q=function(n){return n.singers},z={singer:{},playing:!1,fullScreen:!1,playlist:[],sequenceList:0,mode:{},currentIndex:-1,disc:{},topList:{},singers:[]};function B(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var G=(B(P={},"SET_SINGER",function(n,t){n.singer=t}),B(P,"SET_PLAYING_STATE",function(n,t){n.playing=t}),B(P,"SET_FULLSCREEN",function(n,t){n.fullScreen=t}),B(P,"SET_PLAYLIST",function(n,t){n.playlist=t}),B(P,"SET_SEQUENCE_LIST",function(n,t){n.sequenceList=t}),B(P,"SET_PLAY_MODE",function(n,t){n.mode=t}),B(P,"SET_CURRENT_INDEX",function(n,t){n.currentIndex=t}),B(P,"SET_DISC",function(n,t){n.disc=t}),B(P,"SET_TOP_LIST",function(n,t){n.topList=t}),B(P,"SET_SINGERS",function(n,t){n.singers=t}),P);e("acCT");u.default.use(d.a);var Q=new d.a.Store({actions:i,getters:r,state:z,mutations:G,strict:!1,plugins:[]}),Z=e("0nQ+"),W=e.n(Z);e("9n10"),e("M6Sr"),e("TzC8");u.default.config.productionTip=!1,N.a.attach(document.body),u.default.use(M.a),u.default.use(W.a),u.default.component(o.a.name,o.a),u.default.component(a.a.name,a.a),new u.default({el:"#app",store:Q,router:L,components:{App:b},template:"<App/>"})},O1fT:function(n,t){},TeEI:function(n,t){},TzC8:function(n,t){},XZfl:function(n,t){},"k0b/":function(n,t){},sYXW:function(n,t){},yJax:function(n,t){}},["NHnr"]);
//# sourceMappingURL=app.99ca8fc4aad110df0cad.js.map