var express = require('express');
var router = express.Router();
var { render } = require("../tool/read");
var { conn, searchMany, searchOne, insert, del, update, hasId } = require("../tool/db");

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('goods');
});
router.get('/list', async function (req, res, next) {
  searchMany("select id,goodsId,goodsName,goodsImg,goodsPrice from `goodslist`").then(data => {
    res.json({
      status: true,
      message: "ok!",
      list: data,
    })
  }).catch(err => {
    res.json({
      status: false,
      message: err.sqlMessage,
      sql: err.sql,
      list: data,
    })
  })
});

router.get('/search', async function (req, res, next) {
  var { gid } = req.query;
  if (!gid) {
    res.json({
      status: false,
      message: "请传入完整参数",
      list: data,
    })
  }
  searchOne(`select id,goodsId,goodsName,goodsImg,goodsPrice,smallPicList,bigPicList,goodsDetail from goodslist where goodsId = '${gid}'`).then(data => {
    console.log(data);
    if (data) {
      data.smallPicList = data.smallPicList.split(",").slice(0, 4);
      data.bigPicList = data.bigPicList.split(",").slice(0, 4);
      res.json({
        status: true,
        message: "ok!",
        data: data,
      })

    } else {
      res.json({
        status: false,
        message: "查询数据不存在",
      })
    }
  }).catch(err => {
    res.json({
      status: false,
      message: err.sqlMessage,
      sql: err.sql,
      data: data,
    })
  })
});
router.get('/', function (req, res, next) {
  res.send('goods');
});

module.exports = router;
