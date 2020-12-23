/**
 * 
 * @param {string} url   格式化参数 ?a=1&b=2&c=3 输出 {a:1, b:2, c:3}
 */
export const paramsFormat = (url) => {
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
export const convertToString = obj => {
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
export const dateFormart = (value, fmt) => {
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
export const createGuid = () => {
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
export const _throttle = (func, wait, options) => {
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
export const addParamsToUrl = (url = '', params = {}) => {
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
export const largeNumer = (a, b) => {
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