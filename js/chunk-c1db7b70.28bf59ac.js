(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c1db7b70"],{"05d7":function(t,s,e){"use strict";e("86cc")},"0ccf":function(t,s,e){},"154b":function(t,s,e){"use strict";e("6bd5")},"2fe3":function(t,s,e){"use strict";e.d(s,"a",(function(){return i}));var n=e("e760"),a=e("4c8d");function i(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(n["a"])(a["t"],s,t)}},"32bb":function(t,s,e){"use strict";e.d(s,"b",(function(){return i})),e.d(s,"a",(function(){return o}));var n=e("e760"),a=e("4c8d");function i(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(n["a"])(a["q"],s,t)}function o(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(n["a"])(a["k"],s,t)}},"34d7":function(t,s,e){},"49bb":function(t,s,e){"use strict";e("bf14")},5534:function(t,s,e){"use strict";e("0ccf")},"62da":function(t,s,e){},"652a":function(t,s,e){"use strict";var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"comment"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.avatarUrl,expression:"avatarUrl"}],attrs:{alt:""}}),e("div",{staticClass:"content"},[e("div",{staticClass:"left"},[e("div",{staticClass:"nickName"},[t._v(t._s(t.nickname))]),e("div",{staticClass:"text"},[t._v(" "+t._s(t.content))])]),e("div",{staticClass:"time"},[t._v(" "+t._s(t.time))])])])},a=[],i={name:"comment",props:{avatarUrl:String,nickname:String,content:String,time:String}},o=i,r=(e("5534"),e("2877")),c=Object(r["a"])(o,n,a,!1,null,null,null);s["a"]=c.exports},"6bd5":function(t,s,e){},"86cc":function(t,s,e){},"8bdb":function(t,s,e){"use strict";e("a379")},"8e8b":function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"playlist"}},[e("div",{staticClass:"music-container"},[e("div",{staticClass:"playlist-container"},[e("div",{staticClass:"playlist-header"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.playListDetail.coverImgUrl,expression:"playListDetail.coverImgUrl"}],attrs:{alt:""}}),e("div",{staticClass:"info"},[e("div",{staticClass:"name"},[t._v(t._s(t.playListDetail.name))]),t.btnFlag?e("div",{staticClass:"btn-group"},[e("div",{staticClass:"btn"},[e("div",{staticClass:"btn_mask"},[t._v("播放量")]),t._v(" "+t._s(t.playListDetail.playCount)+" ")]),e("div",{staticClass:"btn"},[e("div",{staticClass:"btn_mask"},[t._v("发表时间")]),t._v(" "+t._s(t.playListDetail.createTime)+" ")]),e("div",{staticClass:"btn"},[e("div",{staticClass:"btn_mask"},[t._v("收藏者数量")]),t._v(" "+t._s(t.playListDetail.subscribedCount)+" ")]),e("div",{staticClass:"btn play",on:{click:t.playAll}},[t._v("播放全部")])]):t._e(),e("div",{staticClass:"description"},[t._v(t._s(t.playListDetail.description))])])]),e("div",{staticClass:"playlist-nav"},[e("div",{class:["playlist-name","nav-item",1==t.type?"active":""],on:{click:function(s){t.type=1}}},[t._v("歌单（"+t._s(t.playListDetail.trackCount)+"）")]),e("div",{class:["commit","nav-item",2==t.type?"active":""],on:{click:function(s){t.type=2}}},[t._v("评论（"+t._s(t.playListDetail.commentCount)+"）")]),e("div",{class:["sub","nav-item",3==t.type?"active":""],on:{click:function(s){t.type=3}}},[t._v("收藏者（"+t._s(t.playListDetail.subscribedCount)+"）")])]),e("div",{class:["content-container",1==t.type?"isscroll":""]},[e("song-list",{directives:[{name:"show",rawName:"v-show",value:1==t.type,expression:"type==1"}],attrs:{trackIds:t.trackIds,trackCount:t.playListDetail.trackCount,scroll:t.scroll},on:{play:t.play}}),e("song-comment-list",{directives:[{name:"show",rawName:"v-show",value:2==t.type,expression:"type==2"}],attrs:{id:t.id,total:t.playListDetail.commentCount}}),e("sub-list",{directives:[{name:"show",rawName:"v-show",value:3==t.type,expression:"type==3"}],attrs:{id:t.id}})],1)])]),e("transition",{attrs:{name:"prograss"}},[e("music-prograss",{directives:[{name:"show",rawName:"v-show",value:t.musicPrograss,expression:"musicPrograss"}],staticClass:"music-prograss"})],1)],1)},a=[],i=(e("e9c4"),e("ca85")),o=e("7a1c"),r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"songList"}},[t._m(0),e("div",{staticClass:"song-container"},t._l(t.songs,(function(s,n){return e("song-item",{key:n,attrs:{index:n,songId:s.id,alId:s.al.id,arId:s.ar[0].id,songName:s.name,alName:s.al.name,arName:s.ar[0].name,formatdt:s.format_dt,dt:s.dt},on:{play:t.play}})})),1)])},c=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"song-header"},[e("div",{staticClass:"id nav"},[t._v("序号")]),e("div",{staticClass:"name nav"},[t._v("歌名")]),e("div",{staticClass:"songer nav"},[t._v("歌手")]),e("div",{staticClass:"time nav"},[t._v("时长")]),e("div",{staticClass:"album nav"},[t._v("专辑")])])}],l=(e("a9e3"),e("d3b7"),e("159b"),e("fb6a"),e("99af"),e("b8eb")),u={name:"songList",components:{songItem:l["a"]},props:{trackIds:Array,trackCount:Number,scroll:Number},data:function(){return{songs:[],songNum:40,song_page:0,currentShowNum:0}},watch:{trackIds:function(){var t=this.disposeId();this.getsongdetail(t)},songs:function(){this.songs.forEach((function(t,s,e){var n=o["a"]._msTos(t.dt);e[s].format_dt=n}))},scroll:function(){this.currentShowNum<this.trackCount&&this.loadmove()}},methods:{disposeId:function(){var t=this.song_page*this.songNum,s=t+this.songNum;s=s>=this.trackCount?this.trackCount:s;var e=this.trackIds.slice(t,s),n=o["a"]._arrToString(e);return n},getsongdetail:function(t){var s=this;Object(i["h"])(this,{ids:t}).then((function(t){s.songs=s.songs.concat(t.songs),s.song_page++,s.currentShowNum=s.songs.length})).catch((function(t){console.log("获取歌曲的信息（部分）可能出现错误",t)}))},loadmove:function(){var t=this.disposeId();this.getsongdetail(t)},play:function(t,s,e){this.$emit("play",t,s,e)}}},m=u,d=(e("05d7"),e("2877")),g=Object(d["a"])(m,r,c,!1,null,null,null),v=g.exports,h=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"commentList"}},[e("comment-input",{attrs:{count:t.total}}),t._l(t.commentList,(function(t,s){return e("comment",{key:s,staticClass:"item",attrs:{avatarUrl:t.user.avatarUrl,nickname:t.user.nickname,content:t.content,time:t.time}})})),t.pagflag?e("div",{staticClass:"pagination"},[e("el-pagination",{attrs:{background:!0,layout:"total, sizes, prev, pager, next ,jumper","page-size":t.commentNum,"page-sizes":[5,10,20],total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1):t._e()],2)},p=[],f=e("32bb"),b=e("abb2"),y=e("652a"),_={name:"commentList",components:{commentInput:b["a"],comment:y["a"]},props:{id:String,total:Number},data:function(){return{pagflag:!1,commentList:[],commentNum:10,commentPage:0}},watch:{commentList:function(){this.commentList.forEach((function(t,s,e){var n=o["a"]._tranDate(t.time);e[s].time=n})),this.pagflag=!0}},created:function(){this.getcomment()},methods:{getcomment:function(){var t,s=this;t=0==this.commentPage?this.commentNum*this.commentPage:this.commentNum*(this.commentPage-1),Object(f["b"])(this,{id:this.id,limit:this.commentNum,offset:t}).then((function(t){s.commentList=t.comments,s.commentPage++})).catch((function(t){console.log("获取歌单评论可能出现错误",t)}))},handleSizeChange:function(t){this.commentNum=t,this.getcomment()},handleCurrentChange:function(t){this.commentPage=t,this.getcomment()}}},C=_,S=(e("154b"),Object(d["a"])(C,h,p,!1,null,null,null)),w=S.exports,N=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"subList"}},t._l(t.subList,(function(s,n){return e("div",{key:n,staticClass:"item"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.avatarUrl,expression:"item.avatarUrl"}],attrs:{alt:""}}),e("div",{staticClass:"nickName"},[t._v(t._s(s.nickname))])])})),0)},I=[],L={name:"subList",props:{id:String},data:function(){return{subList:[],subNum:24}},created:function(){this.getSubscribers()},methods:{getSubscribers:function(){var t=this;Object(i["g"])(this,{id:this.id,limit:this.subNum}).then((function(s){t.subList=s.subscribers})).catch((function(t){console.log("获取歌单收藏者可能出现错误",t)}))}}},k=L,j=(e("ea70"),Object(d["a"])(k,N,I,!1,null,null,null)),O=j.exports,D=e("d84b"),$={name:"playlist",components:{songList:v,songCommentList:w,subList:O,musicPrograss:D["a"]},data:function(){return{scrollObj:[],id:this.$route.query.id,type:1,trackIds:[],playListDetail:{},scroll:1,btnFlag:!1,musicPrograss:this.$store.state.musicPrograss}},created:function(){this.getsong()},watch:{playListDetail:function(){this.playListDetail.playCount=o["a"]._tranNumber(this.playListDetail.playCount),this.playListDetail.createTime=o["a"]._tranDate(this.playListDetail.createTime),this.btnFlag=!0},type:function(){1!=this.type?this.$store.dispatch("saveMusicPrograss",!1):(window.localStorage.getItem("currentPlay")&&this.$store.dispatch("saveMusicPrograss",!0),this.$store.dispatch("saveMusicLoading",!1))},"$store.state.musicPrograss":function(){this.musicPrograss=this.$store.state.musicPrograss}},mounted:function(){this.init()},methods:{init:function(){var t=this;document.documentElement.scrollTop=0,1==this.type&&(this.scrollObj=document.querySelector(".content-container"),this.scrollObj.onscroll=function(){var s=t.scrollObj.scrollHeight||t.scrollObj.scrollHeight,e=t.scrollObj.clientHeight,n=t.scrollObj.scrollTop;if(e+Math.ceil(n)==s){var a=Math.random();a=a==t.scroll?a+1:a,t.scroll=a}})},getsong:function(){var t=this;Object(i["f"])(this,{id:this.id}).then((function(s){t.playListDetail=s.playlist,t.trackIds=s.playlist.trackIds})).catch((function(t){console.log("获取歌单详情出现错误",t)}))},playAll:function(){this.$router.push({path:"/song/".concat((new Date).getTime())}),window.localStorage.setItem("playList",JSON.stringify(this.trackIds)),window.localStorage.setItem("playListCover",this.playListDetail.coverImgUrl),window.localStorage.setItem("trackCount",this.playListDetail.trackCount)},play:function(t,s,e){var n=this;Object(i["b"])(this,{id:t}).then((function(a){var i=a.success;if(i){var o={playSongId:t,playSongname:s,songTime:e};window.localStorage.setItem("currentPlay",JSON.stringify(o)),n.$store.dispatch("saveMusicLoading",Math.random()),n.$store.dispatch("saveMusicPrograss",!0)}})).catch((function(){n.$message({showClose:!0,message:"亲爱的,暂无版权",type:"error"}),n.$store.dispatch("saveLoadingFlag",!1)}))}},beforeDestroy:function(){this.scrollObj.onscroll=null}},x=$,P=(e("49bb"),Object(d["a"])(x,n,a,!1,null,null,null));s["default"]=P.exports},a379:function(t,s,e){},abb2:function(t,s,e){"use strict";var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"comment-input"},[e("div",{staticClass:"comment-header"},[e("span",[t._v("评论")]),e("span",[t._v("共有"+t._s(t.count)+"条评论")])]),t._m(0)])},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("textarea",{attrs:{name:"",id:"",rows:"4",placeholder:"说说您的想法吧"}}),e("button",{staticClass:"btn"},[t._v("发表评论")])])}],i=(e("a9e3"),{name:"commentInput",props:{count:Number}}),o=i,r=(e("8bdb"),e("2877")),c=Object(r["a"])(o,n,a,!1,null,null,null);s["a"]=c.exports},b8eb:function(t,s,e){"use strict";var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"song"}},[e("div",{staticClass:"id item-d"},[t._v(t._s(t.index+1))]),e("div",{staticClass:"name item-d hover",on:{click:function(s){return t.goSong(t.songId,t.songName,t.dt)}}},[t._v(t._s(t.songName))]),e("div",{staticClass:"songer item-d hover",on:{click:function(s){return t.goSingerDetail(t.arId,t.arName)}}},[t._v(t._s(t.arName))]),e("div",{staticClass:"time item-d"},[t._v(t._s(t.formatdt))]),e("div",{staticClass:"album item-d hover",on:{click:function(s){return t.album(t.alId)}}},[t._v(t._s(t.alName))])])},a=[],i=(e("a9e3"),{name:"song",props:{index:Number,songId:Number,alId:Number,arId:Number,songName:String,alName:String,arName:String,formatdt:String,dt:Number},methods:{goSong:function(t,s,e){this.$emit("play",t,s,e)},goSingerDetail:function(t,s){this.$router.push({path:"/singerDetail/".concat((new Date).getTime()),query:{id:t,name:s}})},album:function(t){this.$message({showClose:!0,message:"链接：https://music.163.com/#/album?id="+t,type:"success"})}}}),o=i,r=(e("debe"),e("2877")),c=Object(r["a"])(o,n,a,!1,null,null,null);s["a"]=c.exports},bf14:function(t,s,e){},ca85:function(t,s,e){"use strict";e.d(s,"d",(function(){return i})),e.d(s,"k",(function(){return o})),e.d(s,"c",(function(){return r})),e.d(s,"j",(function(){return c})),e.d(s,"f",(function(){return l})),e.d(s,"h",(function(){return u})),e.d(s,"g",(function(){return m})),e.d(s,"a",(function(){return d})),e.d(s,"i",(function(){return g})),e.d(s,"e",(function(){return v})),e.d(s,"b",(function(){return h}));var n=e("e760"),a=e("4c8d");function i(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(n["a"])(a["g"],s,t)}function o(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(n["a"])(a["C"],s,t)}function r(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(n["a"])(a["b"],s,t)}function c(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(n["a"])(a["c"],s,t)}function l(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(n["a"])(a["p"],s,t)}function u(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(n["a"])(a["z"],s,t)}function m(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(n["a"])(a["r"],s,t)}function d(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(n["a"])(a["e"],s,t)}function g(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(n["a"])(a["A"],s,t)}function v(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(n["a"])(a["j"],s,t)}function h(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(n["a"])(a["a"],s,t)}},d236:function(t,s,e){},d84b:function(t,s,e){"use strict";var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"music-prograss"}},[e("div",{staticClass:"left"},[e("div",{class:["item","iconfont",t.play?"icon-zanting":"icon-bofang"],on:{click:t.isplay}})]),e("div",{staticClass:"song"},[e("div",{staticClass:"name"},[t._v(t._s(t.playSongname))]),e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.songUrl,expression:"songUrl"}],attrs:{alt:""}})]),e("div",{staticClass:"right"},[e("div",{staticClass:"prograss-container"},[e("div",{staticClass:"current-time"}),e("div",{staticClass:"bar",on:{mousedown:t.barDown}})]),e("div",{staticClass:"time"},[t._v(t._s(Math.floor(t.songTime/6e4)+":"+Math.ceil(t.songTime%6e4/1e3)))])]),e("audio",{attrs:{src:t.audioUrl}})])},a=[],i=e("ca85"),o=e("2fe3"),r={name:"prograss",data:function(){return{down:!1,play:!1,audioUrl:"",prograssDistance:0,currentDistance:0,timeStamp:0,audio:this.$store.state.audio,songUrl:"",x:0,playSongId:0,playSongname:"",songTime:0}},watch:{"$store.state.play":function(){var t=document.querySelector("audio");this.$store.state.play?(t.play(),this.play=!0):(t.pause(),this.play=!1)},timeStamp:function(){var t=this.timeStamp*(this.prograssDistance/this.songTime);document.querySelector(".bar").style.left=t+"px",document.querySelector(".current-time").style.width=t+"px",this.x=t},"$store.state.musicLoading":function(){this.prograssInit(),this.getStorage(),this.getsongUrl(),this.getSongImg()}},mounted:function(){window.localStorage.getItem("currentPlay")&&(this.getStorage(),this.prograssInit(),this.getsongUrl(),this.getSongImg(),this.$store.dispatch("saveMusicPrograss",!0))},methods:{getStorage:function(){var t=JSON.parse(window.localStorage.getItem("currentPlay"));this.playSongId=t.playSongId,this.playSongname=t.playSongname,this.songTime=t.songTime},currentTime:function(){var t=document.querySelector("audio"),s=this.currentDistance*(this.songTime/this.prograssDistance)/1e3;t.currentTime=s,this.$store.dispatch("savePlay",!0)},prograssInit:function(){var t=this;this.prograssDistance=document.querySelector(".prograss-container").offsetWidth-document.querySelector(".bar").offsetWidth,document.onmousemove=function(s){if(t.down){var e=s.pageX,n=document.querySelector(".bar"),a=document.querySelector(".prograss-container"),i=document.querySelector(".current-time"),o=document.querySelector("#music-prograss").offsetLeft,r=a.offsetLeft,c=a.offsetWidth,l=n.offsetWidth,u=e-r-o-l/2;u=u<0?0:u,u=u>c-l?c-l:u,n.style.left=u+"px",i.style.width=u+"px",t.currentDistance=u}},document.onmouseup=function(){t.down&&(t.down=!1,t.currentTime())}},audioInit:function(){var t=this,s=document.querySelector("audio");s.addEventListener("timeupdate",(function(){var e=1e3*s.currentTime;t.timeStamp=e})),s.addEventListener("ended",(function(){t.$store.dispatch("saveMusicPrograss",!1),console.log("音频播放结束"),t.timeStamp=t.songTime,t.songId="",t.songName="",t.songTime=""}))},barDown:function(){this.down=!0,this.$store.dispatch("savePlay",!1)},getsongUrl:function(){var t=this;this.$store.dispatch("savePlay",!1),this.timeStamp=0,Object(i["i"])(this,{id:this.playSongId}).then((function(s){t.audioUrl=s.data[0].url,t.audioInit()})).catch((function(t){console.log("获取音频可能出现错误",t)}))},getSongImg:function(){var t=this;Object(o["a"])(this,{keywords:this.playSongname}).then((function(s){t.songUrl=s.result.songs[0].al.picUrl})).catch((function(t){console.log("获取歌曲图片可能出现错误",t)}))},isplay:function(){var t=this.$store.state.play;this.$store.dispatch("savePlay",!t)}},beforeDestroy:function(){this.$store.dispatch("savePlay",!1)}},c=r,l=(e("d9a1"),e("2877")),u=Object(l["a"])(c,n,a,!1,null,null,null);s["a"]=u.exports},d9a1:function(t,s,e){"use strict";e("d236")},debe:function(t,s,e){"use strict";e("34d7")},ea70:function(t,s,e){"use strict";e("62da")}}]);