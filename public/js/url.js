export function paramsParse() {
    var search = location.search;
    var data = {};

    if (search) {
        var str = search.substring(1);
        var list = str.split("&");
        for (var i = 0; i < list.length; i++) {
            var key = list[i].split("=")[0];
            var val = list[i].split("=")[1];
            data[key] = val;
        }
    }
    return data;
}