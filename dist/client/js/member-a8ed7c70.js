(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.BASE_HOST="https://www.hnmall.com/",t.INSTALL_APP="install_hnmall_app",t.USER_INFO="__user_info__"},27:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Index=void 0;var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),n=a(0),r=s(n),c=s(a(4)),o=(s(a(10)),a(3)),i=a(1),m=s(a(7));function s(e){return e&&e.__esModule?e:{default:e}}t.Index=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleLogin=a.handleLogin.bind(a),a.state={user:{},isLogin:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Component),l(t,[{key:"componentDidMount",value:function(){var e=(0,o.localCache)(i.USER_INFO);e&&(0,o.isObject)(e)&&this.setState({user:e,isLogin:!0})}},{key:"handleLogin",value:function(){location.href="/login.html"}},{key:"render",value:function(){var e=this.state.isLogin,t=(0,c.default)("mask",{hide:e});return r.default.createElement("div",{className:"app-wrap"},r.default.createElement("div",{onClick:this.handleLogin,className:t}),r.default.createElement("div",{className:"header"},r.default.createElement("div",{className:"flex header-top"},r.default.createElement("div",{className:"flex user-avatar"},r.default.createElement("img",{src:i.BASE_HOST+"/res/images/session.png",className:"img"}),r.default.createElement("div",{className:"login"},"登录/注册")),r.default.createElement("div",{className:"edit"},"编辑"))),r.default.createElement("div",{className:"shader-box"},r.default.createElement("div",{className:"layer-view"},r.default.createElement("div",{className:"half-wrap"},r.default.createElement("div",{className:"m-order"},r.default.createElement("span",null,"我的订单"),r.default.createElement("a",{href:"/"},"查看更多订单")),r.default.createElement("div",{className:"flex order-tab"},r.default.createElement("div",{className:"order-tab-item"},r.default.createElement("div",{className:"num"},"0"),r.default.createElement("div",null,"待付款")),r.default.createElement("div",{className:"order-tab-item"},r.default.createElement("div",{className:"num"},"0"),r.default.createElement("div",null,"待发货")),r.default.createElement("div",{className:"order-tab-item"},r.default.createElement("div",{className:"num"},"0"),r.default.createElement("div",null,"待收货")),r.default.createElement("div",{className:"order-tab-item"},r.default.createElement("div",{className:"num"},"0"),r.default.createElement("div",null,"退款/售后")))),r.default.createElement("div",{className:"user-acount"},r.default.createElement("div",{className:"user-acount-item"},r.default.createElement("div",{className:"num"},"0"),r.default.createElement("div",null,"购物卡余额")),r.default.createElement("div",{className:"user-acount-item"},r.default.createElement("div",{className:"num"},"0"),r.default.createElement("div",null,"我的优惠券"))))),r.default.createElement("div",{className:"flex board"},r.default.createElement("div",{className:"board-item"},r.default.createElement("a",{href:"https://www.hnmall.com/wap/breakfast-list.html",className:"board-item-link"},r.default.createElement("div",{className:"icon-food"}),r.default.createElement("div",null,"我的早餐"))),r.default.createElement("div",{className:"board-item"},r.default.createElement("a",{href:"https://www.hnmall.com/wap/prepare-list.html",className:"board-item-link"},r.default.createElement("div",{className:"icon-detail"}),r.default.createElement("div",null,"年度套餐"))),r.default.createElement("div",{className:"board-item"},r.default.createElement("a",{href:"https://www.hnmall.com/wap/member-collectitems.html",className:"board-item-link"},r.default.createElement("div",{className:"icon-favor"}),r.default.createElement("div",null,"我的收藏"))),r.default.createElement("div",{className:"board-item"},r.default.createElement("a",{href:"https://www.hnmall.com/wap/member-security.html",className:"board-item-link"},r.default.createElement("div",{className:"icon-safe"}),r.default.createElement("div",null,"安全中心"))),r.default.createElement("div",{className:"board-item"},r.default.createElement("a",{href:"/",className:"board-item-link"},r.default.createElement("div",{className:"icon-server"}),r.default.createElement("div",null,"我的客服"))),r.default.createElement("div",{className:"board-item"},r.default.createElement("a",{href:"/",className:"board-item-link"},r.default.createElement("div",{className:"icon-seting"}),r.default.createElement("div",null,"设置")))),r.default.createElement(m.default,null))}}]),t}()},29:function(e,t,a){},3:function(e,t,a){"use strict";function l(e,t){localStorage.setItem(e,t)}function n(e){return localStorage.getItem(e)}function r(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(!t){var r=n(e+"_time"),c=void 0;if(Date.now()-r>0)return!1;var o=n(e);try{c=JSON.parse(o)}catch(e){c=o}return c}l(e,"string"==typeof t?t:JSON.stringify(t)),l(e+"_time",Date.now()+24*a*60*60*1e3)}t.formatPrice=function(e){return parseFloat(e).toFixed(2)},t.isWechat=function(){var e=navigator.userAgent.toLowerCase();return/micromessenger/i.test(e)},t.getLocationTencent=function(e){var t=r("geolocation");if(t)return e(t);new qq.maps.Geolocation("PMOBZ-DSBK6-7NQSZ-EUK5J-A4PR6-DEB4V","hnmall").getLocation(function(t){console.log(t),r("geolocation",{lat:t.lat,lng:t.lng}),e(t)},function(){e()})},t.getScrollTop=function(){var e;return window.pageYOffset?e=window.pageYOffset:document.compatMode&&"BackCompat"!=document.compatMode?e=document.documentElement.scrollTop:document.body&&(e=document.body.scrollTop),e},t.localCache=r,t.setCookie=function(e,t,a){var l=new Date;l.setDate(l.getDate()+a),document.cookie=e+"="+escape(t)+(null==a?"":";expires="+l.toGMTString())},t.checkphone=function(e){return!!/^1(3|4|5|7|8)\d{9}$/.test(e)},t.isObject=function(e){return"[object Object]"==Object.prototype.toString.call(e)},t.isArray=function(e){return"[object Array]"==Object.prototype.toString.call(e)}},30:function(e,t,a){"use strict";a(29);var l=c(a(0)),n=c(a(8)),r=a(27);function c(e){return e&&e.__esModule?e:{default:e}}n.default.hydrate(l.default.createElement(r.Index,null),document.getElementById("app"))},7:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),n=a(0),r=function(e){return e&&e.__esModule?e:{default:e}}(n),c=a(1);var o=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Component),l(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.default.createElement("div",{className:"app-foot-bar"},r.default.createElement("a",{className:"foot-bar-item",href:"/"},r.default.createElement("img",{className:"icon",src:"https://wd.hnmall.com/themes/mobilemall/images/d-icon1.png"}),r.default.createElement("span",null,"首页")),r.default.createElement("a",{className:"foot-bar-item",href:"/category.html"},r.default.createElement("img",{className:"icon",src:"https://wd.hnmall.com/themes/mobilemall/images/d-icon2.png"}),r.default.createElement("span",null,"分类")),r.default.createElement("a",{className:"foot-bar-item",href:c.BASE_HOST+"wap/cart.html"},r.default.createElement("img",{className:"cart",src:"https://wd.hnmall.com/themes/mobilemall/images/d-icon3.jpg"}),r.default.createElement("span",null,"购物车")),r.default.createElement("a",{className:"foot-bar-item",href:c.BASE_HOST+"weidian/store-index.html"},r.default.createElement("img",{className:"icon",src:"https://wd.hnmall.com/themes/mobilemall/images/d-icon4.png"}),r.default.createElement("span",null,"店铺")),r.default.createElement("a",{className:"foot-bar-item",href:"/member.html"},r.default.createElement("img",{className:"icon",src:"https://wd.hnmall.com/themes/mobilemall/images/d-icon5.png"}),r.default.createElement("span",null,"会员")))}}]),t}();t.default=o}},[[30,0,1]]]);