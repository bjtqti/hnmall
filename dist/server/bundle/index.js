module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _app = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (initialState) {
    return new Promise(function (resolve, reject) {
        var app = _react2.default.createElement(_app.Index, { initialState: initialState });
        resolve({ app: app });
    });
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Index = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _appbar = __webpack_require__(4);

var _appbar2 = _interopRequireDefault(_appbar);

var _searchbar = __webpack_require__(7);

var _searchbar2 = _interopRequireDefault(_searchbar);

var _bannerswiper = __webpack_require__(9);

var _bannerswiper2 = _interopRequireDefault(_bannerswiper);

var _navmenu = __webpack_require__(10);

var _navmenu2 = _interopRequireDefault(_navmenu);

var _textswiper = __webpack_require__(11);

var _textswiper2 = _interopRequireDefault(_textswiper);

var _widget = __webpack_require__(12);

var _widget2 = _interopRequireDefault(_widget);

var _footbar = __webpack_require__(14);

var _footbar2 = _interopRequireDefault(_footbar);

var _goodslist = __webpack_require__(15);

var _goodslist2 = _interopRequireDefault(_goodslist);

var _copyright = __webpack_require__(16);

var _copyright2 = _interopRequireDefault(_copyright);

var _gotop = __webpack_require__(17);

var _gotop2 = _interopRequireDefault(_gotop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = exports.Index = (_temp = _class = function (_Component) {
	_inherits(Index, _Component);

	function Index(props) {
		_classCallCheck(this, Index);

		return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
	}

	_createClass(Index, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'renderWidgets',
		value: function renderWidgets() {
			var _props$initialState = this.props.initialState,
			    modules = _props$initialState.modules,
			    more_url = _props$initialState.more_url;

			var widgets = [];
			modules.forEach(function (module, i) {
				switch (module.widget) {
					case 'slider':
						widgets.push(_react2.default.createElement(_bannerswiper2.default, { sliders: module.params.pic, key: 'slider_' + i }));
						break;
					case 'icons_nav':
						widgets.push(_react2.default.createElement(_navmenu2.default, { icons: module.params.pic, key: 'nav_' + i }));
						break;
					case 'ad_content':
						widgets.push(_react2.default.createElement(_textswiper2.default, { message: module.params.ad_content, more: more_url, key: 'ad_' + i }));
						break;
					case 'floor':
						widgets.push(_react2.default.createElement(_widget2.default, { params: module.params, key: 'floor_' + i }));
						break;
					default:
						break;
				}
			});
			return widgets;
		}
	}, {
		key: 'render',
		value: function render() {
			//console.log(this.props.initialState)
			return _react2.default.createElement(
				'div',
				{ className: 'app-wrap' },
				_react2.default.createElement(_appbar2.default, null),
				_react2.default.createElement(_searchbar2.default, null),
				this.renderWidgets(),
				_react2.default.createElement(_goodslist2.default, null),
				_react2.default.createElement(_footbar2.default, null),
				_react2.default.createElement(_copyright2.default, null),
				_react2.default.createElement(_gotop2.default, null)
			);
		}
	}]);

	return Index;
}(_react.Component), _class.propTypes = {
	initialState: _propTypes2.default.object
}, _temp);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(5);

var _classnames2 = _interopRequireDefault(_classnames);

var _constant = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppBar = function (_Component) {
	_inherits(AppBar, _Component);

	function AppBar(props) {
		_classCallCheck(this, AppBar);

		//this.handleClick = this.handleClick.bind(this)
		var _this = _possibleConstructorReturn(this, (AppBar.__proto__ || Object.getPrototypeOf(AppBar)).call(this, props));

		_this.state = {
			active: false
		};
		return _this;
	}

	_createClass(AppBar, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var install = localStorage.getItem(_constant.INSTALL_APP);
			this.setState({
				active: !install
			});
		}
	}, {
		key: 'handleClick',
		value: function handleClick() {
			localStorage.setItem(_constant.INSTALL_APP, 1);
			location.href = _constant.BASE_HOST + 'downloadPage/default.html';
		}
	}, {
		key: 'render',
		value: function render() {
			var active = this.state.active;

			var appStatus = (0, _classnames2.default)('app-download-bar', {
				show: active
			});
			return _react2.default.createElement(
				'div',
				{ className: appStatus, onClick: this.handleClick },
				_react2.default.createElement('img', { src: _constant.BASE_HOST + 'res/images/app_2054.png', className: 'img' })
			);
		}
	}]);

	return AppBar;
}(_react.Component);

