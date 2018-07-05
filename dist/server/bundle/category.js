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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 4 */,
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
/* 7 */,
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

/**
 * 腾讯地图定位
 */
exports.getLocationTencent = function (callback) {
	var cache = localCache('geolocation');
	if (cache) {
		return cache;
	}
	var geolocation = new qq.maps.Geolocation("PMOBZ-DSBK6-7NQSZ-EUK5J-A4PR6-DEB4V", "hnmall");
	geolocation.getLocation(function (res) {
		var lat = res.lat,
		    lng = res.lng;

		localCache('geolocation', { lat: lat, lng: lng });
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

function localCache(name, data) {
	//console.log(data,name)
	if (data) {
		var _data = typeof data === 'string' ? data : JSON.stringify(data);
		setCache(name, _data);
		setCache(name + '_time', Date.now() + 86400000);
	} else {
		var time = getCache(name + '_time');
		var res = void 0;
		if (Date.now() - time > 0) {
			return false;
		}
		var rs = getCache(name);
		try {
			res = JSON.parse(rs);
		} catch (err) {
			res = rs;
		}
		return res;
	}
}

exports.localCache = localCache;

/**
 * 判断是否为对象
 */
exports.isObject = function (o) {
	return Object.prototype.toString.call(o) == '[object Object]';
};

/**
 * 判断是否为数组类型
 */
exports.isArray = function (o) {
	return Object.prototype.toString.call(o) == '[object Array]';
};

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
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
					{ className: 'foot-bar-item', href: '/category' },
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
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _app = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (initialState) {
    return new Promise(function (resolve, reject) {
        var app = _react2.default.createElement(_app.Index, { initialState: initialState });
        resolve({ app: app });
    });
};

/***/ }),
/* 19 */
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

var _classnames = __webpack_require__(5);

var _classnames2 = _interopRequireDefault(_classnames);

var _lib = __webpack_require__(8);

var _constant = __webpack_require__(6);

var _footbar = __webpack_require__(14);

var _footbar2 = _interopRequireDefault(_footbar);

var _loading = __webpack_require__(20);

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = exports.Index = (_temp = _class = function (_Component) {
	_inherits(Index, _Component);

	function Index(props) {
		_classCallCheck(this, Index);

		var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

		_this.state = {
			categoryList: props.initialState,
			isLoading: true,
			activeIndex: 0,
			value: ''
		};
		return _this;
	}

	_createClass(Index, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var cache = (0, _lib.localCache)('category');
			if (cache) {
				this.setState({
					isLoading: false,
					categoryList: cache
				});
			} else {
				this.fetchCategoryList();
			}
			this.preventScroll();
		}
	}, {
		key: 'preventScroll',
		value: function preventScroll() {
			var body = document.body || document.documentElement;
			body.addEventListener('touchmove', function (e) {
				body.scrollTop = 0;
				return false;
			});
		}
	}, {
		key: 'fetchCategoryList',
		value: function fetchCategoryList() {
			var _this2 = this;

			axios.get('/category/list').then(function (res) {
				console.log(res.data);
				if (res.data && res.data.categoryList) {
					//this.props.initialState = res.data.categoryList;
					(0, _lib.localCache)('category', res.data.categoryList);
					_this2.setState({
						isLoading: false,
						categoryList: res.data.categoryList
					});
				}
			});
		}
	}, {
		key: 'handleChange',
		value: function handleChange(event) {
			var value = event.target.value;
			this.setState({ value: value });
		}
	}, {
		key: 'handleClick',
		value: function handleClick(index) {
			if (this.state.activeIndex === index) {
				return false;
			}

			this.setState({
				activeIndex: index
			});
		}
	}, {
		key: 'renderNav',
		value: function renderNav(category) {
			var _this3 = this;

			var activeIndex = this.state.activeIndex;

			return category.map(function (item, i) {
				var active = (0, _classnames2.default)("category-name", {
					active: activeIndex === i
				});
				return _react2.default.createElement(
					'div',
					{ onClick: _this3.handleClick.bind(_this3, i), className: active, key: i },
					item.name
				);
			});
		}
	}, {
		key: 'renderItem',
		value: function renderItem(list) {
			if (!(0, _lib.isArray)(list)) {
				return '';
			}
			return list.map(function (item, i) {
				var url = item.icon.replace(/^\//, _constant.BASE_HOST);
				return _react2.default.createElement(
					'div',
					{ className: 'category-nav-item', key: 'r_' + i },
					_react2.default.createElement(
						'a',
						{ href: _constant.BASE_HOST + 'wap/item-list.html?cat_id=' + item.id },
						_react2.default.createElement('img', { src: url }),
						_react2.default.createElement(
							'span',
							{ className: 'name' },
							item.name
						)
					)
				);
			});
		}
	}, {
		key: 'renderList',
		value: function renderList(category) {
			var _this4 = this;

			//console.log(category)
			return category.map(function (item, i) {
				return _react2.default.createElement(
					'div',
					{ className: 'category-group', key: 'g_' + i },
					_react2.default.createElement(
						'div',
						{ className: 'category-nav-header' },
						item.name
					),
					_react2.default.createElement(
						'div',
						{ className: 'category-nav-list' },
						_this4.renderItem(item.children)
					)
				);
			});
		}
	}, {
		key: 'renderCategory',
		value: function renderCategory() {
			var _state = this.state,
			    categoryList = _state.categoryList,
			    activeIndex = _state.activeIndex;

			if (categoryList.length < 1) {
				return '';
			}
			var category = categoryList[activeIndex].children;
			return _react2.default.createElement(
				'div',
				{ className: 'category-container' },
				_react2.default.createElement(
					'div',
					{ ref: 'nav', className: 'category-nav' },
					this.renderNav(categoryList)
				),
				_react2.default.createElement(
					'div',
					{ className: 'category-main' },
					this.renderList(category)
				)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this5 = this;

			//console.log(this.props.initialState)
			return _react2.default.createElement(
				'div',
				{ className: 'app-wrap' },
				_react2.default.createElement(
					'div',
					{ className: 'app-search-box' },
					_react2.default.createElement(
						'form',
						{ action: _constant.BASE_HOST + 'wap/item-list.html', method: 'post', className: 'search' },
						_react2.default.createElement('input', { type: 'text', value: this.state.value, onChange: function onChange(e) {
								_this5.handleChange(e);
							}, placeholder: '\u641C\u7D22\u5E97\u5185\u5546\u54C1' })
					)
				),
				this.renderCategory(),
				_react2.default.createElement(_footbar2.default, null),
				_react2.default.createElement(_loading2.default, { name: 'spinner', active: this.state.isLoading })
			);
		}
	}]);

	return Index;
}(_react.Component), _class.propTypes = {
	initialState: _propTypes2.default.array
}, _temp);

