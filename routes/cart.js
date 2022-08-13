var express = require('express');
var router = express.Router();
var { conn, searchMany, searchOne, insert, del, update, hasId } = require("../tool/db");

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('1213213cart');
});
router.post('/buy', function (req, res, next) {
  var { user, gid, buyNum } = req.body;
  if (user && gid && buyNum) {
    var sql = `select * from shoppingcar where user = '${user}' and gid = '${gid}';`;
    searchOne(sql).then(data => {
      if (data) {
        var sql = `update shoppingcar set buyNum = ${buyNum} + 1 where user = '${user}' and gid = '${gid}';`
        update(sql).then(data => {
          if (data.affectedRows > 0) {
            res.json({
              status: true,
              message: "加入成功",
            })
          } else {
            res.json({
              status: false,
              message: "加入失败,数据未更新",
            })
          }
        }).catch(err => {
          res.json({
            status: false,
            message: err.sqlMessage,
            sql: err.sql,
          })
        })
      } else {

        var sql = `insert into shoppingcar(user,gid,buyNum) values('${user}','${gid}',${buyNum})`;
        insert(sql).then(result => {
          res.json({
            status: true,
            message: "加入购物车成功！",
          })
        }).catch(err => {
          res.json({
            status: false,
            message: err.sqlMessage,
            sql: err.sql,
          })
        })
      }
    }).catch(err => {

    })

  } else {
    res.json({
      status: "false",
      message: "请输入完整参数",
    })
  }
});
router.get('/search', function (req, res, next) {
  var { user } = req.query;
  if (user) {
    var sql = `SELECT
    s.id,
    s.gid,
    s.buyNum,
    g.goodsName,
    g.goodsImg,
    g.goodsPrice
    FROM
    shoppingcar as s,
    goodslist as g
    WHERE
    s.gid = g.goodsId
     AND s. USER = '${user}'`;
    searchMany(sql).then(data => {
      if (data) {
        res.json({
          status: true,
          message: "购买成功",
          list: data,
        })
      } else {
        res.json({
          status: true,
          message: "该用户尚未购买任何商品",
          data: [],
        })
      }
    }).catch(err => {
      res.json({
        status: false,
        message: err.sqlMessage,
        sql: err.sql,
      })
    })
  } else {
    res.json({
      status: "false",
      message: "请输入完整参数",
    })
  }
});
module.exports = router;