exports.default = AppBar;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var BASE_HOST = exports.BASE_HOST = 'https://www.hnmall.com/';

var INSTALL_APP = exports.INSTALL_APP = 'install_hnmall_app';

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _constant = __webpack_require__(6);

var _lib = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import classNames from "classnames";


var SearchBar = function (_Component) {
	_inherits(SearchBar, _Component);

	function SearchBar(props) {
		_classCallCheck(this, SearchBar);

		var _this = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

		_this.state = {
			showApp: false,
			value: '',
			shopName: ''
		};
		return _this;
	}

	_createClass(SearchBar, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			var install = localStorage.getItem(_constant.INSTALL_APP);
			this.setState({
				showApp: install ? false : true
			});

			setTimeout(function () {
				_this2.getShopLocation();
			}, 1000);
		}
	}, {
		key: 'getShopLocation',
		value: function getShopLocation() {
			var _this3 = this;

			var update = function update(r) {
				axios.get('/shopinfo?lat=' + r.lat + '&lng=' + r.lng).then(function (res) {
					//console.log(res)
					_this3.setState({
						shopName: res.data.message[0].shop_name
					});
				});
			};
			(0, _lib.getLocationTencent)(function (res) {
				update(res);
			}, function () {
				update({
					lat: '28.234589',
					lng: '112.913554'
				});
			});
		}
	}, {
		key: 'handleChange',
		value: function handleChange(e) {
			var value = e.target.value;
			this.setState({ value: value });
		}
	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			var position = {
				top: this.state.showApp ? '55px' : '0'
			};
			return _react2.default.createElement(
				'div',
				{ style: position, className: 'search-bar' },
				_react2.default.createElement(
					'a',
					{ href: _constant.BASE_HOST + 'oto/shop-list.html', className: 'shop-link' },
					_react2.default.createElement('i', { className: 'icon-point' }),
					_react2.default.createElement(
						'span',
						{ className: 'shop-name' },
						this.state.shopName
					)
				),
				_react2.default.createElement(
					'form',
					{ action: _constant.BASE_HOST + 'wap/item-list.html', method: 'post', className: 'search-box' },
					_react2.default.createElement('label', null),
					_react2.default.createElement('input', { type: 'text', name: 'search_keywords', placeholder: '\u9644\u8FD1\u7684\u5E97\u94FA\u3001\u5546\u54C1', value: this.state.value, onChange: function onChange(event) {
							_this4.handleChange(event);
						} })
				),
				_react2.default.createElement('div', { className: 'icon-cost' })
			);
		}
	}]);

	return SearchBar;
}(_react.Component);

exports.default = SearchBar;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 货币格式
 */
exports.formatPrice = function (price) {

	return parseFloat(price).toFixed(2);
};

exports.isWechat = function () {
	var ua = navigator.userAgent.toLowerCase();
	return (/micromessenger/i.test(ua)
	);
};

exports.getLocationTencent = function (callback) {
	var cache = getCache('geolocation') || null;
	cache = JSON.parse(cache);
	if (cache && cache.time - Date.now > 0) {
		return cache;
	}
	var geolocation = new qq.maps.Geolocation("PMOBZ-DSBK6-7NQSZ-EUK5J-A4PR6-DEB4V", "hnmall");
	geolocation.getLocation(function (res) {
		var lat = res.lat,
		    lng = res.lng;

		setCache('geolocation', JSON.stringify({ lat: lat, lng: lng, time: Date.now() + 86400000 }));
		callback(res);
	}, function () {
		callback();
	});
};

/** 
 * 获取滚动条距离顶端的距离 
 * @return {}支持IE6 
 */
