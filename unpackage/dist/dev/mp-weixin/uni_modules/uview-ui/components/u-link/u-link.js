(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uview-ui/components/u-link/u-link"],{1221:function(t,n,e){"use strict";var i=e(954),u=e.n(i);u.a},1322:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var u=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__get_style([t.linkStyle,t.$u.addStyle(t.customStyle)]));t.$mp.data=Object.assign({},{$root:{s0:e}})},o=[];u._withStripped=!0},1424:function(t,n,e){"use strict";e.r(n);var i=e(1322),u=e(952);for(var o in u)"default"!==o&&function(t){e.d(n,t,(function(){return u[t]}))}(o);e(1221);var a,r=e(1),c=Object(r["a"])(u["default"],i["b"],i["c"],!1,null,"15816aae",null,!1,i["a"],a);c.options.__file="uni_modules/uview-ui/components/u-link/u-link.vue",n["default"]=c.exports},952:function(t,n,e){"use strict";e.r(n);var i=e(953),u=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=u.a},953:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=u(e(833));function u(t){return t&&t.__esModule?t:{default:t}}var o={name:"u-link",mixins:[t.$u.mpMixin,t.$u.mixin,i.default],computed:{linkStyle:function(){var n={color:this.color,fontSize:t.$u.addUnit(this.fontSize),lineHeight:t.$u.addUnit(t.$u.getPx(this.fontSize)+2),textDecoration:this.underLine?"underline":"none"};return n}},methods:{openLink:function(){var n=this;t.setClipboardData({data:this.href,success:function(){t.hideToast(),n.$nextTick((function(){t.$u.toast(n.mpTips)}))}}),this.$emit("click")}}};n.default=o}).call(this,e(0)["default"])},954:function(t,n,e){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ui/components/u-link/u-link.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-link/u-link-create-component',
    {
        'uni_modules/uview-ui/components/u-link/u-link-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('0')['createComponent'](__webpack_require__(1424))
        })
    },
    [['uni_modules/uview-ui/components/u-link/u-link-create-component']]
]);
