(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{19:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(0),r=l(a),i=l(n(3));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.hanleClick=n.hanleClick.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"componentDidMount",value:function(){}},{key:"hanleClick",value:function(){this.props.close()}},{key:"render",value:function(){var e=this.props.message,t=(0,i.default)("app-mask",{active:e}),n=(0,i.default)("alert-container",{active:e});return r.default.createElement("div",{className:t},r.default.createElement("div",{className:n},r.default.createElement("div",{className:"alert-content"},e),r.default.createElement("div",{onClick:this.hanleClick,className:"alert-button"},"确定")))}}]),t}();t.default=c},2:function(e,t,n){"use strict";function o(e,t){localStorage.setItem(e,t)}function a(e){return localStorage.getItem(e)}function r(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(!t){var r=a(e+"_time"),i=void 0;if(Date.now()-r>0)return!1;var l=a(e);try{i=JSON.parse(l)}catch(e){i=l}return i}o(e,"string"==typeof t?t:JSON.stringify(t)),o(e+"_time",Date.now()+24*n*60*60*1e3)}t.formatPrice=function(e){return parseFloat(e).toFixed(2)},t.isWechat=function(){var e=navigator.userAgent.toLowerCase();return/micromessenger/i.test(e)},t.getLocationTencent=function(e){var t=r("geolocation");if(t)return e(t);new qq.maps.Geolocation("PMOBZ-DSBK6-7NQSZ-EUK5J-A4PR6-DEB4V","hnmall").getLocation(function(t){console.log(t),r("geolocation",{lat:t.lat,lng:t.lng}),e(t)},function(){e()})},t.getScrollTop=function(){var e;return window.pageYOffset?e=window.pageYOffset:document.compatMode&&"BackCompat"!=document.compatMode?e=document.documentElement.scrollTop:document.body&&(e=document.body.scrollTop),e},t.localCache=r,t.setCookie=function(e,t,n){var o=new Date;o.setDate(o.getDate()+n),document.cookie=e+"="+escape(t)+(null==n?"":";expires="+o.toGMTString())},t.checkphone=function(e){return!!/^1(3|4|5|7|8)\d{9}$/.test(e)},t.isObject=function(e){return"[object Object]"==Object.prototype.toString.call(e)},t.isArray=function(e){return"[object Array]"==Object.prototype.toString.call(e)}},20:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Index=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(0),r=u(a),i=u(n(3)),l=n(2),c=u(n(19));function u(e){return e&&e.__esModule?e:{default:e}}var s="获取验证码";t.Index=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleLogin=n.handleLogin.bind(n),n.handleClose=n.handleClose.bind(n),n.state={message:"",codeText:s,isLoading:!1,phoneNumber:"",cmsCode:""},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"componentDidMount",value:function(){}},{key:"handleChange",value:function(e,t){var n=e.target.value;this.setState(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},t,n))}},{key:"handleClose",value:function(){this.setState({message:""})}},{key:"handleSendSms",value:function(){var e=this,t=this.state.phoneNumber;axios.post("/user/sms",{phone:t}).then(function(t){t.msg&&e.setState({message:t.msg})})}},{key:"handleClick",value:function(e){var t=this,n=this.state,o=n.phoneNumber;if(n.codeText!==s)return!1;if(!(0,l.checkphone)(o))return this.setState({message:"电话号码不正确"}),!1;var a=void 0;!function e(n){var o=n+"秒后重试";n<1&&(clearTimeout(a),o=s),t.setState({codeText:o}),a=setTimeout(function(){e(n-1)},1e3)}(60),this.handleSendSms()}},{key:"handleLogin",value:function(){var e=this,t=this.state,n=t.phoneNumber,o=t.cmsCode;return!t.isLoading&&((0,l.checkphone)(n)?o?(this.setState({isLoading:!0}),axios.post("/user/login",{phone:n,code:o}).then(function(t){(0,l.localCache)("user_info",t.data,30),e.setState({isLoading:!1}),location.href="/member.html"}),void console.log(n,o)):(this.setState({message:"请填写短信验证码"}),!1):(this.setState({message:"电话号码不正确"}),!1))}},{key:"render",value:function(){var e=this,t=this.state,n=t.phoneNumber,o=(t.cmsCode,t.codeText),a=t.isLoading,l=(0,i.default)("code-text",{dis:o!==s}),u=(0,i.default)("submit-button",{dis:a});return r.default.createElement("div",{className:"app-wrap"},r.default.createElement("div",{className:"form"},r.default.createElement("div",{className:"form-item"},r.default.createElement("label",{className:"tag-label"},"手机号："),r.default.createElement("input",{className:"phone-value",value:n,onChange:function(t){e.handleChange(t,"phoneNumber")},type:"tel",placeholder:"请输入您的手机号"})),r.default.createElement("div",{className:"form-item"},r.default.createElement("label",{className:"tag-label"},"验证码："),r.default.createElement("input",{className:"cms-value",onChange:function(t){e.handleChange(t,"cmsCode")},placeholder:"请输入短信验证码"}),r.default.createElement("span",{onClick:this.handleClick,className:l},o)),r.default.createElement("button",{className:u,onClick:this.handleLogin},"登录")),r.default.createElement("div",{className:"bottom-area"},r.default.createElement("div",{className:"icon-weixin"}),r.default.createElement("div",{className:"weixin-lgoin"},"授权微信登陆")),r.default.createElement(c.default,{message:this.state.message,close:this.handleClose}))}}]),t}()},23:function(e,t,n){},24:function(e,t,n){"use strict";n(23);var o=i(n(0)),a=i(n(7)),r=n(20);function i(e){return e&&e.__esModule?e:{default:e}}a.default.hydrate(o.default.createElement(r.Index,null),document.getElementById("app"))}},[[24,0,1]]]);