exports.getScrollTop = function () {
	var scrollPos;
	if (window.pageYOffset) {
		scrollPos = window.pageYOffset;
	} else if (document.compatMode && document.compatMode != 'BackCompat') {
		scrollPos = document.documentElement.scrollTop;
	} else if (document.body) {
		scrollPos = document.body.scrollTop;
	}
	return scrollPos;
};

function setCache(name, data) {
	localStorage.setItem(name, data);
}

function getCache(name) {
	return localStorage.getItem(name);
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constant = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BannerSwipe = (_temp = _class = function (_Component) {
	_inherits(BannerSwipe, _Component);

	function BannerSwipe(props) {
		_classCallCheck(this, BannerSwipe);

		return _possibleConstructorReturn(this, (BannerSwipe.__proto__ || Object.getPrototypeOf(BannerSwipe)).call(this, props));
	}

	_createClass(BannerSwipe, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (this.props.sliders.length < 2) return false;
			var mySwiper = new Swiper(this.refs.slider, {
				autoplay: {
					delay: 5000
				},
				pagination: {
					el: '.swiper-pagination'
				}
			});
		}
	}, {
		key: 'renderSlider',
		value: function renderSlider() {
			var sliders = this.props.sliders;

			return sliders.map(function (d, i) {
				var url = d.link.replace(/^\//, _constant.BASE_HOST);
				return _react2.default.createElement(
					'div',
					{ className: 'swiper-slide', key: i },
					_react2.default.createElement(
						'a',
						{ href: d.linktarget },
						_react2.default.createElement('img', { className: 'img', src: url, alt: d.linkinfo })
					)
				);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ ref: 'slider', className: 'swiper-container' },
				_react2.default.createElement(
					'div',
					{ className: 'swiper-wrapper' },
					this.renderSlider()
				),
				_react2.default.createElement('div', { className: 'swiper-pagination' })
			);
		}
	}]);

	return BannerSwipe;
}(_react.Component), _class.propTypes = {
	sliders: _propTypes2.default.array
}, _temp);
exports.default = BannerSwipe;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constant = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavMenu = (_temp = _class = function (_Component) {
	_inherits(NavMenu, _Component);

	function NavMenu(props) {
		_classCallCheck(this, NavMenu);

		return _possibleConstructorReturn(this, (NavMenu.__proto__ || Object.getPrototypeOf(NavMenu)).call(this, props));
	}

	_createClass(NavMenu, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'formatMenuData',
		value: function formatMenuData() {
			var data = [];
			var icons = this.props.icons;

			var app = {
				'new': _constant.BASE_HOST + 'wap/itemlist.html?type=new',
				coupon: _constant.BASE_HOST + 'wap/s-coupon.html',
				seckill: _constant.BASE_HOST + 'seckill/index.php'
			};
			icons.forEach(function (item) {
				item.image = item.image.replace(/^\//, _constant.BASE_HOST);
				if (item.linktype === 'cat') {
					item.linktarget = _constant.BASE_HOST + 'wap/item-list.html?cat_id=' + item.linktarget;
				} else if (item.linktype === 'app') {
					item.linktarget = app[item.linktarget];
				}
				data.push(item);
			});
			return data;
		}
	}, {
		key: 'renderMenu',
		value: function renderMenu() {
			var icons = this.formatMenuData();
			return icons.map(function (d, i) {
				return _react2.default.createElement(
					'div',
					{ className: 'nav-menu-item', key: i },
					_react2.default.createElement(
						'a',
						{ href: d.linktarget },
						_react2.default.createElement('img', { className: 'nav-menu-icon', src: d.image, alt: d.tag }),
						_react2.default.createElement(
							'span',
							{ className: 'nav-menu-text' },
							d.tag
						)
					)
				);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'nav-menu' },
				this.renderMenu()
			);
		}
	}]);

	return NavMenu;
}(_react.Component), _class.propTypes = {
	icons: _propTypes2.default.array
}, _temp);
exports.default = NavMenu;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextSwiper = (_temp = _class = function (_Component) {
	_inherits(TextSwiper, _Component);

	function TextSwiper(props) {
		_classCallCheck(this, TextSwiper);

		return _possibleConstructorReturn(this, (TextSwiper.__proto__ || Object.getPrototypeOf(TextSwiper)).call(this, props));
	}

	_createClass(TextSwiper, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var mySwiper = new Swiper('#marquee', {
				direction: 'vertical',
				loop: true,
				autoplay: {
					delay: 5000
				}
			});
		}
	}, {
		key: 'renderSlider',
		value: function renderSlider() {
			var message = this.props.message;

			return message.map(function (d, i) {
				return _react2.default.createElement(
					'div',
					{ className: 'swiper-slide', key: i },
					_react2.default.createElement(
						'a',
						{ className: 'swiper-slide-row', href: d.link },
						d.linkinfo
					)
				);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var more = this.props.more;

			return _react2.default.createElement(
				'div',
				{ className: 'swiper-message' },
				_react2.default.createElement(
					'div',
					{ className: 'message-slogan' },
					'\u53CB\u963F',
					_react2.default.createElement(
						'span',
						null,
						'\u5FEB\u62A5'
					)
				),
				_react2.default.createElement(
					'div',
					{ id: 'marquee', className: 'swiper-container' },
					_react2.default.createElement(
						'div',
						{ className: 'swiper-wrapper' },
						this.renderSlider()
					),
					_react2.default.createElement('div', { className: 'swiper-pagination' })
				),
				_react2.default.createElement(
					'div',
					{ className: 'message-core' },
					'| ',
					_react2.default.createElement(
						'a',
						{ href: more },
						'\u66F4\u591A'
					)
				)
			);
		}
	}]);

	return TextSwiper;
}(_react.Component), _class.propTypes = {
	message: _propTypes2.default.array
}, _temp);
exports.default = TextSwiper;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactLazyload = __webpack_require__(13);

