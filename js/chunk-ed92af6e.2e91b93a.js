(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ed92af6e"],{"05d7":function(t,n,e){"use strict";e("9473")},1054:function(t,n){var e=1..valueOf;t.exports=function(t){return e.call(t)}},"154b":function(t,n,e){"use strict";e("88ca")},"32bb":function(t,n,e){"use strict";e.d(n,"b",(function(){return s})),e.d(n,"a",(function(){return r}));var a=e("e760"),i=e("4c8d");function s(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(a["a"])(i["n"],n,t)}function r(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(a["a"])(i["h"],n,t)}},3828:function(t,n,e){"use strict";var a=e("73ad"),i=e("a402"),s=e("b203"),r=e("b13f"),c=e("fd33"),o=e("a20b"),l=e("4c60"),u=e("a851"),m=e("204f"),d=e("2532").f,v=e("b32c").f,f=e("0fe9").f,g=e("1054"),h=e("4bcb").trim,b="Number",p=i[b],_=p.prototype,y=function(t){var n=u(t,"number");return"bigint"===typeof n?n:C(n)},C=function(t){var n,e,a,i,s,r,c,o,m=u(t,"number");if(l(m))throw TypeError("Cannot convert a Symbol value to a number");if("string"==typeof m&&m.length>2)if(m=h(m),n=m.charCodeAt(0),43===n||45===n){if(e=m.charCodeAt(2),88===e||120===e)return NaN}else if(48===n){switch(m.charCodeAt(1)){case 66:case 98:a=2,i=49;break;case 79:case 111:a=8,i=55;break;default:return+m}for(s=m.slice(2),r=s.length,c=0;c<r;c++)if(o=s.charCodeAt(c),o<48||o>i)return NaN;return parseInt(s,a)}return+m};if(s(b,!p(" 0o1")||!p("0b1")||p("+0x1"))){for(var N,I=function(t){var n=arguments.length<1?0:p(y(t)),e=this;return e instanceof I&&m((function(){g(e)}))?o(Object(n),e,I):n},L=a?d(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),k=0;L.length>k;k++)c(p,N=L[k])&&!c(I,N)&&f(I,N,v(p,N));I.prototype=_,_.constructor=I,r(i,b,I)}},"49bb":function(t,n,e){"use strict";e("d158")},"4bcb":function(t,n,e){var a=e("c499"),i=e("69a8"),s=e("f8bc"),r="["+s+"]",c=RegExp("^"+r+r+"*"),o=RegExp(r+r+"*$"),l=function(t){return function(n){var e=i(a(n));return 1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(o,"")),e}};t.exports={start:l(1),end:l(2),trim:l(3)}},5534:function(t,n,e){"use strict";e("a44d")},"652a":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"comment"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.avatarUrl,expression:"avatarUrl"}],attrs:{alt:""}}),e("div",{staticClass:"content"},[e("div",{staticClass:"left"},[e("div",{staticClass:"nickName"},[t._v(t._s(t.nickname))]),e("div",{staticClass:"text"},[t._v(" "+t._s(t.content))])]),e("div",{staticClass:"time"},[t._v(" "+t._s(t.time))])])])},i=[],s={name:"comment",props:{avatarUrl:String,nickname:String,content:String,time:String},methods:{}},r=s,c=(e("5534"),e("cba8")),o=Object(c["a"])(r,a,i,!1,null,null,null);n["a"]=o.exports},"88ca":function(t,n,e){},"8bdb":function(t,n,e){"use strict";e("9f96")},"8e8b":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"playlist"}},[e("div",{staticClass:"music-container"},[e("div",{staticClass:"playlist-container"},[e("div",{staticClass:"playlist-header"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.playListDetail.coverImgUrl,expression:"playListDetail.coverImgUrl"}],attrs:{alt:""}}),e("div",{staticClass:"info"},[e("div",{staticClass:"name"},[t._v(t._s(t.playListDetail.name))]),t.btnFlag?e("div",{staticClass:"btn-group"},[e("div",{staticClass:"btn"},[e("div",{staticClass:"btn_mask"},[t._v("播放量")]),t._v(" "+t._s(t.playListDetail.playCount)+" ")]),e("div",{staticClass:"btn"},[e("div",{staticClass:"btn_mask"},[t._v("发表时间")]),t._v(" "+t._s(t.playListDetail.createTime)+" ")]),e("div",{staticClass:"btn"},[e("div",{staticClass:"btn_mask"},[t._v("收藏者数量")]),t._v(" "+t._s(t.playListDetail.subscribedCount)+" ")])]):t._e(),e("div",{staticClass:"description"},[t._v(t._s(t.playListDetail.description))])])]),e("div",{staticClass:"playlist-nav"},[e("div",{class:["playlist-name","nav-item",1==t.type?"active":""],on:{click:function(n){t.type=1}}},[t._v("歌单（"+t._s(t.playListDetail.trackCount)+"）")]),e("div",{class:["commit","nav-item",2==t.type?"active":""],on:{click:function(n){t.type=2}}},[t._v("评论（"+t._s(t.playListDetail.commentCount)+"）")]),e("div",{class:["sub","nav-item",3==t.type?"active":""],on:{click:function(n){t.type=3}}},[t._v("收藏者（"+t._s(t.playListDetail.subscribedCount)+"）")])]),e("div",{class:["content-container",1==t.type?"isscroll":""]},[1==t.type?e("song-list",{attrs:{trackIds:t.trackIds,trackCount:t.playListDetail.trackCount,scroll:t.scroll}}):t._e(),2==t.type?e("song-comment-list",{attrs:{id:t.id,total:t.playListDetail.commentCount}}):t._e(),3==t.type?e("sub-list",{attrs:{id:t.id}}):t._e()],1)])])])},i=[],s=e("ca85"),r=e("7a1c"),c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"songList"}},[t._m(0),t._l(t.songs,(function(t,n){return e("song-item",{key:n,attrs:{index:n,songId:t.id,alId:t.al.id,arId:t.ar[0].id,songName:t.name,alName:t.al.name,arName:t.ar[0].name,dt:t.format_dt}})}))],2)},o=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"song-header"},[e("div",{staticClass:"id nav"},[t._v("序号")]),e("div",{staticClass:"name nav"},[t._v("歌名")]),e("div",{staticClass:"songer nav"},[t._v("歌手")]),e("div",{staticClass:"time nav"},[t._v("时长")]),e("div",{staticClass:"album nav"},[t._v("专辑")])])}],l=(e("3828"),e("aa0c"),e("bbb8"),e("4789"),e("b8eb")),u={name:"songList",components:{songItem:l["a"]},props:{trackIds:Array,trackCount:Number,scroll:Number},data:function(){return{songs:[],songNum:40,song_page:0,currentShowNum:0}},watch:{trackIds:function(){var t=this.disposeId();this.getsongdetail(t)},songs:function(){this.songs.forEach((function(t,n,e){var a=r["a"]._msTos(t.dt);e[n].format_dt=a}))},scroll:function(){this.currentShowNum<this.trackCount&&this.loadmove()}},methods:{disposeId:function(){var t=this.song_page*this.songNum,n=t+this.songNum;n=n>=this.trackCount?this.trackCount:n,n-t<this.songNum?this.isLoadMove=!1:this.isLoadMove=!0;var e=this.trackIds.slice(t,n),a=r["a"]._arrToString(e);return a},getsongdetail:function(t){var n=this,e={ids:t};Object(s["g"])(this,e).then((function(t){n.songs=n.songs.concat(t.songs),n.song_page++,n.currentShowNum=n.songs.length}))},loadmove:function(){var t=this.disposeId();this.getsongdetail(t)}}},m=u,d=(e("05d7"),e("cba8")),v=Object(d["a"])(m,c,o,!1,null,null,null),f=v.exports,g=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"commentList"}},[e("comment-input",{attrs:{count:t.total}}),t._l(t.commentList,(function(t,n){return e("comment",{key:n,staticClass:"item",attrs:{avatarUrl:t.user.avatarUrl,nickname:t.user.nickname,content:t.content,time:t.time}})})),t.pagflag?e("div",{staticClass:"pagination"},[e("el-pagination",{attrs:{background:!0,layout:"total, sizes, prev, pager, next ,jumper","page-size":t.commentNum,"page-sizes":[5,10,20],total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1):t._e()],2)},h=[],b=e("32bb"),p=e("abb2"),_=e("652a"),y={name:"commentList",components:{commentInput:p["a"],comment:_["a"]},props:{id:String,total:Number},data:function(){return{pagflag:!1,commentList:[],commentNum:10,commentPage:0}},watch:{commentList:function(){this.commentList.forEach((function(t,n,e){var a=r["a"]._tranDate(t.time);e[n].time=a})),this.pagflag=!0}},created:function(){this.getcomment()},methods:{getcomment:function(){var t,n=this;t=0==this.commentPage?this.commentNum*this.commentPage:this.commentNum*(this.commentPage-1);var e={id:this.id,limit:this.commentNum,offset:t};Object(b["b"])(this,e).then((function(t){n.commentList=t.comments,n.commentPage++}))},handleSizeChange:function(t){this.commentNum=t,this.getcomment()},handleCurrentChange:function(t){console.log(t),this.commentPage=t,this.getcomment()}}},C=y,N=(e("154b"),Object(d["a"])(C,g,h,!1,null,null,null)),I=N.exports,L=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"subList"}},t._l(t.subList,(function(n,a){return e("div",{key:a,staticClass:"item"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n.avatarUrl,expression:"item.avatarUrl"}],attrs:{alt:""}}),e("div",{staticClass:"nickName"},[t._v(t._s(n.nickname))])])})),0)},k=[],O={name:"subList",props:{id:String},data:function(){return{subList:[],subNum:27}},created:function(){this.getSubscribers()},methods:{getSubscribers:function(){var t=this,n={id:this.id,limit:this.subNum};Object(s["f"])(this,n).then((function(n){t.subList=n.subscribers}))}}},j=O,S=(e("ea70"),Object(d["a"])(j,L,k,!1,null,null,null)),D=S.exports,E={name:"playlist",components:{songList:f,songCommentList:I,subList:D},data:function(){return{scrollObj:[],id:this.$route.query.id,type:1,trackIds:[],playListDetail:{},scroll:1,btnFlag:!1}},created:function(){this.getsong()},watch:{playListDetail:function(){this.playListDetail.playCount=r["a"]._tranNumber(this.playListDetail.playCount),this.playListDetail.createTime=r["a"]._tranDate(this.playListDetail.createTime),this.btnFlag=!0}},mounted:function(){this.init()},methods:{init:function(){var t=this;document.documentElement.scrollTop=0,1==this.type&&(this.scrollObj=document.querySelector(".content-container"),this.scrollObj.onscroll=function(){var n=t.scrollObj.scrollHeight||t.scrollObj.scrollHeight,e=t.scrollObj.clientHeight,a=t.scrollObj.scrollTop;if(e+Math.ceil(a)==n){var i=Math.random();i=i==t.scroll?i+1:i,t.scroll=i}})},getsong:function(){var t=this,n={id:this.id};Object(s["e"])(this,n).then((function(n){t.playListDetail=n.playlist,t.trackIds=n.playlist.trackIds})).catch((function(t){console.log("获取歌单详情出现错误",t)}))}},beforeDestroy:function(){this.scrollObj.onscroll=null}},x=E,w=(e("49bb"),Object(d["a"])(x,a,i,!1,null,null,null));n["default"]=w.exports},9473:function(t,n,e){},"9f96":function(t,n,e){},a20b:function(t,n,e){var a=e("f6cc"),i=e("ef68"),s=e("54fa");t.exports=function(t,n,e){var r,c;return s&&a(r=n.constructor)&&r!==e&&i(c=r.prototype)&&c!==e.prototype&&s(t,c),t}},a44d:function(t,n,e){},abb2:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"comment-input"},[e("div",{staticClass:"comment-header"},[e("span",[t._v("评论")]),e("span",[t._v("共有"+t._s(t.count)+"条评论")])]),t._m(0)])},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content"},[e("textarea",{attrs:{name:"",id:"",rows:"4",placeholder:"说说您的想法吧"}}),e("button",{staticClass:"btn"},[t._v("发表评论")])])}],s=(e("3828"),{name:"commentInput",props:{count:Number}}),r=s,c=(e("8bdb"),e("cba8")),o=Object(c["a"])(r,a,i,!1,null,null,null);n["a"]=o.exports},b8eb:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"song"}},[e("div",{staticClass:"id item-d"},[t._v(t._s(t.index+1))]),e("div",{staticClass:"name item-d hover",on:{click:function(n){return t.goSong(t.songId,t.songName)}}},[t._v(t._s(t.songName))]),e("div",{staticClass:"songer item-d hover",on:{click:function(n){return t.goSingerDetail(t.arId,t.arName)}}},[t._v(t._s(t.arName))]),e("div",{staticClass:"time item-d"},[t._v(t._s(t.dt))]),e("div",{staticClass:"album item-d hover",on:{click:function(n){return t.album(t.alId)}}},[t._v(t._s(t.alName))])])},i=[],s=(e("3828"),{name:"song",props:{index:Number,songId:Number,alId:Number,arId:Number,songName:String,alName:String,arName:String,dt:String},methods:{goSong:function(t,n){var e=(new Date).getTime();this.$router.push({path:"/song/".concat(e),query:{id:t,songName:n}})},goSingerDetail:function(t,n){var e=(new Date).getTime();this.$router.push({path:"/singerDetail/".concat(e),query:{id:t,name:n}})},album:function(t){this.$message({showClose:!0,message:"链接：https://music.163.com/#/album?id="+t,type:"success"})}}}),r=s,c=(e("debe"),e("cba8")),o=Object(c["a"])(r,a,i,!1,null,null,null);n["a"]=o.exports},ca85:function(t,n,e){"use strict";e.d(n,"c",(function(){return s})),e.d(n,"j",(function(){return r})),e.d(n,"b",(function(){return c})),e.d(n,"i",(function(){return o})),e.d(n,"e",(function(){return l})),e.d(n,"g",(function(){return u})),e.d(n,"f",(function(){return m})),e.d(n,"a",(function(){return d})),e.d(n,"h",(function(){return v})),e.d(n,"d",(function(){return f}));var a=e("e760"),i=e("4c8d");function s(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(a["a"])(i["f"],n,t)}function r(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(a["a"])(i["y"],n,t)}function c(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(a["a"])(i["a"],n,t)}function o(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(a["a"])(i["b"],n,t)}function l(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(a["a"])(i["m"],n,t)}function u(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(a["a"])(i["v"],n,t)}function m(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(a["a"])(i["o"],n,t)}function d(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(a["a"])(i["d"],n,t)}function v(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(a["a"])(i["w"],n,t)}function f(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(a["a"])(i["g"],n,t)}},d158:function(t,n,e){},debe:function(t,n,e){"use strict";e("f215")},ea70:function(t,n,e){"use strict";e("fc23")},f215:function(t,n,e){},f8bc:function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},fc23:function(t,n,e){}}]);
//# sourceMappingURL=chunk-ed92af6e.2e91b93a.js.map