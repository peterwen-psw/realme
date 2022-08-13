var path = require("path");
var fs = require("fs");
var fsp = require("fs/promises");

var root = process.cwd(); // 要求在项目所在的目录(day28_node)
var defaultPath = "./public";

function static(url) {
    defaultPath = url;
}
function isExistFile(url) {
    return fs.existsSync(path.join(root, defaultPath, url));
}

async function render(url, encode = "utf-8") {
    // var isExist = fs.existsSync(path.resolve(defaultPath, url));

    return fsp.readFile(path.join(root, defaultPath, url), encode)
}


// render("/html/index.html").then(data => {
//     console.log(data);
// }).catch(err => {
//     throw err;
// })





module.exports = {
    static,
    render,
    isExistFile,
}