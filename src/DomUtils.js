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

export {
    dom
};