/***/ }),
/* 20 */
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

//import classNames from "classnames";

var Loading = function (_Component) {
	_inherits(Loading, _Component);

	function Loading(props) {
		_classCallCheck(this, Loading);

		return _possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).call(this, props));
	}

	_createClass(Loading, [{
		key: "componentDidMount",
		value: function componentDidMount() {}
	}, {
		key: "renderCube",
		value: function renderCube() {
			return _react2.default.createElement(
				"div",
				{ className: "spinner-2" },
				_react2.default.createElement("div", { className: "cube1" }),
				_react2.default.createElement("div", { className: "cube2" })
			);
		}
	}, {
		key: "rendeSpiner",
		value: function rendeSpiner() {
			return _react2.default.createElement(
				"div",
				{ className: "spinner-4" },
				_react2.default.createElement("div", { className: "bounce1" }),
				_react2.default.createElement("div", { className: "bounce2" }),
				_react2.default.createElement("div", { className: "bounce3" })
			);
		}
	}, {
		key: "render",
		value: function render() {
			var _props = this.props,
			    name = _props.name,
			    active = _props.active;

			var loading = void 0;
			var status = {
				display: active ? 'block' : 'none'
			};
			switch (name) {
				case 'spinner':
					loading = this.rendeSpiner();
					break;
				default:
					loading = this.renderCube();
					break;
			}
			return _react2.default.createElement(
				"div",
				{ className: "loading-box", style: status },
				loading
			);
		}
	}]);

	return Loading;
}(_react.Component);

exports.default = Loading;

/***/ })
/******/ ]);