(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a8d0c3c"],{"0ccf":function(t,n,e){},"32bb":function(t,n,e){"use strict";e.d(n,"b",(function(){return s})),e.d(n,"a",(function(){return c}));var i=e("e760"),a=e("4c8d");function s(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(i["a"])(a["q"],n,t)}function c(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(i["a"])(a["k"],n,t)}},"335e":function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"MvDetail"}},[e("div",{staticClass:"bgmask"}),e("div",{staticClass:"bg",style:{"background-image":"url("+t.cover+")","background-color":"rgb(255,255,255)"}}),e("div",{staticClass:"video-container"},[e("div",{staticClass:"music-container"},[e("video",{attrs:{src:t.mvUrl.url,controls:"",autoplay:"autoplay"}}),e("div",{staticClass:"video-info"},[e("div",{staticClass:"name"},[t._v(t._s(t.mvDetail.name)+" - "+t._s(t.mvDetail.artistName))]),e("div",{staticClass:"count"},[t._v("播放量："+t._s(t.mvDetail.playCount))])])])]),e("div",{staticClass:"music-container"},[e("div",{staticClass:"similarMv"},[e("h3",[t._v("大家都爱看")]),e("div",{staticClass:"mv-content"},t._l(t.similarMvList,(function(t,n){return e("mv-item",{key:n,staticClass:"item",attrs:{mvId:t.id,cover:t.cover,name:t.name,artistName:t.artistName,artists:t.artists,playCount:t.playCount}})})),1)]),e("div",{staticClass:"mv-info"},[e("div",{staticClass:"info-header"},[e("h3",[t._v("视频简介")]),e("div",{staticClass:"singer"},[t._l(t.mvDetail.artists,(function(n,i){return e("span",{key:i},[t._v(t._s(n.name)+" ")])})),e("span",[t._v("发行时间："+t._s(t.mvDetail.publishTime))])],2)]),e("p",{staticClass:"desc"},[t._v(t._s(t.mvDetail.desc))])]),e("comment-input",{attrs:{count:t.mvDetail.commentCount}}),t._l(t.commentList,(function(t,n){return e("comment",{key:n,staticClass:"item",attrs:{avatarUrl:t.user.avatarUrl,nickname:t.user.nickname,content:t.content,time:t.time}})}))],2)])},a=[],s=(e("d3b7"),e("159b"),e("fb6a"),e("99af"),e("6912")),c=e("32bb"),o=e("7a1c"),r=e("abb2"),l=e("652a"),u=e("7c27"),m={name:"Mv",components:{commentInput:r["a"],comment:l["a"],mvItem:u["a"]},data:function(){return{domObj:[],id:this.$route.query.id,mvUrl:{},mvDetail:{},cover:"",similarMvList:[],commentList:[],page:0,commentNum:20}},watch:{mvDetail:function(){var t=o["a"]._tranNumber(this.mvDetail.playCount,2);this.mvDetail.playCount=t},similarMvList:function(){this.similarMvList.forEach((function(t,n,e){var i=o["a"]._tranNumber(t.playCount,2);e[n].playCount=i}))},commentList:function(){this.commentList.forEach((function(t,n,e){var i=o["a"]._tranDate(t.time);e[n].time=i}))}},created:function(){this.getMvUrl(),this.getsimilarMv(),this.getMvDetail(),this.getMvComment()},mounted:function(){this.init()},methods:{init:function(){var t=this;document.documentElement.scrollTop=0,this.domObj=window,this.domObj.onscroll=function(){var n=document.documentElement.scrollHeight||document.body.scrollHeight,e=t.domObj.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,i=t.domObj.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;Math.floor(e)+Math.floor(i)==n&&t.getMvComment()}},getMvUrl:function(){var t=this;Object(s["c"])(this,{id:this.id}).then((function(n){t.mvUrl=n.data})).catch((function(t){console.log("获取音频地址可能出现错误",t)}))},getsimilarMv:function(){var t=this;Object(s["f"])(this,{mvid:this.id}).then((function(n){t.similarMvList=n.mvs.slice(0,4)})).catch((function(t){console.log("获取相似 MV 可能出现错误",t)}))},getMvDetail:function(){var t=this;Object(s["b"])(this,{mvid:this.id}).then((function(n){t.mvDetail=n.data,t.cover=t.mvDetail.cover})).catch((function(t){console.log("获取 MV 信息可能出现错误",t)}))},getMvComment:function(){var t=this;Object(c["a"])(this,{id:this.id,limit:this.commentNum,offset:this.page*this.commentNum}).then((function(n){t.commentList=t.commentList.concat(n.comments),t.page++})).catch((function(t){console.log("获取 MV 评论可能出现错误",t)}))},goMv:function(t){this.$router.push({path:"/mvdetail/".concat((new Date).getTime()),query:{id:t}})}},beforeDestroy:function(){this.domObj.onscroll=null}},v=m,d=(e("85ed"),e("2877")),f=Object(d["a"])(v,i,a,!1,null,null,null);n["default"]=f.exports},5534:function(t,n,e){"use strict";e("0ccf")},"652a":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"comment"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.avatarUrl,expression:"avatarUrl"}],attrs:{alt:""}}),e("div",{staticClass:"content"},[e("div",{staticClass:"left"},[e("div",{staticClass:"nickName"},[t._v(t._s(t.nickname))]),e("div",{staticClass:"text"},[t._v(" "+t._s(t.content))])]),e("div",{staticClass:"time"},[t._v(" "+t._s(t.time))])])])},a=[],s={name:"comment",props:{avatarUrl:String,nickname:String,content:String,time:String}},c=s,o=(e("5534"),e("2877")),r=Object(o["a"])(c,i,a,!1,null,null,null);n["a"]=r.exports},6912:function(t,n,e){"use strict";e.d(n,"d",(function(){return s})),e.d(n,"c",(function(){return c})),e.d(n,"f",(function(){return o})),e.d(n,"b",(function(){return r})),e.d(n,"a",(function(){return l})),e.d(n,"e",(function(){return u}));var i=e("e760"),a=e("4c8d");function s(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(i["a"])(a["o"],n,t)}function c(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(i["a"])(a["n"],n,t)}function o(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(i["a"])(a["u"],n,t)}function r(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(i["a"])(a["l"],n,t)}function l(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(i["a"])(a["f"],n,t)}function u(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(i["a"])(a["m"],n,t)}},7443:function(t,n,e){"use strict";e("f9e5")},"7c27":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"mv-item",on:{click:function(n){return t.goMvDetail(t.mvId)}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.cover,expression:"cover"}],attrs:{alt:""}}),e("p",{staticClass:"name",on:{click:function(n){return t.goMvDetail(t.mvId)}}},[t._v(t._s(t.name)+" / "+t._s(t.artistName))]),e("div",{staticClass:"artists"},t._l(t.artists,(function(n,i){return e("span",{key:i,staticClass:"artist",on:{click:function(e){return e.stopPropagation(),t.goSingerDetail(n.id,n.name)}}},[t._v(t._s(n.name))])})),0),e("div",{staticClass:"mask"},[e("div",{staticClass:"count"},[t._v("播放量 "+t._s(t.playCount))])])])},a=[],s=(e("a9e3"),{name:"playList-item",props:{mvId:Number,cover:String,name:String,artistName:String,artists:Array,playCount:String},watch:{},methods:{goMvDetail:function(t){this.$router.push({path:"/mvdetail/".concat((new Date).getTime()),query:{id:t}})},goSingerDetail:function(t,n){this.$router.push({path:"/singerDetail/".concat((new Date).getTime()),query:{id:t,name:n}})}}}),c=s,o=(e("7443"),e("2877")),r=Object(o["a"])(c,i,a,!1,null,null,null);n["a"]=r.exports},"85ed":function(t,n,e){"use strict";e("ebde")},"8bdb":function(t,n,e){"use strict";e("a379")},a379:function(t,n,e){},abb2:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"comment-input"},[e("div",{staticClass:"comment-header"},[e("span",[t._v("评论")]),e("span",[t._v("共有"+t._s(t.count)+"条评论")])]),t._m(0)])},a=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content"},[e("textarea",{attrs:{name:"",id:"",rows:"4",placeholder:"说说您的想法吧"}}),e("button",{staticClass:"btn"},[t._v("发表评论")])])}],s=(e("a9e3"),{name:"commentInput",props:{count:Number}}),c=s,o=(e("8bdb"),e("2877")),r=Object(o["a"])(c,i,a,!1,null,null,null);n["a"]=r.exports},ebde:function(t,n,e){},f9e5:function(t,n,e){}}]);