var _reactLazyload2 = _interopRequireDefault(_reactLazyload);

var _constant = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Widget = function (_Component) {
	_inherits(Widget, _Component);

	function Widget(props) {
		_classCallCheck(this, Widget);

		return _possibleConstructorReturn(this, (Widget.__proto__ || Object.getPrototypeOf(Widget)).call(this, props));
	}

	_createClass(Widget, [{
		key: 'gridStyleOne',
		value: function gridStyleOne(pic) {
			return _react2.default.createElement(
				'div',
				{ className: 'widget-grid-flex' },
				_react2.default.createElement(
					'a',
					{ className: 'widget-grid-half', href: pic[0].linktarget },
					_react2.default.createElement(
						_reactLazyload2.default,
						{ height: 120 },
						_react2.default.createElement('img', { src: pic[0].image, className: 'img' })
					)
				),
				_react2.default.createElement(
					'a',
					{ className: 'widget-grid-half', href: pic[1].linktarget },
					_react2.default.createElement(
						_reactLazyload2.default,
						{ height: 120 },
						_react2.default.createElement('img', { src: pic[1].image, className: 'img' })
					)
				)
			);
		}
	}, {
		key: 'gridStyleTwo',
		value: function gridStyleTwo(pic) {
			return _react2.default.createElement(
				'div',
				{ className: 'widget-grid-flex', 'data-type': 'two' },
				_react2.default.createElement(
					'div',
					{ className: 'widget-grid-half' },
					_react2.default.createElement(
						'a',
						{ href: pic[0].linktarget },
						_react2.default.createElement(
							_reactLazyload2.default,
							{ height: 121 },
							_react2.default.createElement('img', { src: pic[0].image, className: 'img' })
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'widget-grid-flex' },
						_react2.default.createElement(
							'a',
							{ className: 'widget-grid-half', href: pic[1].linktarget },
							_react2.default.createElement(
								_reactLazyload2.default,
								{ height: 121 },
								_react2.default.createElement('img', { src: pic[1].image, className: 'img' })
							)
						),
						_react2.default.createElement(
							'a',
							{ className: 'widget-grid-half', href: pic[2].linktarget },
							_react2.default.createElement(
								_reactLazyload2.default,
								{ height: 121 },
								_react2.default.createElement('img', { src: pic[2].image, className: 'img' })
							)
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'widget-grid-half' },
					_react2.default.createElement(
						'a',
						{ href: pic[3].linktarget },
						_react2.default.createElement(
							_reactLazyload2.default,
							{ height: 242 },
							_react2.default.createElement('img', { src: pic[3].image, className: 'img' })
						)
					)
				)
			);
		}
	}, {
		key: 'gridStyleThree',
		value: function gridStyleThree(pic) {
			return _react2.default.createElement(
				'div',
				{ className: 'widget-grid-flex', 'data-type': 'three' },
				_react2.default.createElement(
					'a',
					{ className: 'widget-grid-half', href: pic[0].linktarget },
					_react2.default.createElement(
						_reactLazyload2.default,
						{ height: 242 },
						_react2.default.createElement('img', { src: pic[0].image, className: 'img' })
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'widget-grid-half' },
					_react2.default.createElement(
						'a',
						{ href: pic[1].linktarget },
						_react2.default.createElement(
							_reactLazyload2.default,
							{ height: 120 },
							_react2.default.createElement('img', { src: pic[1].image, className: 'img' })
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'widget-grid-flex' },
						_react2.default.createElement(
							'a',
							{ className: 'widget-grid-half', href: pic[2].linktarget },
							_react2.default.createElement(
								_reactLazyload2.default,
								{ height: 120 },
								_react2.default.createElement('img', { src: pic[2].image, className: 'img' })
							)
						),
						_react2.default.createElement(
							'a',
							{ className: 'widget-grid-half', href: pic[3].linktarget },
							_react2.default.createElement(
								_reactLazyload2.default,
								{ height: 120 },
								_react2.default.createElement('img', { src: pic[3].image, className: 'img' })
							)
						)
					)
				)
			);
		}
	}, {
		key: 'gridStyleFour',
		value: function gridStyleFour(pic) {
			return _react2.default.createElement(
				'div',
				{ className: 'widget-grid-wrap', 'data-type': 'four' },
				_react2.default.createElement(
					'div',
					{ className: 'widget-grid-flex' },
					_react2.default.createElement(
						'a',
						{ className: 'widget-grid-half', href: pic[0].linktarget },
						_react2.default.createElement(
							_reactLazyload2.default,
							{ height: 120 },
							_react2.default.createElement('img', { src: pic[0].image, className: 'img' })
						)
					),
					_react2.default.createElement(
						'a',
						{ className: 'widget-grid-half', href: pic[1].linktarget },
						_react2.default.createElement(
							_reactLazyload2.default,
							{ height: 120 },
							_react2.default.createElement('img', { src: pic[1].image, className: 'img' })
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'widget-grid-flex' },
					_react2.default.createElement(
						'a',
						{ className: 'widget-grid-25', href: pic[2].linktarget },
						_react2.default.createElement(
							_reactLazyload2.default,
							{ height: 120 },
							_react2.default.createElement('img', { src: pic[2].image, className: 'img' })
						)
					),
					_react2.default.createElement(
						'a',
						{ className: 'widget-grid-25', href: pic[3].linktarget },
						_react2.default.createElement(
							_reactLazyload2.default,
							{ height: 120 },
							_react2.default.createElement('img', { src: pic[3].image, className: 'img' })
						)
					),
					_react2.default.createElement(
						'a',
						{ className: 'widget-grid-half', href: pic[4].linktarget },
						_react2.default.createElement(
							_reactLazyload2.default,
							{ height: 120 },
							_react2.default.createElement('img', { src: pic[4].image, className: 'img' })
						)
					)
				)
			);
		}
	}, {
		key: 'gridStyleFive',
		value: function gridStyleFive(pic) {
			return _react2.default.createElement(
				'div',
				{ className: 'widget-grid-wrap', 'data-type': 'five' },
				_react2.default.createElement(
					'div',
					{ className: 'widget-grid-flex' },
					_react2.default.createElement(
						'a',
						{ className: 'widget-grid-half', href: pic[0].linktarget },
						_react2.default.createElement(
							_reactLazyload2.default,
							{ height: 120 },
							_react2.default.createElement('img', { src: pic[0].image, className: 'img' })
						)
					),
					_react2.default.createElement(
						'a',
						{ className: 'widget-grid-half', href: pic[1].linktarget },
						_react2.default.createElement(
							_reactLazyload2.default,
							{ height: 120 },
							_react2.default.createElement('img', { src: pic[1].image, className: 'img' })
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'widget-grid-flex' },
					_react2.default.createElement(
						'a',
						{ className: 'widget-grid-25', href: pic[2].linktarget },
						_react2.default.createElement(
							_reactLazyload2.default,
							{ height: 120 },
							_react2.default.createElement('img', { src: pic[2].image, className: 'img' })
						)
					),
					_react2.default.createElement(
						'a',
						{ className: 'widget-grid-25', href: pic[3].linktarget },
						_react2.default.createElement(
							_reactLazyload2.default,
							{ height: 120 },
							_react2.default.createElement('img', { src: pic[3].image, className: 'img' })
						)
					),
					_react2.default.createElement(
						'a',
						{ className: 'widget-grid-25', href: pic[4].linktarget },
						_react2.default.createElement(
							_reactLazyload2.default,
							{ height: 120 },
							_react2.default.createElement('img', { src: pic[4].image, className: 'img' })
						)
					),
					_react2.default.createElement(
						'a',
						{ className: 'widget-grid-25', href: pic[5].linktarget },
						_react2.default.createElement(
							_reactLazyload2.default,
							{ height: 120 },
							_react2.default.createElement('img', { src: pic[5].image, className: 'img' })
						)
					)
				)
			);
		}
	}, {
		key: 'gridStyleSix',
		value: function gridStyleSix(pic) {
			return _react2.default.createElement(
				'div',
				{ className: 'widget-grid-wrap', 'data-type': 'six' },
				_react2.default.createElement(
					'div',
					{ className: 'widget-grid-flex' },
					_react2.default.createElement(
						'a',
						{ className: 'widget-grid-avg', href: pic[0].linktarget },
						_react2.default.createElement(
							_reactLazyload2.default,
							{ height: 120 },
							_react2.default.createElement('img', { src: pic[0].image, className: 'img' })
						)
					),
					_react2.default.createElement(
						'a',
						{ className: 'widget-grid-avg', href: pic[1].linktarget },
						_react2.default.createElement(
							_reactLazyload2.default,
							{ height: 120 },
							_react2.default.createElement('img', { src: pic[1].image, className: 'img' })
						)
					),
					_react2.default.createElement(
						'a',
						{ className: 'widget-grid-avg', href: pic[2].linktarget },
						_react2.default.createElement(
							_reactLazyload2.default,
							{ height: 120 },
							_react2.default.createElement('img', { src: pic[2].image, className: 'img' })
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'widget-grid-flex' },
					_react2.default.createElement(
						'a',
						{ className: 'widget-grid-avg', href: pic[3].linktarget },
						_react2.default.createElement(
							_reactLazyload2.default,
							{ height: 120 },
							_react2.default.createElement('img', { src: pic[3].image, className: 'img' })
						)
					),
					_react2.default.createElement(
						'a',
						{ className: 'widget-grid-avg', href: pic[4].linktarget },
						_react2.default.createElement(
							_reactLazyload2.default,
							{ height: 120 },
							_react2.default.createElement('img', { src: pic[4].image, className: 'img' })
						)
					),
					_react2.default.createElement(
						'a',
						{ className: 'widget-grid-avg', href: pic[5].linktarget },
						_react2.default.createElement(
							_reactLazyload2.default,
							{ height: 120 },
							_react2.default.createElement('img', { src: pic[5].image, className: 'img' })
						)
					)
				)
			);
		}
	}, {
		key: 'renderGrid',
		value: function renderGrid() {
			var params = this.props.params;


			if (!Array.isArray(params.pic)) {
				return;
			}

			params.pic.forEach(function (item) {
				item.image = item.image.replace(/^\//, _constant.BASE_HOST);
			});
			switch (params.styletag) {
				case 'one':
					return this.gridStyleOne(params.pic);
				case 'two':
					return this.gridStyleTwo(params.pic);
				case 'three':
					return this.gridStyleThree(params.pic);
				case 'four':
					return this.gridStyleFour(params.pic);
				case 'five':
					return this.gridStyleFive(params.pic);
				case 'six':
					return this.gridStyleSix(params.pic);
				default:
					return '';
			}
		}
	}, {
		key: 'render',
		value: function render() {

			return _react2.default.createElement(
				'div',
				{ className: 'widget-grid' },
				_react2.default.createElement(
					'div',
					{ className: 'widget-grid-title' },
					this.props.params.title
				),
				this.renderGrid()
			);
		}
	}]);

	return Widget;
}(_react.Component);

exports.default = Widget;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-lazyload");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _constant = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import classNames from "classnames";


var FootBar = function (_Component) {
	_inherits(FootBar, _Component);

	function FootBar(props) {
		_classCallCheck(this, FootBar);

		return _possibleConstructorReturn(this, (FootBar.__proto__ || Object.getPrototypeOf(FootBar)).call(this, props));
	}

	_createClass(FootBar, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'render',
		value: function render() {

			return _react2.default.createElement(
				'div',
				{ className: 'app-foot-bar' },
				_react2.default.createElement(
					'a',
					{ className: 'foot-bar-item', href: '/' },
					_react2.default.createElement('img', { className: 'icon', src: 'https://wd.hnmall.com/themes/mobilemall/images/d-icon1.png' }),
					_react2.default.createElement(
						'span',
						null,
						'\u9996\u9875'
					)
				),
				_react2.default.createElement(
					'a',
					{ className: 'foot-bar-item', href: _constant.BASE_HOST + 'wap/category.html' },
					_react2.default.createElement('img', { className: 'icon', src: 'https://wd.hnmall.com/themes/mobilemall/images/d-icon2.png' }),
					_react2.default.createElement(
						'span',
						null,
						'\u5206\u7C7B'
					)
				),
				_react2.default.createElement(
					'a',
					{ className: 'foot-bar-item', href: _constant.BASE_HOST + 'wap/cart.html' },
					_react2.default.createElement('img', { className: 'cart', src: 'https://wd.hnmall.com/themes/mobilemall/images/d-icon3.jpg' }),
					_react2.default.createElement(
						'span',
						null,
						'\u8D2D\u7269\u8F66'
					)
				),
				_react2.default.createElement(
					'a',
					{ className: 'foot-bar-item', href: _constant.BASE_HOST + 'weidian/store-index.html' },
					_react2.default.createElement('img', { className: 'icon', src: 'https://wd.hnmall.com/themes/mobilemall/images/d-icon4.png' }),
					_react2.default.createElement(
						'span',
						null,
						'\u5E97\u94FA'
					)
				),
				_react2.default.createElement(
					'a',
					{ className: 'foot-bar-item', href: _constant.BASE_HOST + 'wap/member.html' },
					_react2.default.createElement('img', { className: 'icon', src: 'https://wd.hnmall.com/themes/mobilemall/images/d-icon5.png' }),
					_react2.default.createElement(
						'span',
						null,
						'\u4F1A\u5458'
					)
				)
			);
		}
	}]);

	return FootBar;
}(_react.Component);

exports.default = FootBar;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactLazyload = __webpack_require__(13);

var _reactLazyload2 = _interopRequireDefault(_reactLazyload);

var _lib = __webpack_require__(8);

var _constant = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import classNames from "classnames";


var GoodsList = function (_Component) {
	_inherits(GoodsList, _Component);

	function GoodsList(props) {
		_classCallCheck(this, GoodsList);

		var _this = _possibleConstructorReturn(this, (GoodsList.__proto__ || Object.getPrototypeOf(GoodsList)).call(this, props));

		_this.state = {
			isBusy: false,
			goodsData: []
		};
		return _this;
	}

	_createClass(GoodsList, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			var bounce = Math.ceil(window.innerHeight / 2);
			window.addEventListener('scroll', function () {
				if (_this2.state.isBusy) {
					return false;
				}

				var scrollTop = (0, _lib.getScrollTop)();
				//console.log(scrollTop)
				if (scrollTop > bounce) {
					_this2.fetchGoodsList();
				}
			});
		}
	}, {
		key: 'fetchGoodsList',
		value: function fetchGoodsList() {
			var _this3 = this;

			this.setState({
				isBusy: true
			});
			axios.get('/goodslist').then(function (res) {
				//console.log(res)
				_this3.setState({
					goodsData: res.data.goodslist
				});
			});
		}
	}, {
		key: 'renderList',
		value: function renderList() {
			var goodsData = this.state.goodsData;

			var list = goodsData.map(function (goods) {
				return _react2.default.createElement(
					'div',
					{ className: 'goods-list-item', key: goods.item_id },
					_react2.default.createElement(
						'a',
						{ href: _constant.BASE_HOST + 'wap/item-detail.html?item_id=' + goods.item_id },
						_react2.default.createElement(
							'div',
							{ className: 'goods-img' },
							_react2.default.createElement(
								_reactLazyload2.default,
								{ once: true, height: 177, offsetTop: 500,
									placeholder: _react2.default.createElement('img', { className: 'img', src: 'https://wd.hnmall.com/res/images/cplogo.jpg', debounce: 500 }) },
								_react2.default.createElement('img', { src: goods.image_default_id, className: 'img' })
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'goods-title mutiple-text' },
							goods.title
						),
						_react2.default.createElement(
							'div',
							{ className: 'goods-price' },
							_react2.default.createElement(
								'span',
								{ className: 'price' },
								(0, _lib.formatPrice)(goods.price)
							),
							_react2.default.createElement(
								'span',
								{ className: 'mkt-price' },
								(0, _lib.formatPrice)(goods.mkt_price)
							),
							_react2.default.createElement(
								'i',
								{ className: 'buy' },
								'\u9A6C\u4E0A\u62A2'
							)
						)
					)
				);
			});
			return _react2.default.createElement(
				'div',
				{ className: 'goods-list' },
				list
			);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'wrap' },
				_react2.default.createElement(
					'div',
					{ className: 'goods-list-title' },
					'\u731C\u4F60\u559C\u6B22'
				),
				this.renderList()
			);
		}
	}]);

	return GoodsList;
}(_react.Component);

