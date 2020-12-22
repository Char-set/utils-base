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

const largeNumer = (a, b) => {
    let i = a.length - 1;
    let j = b.length - 1;

    let count = 0;
    let result = '';
    while (i >= 0 || j >= 0) {
        let x = 0;
        let y = 0;
        let sum;
        if(i >= 0) {
            x = a[i] - 0;
            i --;
        }
        if(j >= 0) {
            y = b[j] - 0;
            j --;
        }
        sum = x + y + count;

        if(sum >= 10) {
            count = 1;
            sum -= 10;
        } else {
            count = 0;
        }
        result = sum + result
    }
    if(count) {
        result = count + result;
    }

    return result;
}

export {
    paramsFormat,
    largeNumer
}