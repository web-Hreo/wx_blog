(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uview-ui/components/u-count-down/u-count-down"],{1040:function(t,i,e){"use strict";e.r(i);var n=e(1041),u=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=u.a},1041:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=o(e(866)),u=e(867);function o(t){return t&&t.__esModule?t:{default:t}}var r={name:"u-count-down",mixins:[t.$u.mpMixin,t.$u.mixin,n.default],data:function(){return{timer:null,timeData:(0,u.parseTimeData)(0),formattedTime:"0",runing:!1,endTime:0,remainTime:0}},watch:{time:function(t){this.reset()}},mounted:function(){this.init()},methods:{init:function(){this.reset()},start:function(){this.runing||(this.runing=!0,this.endTime=Date.now()+this.remainTime,this.toTick())},toTick:function(){this.millisecond?this.microTick():this.macroTick()},macroTick:function(){var t=this;this.clearTimeout(),this.timer=setTimeout((function(){var i=t.getRemainTime();(0,u.isSameSecond)(i,t.remainTime)&&0!==i||t.setRemainTime(i),0!==t.remainTime&&t.macroTick()}),30)},microTick:function(){var t=this;this.clearTimeout(),this.timer=setTimeout((function(){t.setRemainTime(t.getRemainTime()),0!==t.remainTime&&t.microTick()}),30)},getRemainTime:function(){return Math.max(this.endTime-Date.now(),0)},setRemainTime:function(t){this.remainTime=t;var i=(0,u.parseTimeData)(t);(this.$slots.default||this.$slots.$default)&&this.$emit("change",i),this.formattedTime=(0,u.parseFormat)(this.format,i),t<=0&&(this.pause(),this.$emit("finish"))},reset:function(){this.pause(),this.remainTime=this.time,this.setRemainTime(this.remainTime),this.autoStart&&this.start()},pause:function(){this.runing=!1,this.clearTimeout()},clearTimeout:function(t){function i(){return t.apply(this,arguments)}return i.toString=function(){return t.toString()},i}((function(){clearTimeout(this.timer),this.timer=null}))},beforeDestroy:function(){this.clearTimeout()}};i.default=r}).call(this,e(0)["default"])},1042:function(t,i,e){},1249:function(t,i,e){"use strict";var n=e(1042),u=e.n(n);u.a},1353:function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return u})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}));var u=function(){var t=this,i=t.$createElement;t._self._c},o=[];u._withStripped=!0},1454:function(t,i,e){"use strict";e.r(i);var n=e(1353),u=e(1040);for(var o in u)"default"!==o&&function(t){e.d(i,t,(function(){return u[t]}))}(o);e(1249);var r,a=e(1),s=Object(a["a"])(u["default"],n["b"],n["c"],!1,null,"463368ae",null,!1,n["a"],r);s.options.__file="uni_modules/uview-ui/components/u-count-down/u-count-down.vue",i["default"]=s.exports}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ui/components/u-count-down/u-count-down.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-count-down/u-count-down-create-component',
    {
        'uni_modules/uview-ui/components/u-count-down/u-count-down-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('0')['createComponent'](__webpack_require__(1454))
        })
    },
    [['uni_modules/uview-ui/components/u-count-down/u-count-down-create-component']]
]);