exports.default = GoodsList;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Copyright = function (_Component) {
	_inherits(Copyright, _Component);

	function Copyright(props) {
		_classCallCheck(this, Copyright);

		return _possibleConstructorReturn(this, (Copyright.__proto__ || Object.getPrototypeOf(Copyright)).call(this, props));
	}

	_createClass(Copyright, [{
		key: "render",
		value: function render() {

			return _react2.default.createElement(
				"div",
				{ className: "copy-right" },
				_react2.default.createElement(
					"a",
					{ target: "_blank", href: "http://www.miibeian.gov.cn" },
					"\u6E58ICP\u590714013772-3"
				),
				_react2.default.createElement(
					"a",
					{ target: "_blank", href: "/icp.html" },
					"\u589E\u503C\u7535\u4FE1\u4E1A\u52A1\u7ECF\u8425\u8BB8\u53EF\u8BC1:\u6E58B2-20140095"
				)
			);
		}
	}]);

	return Copyright;
}(_react.Component);

exports.default = Copyright;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(5);

var _classnames2 = _interopRequireDefault(_classnames);

var _lib = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoTop = function (_Component) {
	_inherits(GoTop, _Component);

	function GoTop(props) {
		_classCallCheck(this, GoTop);

		var _this = _possibleConstructorReturn(this, (GoTop.__proto__ || Object.getPrototypeOf(GoTop)).call(this, props));

		_this.handleClick = _this.handleClick.bind(_this);
		_this.state = {
			active: false
		};
		return _this;
	}

	_createClass(GoTop, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			var bounce = Math.ceil(window.innerHeight * 2);
			window.addEventListener('scroll', function () {
				var scrollTop = (0, _lib.getScrollTop)();
				//console.log(scrollTop)
				if (scrollTop > bounce) {
					_this2.setState({
						active: true
					});
				}
			});
		}
	}, {
		key: 'handleClick',
		value: function handleClick() {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
			this.setState({
				active: false
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var active = this.state.active;

			var appStatus = (0, _classnames2.default)('app-go-top', {
				active: active
			});
			return _react2.default.createElement('div', { className: appStatus, onClick: this.handleClick });
		}
	}]);

	return GoTop;
}(_react.Component);

exports.default = GoTop;

/***/ })
/******/ ]);