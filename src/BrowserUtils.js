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

export {
    browser
};