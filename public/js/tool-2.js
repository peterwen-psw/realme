export function debounceFn(callback, delay = 300) {
    var timer = null;
    return function (...list) {
        // this->
        clearTimeout(timer);
        var _this = this;
        timer = setTimeout(function () {
            callback.apply(_this, list);
        }, delay);
    }
}

export function throttleFn(callback, delay = 300) {
    var start = Date.now();  // 页面加载时的起始时间
    return function (...list) {
        var now = Date.now(); // 滚动的当前时间
        if (now - start >= delay) {
            callback.apply(this, list);
            start = now;    //为下次滚动作准备
        }
    }
}