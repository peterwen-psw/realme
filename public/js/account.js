var express = require('express');
var router = express.Router();
var { render } = require("../tool/read");
var { conn, searchMany, searchOne, insert, del, update, hasId } = require("../tool/db");

/* GET users listing. */
// /account
// /account/sign
// /account/login
// /account/User
// /account/Email
// /account/Phone
router.get('/', function (req, res, next) {
  res.send('<h1>account</h1>'); // 发送文本和html结构 
});

// 用户名
router.get('/user', function (req, res, next) {
  var { user } = req.query;
  if (user) {
    searchOne(`SELECT * from userinfo where user = '${user}'`).then(data => {
      if (!data) {
        res.json({
          status: true,
          message: "可以使用该用户名"
        })
      } else {
        res.json({
          status: false,
          message: "该用户名已被注册",
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
      status: false,
      message: "请传入完整参数",
    })
  }
});

// 电话
router.get('/phone', function (req, res, next) {
  var { phone } = req.query;
  if (phone) {
    searchOne(`SELECT * from userinfo where phone = '${phone}'`).then(data => {
      if (!data) {
        res.json({
          status: true,
          message: "可以使用该号码"
        })
      } else {
        res.json({
          status: false,
          message: "该号码已被注册",
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
      status: false,
      message: "请传入完整参数",
    })
  }
});

// 邮箱
router.get('/email', function (req, res, next) {
  var { email } = req.query;
  if (email) {
    searchOne(`SELECT * from userinfo where email = '${email}'`).then(data => {
      if (!data) {
        res.json({
          status: true,
          message: "可以使用该邮箱"
        })
      } else {
        res.json({
          status: false,
          message: "该邮箱已被注册",
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
      status: false,
      message: "请传入完整参数",
    })
  }
});

// 注册
router.post('/sign', function (req, res, next) {
  var { user, pwd, phone, email } = req.body;
  if (user && pwd && phone && email) {
    insert(`INSERT INTO userinfo (user, pwd, phone, email)
    VALUES
      (
        '${user}',
        '${pwd}',
        '${phone}',
        '${email}'
      )`).then(result => {
      res.json({
        status: true,
        message: "注册成功",
      })
    }).catch(err => {
      res.json({
        status: false,
        message: err.sqlMessage,
        sql: err.sql,
      })
    })
  } else {
    res.json({
      status: false,
      message: "请传入完整参数",
    })
  }
});

// 用户名登录
router.post('/login', function (req, res, next) {
  var { user, pwd } = req.body;
  if (user && pwd) {
    searchOne(`SELECT * from userinfo where user = '${user}'`).then(data => {
      if (data) {
        if (pwd === data.pwd) {
          res.json({
            status: true,
            message: "登录成功",
          })
        } else {
          res.json({
            status: false,
            message: "账号或密码有误",
          })
        }
      } else {
        res.json({
          status: false,
          message: "该用户未注册!",
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
      status: false,
      message: "请传入完整参数",
    })
  }
});

// 账号登录
router.post('/loginAccount', function (req, res, next) {
  var { account, pwd } = req.body;
  if (account && pwd) {
    searchOne(`select * from userinfo where user = '${account}' or phone = '${account}' or email = '${account}'`).then(data => {
      if (data) {
        if (pwd === data.pwd) {
          res.json({
            status: true,
            message: "登录成功",
          })
        } else {
          res.json({
            status: false,
            message: "账号或密码有误",
          })
        }
      } else {
        res.json({
          status: false,
          message: "该用户未注册!",
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
      status: false,
      message: "请传入完整参数",
    })
  }
});


