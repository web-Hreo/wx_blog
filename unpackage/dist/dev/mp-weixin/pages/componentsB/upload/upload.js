require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/componentsB/upload/upload"],{144:function(e,t,n){"use strict";n.r(t);var r=n(145),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=o.a},145:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(4));function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t,n,r,o,i,u){try{var c=e[i](u),a=c.value}catch(s){return void n(s)}c.done?t(a):Promise.resolve(a).then(r,o)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function u(e){a(i,r,o,u,c,"next",e)}function c(e){a(i,r,o,u,c,"throw",e)}u(void 0)}))}}var l={data:function(){return{fileList1:[],fileList2:[],fileList3:[{url:"https://cdn.uviewui.com/uview/swiper/1.jpg"}],fileList4:[{url:"https://cdn.uviewui.com/uview/swiper/1.jpg"},{url:"https://cdn.uviewui.com/uview/swiper/1.jpg"}],fileList5:[],fileList6:[],fileList7:[]}},onLoad:function(){},methods:{deletePic:function(e){this["fileList".concat(e.name)].splice(e.index,1)},afterRead:function(e){var t=this;return s(r.default.mark((function n(){var o,i,c,a,s;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:o=[].concat(e.file),i=t["fileList".concat(e.name)].length,o.map((function(n){t["fileList".concat(e.name)].push(u(u({},n),{},{status:"uploading",message:"上传中"}))})),c=0;case 4:if(!(c<o.length)){n.next=14;break}return n.next=7,t.uploadFilePromise(o[c].thumb);case 7:a=n.sent,s=t["fileList".concat(e.name)][i],t["fileList".concat(e.name)].splice(i,1,Object.assign(s,{status:"success",message:"",url:a})),i++;case 11:c++,n.next=4;break;case 14:case"end":return n.stop()}}),n)})))()},uploadFilePromise:function(t){return new Promise((function(n,r){e.uploadFile({url:"",filePath:t,name:"file",formData:{user:"test"},success:function(e){setTimeout((function(){n(e.data.data)}),1e3)}})}))}}};t.default=l}).call(this,n(0)["default"])},146:function(e,t,n){},147:function(e,t,n){},340:function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return r}));try{r={uUpload:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-upload/u-upload")]).then(n.bind(null,1452))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,t=e.$createElement;e._self._c},i=[];o._withStripped=!0},652:function(e,t,n){"use strict";(function(e){n(3);r(n(2));var t=r(n(653));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(0)["createPage"])},653:function(e,t,n){"use strict";n.r(t);var r=n(340),o=n(144);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);n(654),n(655);var u,c=n(1),a=Object(c["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);a.options.__file="pages/componentsB/upload/upload.nvue",t["default"]=a.exports},654:function(e,t,n){"use strict";var r=n(146),o=n.n(r);o.a},655:function(e,t,n){"use strict";var r=n(147),o=n.n(r);o.a}},[[652,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/componentsB/upload/upload.js.map