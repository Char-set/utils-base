(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["utilsBase"] = factory();
	else
		root["utilsBase"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ComUtils = __webpack_require__(1)

var BrowserUtils = {}, DomUtils = {};

if(typeof window !== 'undefined') {
    BrowserUtils = __webpack_require__(2)
}

if(typeof document !== 'undefined') {
    DomUtils = __webpack_require__(3)
}

/* harmony default export */ __webpack_exports__["default"] = ({
    ...ComUtils,
    ...BrowserUtils,
    ...DomUtils
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paramsFormat", function() { return paramsFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToString", function() { return convertToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateFormart", function() { return dateFormart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGuid", function() { return createGuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_throttle", function() { return _throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addParamsToUrl", function() { return addParamsToUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "largeNumer", function() { return largeNumer; });
/**
 * 
 * @param {string} url   格式化参数 ?a=1&b=2&c=3 输出 {a:1, b:2, c:3}
 */
const paramsFormat = (url) => {
    var qInd = url.indexOf("?");
    var sharpInd = url.indexOf("#"); //路由
    var search = "";
    var paramsList = [];
    var paramsObj = {};

    if (qInd >= 0) {
        if (sharpInd > 0) {
            search = url.substring(qInd + 1, sharpInd);
        } else {
            search = url.substring(qInd + 1);
        }
        paramsList = search.split("&");
        for (var ind in paramsList) {
            var param = paramsList[ind];
            var pind = param.indexOf("=");
            if (pind >= 0) {
                paramsObj[param.substring(0, pind)] = param.substr(pind + 1);
            } else {
                paramsObj[param] = "";
            }
        }
    }
    return paramsObj;
}

/**
 * 
 * @param {Object} obj 对象转字符串参数 {a:1, b:2, c:3} 输出 a=1&b=2&c=3
 */
const convertToString = obj => {
    if (typeof obj == 'string') {
        return obj
    }
    if (typeof obj != 'object') {
        return '';
    }
    var string = '';
    for (var item in obj) {
        string += item + '=' + (obj[item] || '') + '&'
    }
    return string.substring(0, string.lastIndexOf('&'))
}
/**
 * 
 * @param {String} value    时间格式的字符串，支持能被new Date()格式化的所有
 * @param {String} fmt      dateformat(1608690860880,'yyyy-MM-dd hh:mm:ss') 输出 2020-12-23 10:34:20 
 * @param fmt:yyyy 年
 * @param fmt:MM   月
 * @param fmt:dd   日
 * @param fmt:hh   时
 * @param fmt:mm   分
 * @param fmt:ss   秒
 * @param fmt:w    周几
 * @param fmt:qq   季度
 * @param fmt:S    毫秒
 */
const dateFormart = (value, fmt) => {
    function format(value, fmt) {
        if (typeof value == 'string') {
            value = value.replace(/[-]/g, '/')
        }
        var date = new Date(value);
        var o = {
            "M+": date.getMonth() + 1, //月份
            "d+": date.getDate(), //日
            "h+": date.getHours(), //小时
            "m+": date.getMinutes(), //分
            "s+": date.getSeconds(), //秒
            "w+": date.getDay(), //星期
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度
            "S": date.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o) {
            if (k === 'w+') {
                if (o[k] === 0) {
                    fmt = fmt.replace('w', '周日');
                } else if (o[k] === 1) {
                    fmt = fmt.replace('w', '周一');
                } else if (o[k] === 2) {
                    fmt = fmt.replace('w', '周二');
                } else if (o[k] === 3) {
                    fmt = fmt.replace('w', '周三');
                } else if (o[k] === 4) {
                    fmt = fmt.replace('w', '周四');
                } else if (o[k] === 5) {
                    fmt = fmt.replace('w', '周五');
                } else if (o[k] === 6) {
                    fmt = fmt.replace('w', '周六');
                }
            } else if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
        return fmt;
    }
    if (value) {
        value = format(value, fmt);
    }
    return value;
}
/**
 * 生成唯一 uid
 */
const createGuid = () => {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

/**
 * 防抖
 * @param   {function}  func        传入函数
 * @param   {number}    wait        表示时间窗口的间隔
 * @param   {object}    options     如果想忽略开始边界上的调用，传入{leading: false}。
 *                                  如果想忽略结尾边界上的调用，传入{trailing: false}
 * @returns {function}              返回客户调用函数   返回客户调用函数
 */
const _throttle = (func, wait, options) => {
    let timeout; let context; let args; let result;
    let previous = 0;
    options = options || {}
    // 延时执行函数
    let later = function () {
        let now = new Date().getTime()
        // 首次执行时，如果设定了开始边界不执行选项，将上次执行时间设定为当前时间。
        previous = options.leading === false ? 0 : now
        timeout = null
        result = func.apply(context, args)
        if (!timeout) context = args = null
    }
    return function () {
        context = this
        args = arguments
        let now = new Date().getTime()
        if (!previous && options.leading === false) previous = now
        let remaining = wait - (now - previous)
        // 延迟时间间隔remaining小于等于0，表示上次执行至此所间隔时间已经超过一个时间窗口
        // remaining大于时间窗口wait，表示客户端系统时间被调整过
        if (remaining <= 0 || remaining > wait) {
            clearTimeout(timeout)
            timeout = null
            previous = now
            result = func.apply(context, args)
            if (!timeout) context = args = null
            // 如果延迟执行不存在，且没有设定结尾边界不执行选项
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining)
        }
        return result
    }
}

// const throttle = _throttle((callback) => {
//     callback()
// }, 600, true);

/**
 * 
 * @param {String} url               原参数
 * @param {*} params                 要拼接的参数
 */
const addParamsToUrl = (url = '', params = {}) => {
    let searchIdx = url.indexOf('?') > -1 ? url.indexOf('?') : url.length - 1
    let newUrl = url.substr(0, searchIdx);
    let newParams = paramsFormat(url.substr(searchIdx));
    newParams = {
        ...newParams,
        ...params
    };
    return `${newUrl || url}?${convertToString(newParams)}`
}
/**
 * 
 * @param {String} a 
 * @param {String} b 
 * @description 大整数加法
 */
const largeNumer = (a, b) => {
    let i = a.length - 1;
    let j = b.length - 1;

    let count = 0;
    let result = '';
    while (i >= 0 || j >= 0) {
        let x = 0;
        let y = 0;
        let sum;
        if (i >= 0) {
            x = a[i] - 0;
            i--;
        }
        if (j >= 0) {
            y = b[j] - 0;
            j--;
        }
        sum = x + y + count;

        if (sum >= 10) {
            count = 1;
            sum -= 10;
        } else {
            count = 0;
        }
        result = sum + result
    }
    if (count) {
        result = count + result;
    }

    return result;
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "browser", function() { return browser; });
class Browser {
    constructor() {
        this.ua = navigator.userAgent;
    }

    isTrident() {
        return this.ua.indexOf('Trident') > -1;
    }

    isMobile() {
        return !!this.ua.match(/AppleWebKit.*Mobile.*/);
    }

    isIos() {
        return !!this.ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    }

    isAndroid() {
        return this.ua.indexOf('Android') > -1 || this.ua.indexOf('Linux') > -1;
    }

    isIphone() {
        return this.ua.indexOf('iPhone') > -1;
    }

    isWx() {
        return this.ua.match(/MicroMessenger/i) == "MicroMessenger";
    }

    isMini() {
        return window.__wxjs_environment === 'miniprogram';
    }
    isIpx() {
        if (!this.isIos()) return false;

        const xSeriesConfig = [
            {
                devicePixelRatio: 3,
                width: 375,
                height: 812,
            },
            {
                devicePixelRatio: 3,
                width: 414,
                height: 896,
            },
            {
                devicePixelRatio: 2,
                width: 414,
                height: 896,
            },
        ];
        // h5
        if (typeof window !== 'undefined' && window) {
            const isIOS = /iphone/gi.test(window.navigator.userAgent);
            if (!isIOS) return false;
            const { devicePixelRatio, screen } = window;
            const { width, height } = screen;
            return xSeriesConfig.some(item => item.devicePixelRatio === devicePixelRatio && item.width === width && item.height === height);
        }
        return false;
    }
}
const browser = new Browser();



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dom", function() { return dom; });
class Dom {
    constructor() {
        this.dom = document;
    }
    /**
     * @description     获取document滚动条的 scrollTop
     */
    getScrollTop() {
        var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
        if (this.dom.body) {
            bodyScrollTop = this.dom.body.scrollTop;
        }
        if (this.dom.documentElement) {
            documentScrollTop = this.dom.documentElement.scrollTop;
        }
        scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
        return scrollTop;
    }
    /**
     * @description     获取document滚动条的 scrollHeight
     */
    getScrollHeight() {
        var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
        if (this.dom.body) {
            bodyScrollHeight = this.dom.body.scrollHeight;
        }
        if (this.dom.documentElement) {
            documentScrollHeight = this.dom.documentElement.scrollHeight;
        }
        scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
        return scrollHeight;
    }
    /**
     * @description     获取bom的高度
     */
    getWindowHeight() {
        var windowHeight = 0;
        if (this.dom.compatMode == "CSS1Compat") {
            windowHeight = this.dom.documentElement.clientHeight;
        } else {
            windowHeight = this.dom.body.clientHeight;
        }
        return windowHeight;
    }
    /**
     * 
     * @param {String || Number} id     
     * @description   为元素增加拖动事件
     */
    addDragToEl(id) {
        let el = this.dom.getElementById(id);
        if (!el) return;
        let startX = 0, startY = 0;
        el.addEventListener('touchstart', (e) => {
            // console.log(e);
            let { pageX, pageY } = e.touches[0];
            startX = pageX;
            startY = pageY;
            el.style.transition = `none`;
            e.stopPropagation();

        });
        el.addEventListener('touchmove', (ev) => {
            let { pageX, pageY } = ev.touches[0];
            let moveX = pageX - startX;
            let moveY = pageY - startY;
            el.style.transform = `translate(${moveX}px, ${moveY + (el._moveY || 0)}px)`
            ev.preventDefault();
        })
        el.addEventListener('touchend', (ev) => {
            el.style.transition = `all 0.6s`;
            let { pageX, pageY } = ev.changedTouches[0];
            // el._moveX = pageX - startX;
            el._moveY = pageY - startY + (el._moveY || 0);
            if (el._moveY + el.offsetTop < 0) {
                el._moveY = -el.offsetTop + 30;
            } else if (el._moveY + el.offsetTop > getWindowHeight() - 135) {
                el._moveY = -el.offsetTop + getWindowHeight() - 175;
            }
            el.style.transform = `translate(${0}px, ${(el._moveY || 0)}px)`;
        })
    }
}

const dom = new Dom();



/***/ })
/******/ ])["default"];
});