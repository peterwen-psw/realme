var http = require("http");
var https = require("https");
var cheerio = require("cheerio");
var fsp = require("fs/promises");
var path = require("path");

https.get("https://www.realme.com/cn/realme-phones", function (res) {
    var html = "";
    res.on("data", function (chunk) {
        html += chunk;
    })

    res.on("end", function () {
        // console.log(html);
        var $ = cheerio.load(html);
        console.log(("#phones.realme-phones-list>ul>li").length);

        var list = [];
        $("#phones.realme-phones-list>ul>li").each(function () {
            var obj = {};
            obj.goodsId = $(this).find("a").prop("href").slice(36,42);
            obj.goodsImg=$(this).find("a").find(".realme-phones-image").find("img").prop("data-src");
            obj.goodsName=$(this).find("a").find(".realme-phones-name").find("label").text();
            obj.goodsPrice=$(this).find("a").find(".realme-phones-price").find("label").text();

            list.push(obj);
        })
        console.log(list);

        fsp.writeFile(path.join(__dirname,"../data/goods.json"),JSON.stringify(list),{
            encoding:"utf-8",
            flag:"w",

        },function(err){
            if(err) throw err;
            console.log("写入成功");
        }
        )
    })

})