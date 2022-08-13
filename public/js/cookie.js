export function setCookie(key, val, expires, path = "/") {
    if (expires != undefined) {
        var date = new Date();
        date.setMilliseconds(date.getMilliseconds() + expires);
        console.log(date);
        document.cookie = key + "=" + encodeURIComponent(val) + "; expires=" + date.toUTCString() + "; path=" + path;
    } else {
        document.cookie = key + "=" + encodeURIComponent(val) + "; path=" + path;
    }
}

export function getCookie(key) {
    var cookie = document.cookie;
    if (cookie) {
        var list = cookie.split("; ");
        for (var i = 0; i < list.length; i++) {
            var name = list[i].split("=")[0];
            var val = list[i].split("=")[1];
            if (name === key) {
                return decodeURIComponent(val);
            }
        }
    }
    return "";
}

export function deleteCookie(key) {
    setCookie(key, "", -1);
}

export function clearCookie() {
    var cookie = document.cookie;
    if (cookie) {
        var list = cookie.split("; ");
        for (var i = 0; i < list.length; i++) {
            var key = list[i].split("=")[0];
            deleteCookie(key);
        }
    }
}


