(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1633648f"],{"1afd":function(n,t,r){"use strict";r.r(t);var e=function(){var n=this,t=n.$createElement;n._self._c;return n._m(0)},c=[function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("div",{staticClass:"song"},[r("div",{staticClass:"music-contianer"})])}],i=r("ca85"),u=r("7a1c"),o={name:"song",components:{},data:function(){return{id:this.$route.query.id,url:"",cover:this.$route.query.cover,parseLyric:[]}},methods:{getsongUrl:function(){var n=this;Object(i["h"])(this,{id:this.id}).then((function(t){n.url=t.data[0].url})).catch((function(n){console.log(n)}))},getlyric:function(){var n=this;Object(i["d"])(this,{id:this.id}).then((function(t){n.parseLyric=u["a"]._parseLyric(t.lrc.lyric)})).catch((function(n){console.log(n)}))}},created:function(){this.getsongUrl(),this.getlyric()}},a=o,d=(r("d5f1"),r("cba8")),f=Object(d["a"])(a,e,c,!1,null,null,null);t["default"]=f.exports},"9d83":function(n,t,r){},ca85:function(n,t,r){"use strict";r.d(t,"c",(function(){return i})),r.d(t,"j",(function(){return u})),r.d(t,"b",(function(){return o})),r.d(t,"i",(function(){return a})),r.d(t,"e",(function(){return d})),r.d(t,"g",(function(){return f})),r.d(t,"f",(function(){return s})),r.d(t,"a",(function(){return l})),r.d(t,"h",(function(){return h})),r.d(t,"d",(function(){return v}));var e=r("e760"),c=r("4c8d");function i(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(e["a"])(c["f"],t,n)}function u(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(e["a"])(c["u"],t,n)}function o(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(e["a"])(c["a"],t,n)}function a(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(e["a"])(c["b"],t,n)}function d(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(e["a"])(c["m"],t,n)}function f(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(e["a"])(c["r"],t,n)}function s(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(e["a"])(c["o"],t,n)}function l(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(e["a"])(c["d"],t,n)}function h(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(e["a"])(c["s"],t,n)}function v(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(e["a"])(c["g"],t,n)}},d5f1:function(n,t,r){"use strict";r("9d83")}}]);
//# sourceMappingURL=chunk-1633648f.7dab7314.js.map