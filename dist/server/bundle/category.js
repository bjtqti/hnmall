module.exports=function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t){e.exports=require("react")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.BASE_HOST="https://www.hnmall.com/",t.INSTALL_APP="install_hnmall_app"},function(e,t){e.exports=require("prop-types")},function(e,t,n){"use strict";function a(e,t){localStorage.setItem(e,t)}function r(e){return localStorage.getItem(e)}function o(e,t){if(!t){var n=r(e+"_time"),o=void 0;if(Date.now()-n>0)return!1;var l=r(e);try{o=JSON.parse(l)}catch(e){o=l}return o}a(e,"string"==typeof t?t:JSON.stringify(t)),a(e+"_time",Date.now()+864e5)}t.formatPrice=function(e){return parseFloat(e).toFixed(2)},t.isWechat=function(){var e=navigator.userAgent.toLowerCase();return/micromessenger/i.test(e)},t.getLocationTencent=function(e){var t=o("geolocation");if(t)return t;new qq.maps.Geolocation("PMOBZ-DSBK6-7NQSZ-EUK5J-A4PR6-DEB4V","hnmall").getLocation(function(t){o("geolocation",{lat:t.lat,lng:t.lng}),e(t)},function(){e()})},t.getScrollTop=function(){var e;return window.pageYOffset?e=window.pageYOffset:document.compatMode&&"BackCompat"!=document.compatMode?e=document.documentElement.scrollTop:document.body&&(e=document.body.scrollTop),e},t.localCache=o,t.checkphone=function(e){return!!/^1(3|4|5|7|8)\d{9}$/.test(e)},t.isObject=function(e){return"[object Object]"==Object.prototype.toString.call(e)},t.isArray=function(e){return"[object Array]"==Object.prototype.toString.call(e)}},function(e,t){e.exports=require("classnames")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r),l=n(1);var c=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),a(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return o.default.createElement("div",{className:"app-foot-bar"},o.default.createElement("a",{className:"foot-bar-item",href:"/"},o.default.createElement("img",{className:"icon",src:"https://wd.hnmall.com/themes/mobilemall/images/d-icon1.png"}),o.default.createElement("span",null,"首页")),o.default.createElement("a",{className:"foot-bar-item",href:"/category"},o.default.createElement("img",{className:"icon",src:"https://wd.hnmall.com/themes/mobilemall/images/d-icon2.png"}),o.default.createElement("span",null,"分类")),o.default.createElement("a",{className:"foot-bar-item",href:l.BASE_HOST+"wap/cart.html"},o.default.createElement("img",{className:"cart",src:"https://wd.hnmall.com/themes/mobilemall/images/d-icon3.jpg"}),o.default.createElement("span",null,"购物车")),o.default.createElement("a",{className:"foot-bar-item",href:l.BASE_HOST+"weidian/store-index.html"},o.default.createElement("img",{className:"icon",src:"https://wd.hnmall.com/themes/mobilemall/images/d-icon4.png"}),o.default.createElement("span",null,"店铺")),o.default.createElement("a",{className:"foot-bar-item",href:l.BASE_HOST+"wap/member.html"},o.default.createElement("img",{className:"icon",src:"https://wd.hnmall.com/themes/mobilemall/images/d-icon5.png"}),o.default.createElement("span",null,"会员")))}}]),t}();t.default=c},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r);var l=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),a(t,[{key:"componentDidMount",value:function(){}},{key:"rendeSpiner",value:function(){return o.default.createElement("div",{className:"spinner-4"},o.default.createElement("div",{className:"bounce1"}),o.default.createElement("div",{className:"bounce2"}),o.default.createElement("div",{className:"bounce3"}))}},{key:"render",value:function(){var e={display:this.props.active?"block":"none"};return o.default.createElement("div",{className:"loading-box",style:e},o.default.createElement("div",{className:"spinner-4"},o.default.createElement("div",{className:"bounce1"}),o.default.createElement("div",{className:"bounce2"}),o.default.createElement("div",{className:"bounce3"})))}}]),t}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Index=void 0;var a,r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(0),c=p(l),i=p(n(2)),u=p(n(4)),s=n(3),f=n(1),d=p(n(5)),m=p(n(7));function p(e){return e&&e.__esModule?e:{default:e}}t.Index=(r=a=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={categoryList:e.initialState,isLoading:!0,activeIndex:0,value:""},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),o(t,[{key:"componentDidMount",value:function(){var e=(0,s.localCache)("category");e?this.setState({isLoading:!1,categoryList:e}):this.fetchCategoryList()}},{key:"fetchCategoryList",value:function(){var e=this;axios.get("/category/list").then(function(t){console.log(t.data),t.data&&t.data.categoryList&&((0,s.localCache)("category",t.data.categoryList),e.setState({isLoading:!1,categoryList:t.data.categoryList}))})}},{key:"handleChange",value:function(e){var t=e.target.value;this.setState({value:t})}},{key:"handleClick",value:function(e){if(this.state.activeIndex===e)return!1;this.setState({activeIndex:e})}},{key:"renderNav",value:function(e){var t=this,n=this.state.activeIndex;return e.map(function(e,a){var r=(0,u.default)("category-name",{active:n===a});return c.default.createElement("div",{onClick:t.handleClick.bind(t,a),className:r,key:a},e.name)})}},{key:"renderItem",value:function(e){return(0,s.isArray)(e)?e.map(function(e,t){var n=e.icon.replace(/^\//,f.BASE_HOST);return c.default.createElement("div",{className:"category-nav-item",key:"r_"+t},c.default.createElement("a",{href:f.BASE_HOST+"wap/item-list.html?cat_id="+e.id},c.default.createElement("img",{src:n}),c.default.createElement("span",{className:"name"},e.name)))}):""}},{key:"renderList",value:function(e){var t=this;return e.map(function(e,n){return c.default.createElement("div",{className:"category-group",key:"g_"+n},c.default.createElement("div",{className:"category-nav-header"},e.name),c.default.createElement("div",{className:"category-nav-list"},t.renderItem(e.children)))})}},{key:"renderCategory",value:function(){var e=this.state,t=e.categoryList,n=e.activeIndex;if(t.length<1)return"";var a=t[n].children;return c.default.createElement("div",{className:"category-container"},c.default.createElement("div",{ref:"nav",className:"category-nav"},this.renderNav(t)),c.default.createElement("div",{className:"category-main"},this.renderList(a)))}},{key:"render",value:function(){var e=this;return c.default.createElement("div",{className:"app-wrap"},c.default.createElement("div",{className:"app-search-box"},c.default.createElement("form",{action:f.BASE_HOST+"wap/item-list.html",method:"post",className:"search"},c.default.createElement("input",{type:"text",value:this.state.value,onChange:function(t){e.handleChange(t)},placeholder:"搜索店内商品"}))),this.renderCategory(),c.default.createElement(d.default,null),c.default.createElement(m.default,{name:"spinner",active:this.state.isLoading}))}}]),t}(),a.propTypes={initialState:i.default.array},r)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){return e&&e.__esModule?e:{default:e}}(n(0)),r=n(8);t.default=function(e){return new Promise(function(t,n){t({app:a.default.createElement(r.Index,{initialState:e})})})}}]);