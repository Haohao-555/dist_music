(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-91b9fafc"],{1054:function(t,n){var e=1..valueOf;t.exports=function(t){return e.call(t)}},"32bb":function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"a",(function(){return s}));var a=e("e760"),i=e("4c8d");function r(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(a["a"])(i["o"],n,t)}function s(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(a["a"])(i["i"],n,t)}},"335e":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"MvDetail"}},[e("div",{staticClass:"bgmask"}),e("div",{staticClass:"bg",style:{"background-image":"url("+t.cover+")","background-color":"rgb(255,255,255)"}}),e("div",{staticClass:"video-container"},[e("div",{staticClass:"music-container"},[e("video",{attrs:{src:t.mvUrl.url,controls:"",autoplay:"autoplay"}}),e("div",{staticClass:"video-info"},[e("div",{staticClass:"name"},[t._v(t._s(t.mvDetail.name)+" - "+t._s(t.mvDetail.artistName))]),e("div",{staticClass:"count"},[t._v("播放量："+t._s(t.mvDetail.playCount))])])])]),e("div",{staticClass:"music-container"},[e("div",{staticClass:"similarMv"},[e("h3",[t._v("大家都爱看")]),e("div",{staticClass:"mv-content"},t._l(t.similarMv,(function(t,n){return e("mv-item",{key:n,staticClass:"item",attrs:{mvId:t.id,cover:t.cover,name:t.name,artistName:t.artistName,artists:t.artists,playCount:t.playCount}})})),1)]),e("div",{staticClass:"mv-info"},[e("div",{staticClass:"info-header"},[e("h3",[t._v("视频简介")]),e("div",{staticClass:"singer"},[t._l(t.mvDetail.artists,(function(n,a){return e("span",{key:a},[t._v(t._s(n.name)+" ")])})),e("span",[t._v("发行时间："+t._s(t.mvDetail.publishTime))])],2)]),e("p",{staticClass:"desc"},[t._v(t._s(t.mvDetail.desc))])]),e("comment-input",{attrs:{count:t.mvDetail.commentCount}}),t._l(t.commentList,(function(t,n){return e("comment",{key:n,staticClass:"item",attrs:{avatarUrl:t.user.avatarUrl,nickname:t.user.nickname,content:t.content,time:t.time}})}))],2)])},i=[],r=(e("bbb8"),e("4789"),e("aa0c"),e("6912")),s=e("32bb"),c=e("7a1c"),o=e("abb2"),u=e("652a"),l=e("7c27"),m={name:"Mv",components:{commentInput:o["a"],comment:u["a"],mvItem:l["a"]},data:function(){return{domObj:[],id:this.$route.query.id,mvUrl:{},similarMv:[],mvDetail:{},cover:"",commentList:[],page:0,commentNum:20}},methods:{init:function(){var t=this;document.documentElement.scrollTop=0,this.domObj=window,this.domObj.onscroll=function(){var n=document.documentElement.scrollHeight||document.body.scrollHeight,e=t.domObj.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,a=t.domObj.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;Math.floor(e)+Math.floor(a)==n&&t.getMvComment()}},getMvUrl:function(){var t=this;this.$store.dispatch("saveLoadingFlag",!0);var n={id:this.id};Object(r["c"])(this,n).then((function(n){t.mvUrl=n.data,t.$store.dispatch("saveLoadingFlag",!1)}))},getsimilarMv:function(){var t=this;this.$store.dispatch("saveLoadingFlag",!0);var n={mvid:this.id};Object(r["f"])(this,n).then((function(n){t.similarMv=n.mvs.slice(0,4),t.$store.dispatch("saveLoadingFlag",!1)}))},getMvDetail:function(){var t=this;Object(r["b"])(this,{mvid:this.id}).then((function(n){t.mvDetail=n.data,t.cover=t.mvDetail.cover}))},getMvComment:function(){var t=this;this.$store.dispatch("saveLoadingFlag",!0);var n={id:this.id,limit:this.commentNum,offset:this.page*this.commentNum};Object(s["a"])(this,n).then((function(n){t.$store.dispatch("saveLoadingFlag",!1),t.commentList=t.commentList.concat(n.comments),t.page++}))},goMv:function(t){console.log(t);var n=(new Date).getTime();this.$router.push({path:"/mvdetail/".concat(n),query:{id:t}})}},watch:{mvDetail:function(){var t=c["a"]._tranNumber(this.mvDetail.playCount,2);this.mvDetail.playCount=t},similarMv:function(){this.similarMv.forEach((function(t,n,e){var a=c["a"]._tranNumber(t.playCount,2);e[n].playCount=a}))},commentList:function(){this.commentList.forEach((function(t,n,e){var a=c["a"]._tranDate(t.time);e[n].time=a}))}},created:function(){this.getMvUrl(),this.getsimilarMv(),this.getMvDetail(),this.getMvComment()},mounted:function(){this.init()},beforeDestroy:function(){this.domObj.onscroll=null}},v=m,d=(e("85ed"),e("cba8")),f=Object(d["a"])(v,a,i,!1,null,null,null);n["default"]=f.exports},3828:function(t,n,e){"use strict";var a=e("73ad"),i=e("a402"),r=e("b203"),s=e("b13f"),c=e("fd33"),o=e("a20b"),u=e("4c60"),l=e("a851"),m=e("204f"),v=e("2532").f,d=e("b32c").f,f=e("0fe9").f,h=e("1054"),p=e("4bcb").trim,b="Number",g=i[b],_=g.prototype,C=function(t){var n=l(t,"number");return"bigint"===typeof n?n:y(n)},y=function(t){var n,e,a,i,r,s,c,o,m=l(t,"number");if(u(m))throw TypeError("Cannot convert a Symbol value to a number");if("string"==typeof m&&m.length>2)if(m=p(m),n=m.charCodeAt(0),43===n||45===n){if(e=m.charCodeAt(2),88===e||120===e)return NaN}else if(48===n){switch(m.charCodeAt(1)){case 66:case 98:a=2,i=49;break;case 79:case 111:a=8,i=55;break;default:return+m}for(r=m.slice(2),s=r.length,c=0;c<s;c++)if(o=r.charCodeAt(c),o<48||o>i)return NaN;return parseInt(r,a)}return+m};if(r(b,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var N,D=function(t){var n=arguments.length<1?0:g(C(t)),e=this;return e instanceof D&&m((function(){h(e)}))?o(Object(n),e,D):n},M=a?v(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),O=0;M.length>O;O++)c(g,N=M[O])&&!c(D,N)&&f(D,N,d(g,N));D.prototype=_,_.constructor=D,s(i,b,D)}},"4bcb":function(t,n,e){var a=e("c499"),i=e("69a8"),r=e("f8bc"),s="["+r+"]",c=RegExp("^"+s+s+"*"),o=RegExp(s+s+"*$"),u=function(t){return function(n){var e=i(a(n));return 1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(o,"")),e}};t.exports={start:u(1),end:u(2),trim:u(3)}},5534:function(t,n,e){"use strict";e("a44d")},"652a":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"comment"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.avatarUrl,expression:"avatarUrl"}],attrs:{alt:""}}),e("div",{staticClass:"content"},[e("div",{staticClass:"left"},[e("div",{staticClass:"nickName"},[t._v(t._s(t.nickname))]),e("div",{staticClass:"text"},[t._v(" "+t._s(t.content))])]),e("div",{staticClass:"time"},[t._v(" "+t._s(t.time))])])])},i=[],r={name:"comment",props:{avatarUrl:String,nickname:String,content:String,time:String},methods:{}},s=r,c=(e("5534"),e("cba8")),o=Object(c["a"])(s,a,i,!1,null,null,null);n["a"]=o.exports},6912:function(t,n,e){"use strict";e.d(n,"d",(function(){return r})),e.d(n,"c",(function(){return s})),e.d(n,"f",(function(){return c})),e.d(n,"b",(function(){return o})),e.d(n,"a",(function(){return u})),e.d(n,"e",(function(){return l}));var a=e("e760"),i=e("4c8d");function r(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(a["a"])(i["m"],n,t)}function s(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(a["a"])(i["l"],n,t)}function c(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(a["a"])(i["r"],n,t)}function o(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(a["a"])(i["j"],n,t)}function u(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(a["a"])(i["f"],n,t)}function l(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(a["a"])(i["k"],n,t)}},7443:function(t,n,e){"use strict";e("cacf")},"7c27":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"mv-item",on:{click:function(n){return t.goMvDetail(t.mvId)}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.cover,expression:"cover"}],attrs:{alt:""}}),e("p",{staticClass:"name",on:{click:function(n){return t.goMvDetail(t.mvId)}}},[t._v(t._s(t.name)+" / "+t._s(t.artistName))]),e("div",{staticClass:"artists"},t._l(t.artists,(function(n,a){return e("span",{key:a,staticClass:"artist",on:{click:function(e){return e.stopPropagation(),t.goSingerDetail(n.id,n.name)}}},[t._v(t._s(n.name))])})),0),e("div",{staticClass:"mask"},[e("div",{staticClass:"count"},[t._v("播放量 "+t._s(t.playCount))])])])},i=[],r=(e("3828"),{name:"playList-item",props:{mvId:Number,cover:String,name:String,artistName:String,artists:Array,playCount:String},watch:{},methods:{goMvDetail:function(t){var n=(new Date).getTime();this.$router.push({path:"/mvdetail/".concat(n),query:{id:t}})},goSingerDetail:function(t,n){var e=(new Date).getTime();this.$router.push({path:"/singerDetail/".concat(e),query:{id:t,name:n}})}}}),s=r,c=(e("7443"),e("cba8")),o=Object(c["a"])(s,a,i,!1,null,null,null);n["a"]=o.exports},"85ed":function(t,n,e){"use strict";e("aa71")},"8bdb":function(t,n,e){"use strict";e("9f96")},"9f96":function(t,n,e){},a20b:function(t,n,e){var a=e("f6cc"),i=e("ef68"),r=e("54fa");t.exports=function(t,n,e){var s,c;return r&&a(s=n.constructor)&&s!==e&&i(c=s.prototype)&&c!==e.prototype&&r(t,c),t}},a44d:function(t,n,e){},aa71:function(t,n,e){},abb2:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"comment-input"},[e("div",{staticClass:"comment-header"},[e("span",[t._v("评论")]),e("span",[t._v("共有"+t._s(t.count)+"条评论")])]),t._m(0)])},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content"},[e("textarea",{attrs:{name:"",id:"",rows:"4",placeholder:"说说您的想法吧"}}),e("button",{staticClass:"btn"},[t._v("发表评论")])])}],r=(e("3828"),{name:"commentInput",props:{count:Number}}),s=r,c=(e("8bdb"),e("cba8")),o=Object(c["a"])(s,a,i,!1,null,null,null);n["a"]=o.exports},cacf:function(t,n,e){},f8bc:function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-91b9fafc.5fe14af7.js.map