(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8524b9e4"],{"2fe3":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("e760"),s=n("4c8d");function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(i["a"])(s["t"],e,t)}},"4eed":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"song"},[n("div",{staticClass:"bgmask"}),n("div",{staticClass:"bg",style:{"background-image":"url("+t.songUrl+")","background-color":"rgb(255,255,255)"}}),n("div",{staticClass:"music-container"},[n("div",{staticClass:"content"},[n("div",{staticClass:"song-list"},[n("div",{staticClass:"song-container"},[t._m(0),t._l(t.songs,(function(e,i){return n("div",{key:i,staticClass:"item"},[n("span",{class:["song-name",t.item_index==i?"song-active":""],on:{click:function(e){t.item_index=i}}},[t._v(" "+t._s(e.name)+" "),n("img",{directives:[{name:"show",rawName:"v-show",value:i==t.item_index&&t.play,expression:"index==item_index && play"}],attrs:{src:"/img/loading-svg/loading-bars.svg"}})]),n("span",{staticClass:"singer-name",on:{click:function(n){return t.goSingerDetail(e.ar[0].id,e.ar[0].name)}}},[t._v(t._s(e.ar[0].name))]),n("span",{staticClass:"time"},[t._v(t._s(e.format_dt))])])}))],2)]),n("div",{staticClass:"prograss"},[n("div",{staticClass:"left"},[n("div",{staticClass:"iconfont item icon-shangyishouge",on:{click:function(e){t.item_index--}}}),n("div",{class:["item","iconfont",t.play?"icon-zanting":"icon-bofang"],on:{click:t.isplay}}),n("div",{staticClass:"iconfont item icon-kuaijin",on:{click:function(e){t.item_index++}}})]),n("div",{staticClass:"prograss-container"},[n("span",{staticClass:"songname",on:{click:t.scoll}},[t._v(t._s(t.songname))]),n("div",{staticClass:"current-time"}),n("div",{staticClass:"bar",on:{mousedown:t.barDown}})]),n("audio",{attrs:{src:t.url}})])]),n("div",{staticClass:"aside"},[n("div",{staticClass:"current-song"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.songUrl,expression:"songUrl"}],class:[t.play?"animation-rotate":""]})]),n("div",{staticClass:"lyric"},[t.lrcFlag?n("div",{staticClass:"lrc-container"},t._l(t.parseLyric,(function(e,i){return n("span",{key:i,class:["lrc",i==t.active?"active":""]},[t._v(t._s(e.lrc))])})),0):t._e(),t.lrcFlag?t._e():n("div",{staticClass:"lrc-container",staticStyle:{top:"3px"}},[n("span",{staticClass:"lrc"},[t._v("暂无歌词")])])])])])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item"},[n("span",{staticClass:"song-name"},[t._v("歌名")]),n("span",{staticClass:"singer-name"},[t._v("歌手")]),n("span",{staticClass:"time"},[t._v("时长")])])}],a=(n("d3b7"),n("159b"),n("b0c0"),n("fb6a"),n("99af"),n("ac1f"),n("1276"),n("ca85")),o=n("2fe3"),r=n("7a1c"),c={name:"song",components:{},data:function(){return{first:!0,play:!1,item_index:0,id:0,url:"",songUrl:"",songname:"",songTime:0,cover:"",parseLyric:[],active:0,lrcFlag:!0,trackIds:[],songs:[],songNum:0,down:!1,prograssDistance:0,currentDistance:0,timeStamp:0,x:0}},watch:{songs:function(){this.songs.forEach((function(t,e,n){var i=r["a"]._msTos(t.dt);n[e].format_dt=i}))},play:function(){var t=document.querySelector("audio");this.play?this.url?(t.play(),this.first&&(this.first=!1)):(this.$message({message:"亲爱的,暂无版权",type:"error"}),this.reset()):t.pause()},timeStamp:function(){var t=this.timeStamp*(this.prograssDistance/this.songTime);document.querySelector(".bar").style.left=t+"px",document.querySelector(".current-time").style.width=t+"px",this.x=t},item_index:function(){this.reset();var t=this.item_index;t<0&&(this.item_index=0),t>=this.songNum&&(this.item_index=this.item_index-1),this.songname=this.songs[this.item_index].name,this.id=this.songs[this.item_index].id,this.songTime=this.songs[this.item_index].dt,this.getsongUrl(),this.getSongImg(),this.getlyric()}},created:function(){this.getTrackIdsandInit()},mounted:function(){this.prograssInit()},methods:{disposeId:function(){var t=window.localStorage.getItem("trackCount");this.songNum=t;var e=this.trackIds.slice(0,t),n=r["a"]._arrToString(e);return n},getTrackIdsandInit:function(){this.trackIds=JSON.parse(window.localStorage.getItem("playList")),this.cover=window.localStorage.getItem("playListCover");var t=this.disposeId();this.getsongdetail(t),this.id=this.trackIds[0].id,this.getsongUrl(),this.getlyric()},getsongUrl:function(){var t=this;Object(a["i"])(this,{id:this.id}).then((function(e){var n=e.data[0].url;n?(t.url=n,t.audioInit()):(t.$message({message:"暂无版权,已为你跳到下一首",type:"error"}),t.item_index++)})).catch((function(t){console.log("获取音频可能出现错误",t)}))},getlyric:function(){var t=this;Object(a["e"])(this,{id:this.id}).then((function(e){var n=r["a"]._parseLyric(e.lrc.lyric);0==n.length?t.lrcFlag=!1:(t.lrcFlag=!0,t.parseLyric=n)})).catch((function(t){console.log("获取歌词可能出现错误",t)}))},getsongdetail:function(t){var e=this;Object(a["h"])(this,{ids:t}).then((function(t){e.songs=e.songs.concat(t.songs),e.songname=e.songs[0].name,e.songTime=e.songs[0].dt,e.getSongImg()})).catch((function(t){console.log("获取歌曲信息可能出现错误",t)}))},getSongImg:function(){var t=this;Object(o["a"])(this,{keywords:this.songname}).then((function(e){e.result.songs?t.songUrl=e.result.songs[0].al.picUrl:t.songUrl=t.cover})).catch((function(t){console.log("获取歌曲图片",t)}))},barDown:function(){this.down=!0,this.play=!1},prograssInit:function(){var t=this;this.prograssDistance=document.querySelector(".prograss-container").offsetWidth-document.querySelector(".bar").offsetWidth,document.onmousemove=function(e){if(t.down){var n=e.pageX,i=document.querySelector(".bar"),s=document.querySelector(".prograss-container"),a=document.querySelector(".current-time"),o=document.querySelector(".prograss").offsetLeft,r=s.offsetLeft,c=s.offsetWidth,u=i.offsetWidth,l=n-r-o-u/2;l=l<0?0:l,l=l>c-u?c-u:l,i.style.left=l+"px",a.style.width=l+"px",t.currentDistance=l}},document.onmouseup=function(){t.down&&(t.down=!1,t.currentTime())}},currentTime:function(){var t=document.querySelector("audio"),e=this.currentDistance*(this.songTime/this.prograssDistance)/1e3;t.currentTime=e,this.play=!0},audioTimeUpdate:function(){var t=document.querySelector("audio"),e=document.querySelector(".lrc-container"),n=t.currentTime;this.timeStamp=1e3*n;for(var i=(""+n).split(".")[0],s=0;s<this.parseLyric.length;s++)if((""+this.parseLyric[s].time).split(".")[0]==i){this.active=s;var a=document.querySelectorAll(".lrc")[s];e.style.top=100-a.offsetTop+"px";break}},audioEnded:function(){this.play=!1,this.timeStamp=this.songTime,this.reset(),this.item_index++},audioCanplay:function(){this.first||(this.play=!0)},audioInit:function(){var t=document.querySelector("audio");t.removeEventListener("timeupdate",this.audioTimeUpdate),t.removeEventListener("ended",this.audioEnded),t.removeEventListener("canplaythrough",this.audioCanplay),t.addEventListener("timeupdate",this.audioTimeUpdate),t.addEventListener("ended",this.audioEnded),t.addEventListener("canplaythrough",this.audioCanplay)},isplay:function(){this.play=!this.play},goSingerDetail:function(t,e){this.$router.push({path:"/singerDetail/".concat((new Date).getTime()),query:{id:t,name:e}})},reset:function(){var t=document.querySelector(".lrc-container");t.style.top="0px",this.timeStamp=0,this.play=!1},scoll:function(){var t=document.querySelectorAll(".song-container > .item")[this.item_index+1];t.offsetTop>500&&(document.querySelector(".song-list").scrollTop=t.offsetTop-100)}},beforeDestroy:function(){this.play=!1}},u=c,l=(n("c53c"),n("2877")),d=Object(l["a"])(u,i,s,!1,null,"1b868f14",null);e["default"]=d.exports},"7cdb":function(t,e,n){},b0c0:function(t,e,n){var i=n("83ab"),s=n("5e77").EXISTS,a=n("e330"),o=n("9bf2").f,r=Function.prototype,c=a(r.toString),u=/^\s*function ([^ (]*)/,l=a(u.exec),d="name";i&&!s&&o(r,d,{configurable:!0,get:function(){try{return l(u,c(this))[1]}catch(t){return""}}})},c53c:function(t,e,n){"use strict";n("7cdb")},ca85:function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"k",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"j",(function(){return c})),n.d(e,"f",(function(){return u})),n.d(e,"h",(function(){return l})),n.d(e,"g",(function(){return d})),n.d(e,"a",(function(){return g})),n.d(e,"i",(function(){return m})),n.d(e,"e",(function(){return h})),n.d(e,"b",(function(){return f}));var i=n("e760"),s=n("4c8d");function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(i["a"])(s["g"],e,t)}function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(i["a"])(s["C"],e,t)}function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(i["a"])(s["b"],e,t)}function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(i["a"])(s["c"],e,t)}function u(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(i["a"])(s["p"],e,t)}function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(i["a"])(s["z"],e,t)}function d(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(i["a"])(s["r"],e,t)}function g(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(i["a"])(s["e"],e,t)}function m(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(i["a"])(s["A"],e,t)}function h(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(i["a"])(s["j"],e,t)}function f(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(i["a"])(s["a"],e,t)}}}]);
//# sourceMappingURL=chunk-8524b9e4.efb9f4ca.js.map