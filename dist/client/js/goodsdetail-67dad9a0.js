(window.webpackJsonp=window.webpackJsonp||[]).push([[3],[,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.BASE_HOST="https://wd.hnmall.com/",t.GPS_KEY="__geolocation__",t.TOKEN="__accessToken__",t.INSTALL_APP="install_hnmall_app",t.APPID="wxdbb96d20de9ed62a"},function(e,t,n){"use strict";var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function o(e){new qq.maps.Geolocation("PMOBZ-DSBK6-7NQSZ-EUK5J-A4PR6-DEB4V","hnmall").getLocation(function(t){var n={latitude:t.lat,longitude:t.lng,accuracy:t.accuracy};e(n)},function(t){console.log(t),e()},{timeout:8e3})}function i(e,t){localStorage.setItem(e,t)}function l(e){return localStorage.getItem(e)}t.formatPrice=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=("string"==typeof e?e:e.toString()).split(".");if(n[1]){for(var a=n[1],r="",o=0;o<t;o++)r+=a[o]?a[o]:"0";n[1]=r}else n[1]="00";return n[0]+"."+n[1]},t.isWechat=function(){var e=navigator.userAgent.toLowerCase();return/micromessenger/i.test(e)},t.isApp=function(){var e=navigator.userAgent.toLowerCase();return/YouAWeishop/i.test(e)},t.navigatorGeolocation=function(e){"geolocation"in navigator?navigator.geolocation.getCurrentPosition(function(t){e({latitude:t.coords.latitude,longitude:t.coords.longitude,accuracy:t.coords.accuracy})},function(t){console.log(t),o(e)},{timeout:5e3,maximumAge:6e4}):o(e)},t.appendScript=function(e){var t=document.createElement("script"),n=document.getElementsByTagName("head")[0];t.type="text/javascript",t.src=e,n.appendChild(t)},t.getLocationByWeixin=function(e,t){void 0===("undefined"==typeof wx?"undefined":r(wx))&&t(),wx.config({debug:!1,appId:e.appId,timestamp:e.timestamp,nonceStr:e.nonceStr,signature:e.signature,jsApiList:["checkJsApi","getLocation"]}),wx.ready(function(){wx.checkJsApi({jsApiList:["getLocation"],success:function(e){wx.getLocation({type:"wgs84",success:function(e){var n={latitude:e.latitude,longitude:e.longitude,speed:e.speed,accuracy:e.accuracy};t(n)},fail:function(){o(t)}})},fail:function(){o(t)}})})},t.getScrollTop=function(){var e=0,t=0;return document.body&&(e=document.body.scrollTop),document.documentElement&&(t=document.documentElement.scrollTop),e-t>0?e:t},t.getScrollHeight=function(){var e=0,t=0;return document.body&&(e=document.body.scrollHeight),document.documentElement&&(t=document.documentElement.scrollHeight),e-t>0?e:t},t.localCache=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(!t){var a=l(e+"_time"),r=void 0;if(Date.now()-a>0)return!1;var o=l(e);try{r=JSON.parse(o)}catch(e){r=o}return r}i(e,"string"==typeof t?t:JSON.stringify(t)),i(e+"_time",Date.now()+24*n*60*60*1e3)},t.setCookie=function(e,t,n,a,r){var o=new Date,i=e+"="+escape(t);o.setDate(o.getDate()+n),n&&(i+=";expires="+o.toGMTString()),a&&(i+=";path="+a),r&&(i+=";domain="+r),console.log(i),document.cookie=i},t.distance=function(e,t,n,a){var r=function(e){return e*Math.PI/180};if(!(e&&t&&n&&a))return"";var o=r(e),i=r(n),l=o-i,u=r(t)-r(a),c=2*Math.asin(Math.sqrt(Math.pow(Math.sin(l/2),2)+Math.cos(o)*Math.cos(i)*Math.pow(Math.sin(u/2),2)));return(c*=6378137)>1e3?(c/=10,(c=parseInt(c))/100+"千米"):(c=Math.round(100*c)/100)+"米"},t.throttle=function(e,t){var n=void 0,a=void 0,r=void 0,o=Date.now();return function(){var i=Date.now(),l=t-(i-o);a=this,r=arguments,clearTimeout(n),l<=0?(e.apply(a,r),o=Date.now()):n=setTimeout(e,l)}},t.fetchApi=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Promise.all([n.e(0),n.e(1)]).then(n.t.bind(null,25,7)).then(function(n){var r=n.default,o=a({timeout:3e4,headers:{"Content-Type":"application/json"}},t);return r(e,o).then(function(e){return e.data})})},t.parseUrl=function(e){for(var t=window.location.search.replace("?","").split("&"),n="",a=0;a<t.length;a++){var r=t[a].split("=");if(r[0]===e){n=r[1];break}}return n},t.createNonceStr=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:32,t="ABCDEFGHJKMNPQRSTWXYZLOVUIabcdefhijkmnpolurstwxyz12345678",n=t.length,a="",r=0;r<e;r++)a+=t.charAt(Math.floor(Math.random()*n));return a},t.checkphone=function(e){return!!/^1(3|4|5|7|8)\d{9}$/.test(e)},t.isObject=function(e){return"[object Object]"==Object.prototype.toString.call(e)},t.isArray=function(e){return"[object Array]"==Object.prototype.toString.call(e)},t.wxShare=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];void 0===("undefined"==typeof wx?"undefined":r(wx))&&t();var n=e.agentid,a=e.title,o=e.desc,i=e.imgUrl,l=e.link,u=e.type;wx.config({debug:!1,appId:e.appId,timestamp:e.timestamp,nonceStr:e.nonceStr,signature:e.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo"]}),-1===l.indexOf("agentid=")&&(l=-1!==l.indexOf("?")?l+"&agentid="+n:l+"?agentid="+n);var c={title:a,desc:o,link:l,imgUrl:i,success:function(){t&&t({type:u||"news",title:a,link:l,desc:o})}};wx.ready(function(){wx.onMenuShareTimeline(c),wx.onMenuShareAppMessage(c),wx.onMenuShareQQ(c),wx.onMenuShareWeibo(c)})}},,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();t.wrapComponentWithActions=function(e,t){return function(n){function i(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(i,n),r(i,[{key:"render",value:function(){return l.default.createElement(e,a({},this.props,(0,o.bindActionCreators)(t,this.props.dispatch)))}}]),i}(i.Component)};var o=n(5),i=n(0),l=c(i),u=c(n(18));function c(e){return e&&e.__esModule?e:{default:e}}var s=(0,o.compose)((0,o.applyMiddleware)(u.default))(o.createStore);t.default=s},,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r);var i=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),a(t,[{key:"componentDidMount",value:function(){}},{key:"rendeSpiner",value:function(){return o.default.createElement("div",{className:"spinner-4"},o.default.createElement("div",{className:"bounce1"}),o.default.createElement("div",{className:"bounce2"}),o.default.createElement("div",{className:"bounce3"}))}},{key:"render",value:function(){var e={display:this.props.active?"block":"none"};return o.default.createElement("div",{className:"loading-box",style:e},o.default.createElement("div",{className:"spinner-4"},o.default.createElement("div",{className:"bounce1"}),o.default.createElement("div",{className:"bounce2"}),o.default.createElement("div",{className:"bounce3"})))}}]),t}();t.default=i},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),o=u(r),i=u(n(4)),l=n(2);function u(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.state={active:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),a(t,[{key:"componentDidMount",value:function(){var e=this,t=Math.ceil(2*window.innerHeight);window.addEventListener("scroll",function(){var n=(0,l.getScrollTop)()>t;e.setState({active:n})})}},{key:"handleClick",value:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0,this.setState({active:!1})}},{key:"render",value:function(){var e=this.state.active,t=(0,i.default)("app-go-top",{active:e});return o.default.createElement("div",{className:t,onClick:this.handleClick})}}]),t}();t.default=c},,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.START_FETCH_DETAIL="START_FETCH_DETAIL",t.FINISH_FETCH_DETAIL="FINISH_FETCH_DETAIL",t.TOGGLE_ITEM_ATTR="TOGGLE_ITEM_ATTR",t.CLOSE_ALERT="CLOSE_ALERT",t.TOGGLE_POPUP="TOGGLE_POPUP"},,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetchGoodsDetail=function(e){return function(t){t(function(e){return{type:r.START_FETCH_DETAIL,param:e}}(e)),(0,a.fetchApi)("/goods/detail",{method:"POST",data:{id:e.itemId}}).then(function(n){t(function(e,t){return{type:r.FINISH_FETCH_DETAIL,param:e,res:t}}(e,n))})}},t.toggleAttr=function(e){return function(t){t(function(e){return{type:r.TOGGLE_ITEM_ATTR,param:e}}(e))}},t.closeAlert=function(e){return function(t){t(function(e){return{type:r.CLOSE_ALERT,param:e}}(e))}},t.togglePopup=function(e){return function(t){t(function(e){return{type:r.TOGGLE_POPUP,param:e}}(e))}};var a=n(2),r=n(26)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),o=l(r),i=l(n(4));n(1);function l(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleHide=n.handleHide.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),a(t,[{key:"componentDidMount",value:function(){}},{key:"handleHide",value:function(){this.props.bindTap()}},{key:"render",value:function(){var e=this.props.active,t=(0,i.default)("float-menu",{active:e});return o.default.createElement("div",{className:t,onClick:this.handleHide},o.default.createElement("div",{className:"mask"}),o.default.createElement("ul",{className:"menu-layer"},o.default.createElement("li",{className:"menu-item"},o.default.createElement("a",{href:"/"},o.default.createElement("i",{className:"iconfont icon-home"}),o.default.createElement("span",{className:"menu-text"},"首页"))),o.default.createElement("li",{className:"menu-item"},o.default.createElement("a",{href:"/category.html"},o.default.createElement("i",{className:"iconfont icon-cate"}),o.default.createElement("span",{className:"menu-text"},"分类"))),o.default.createElement("li",{className:"menu-item"},o.default.createElement("a",{href:"https://www.hnmall.com/wap/cart.html"},o.default.createElement("i",{className:"iconfont icon-cart"}),o.default.createElement("span",{className:"menu-text"},"购物车"))),o.default.createElement("li",{className:"menu-item"},o.default.createElement("a",{href:"https://www.hnmall.com/weidian/store-index.html"},o.default.createElement("i",{className:"iconfont icon-shop"}),o.default.createElement("span",{className:"menu-text"},"店铺"))),o.default.createElement("li",{className:"menu-item"},o.default.createElement("a",{href:"https://www.hnmall.com/wap/member.html"},o.default.createElement("i",{className:"iconfont icon-user"}),o.default.createElement("span",{className:"menu-text"},"会员")))))}}]),t}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),o=l(r),i=l(n(4));function l(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.hanleClick=n.hanleClick.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),a(t,[{key:"componentDidMount",value:function(){}},{key:"hanleClick",value:function(){this.props.close()}},{key:"render",value:function(){var e=this.props.message,t=(0,i.default)("app-mask",{active:e}),n=(0,i.default)("alert-container",{active:e});return o.default.createElement("div",{className:t},o.default.createElement("div",{className:n},o.default.createElement("div",{className:"alert-content"},e),o.default.createElement("div",{onClick:this.hanleClick,className:"alert-button"},"确定")))}}]),t}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),o=l(r),i=l(n(4));function l(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={value:e.value},n.handleChange=n.handleChange.bind(n),n.handleDecrease=n.handleDecrease.bind(n),n.handleIncrease=n.handleIncrease.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),a(t,[{key:"handleChange",value:function(e){e&&e.preventDefault();var t=this.props,n=t.onChange,a=t.minimum,r=t.maximum,o=parseInt(e.target.value)||0;o>r&&(o=r),o<a&&(o=a),this.setState({value:o},function(){n(o)})}},{key:"handleIncrease",value:function(){var e=this.state.value,t=this.props,n=t.maximum,a=t.step,r=t.onPlus;null!==n&&e>=n?r(e):(e+=a,this.setState({value:e},function(){r(e)}))}},{key:"handleDecrease",value:function(){var e=this.state.value,t=this.props,n=t.minimum,a=t.onMinus,r=t.step;null!==n&&e<=n?a(e):(e-=r,this.setState({value:e},function(){a(e)}))}},{key:"render",value:function(){var e=this.state.value,t=this.props,n=t.minimum,a=t.maximum,r=(0,i.default)("minus",{disabled:e<=n}),l=(0,i.default)("plus",{disabled:e>=a});return o.default.createElement("div",{className:"number-pick"},o.default.createElement("div",{className:"picker flex"},o.default.createElement("div",{className:r,onClick:this.handleDecrease},"-"),o.default.createElement("div",{className:"value"},o.default.createElement("input",{type:"number",value:e,onChange:this.handleChange})),o.default.createElement("div",{className:l,onClick:this.handleIncrease},"+")))}}]),t}();t.default=u,u.defaultProps={value:1,minimum:1,maximum:null,step:1,onPlus:function(){},onMinus:function(){},onChange:function(){}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),o=s(r),i=s(n(4)),l=n(2),u=s(n(41)),c=s(n(40));n(1);function s(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleHidePop=n.handleHidePop.bind(n),n.handleCloseAlert=n.handleCloseAlert.bind(n),n.handleBuy=n.handleBuy.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),a(t,[{key:"componentDidMount",value:function(){}},{key:"toggle",value:function(e,t){if(this.props.goods.goodsDetail.attr[e].values[t].disabled)return!1;this.props.toggleAttr({i:e,j:t})}},{key:"filter",value:function(e){for(var t=e.attr,n=e.sku,a="",r=[],o="",i=0;i<n.length;i++){var l=n[i];if(l.checked){o=l.price,a=l.value;break}}if(a||(t.forEach(function(e){r.push(e.name)}),a="请选择"+r.join("")),!o){n.sort(function(e,t){return e.price-t.price});var u=n[0].price,c=n[n.length-1].price;o=c!=u?u+" - "+c:u}return{name:a,price:o}}},{key:"handleHidePop",value:function(){this.props.togglePopup({status:!1})}},{key:"handleCloseAlert",value:function(){this.props.closeAlert()}},{key:"renderAttrList",value:function(e){var t=this;if(!(0,l.isObject)(e)||!(0,l.isArray)(e.attr))return"";var n=[];return e.attr.forEach(function(e,a){var r=e.values.map(function(e,n){var r=(0,i.default)("attr-item",{checked:e.checked,disabled:e.disabled});return o.default.createElement("div",{onClick:t.toggle.bind(t,a,n),className:r,key:e.id},e.value)});n.push(o.default.createElement("div",{className:"attr-wrap",key:e.id},o.default.createElement("div",{className:"attr-type"},e.name),o.default.createElement("div",{className:"attr-items flex"},r)))}),o.default.createElement("div",{className:"attr-list"},n)}},{key:"renderGoodsInfo",value:function(e){if(!(0,l.isObject)(e))return"数据错误";var t=this.filter(e),n=t.name,a=t.price;return o.default.createElement("div",{className:"goods-info flex"},o.default.createElement("div",{className:"goods-img"},o.default.createElement("a",{href:"javascript:;"},o.default.createElement("img",{className:"img",src:e.thumbnail}))),o.default.createElement("div",{className:"goods-attr"},o.default.createElement("div",{className:"price"},"￥",function(e){if(e.indexOf("-")>0)return e;var t=e.split(".");return o.default.createElement("span",null,o.default.createElement("b",null,t[0]),".",t[1])}(a)),o.default.createElement("div",{className:"attr"},n)),o.default.createElement("div",{className:"close",onClick:this.handleHidePop},o.default.createElement("i",{className:"iconfont icon-close"})))}},{key:"handleBuy",value:function(){this.props.togglePopup({status:!1}),this.props.buy()}},{key:"render",value:function(){var e=this.props.goods,t=e.goodsDetail,n=e.error,a=e.popupStatus,r=Math.max(t.user_max_limit||t.store),l=(0,i.default)("popup-wrap",{active:a}),s=(0,i.default)("popup",{active:a}),f=(0,i.default)("button",{active:this.props.status});return o.default.createElement("div",{ref:"popup",className:l},o.default.createElement("div",{className:"mask",onClick:this.handleHidePop}),o.default.createElement("div",{className:s},this.renderGoodsInfo(t),this.renderAttrList(t),o.default.createElement("div",{className:"bar"},o.default.createElement(u.default,{minimum:1,maximum:r}),o.default.createElement("div",{className:f,onClick:this.handleBuy},"立即购买"))),o.default.createElement(c.default,{message:n,close:this.handleCloseAlert}))}}]),t}();t.default=f},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),o=l(r),i=l(n(4));n(1);function l(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isActive:!1},n.handleFavorite=n.handleFavorite.bind(n),n.handleAddToCart=n.handleAddToCart.bind(n),n.handleClickBuy=n.handleClickBuy.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),a(t,[{key:"componentDidMount",value:function(){}},{key:"handleFavorite",value:function(){var e=this.state.isActive;this.setState({isActive:!e})}},{key:"handleAddToCart",value:function(){this.props.status||this.props.togglePopup({status:!0})}},{key:"handleClickBuy",value:function(){this.props.status||this.props.togglePopup({status:!0}),this.props.buy()}},{key:"render",value:function(){var e=this.state.isActive,t=(0,i.default)("iconfont icon",{"icon-start-off":!e,"icon-start-on":e});return o.default.createElement("div",{className:"tool-bar flex"},o.default.createElement("div",{className:"item",onClick:this.handleFavorite},o.default.createElement("i",{className:t}),o.default.createElement("span",{className:"text"},"收藏")),o.default.createElement("div",{className:"item"},o.default.createElement("i",{className:"iconfont icon icon-cart"}),o.default.createElement("span",{className:"text"},"购物车")),o.default.createElement("div",{onClick:this.handleAddToCart,className:"button add-cart"},"加入购物车"),o.default.createElement("div",{onClick:this.handleClickBuy,className:"button buy"},"立即购买"))}}]),t}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),l=f(i),u=f(n(3)),c=f(n(4)),s=n(2);n(1);function f(e){return e&&e.__esModule?e:{default:e}}var d=(r=a=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={activeIndex:0},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),o(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.goods.goodsDetail;this.props.fetchGoodsDetail({itemId:t.item_id});n.e(0).then(n.t.bind(null,6,7)).then(function(t){var n=t.default;e.mySwiper=new n(e.refs.slider,{autoHeight:!0,onSlideChangeEnd:function(t){var n=t.activeIndex;e.handleClick(n)}})})}},{key:"handleClick",value:function(e){if(this.state.activeIndex===e)return!1;this.mySwiper.slideTo(e),this.setState({activeIndex:e})}},{key:"renderTabSilder",value:function(){var e=this,t=this.state.activeIndex;return["图文详情","详细参数","备注信息"].map(function(n,a){var r=(0,c.default)("slider-item",{active:t===a});return l.default.createElement("div",{onClick:e.handleClick.bind(e,a),className:r,key:a},n)})}},{key:"renderDetailHTML",value:function(e){var t="";return(0,s.isObject)(e)&&(t=e.desc),{__html:t}}},{key:"renderGoodsParam",value:function(e){return e&&(0,s.isArray)(e.props)&&e.props.length?e.props.map(function(e,t){return l.default.createElement("div",{className:"parameter-table-view-cell",key:e.id},l.default.createElement("div",{className:"parameter-table-view-key"},e.name),l.default.createElement("div",{className:"parameter-table-view-val"},e.value))}):l.default.createElement("div",{className:"empty-props"},"暂无参数信息")}},{key:"renderGoodsNote",value:function(e){return e&&(0,s.isArray)(e.remark)&&e.remark.length?e.remark.map(function(e,t){return l.default.createElement("div",{className:"parameter-table-view-cell",key:t},l.default.createElement("div",{className:"parameter-table-view-key"},e.name),l.default.createElement("div",{className:"parameter-table-view-val"},e.value))}):l.default.createElement("div",{className:"empty-props"},"暂无信息")}},{key:"render",value:function(){var e=this.props.goods.detail;return l.default.createElement("div",{className:"section margin"},l.default.createElement("div",{className:"flex"},this.renderTabSilder()),l.default.createElement("div",{ref:"slider",className:"swiper-container detail-info"},l.default.createElement("div",{className:"swiper-wrapper"},l.default.createElement("div",{className:"swiper-slide",dangerouslySetInnerHTML:this.renderDetailHTML(e)}),l.default.createElement("div",{className:"swiper-slide"},l.default.createElement("div",{className:"parameter-table-view-header"},"基本参数"),this.renderGoodsParam(e)),l.default.createElement("div",{className:"swiper-slide"},this.renderGoodsNote(e)))))}}]),t}(),a.propTypes={sliders:u.default.array},r);t.default=d},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),l=c(i),u=c(n(3));function c(e){return e&&e.__esModule?e:{default:e}}var s=(r=a=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),o(t,[{key:"componentDidMount",value:function(){var e=this;n.e(0).then(n.t.bind(null,6,7)).then(function(t){new(0,t.default)(e.refs.slider,{autoplay:5e3,lazyLoading:!0,pagination:".swiper-pagination"})})}},{key:"renderSlider",value:function(){return this.props.sliders.map(function(e,t){return l.default.createElement("div",{className:"swiper-slide",key:t},l.default.createElement("img",{className:"img swiper-lazy","data-src":e}),l.default.createElement("div",{className:"swiper-lazy-preloader"}))})}},{key:"render",value:function(){return l.default.createElement("div",{ref:"slider",className:"swiper-container banner"},l.default.createElement("div",{className:"swiper-wrapper"},this.renderSlider()),l.default.createElement("div",{className:"swiper-pagination"}))}}]),t}(),a.propTypes={sliders:u.default.array},r);t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GoodsDetail=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),i=v(o),l=n(1),u=v(n(45)),c=v(n(44)),s=v(n(43)),f=v(n(42)),d=v(n(39)),p=v(n(15)),m=v(n(13)),h=n(2);function v(e){return e&&e.__esModule?e:{default:e}}t.GoodsDetail=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={showMenu:!1},n.handleClickPop=n.handleClickPop.bind(n),n.handleShowMenu=n.handleShowMenu.bind(n),n.handleHideMenu=n.handleHideMenu.bind(n),n.handleSubmit=n.handleSubmit.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"componentDidMount",value:function(){(0,h.isWechat)()&&this.setWeixinShare()}},{key:"setWeixinShare",value:function(){var e=encodeURIComponent(document.location.href),t=this.props.goods.goodsDetail,n=t.title,a=t.sub_title,r=t.thumbnail;(0,h.fetchApi)("/index/weixin",{method:"POST",data:{url:e}}).then(function(e){(0,h.wxShare)({appId:e.appId,nonceStr:e.nonceStr,signature:e.signature,timestamp:e.timestamp,agentid:e.agentid,title:n,link:location.href,desc:a,imgUrl:r},function(e){(0,h.fetchApi)("/index/wxshare",{method:"POST",data:e})})})}},{key:"handleBack",value:function(){history.back()}},{key:"handleShowMenu",value:function(){this.setState({showMenu:!0})}},{key:"handleHideMenu",value:function(){this.setState({showMenu:!1})}},{key:"handleClickPop",value:function(){this.props.togglePopup({status:!0})}},{key:"handleSubmit",value:function(){}},{key:"filterCheckedAttr",value:function(e){for(var t=e.attr,n=[],a=[],r=0;r<t.length;r++){var o=t[r];a.push(o.name);for(var i=0;i<o.values.length;i++){var l=o.values[i];if(l.checked){n.push(l.value);break}}}return n.join(";")||"请选择"+a.join(",")}},{key:"submitCheck",value:function(){for(var e=this.props.goods.goodsDetail.sku,t=void 0,n=0;n<e.length;n++){var a=e[n];if(a.checked&&a.valid&&a.store>0){t=a;break}}return t}},{key:"render",value:function(){var e=this.props.goods,t=e.goodsDetail,n=e.isFetching,r=t.price.split("."),o=l.BASE_HOST+"wap/shop-index.html?shop_id="+t.shop_id,h=this.submitCheck();return i.default.createElement("div",{className:"app-wrap"},i.default.createElement("div",{className:"header"},i.default.createElement("div",{className:"back",onClick:this.handleBack},i.default.createElement("i",{className:"iconfont icon-zuo"})),i.default.createElement("div",{className:"menu",onClick:this.handleShowMenu},i.default.createElement("i",{className:"iconfont icon-caidan"}))),i.default.createElement(d.default,{bindTap:this.handleHideMenu,active:this.state.showMenu}),i.default.createElement(u.default,{sliders:t.images}),i.default.createElement("div",{className:"section"},i.default.createElement("div",{className:"title"},t.title),i.default.createElement("div",{className:"sub-title"},t.sub_title),i.default.createElement("div",{className:"price"},"￥",i.default.createElement("b",null,r[0]),i.default.createElement("i",null,".",r[1]),i.default.createElement("del",null,t.mkt_price))),i.default.createElement("div",{className:"section margin"},i.default.createElement("div",{className:"attr-row",onClick:this.handleClickPop},i.default.createElement("span",{className:"attr-tip"},"已选"),i.default.createElement("span",{className:"attr-name"},this.filterCheckedAttr(t)),i.default.createElement("i",{className:"iconfont icon-arrowright"})),i.default.createElement("div",{className:"attr-row"},i.default.createElement("span",{className:"attr-tip"},"提示:"),i.default.createElement("span",{className:"attr-name"},"卖家承担运费"),i.default.createElement("i",{className:"iconfont icon-arrowright"}))),i.default.createElement("div",{className:"section flex shop"},i.default.createElement("a",{className:"shop-logo",hef:"/"},i.default.createElement("img",{className:"img",src:t.shoplogo})),i.default.createElement("div",{className:"shop-name"},t.shopname),i.default.createElement("a",{className:"shop-enter",href:o},"进店逛逛")),i.default.createElement(c.default,this.props),i.default.createElement(s.default,a({},this.props,{buy:this.handleSubmit,status:h})),i.default.createElement(f.default,a({},this.props,{buy:this.handleSubmit,status:h})),i.default.createElement(m.default,{active:n}),i.default.createElement(p.default,null))}}]),t}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=n(5),o=(n(2),n(26));var i=(0,r.combineReducers)({goods:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case o.START_FETCH_DETAIL:return a({},e,{isFetching:!0,isFetched:!1});case o.FINISH_FETCH_DETAIL:var n=t.res;return a({},e,{detail:n,isFetched:!0,isFetching:!1});case o.TOGGLE_ITEM_ATTR:var r=function(e,t){var n=t.i,r=t.j,o=!e[n].values[r].checked;return e.map(function(e,t){var i=e.values.map(function(e,i){return t===n?a({},e,{checked:i===r&&o}):a({},e)});return a({},e,{values:i})})}(e.goodsDetail.attr,t.param),i=function(e,t){var n=[];return e.forEach(function(e){e.values.forEach(function(e){e.checked&&n.push(e.id)})}),t.map(function(e){var t=!1;return n.join("_")===e.id&&(t=!0),a({},e,{checked:t})})}(r,e.goodsDetail.sku);r=function(e,t,n){for(var a=n.i,r=n.j,o=e[a].values[r],i=[],l=0;l<t.length;l++){var u=t[l];if(o.checked&&-1!==u.id.indexOf(o.id)){var c=u.id.replace(o.id,"").replace("_","");i.push(c)}}for(var s=0;s<e.length;s++)if(s!==a)for(var f=0;f<e[s].values;f++){var d=e[s].values[f];d.disabled=!1,i.length&&-1===i.indexOf(d.id)&&(d.disabled=!0)}return e}(r,i,t.param);var l=a({},e.goodsDetail,{attr:r,sku:i});return a({},e,{goodsDetail:l});case o.CLOSE_ALERT:return a({},e,{error:!1});case o.TOGGLE_POPUP:var u=t.param.status;return a({},e,{popupStatus:u});default:return e}}});t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),o=d(r),i=n(12),l=d(n(47)),u=n(7),c=d(u),s=n(46),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(38));function d(e){return e&&e.__esModule?e:{default:e}}var p=(0,i.connect)(function(e){return e})((0,u.wrapComponentWithActions)(s.GoodsDetail,f));var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),a(t,[{key:"render",value:function(){var e=function(e){return(0,c.default)(l.default,e)}({goods:{goodsDetail:this.props.initialState,popupStatus:!1,isFetching:!1,isFetched:!1}});return o.default.createElement(i.Provider,{store:e},o.default.createElement(p,null))}}]),t}();t.default=m},,,,function(e,t,n){},function(e,t,n){"use strict";n(52);var a=i(n(0)),r=i(n(10)),o=i(n(48));function i(e){return e&&e.__esModule?e:{default:e}}var l=JSON.parse(document.getElementById("initial-state").textContent);r.default.hydrate(a.default.createElement(o.default,{initialState:l}),document.getElementById("app"))}],[[53,2,0]]]);