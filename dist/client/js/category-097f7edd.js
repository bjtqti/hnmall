(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1:function(e,t,n){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=void 0;function i(e){new qq.maps.Geolocation("PMOBZ-DSBK6-7NQSZ-EUK5J-A4PR6-DEB4V","hnmall").getLocation(function(t){var n={latitude:t.lat,longitude:t.lng,accuracy:t.accuracy};e(n)},function(t){console.log(t),e()},{timeout:8e4})}function c(e,t){localStorage.setItem(e,t)}function u(e){return localStorage.getItem(e)}t.formatPrice=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=("string"==typeof e?e:e.toString()).split(".");if(n[1]){for(var r=n[1],o="",a=0;a<t;a++)o+=r[a]?r[a]:"0";n[1]=o}else n[1]="00";return n[0]+"."+n[1]},t.isWechat=function(){var e=navigator.userAgent.toLowerCase();return/micromessenger/i.test(e)},t.navigatorGeolocation=function(e){"geolocation"in navigator?navigator.geolocation.getCurrentPosition(function(t){e({latitude:t.coords.latitude,longitude:t.coords.longitude,accuracy:t.coords.accuracy})},function(t){console.log(t),i(e)},{timeout:5e3,maximumAge:6e4}):i(e)},t.appendScript=function(e){var t=document.createElement("script"),n=document.getElementsByTagName("head")[0];t.type="text/javascript",t.src=e,n.appendChild(t)},t.getLocationByWeixin=function(e,t){void 0===("undefined"==typeof wx?"undefined":o(wx))&&t(),wx.config({debug:!1,appId:e.appId,timestamp:e.timestamp,nonceStr:e.nonceStr,signature:e.signature,jsApiList:["checkJsApi","openLocation","getLocation"]}),wx.ready(function(){wx.checkJsApi({jsApiList:["getLocation"],success:function(e){wx.getLocation({type:"wgs84",success:function(e){var n={latitude:e.latitude,longitude:e.longitude,speed:e.speed,accuracy:e.accuracy};t(n)},fail:function(){console.log("error***weixin"),i(t)}})},fail:function(){i(t)}})})},t.getScrollTop=function(){var e=0,t=0;return document.body&&(e=document.body.scrollTop),document.documentElement&&(t=document.documentElement.scrollTop),e-t>0?e:t},t.getScrollHeight=function(){var e=0,t=0;return document.body&&(e=document.body.scrollHeight),document.documentElement&&(t=document.documentElement.scrollHeight),e-t>0?e:t},t.localCache=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(!t){var r=u(e+"_time"),o=void 0;if(Date.now()-r>0)return!1;var a=u(e);try{o=JSON.parse(a)}catch(e){o=a}return o}c(e,"string"==typeof t?t:JSON.stringify(t)),c(e+"_time",Date.now()+1e3*n)},t.setCookie=function(e,t,n,r,o){var a=new Date,i=e+"="+escape(t);a.setDate(a.getDate()+n),n&&(i+=";expires="+a.toGMTString()),r&&(i+=";path="+r),o&&(i+=";domain="+o),console.log(i),document.cookie=i},t.distance=function(e,t,n,r){var o=function(e){return e*Math.PI/180};if(!(e&&t&&n&&r))return"";var a=o(e),i=o(n),c=a-i,u=o(t)-o(r),l=2*Math.asin(Math.sqrt(Math.pow(Math.sin(c/2),2)+Math.cos(a)*Math.cos(i)*Math.pow(Math.sin(u/2),2)));return(l*=6378137)>1e3?(l/=10,(l=parseInt(l))/100+"千米"):(l=Math.round(100*l)/100)+"米"},t.throttle=function(e,t){var n=void 0,r=void 0,o=void 0,a=Date.now();return function(){var i=Date.now(),c=t-(i-a);r=this,o=arguments,clearTimeout(n),c<=0?(e.apply(r,o),a=Date.now()):n=setTimeout(e,c)}},t.fetchApi=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=r({timeout:3e4,headers:{"Content-Type":"application/json"}},t),i=function(){return a(e,o).then(function(e){return e.data})};return a?i():Promise.all([n.e(1),n.e(2)]).then(n.t.bind(null,26,7)).then(function(e){return a=e.default,i()})},t.parseUrl=function(e){for(var t=window.location.search.replace("?","").split("&"),n="",r=0;r<t.length;r++){var o=t[r].split("=");if(o[0]===e){n=o[1];break}}return n},t.createNonceStr=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:32,t="ABCDEFGHJKMNPQRSTWXYZLOVUIabcdefhijkmnpolurstwxyz12345678",n=t.length,r="",o=0;o<e;o++)r+=t.charAt(Math.floor(Math.random()*n));return r},t.checkphone=function(e){return!!/^1(3|4|5|7|8)\d{9}$/.test(e)},t.isObject=function(e){return"[object Object]"==Object.prototype.toString.call(e)},t.isArray=function(e){return"[object Array]"==Object.prototype.toString.call(e)},t.wxShare=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];void 0===("undefined"==typeof wx?"undefined":o(wx))&&t();var n=e.agentid,r=e.title,a=e.desc,i=e.imgUrl,c=e.link,u=e.type;wx.config({debug:!1,appId:e.appId,timestamp:e.timestamp,nonceStr:e.nonceStr,signature:e.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo"]}),-1===c.indexOf("agent_id=")&&(c=-1!==c.indexOf("?")?c+"&agent_id="+n:c+"?agent_id="+n);var l={title:r,desc:a,link:c,imgUrl:i,success:function(){t&&t({type:u||"news",title:r,link:c,desc:a})}};wx.ready(function(){wx.onMenuShareTimeline(l),wx.onMenuShareAppMessage(l),wx.onMenuShareQQ(l),wx.onMenuShareWeibo(l)})},t.platform={isAndroid:function(){return!!navigator.userAgent.match(/Android/i)},isIOS:function(){return!!navigator.userAgent.match(/iPhone|iPad|iPod/i)},isWx:function(){return!!navigator.userAgent.match(/micromessenger/i)},isQQ:function(){return!!navigator.userAgent.match(/QQ/i)}}},13:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(o);var i=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"componentDidMount",value:function(){}},{key:"rendeSpiner",value:function(){return a.default.createElement("div",{className:"spinner-4"},a.default.createElement("div",{className:"bounce1"}),a.default.createElement("div",{className:"bounce2"}),a.default.createElement("div",{className:"bounce3"}))}},{key:"render",value:function(){var e={display:this.props.active?"block":"none"};return a.default.createElement("div",{className:"loading-box",style:e},a.default.createElement("div",{className:"spinner-4"},a.default.createElement("div",{className:"bounce1"}),a.default.createElement("div",{className:"bounce2"}),a.default.createElement("div",{className:"bounce3"})))}}]),t}();t.default=i},15:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=(function(e){e&&e.__esModule}(o),n(1)),i=n(2);var c=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"componentDidMount",value:function(){if(!(0,a.isWechat)())return!1;this.setWeixinShare()}},{key:"setWeixinShare",value:function(e,t){var n=this,r=this.props.info,o=r.title,c=r.desc,u=r.image,l=document.location.href;(0,a.fetchApi)("/index/weixin",{method:"POST",data:{url:encodeURIComponent(l)}}).then(function(r){var s=(0,a.localCache)(i.AGENTID)||e;if(!s)return!t&&n.getUserInfo(),!1;(0,a.wxShare)({appId:r.appId,nonceStr:r.nonceStr,signature:r.signature,timestamp:r.timestamp,agentid:s,title:o,link:l,desc:c,imgUrl:u},function(e){(0,a.fetchApi)("/index/wxshare",{method:"POST",data:e})})})}},{key:"getUserInfo",value:function(){var e=this,t=(0,a.parseUrl)("code");if(!t){var n=(0,a.createNonceStr)(16),r=encodeURIComponent(location.href),o=i.BASE_HOST+"weidian/get-code.html?appid="+i.APPID+"&state="+n+"&scope=snsapi_base&redirect_uri="+r;return location.href=o,!1}(0,a.fetchApi)("/index/token",{method:"POST",data:{code:t}}).then(function(t){if(t&&t.message){var n=t.message,r=n.accessToken,o=n.agent_id;(0,a.localCache)(i.TOKEN,r,604800),(0,a.localCache)(i.AGENTID,o,2592e3),e.setWeixinShare(o,!0)}})}},{key:"render",value:function(){return""}}]),t}();t.default=c},17:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(o),i=n(2);var c=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return a.default.createElement("div",{className:"app-foot-bar"},a.default.createElement("a",{className:"foot-bar-item",href:"/"},a.default.createElement("img",{className:"icon",src:"https://www.hnmall.com/themes/mobilemall/images/d-icon1.png"}),a.default.createElement("span",null,"首页")),a.default.createElement("a",{className:"foot-bar-item",href:"/category.html"},a.default.createElement("img",{className:"icon",src:"https://www.hnmall.com/themes/mobilemall/images/d-icon2.png"}),a.default.createElement("span",null,"分类")),a.default.createElement("a",{className:"foot-bar-item",href:i.BASE_HOST+"wap/cart.html"},a.default.createElement("img",{className:"cart",src:"https://www.hnmall.com/themes/mobilemall/images/d-icon3.jpg"}),a.default.createElement("span",null,"购物车")),a.default.createElement("a",{className:"foot-bar-item",href:i.BASE_HOST+"weidian/store-index.html"},a.default.createElement("img",{className:"icon",src:"https://www.hnmall.com/themes/mobilemall/images/d-icon4.png"}),a.default.createElement("span",null,"店铺")),a.default.createElement("a",{className:"foot-bar-item",href:i.BASE_HOST+"wap/member.html"},a.default.createElement("img",{className:"icon",src:"https://www.hnmall.com/themes/mobilemall/images/d-icon5.png"}),a.default.createElement("span",null,"会员")))}}]),t}();t.default=c},18:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(o),i=n(2);var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={value:""},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"handleChange",value:function(e){var t=e.target.value;"666666"==t&&localStorage.clear(),this.setState({value:t})}},{key:"render",value:function(){var e=this,t=this.props.placeholder,n=this.state.value;return a.default.createElement("div",{className:"app-search-box"},a.default.createElement("form",{action:i.BASE_HOST+"wap/item-list.html?search_keywords="+n,method:"post",className:"search"},a.default.createElement("i",{className:"iconfont icon-zoom"}),a.default.createElement("input",{type:"text",name:"search_keywords",placeholder:t,value:this.state.value,onChange:function(t){e.handleChange(t)}})))}}]),t}();t.default=c},2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.BASE_HOST="https://wd.hnmall.com/",t.GPS_KEY="__geolocation__",t.TOKEN="__accessToken__",t.AGENTID="__agentid__",t.INSTALL_APP="install_hnmall_app",t.APPID="wxdbb96d20de9ed62a"},28:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.START_FETCH_LIST="START_FETCH_LIST",t.FINISH_FETCH_LIST="FINISH_FETCH_LIST",t.LOCAL_STORE_CATE="__category__"},55:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetchCategory=function(e){return function(t){var n=(0,r.localCache)(o.LOCAL_STORE_CATE);t(function(e){return{type:o.START_FETCH_LIST,param:e}}(e)),n?t(a(e,n)):(0,r.fetchApi)("/category/list",{method:"POST"}).then(function(n){var i=n.categoryList;(0,r.localCache)(o.LOCAL_STORE_CATE,i,3600),t(a(e,i))})}};var r=n(1),o=n(28);function a(e,t){return{type:o.FINISH_FETCH_LIST,param:e,res:t}}},56:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Category=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=d(o),i=d(n(4)),c=n(1),u=n(2),l=d(n(17)),s=d(n(13)),f=d(n(15)),p=d(n(18));function d(e){return e&&e.__esModule?e:{default:e}}t.Category=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={activeIndex:0},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"componentDidMount",value:function(){var e=this;this.props.fetchCategory(),n.e(3).then(n.t.bind(null,96,7)).then(function(t){var n=t.default;e.leftScroll=new n(e.refs.nav,{snap:"li",tap:"click"}),e.rightScroll=new n(e.refs.list,{preventDefault:!1,tap:"click"})})}},{key:"componentDidUpdate",value:function(e,t){var n=e.category.isFetched,r=this.props.category.isFetched,o=this.state.activeIndex;this.rightScroll&&(t.activeIndex!==o&&this.rightScroll.refresh(),n!==r&&(this.leftScroll.refresh(),this.rightScroll.refresh()))}},{key:"handleClick",value:function(e){if(this.state.activeIndex===e)return!1;this.rightScroll.scrollTo(0,0),this.setState({activeIndex:e})}},{key:"handleNaviget",value:function(e){var t=(0,c.localCache)(u.AGENTID),n=u.BASE_HOST+"wap/item-list.html?cat_id="+e;n+=t?"&agent_id="+t:"",location.href=n}},{key:"renderNav",value:function(e){var t=this,n=this.state.activeIndex,r=e.map(function(e,r){var o=(0,i.default)("category-name",{active:n===r});return a.default.createElement("li",{onClick:t.handleClick.bind(t,r),className:o,key:e.id},e.name)});return a.default.createElement("ul",{className:"item-wrap"},r)}},{key:"renderItem",value:function(e){var t=this;return(0,c.isArray)(e)?e.map(function(e,n){var r=u.BASE_HOST+"res/images/cplogo.jpg",o=e.icon.replace(/^\//,u.BASE_HOST)||r;return a.default.createElement("div",{className:"category-nav-item",key:"r_"+n},a.default.createElement("span",{onClick:t.handleNaviget.bind(t,e.id)},a.default.createElement("img",{src:o}),a.default.createElement("span",{className:"name"},e.name)))}):""}},{key:"renderList",value:function(e){var t=this,n=this.state.activeIndex;if(!(0,c.isArray)(e)||!e[n])return"";var r=e[n].children.map(function(e,n){return a.default.createElement("div",{className:"category-group",key:"g_"+n},a.default.createElement("div",{className:"category-nav-header"},e.name),a.default.createElement("div",{className:"category-nav-list"},t.renderItem(e.children)))});return a.default.createElement("div",{className:"item-wrap"},r)}},{key:"render",value:function(){var e=this.props.category,t=e.isFetching,n=(e.isFetched,e.categoryList);return a.default.createElement("div",{className:"app-wrap"},a.default.createElement(p.default,{placeholder:"搜索店内商品"}),a.default.createElement("div",{className:"category-container"},a.default.createElement("div",{ref:"nav",className:"category-nav"},this.renderNav(n)),a.default.createElement("div",{ref:"list",className:"category-main"},this.renderList(n))),a.default.createElement(l.default,null),a.default.createElement(f.default,{info:{title:"友阿微店--更高品质，便捷生活",desc:"友阿微店--更高品质，便捷生活",image:"https://www.hnmall.com/res/images/cplogo.jpg"}}),a.default.createElement(s.default,{active:t}))}}]),t}()},57:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(5),a=(n(1),n(28));var i=(0,o.combineReducers)({category:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case a.START_FETCH_LIST:return r({},e,{isFetching:!0,isFetched:!1});case a.FINISH_FETCH_LIST:var n=t.res;return r({},e,{categoryList:n,isFetched:!0,isFetching:!1});default:return e}}});t.default=i},58:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=p(o),i=n(12),c=p(n(57)),u=n(6),l=p(u),s=n(56),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(55));function p(e){return e&&e.__esModule?e:{default:e}}var d=(0,i.connect)(function(e){return e})((0,u.wrapComponentWithActions)(s.Category,f));var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){var e=function(e){return(0,l.default)(c.default,e)}({category:{categoryList:this.props.initialState,isFetching:!1,isFetched:!1}});return a.default.createElement(i.Provider,{store:e},a.default.createElement(d,null))}}]),t}();t.default=m},6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.wrapComponentWithActions=function(e,t){return function(n){function i(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(i,n),o(i,[{key:"render",value:function(){return c.default.createElement(e,r({},this.props,(0,a.bindActionCreators)(t,this.props.dispatch)))}}]),i}(i.Component)};var a=n(5),i=n(0),c=l(i),u=l(n(19));function l(e){return e&&e.__esModule?e:{default:e}}var s=(0,a.compose)((0,a.applyMiddleware)(u.default))(a.createStore);t.default=s},60:function(e,t,n){},61:function(e,t,n){"use strict";n(60);var r=i(n(0)),o=i(n(10)),a=i(n(58));function i(e){return e&&e.__esModule?e:{default:e}}var c=JSON.parse(document.getElementById("initial-state").textContent);o.default.hydrate(r.default.createElement(a.default,{initialState:c}),document.getElementById("app"))}},[[61,4,1]]]);