module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n.oe=function(e){process.nextTick(function(){throw e})},n(n.s=35)}([function(e,t){e.exports=require("react")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.BASE_HOST="https://wd.hnmall.com/",t.GPS_KEY="__geolocation__",t.TOKEN="__accessToken__",t.INSTALL_APP="install_hnmall_app",t.APPID="wxdbb96d20de9ed62a"},function(e,t,n){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function a(e){new qq.maps.Geolocation("PMOBZ-DSBK6-7NQSZ-EUK5J-A4PR6-DEB4V","hnmall").getLocation(function(t){var n={latitude:t.lat,longitude:t.lng,accuracy:t.accuracy};e(n)},function(t){console.log(t),e()},{timeout:8e4})}function i(e,t){localStorage.setItem(e,t)}function c(e){return localStorage.getItem(e)}t.formatPrice=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=("string"==typeof e?e:e.toString()).split(".");if(n[1]){for(var r=n[1],o="",a=0;a<t;a++)o+=r[a]?r[a]:"0";n[1]=o}else n[1]="00";return n[0]+"."+n[1]},t.isWechat=function(){var e=navigator.userAgent.toLowerCase();return/micromessenger/i.test(e)},t.navigatorGeolocation=function(e){"geolocation"in navigator?navigator.geolocation.getCurrentPosition(function(t){e({latitude:t.coords.latitude,longitude:t.coords.longitude,accuracy:t.coords.accuracy})},function(t){console.log(t),a(e)},{timeout:5e3,maximumAge:6e4}):a(e)},t.appendScript=function(e){var t=document.createElement("script"),n=document.getElementsByTagName("head")[0];t.type="text/javascript",t.src=e,n.appendChild(t)},t.getLocationByWeixin=function(e,t){void 0===("undefined"==typeof wx?"undefined":o(wx))&&t(),wx.config({debug:!1,appId:e.appId,timestamp:e.timestamp,nonceStr:e.nonceStr,signature:e.signature,jsApiList:["checkJsApi","openLocation","getLocation"]}),wx.ready(function(){wx.checkJsApi({jsApiList:["getLocation"],success:function(e){wx.getLocation({type:"wgs84",success:function(e){var n={latitude:e.latitude,longitude:e.longitude,speed:e.speed,accuracy:e.accuracy};t(n)},fail:function(){console.log("error***weixin"),a(t)}})},fail:function(){a(t)}})})},t.getScrollTop=function(){var e=0,t=0;return document.body&&(e=document.body.scrollTop),document.documentElement&&(t=document.documentElement.scrollTop),e-t>0?e:t},t.getScrollHeight=function(){var e=0,t=0;return document.body&&(e=document.body.scrollHeight),document.documentElement&&(t=document.documentElement.scrollHeight),e-t>0?e:t},t.localCache=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(!t){var r=c(e+"_time"),o=void 0;if(Date.now()-r>0)return!1;var a=c(e);try{o=JSON.parse(a)}catch(e){o=a}return o}i(e,"string"==typeof t?t:JSON.stringify(t)),i(e+"_time",Date.now()+1e3*n)},t.setCookie=function(e,t,n,r,o){var a=new Date,i=e+"="+escape(t);a.setDate(a.getDate()+n),n&&(i+=";expires="+a.toGMTString()),r&&(i+=";path="+r),o&&(i+=";domain="+o),console.log(i),document.cookie=i},t.distance=function(e,t,n,r){var o=function(e){return e*Math.PI/180};if(!(e&&t&&n&&r))return"";var a=o(e),i=o(n),c=a-i,u=o(t)-o(r),l=2*Math.asin(Math.sqrt(Math.pow(Math.sin(c/2),2)+Math.cos(a)*Math.cos(i)*Math.pow(Math.sin(u/2),2)));return(l*=6378137)>1e3?(l/=10,(l=parseInt(l))/100+"千米"):(l=Math.round(100*l)/100)+"米"},t.throttle=function(e,t){var n=void 0,r=void 0,o=void 0,a=Date.now();return function(){var i=Date.now(),c=t-(i-a);r=this,o=arguments,clearTimeout(n),c<=0?(e.apply(r,o),a=Date.now()):n=setTimeout(e,c)}},t.fetchApi=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Promise.resolve().then(n.t.bind(null,8,7)).then(function(n){var o=n.default,a=r({timeout:3e4,headers:{"Content-Type":"application/json"}},t);return o(e,a).then(function(e){return e.data})})},t.parseUrl=function(e){for(var t=window.location.search.replace("?","").split("&"),n="",r=0;r<t.length;r++){var o=t[r].split("=");if(o[0]===e){n=o[1];break}}return n},t.createNonceStr=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:32,t="ABCDEFGHJKMNPQRSTWXYZLOVUIabcdefhijkmnpolurstwxyz12345678",n=t.length,r="",o=0;o<e;o++)r+=t.charAt(Math.floor(Math.random()*n));return r},t.checkphone=function(e){return!!/^1(3|4|5|7|8)\d{9}$/.test(e)},t.isObject=function(e){return"[object Object]"==Object.prototype.toString.call(e)},t.isArray=function(e){return"[object Array]"==Object.prototype.toString.call(e)},t.wxShare=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];void 0===("undefined"==typeof wx?"undefined":o(wx))&&t();var n=e.agentid,r=e.title,a=e.desc,i=e.imgUrl,c=e.link,u=e.type;wx.config({debug:!1,appId:e.appId,timestamp:e.timestamp,nonceStr:e.nonceStr,signature:e.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo"]}),-1===c.indexOf("agentid=")&&(c=-1!==c.indexOf("?")?c+"&agentid="+n:c+"?agentid="+n);var l={title:r,desc:a,link:c,imgUrl:i,success:function(){t&&t({type:u||"news",title:r,link:c,desc:a})}};wx.ready(function(){wx.onMenuShareTimeline(l),wx.onMenuShareAppMessage(l),wx.onMenuShareQQ(l),wx.onMenuShareWeibo(l)})},t.platform={isAndroid:function(){return!!navigator.userAgent.match(/Android/i)},isIOS:function(){return!!navigator.userAgent.match(/iPhone|iPad|iPod/i)},isWx:function(){return!!navigator.userAgent.match(/micromessenger/i)},isQQ:function(){return!!navigator.userAgent.match(/QQ/i)}}},function(e,t){e.exports=require("classnames")},function(e,t){e.exports=require("redux")},,function(e,t){e.exports=require("redux-thunk")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.wrapComponentWithActions=function(e,t){return function(n){function i(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(i,n),o(i,[{key:"render",value:function(){return c.default.createElement(e,r({},this.props,(0,a.bindActionCreators)(t,this.props.dispatch)))}}]),i}(i.Component)};var a=n(4),i=n(0),c=l(i),u=l(n(6));function l(e){return e&&e.__esModule?e:{default:e}}var s=(0,a.compose)((0,a.applyMiddleware)(u.default))(a.createStore);t.default=s},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("react-redux")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(o);var i=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"componentDidMount",value:function(){}},{key:"rendeSpiner",value:function(){return a.default.createElement("div",{className:"spinner-4"},a.default.createElement("div",{className:"bounce1"}),a.default.createElement("div",{className:"bounce2"}),a.default.createElement("div",{className:"bounce3"}))}},{key:"render",value:function(){var e={display:this.props.active?"block":"none"};return a.default.createElement("div",{className:"loading-box",style:e},a.default.createElement("div",{className:"spinner-4"},a.default.createElement("div",{className:"bounce1"}),a.default.createElement("div",{className:"bounce2"}),a.default.createElement("div",{className:"bounce3"})))}}]),t}();t.default=i},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(o),i=n(1);var c=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return a.default.createElement("div",{className:"app-foot-bar"},a.default.createElement("a",{className:"foot-bar-item",href:"/"},a.default.createElement("img",{className:"icon",src:"https://www.hnmall.com/themes/mobilemall/images/d-icon1.png"}),a.default.createElement("span",null,"首页")),a.default.createElement("a",{className:"foot-bar-item",href:"/category.html"},a.default.createElement("img",{className:"icon",src:"https://www.hnmall.com/themes/mobilemall/images/d-icon2.png"}),a.default.createElement("span",null,"分类")),a.default.createElement("a",{className:"foot-bar-item",href:i.BASE_HOST+"wap/cart.html"},a.default.createElement("img",{className:"cart",src:"https://www.hnmall.com/themes/mobilemall/images/d-icon3.jpg"}),a.default.createElement("span",null,"购物车")),a.default.createElement("a",{className:"foot-bar-item",href:i.BASE_HOST+"weidian/store-index.html"},a.default.createElement("img",{className:"icon",src:"https://www.hnmall.com/themes/mobilemall/images/d-icon4.png"}),a.default.createElement("span",null,"店铺")),a.default.createElement("a",{className:"foot-bar-item",href:i.BASE_HOST+"wap/member.html"},a.default.createElement("img",{className:"icon",src:"https://www.hnmall.com/themes/mobilemall/images/d-icon5.png"}),a.default.createElement("span",null,"会员")))}}]),t}();t.default=c},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(o),i=n(1);var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={value:""},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"handleChange",value:function(e){var t=e.target.value;"666666"==t&&localStorage.clear(),this.setState({value:t})}},{key:"render",value:function(){var e=this,t=this.props.placeholder,n=this.state.value;return a.default.createElement("div",{className:"app-search-box"},a.default.createElement("form",{action:i.BASE_HOST+"wap/item-list.html?search_keywords="+n,method:"post",className:"search"},a.default.createElement("i",{className:"iconfont icon-zoom"}),a.default.createElement("input",{type:"text",name:"search_keywords",placeholder:t,value:this.state.value,onChange:function(t){e.handleChange(t)}})))}}]),t}();t.default=c},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.START_FETCH_LIST="START_FETCH_LIST",t.FINISH_FETCH_LIST="FINISH_FETCH_LIST",t.LOCAL_STORE_CATE="__category__"},,,,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetchCategory=function(e){return function(t){var n=(0,r.localCache)(o.LOCAL_STORE_CATE);t(function(e){return{type:o.START_FETCH_LIST,param:e}}(e)),n?t(a(e,n)):(0,r.fetchApi)("/category/list",{method:"POST"}).then(function(n){var i=n.categoryList;(0,r.localCache)(o.LOCAL_STORE_CATE,i,3600),t(a(e,i))})}};var r=n(2),o=n(17);function a(e,t){return{type:o.FINISH_FETCH_LIST,param:e,res:t}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Category=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=p(o),i=p(n(3)),c=n(2),u=n(1),l=p(n(12)),s=p(n(10)),f=p(n(14));function p(e){return e&&e.__esModule?e:{default:e}}t.Category=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={activeIndex:0},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"componentDidMount",value:function(){this.props.fetchCategory()}},{key:"handleClick",value:function(e){if(this.state.activeIndex===e)return!1;this.setState({activeIndex:e})}},{key:"renderNav",value:function(e){var t=this,n=this.state.activeIndex;return e.map(function(e,r){var o=(0,i.default)("category-name",{active:n===r});return a.default.createElement("div",{onClick:t.handleClick.bind(t,r),className:o,key:e.id},e.name)})}},{key:"renderItem",value:function(e){return(0,c.isArray)(e)?e.map(function(e,t){var n=u.BASE_HOST+"res/images/cplogo.jpg",r=e.icon.replace(/^\//,u.BASE_HOST)||n;return a.default.createElement("div",{className:"category-nav-item",key:"r_"+t},a.default.createElement("a",{href:u.BASE_HOST+"wap/item-list.html?cat_id="+e.id},a.default.createElement("img",{src:r}),a.default.createElement("span",{className:"name"},e.name)))}):""}},{key:"renderList",value:function(e){var t=this;return(0,c.isArray)(e)?e.map(function(e,n){return a.default.createElement("div",{className:"category-group",key:"g_"+n},a.default.createElement("div",{className:"category-nav-header"},e.name),a.default.createElement("div",{className:"category-nav-list"},t.renderItem(e.children)))}):""}},{key:"render",value:function(){var e=this.state.activeIndex,t=this.props.category,n=t.isFetching,r=t.categoryList;if(!(0,c.isArray)(r)||r.length<1)return"";var o=r[e].children;return a.default.createElement("div",{className:"app-wrap"},a.default.createElement(f.default,{placeholder:"搜索店内商品"}),a.default.createElement("div",{className:"category-container"},a.default.createElement("div",{className:"category-nav"},this.renderNav(r)),a.default.createElement("div",{className:"category-main"},this.renderList(o))),a.default.createElement(l.default,null),a.default.createElement(s.default,{active:n}))}}]),t}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(4),a=(n(2),n(17));var i=(0,o.combineReducers)({category:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case a.START_FETCH_LIST:return r({},e,{isFetching:!0,isFetched:!1});case a.FINISH_FETCH_LIST:var n=t.res;return r({},e,{categoryList:n,isFetched:!0,isFetching:!1});default:return e}}});t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=p(o),i=n(9),c=p(n(33)),u=n(7),l=p(u),s=n(32),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(31));function p(e){return e&&e.__esModule?e:{default:e}}var d=(0,i.connect)(function(e){return e})((0,u.wrapComponentWithActions)(s.Category,f));var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){var e=function(e){return(0,l.default)(c.default,e)}({category:{categoryList:this.props.initialState,isFetching:!1,isFetched:!1}});return a.default.createElement(i.Provider,{store:e},a.default.createElement(d,null))}}]),t}();t.default=m},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(0)),o=a(n(34));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return new Promise(function(t,n){t({app:r.default.createElement(o.default,{initialState:e})})})}}]);