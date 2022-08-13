var mysql = require("mysql");
// const { connect } = require("../routes/grade");
// console.log(mysql);
let host = "127.0.0.1";
let user = "root";
let pwd = "123456";
let dbName = "gp01";

function conn({ host = "127.0.0.1", user = "root", pwd = "123456", dbName = "gp01" }) {

    var sqlCon = mysql.createConnection({ host, user, password: pwd, database: dbName });
    return sqlCon;

}

function hasId(table, id, options = {}) {
    return new Promise(function (resolve, reject) {
        var connect = conn(options);
        connect.connect();
        connect.query(`select * from ${table} where id =` + id, function (err, result, field) {
            if (err) reject(err);
            else {
                var flag = result[0] ? true : false
                resolve(flag);
            }
            connect.end();
        })
    })

}


function searchOne(sql, options = {}) {
    return new Promise(function (resolve, reject) {
        var connect = conn(options);
        connect.connect();
        connect.query(sql, function (err, result, field) {
            if (err) reject(err);
            else resolve(result[0]);
            connect.end();
        })
    })
}


function searchMany(sql, options = {}) {
    return new Promise(function (resolve, reject) {
        var connect = conn(options);
        connect.connect();
        connect.query(sql, function (err, result, field) {
            if (err) reject(err);
            else resolve(result);
            connect.end();
        })
    })
}


function insert(sql, options = {}) {
    return new Promise(function (resolve, reject) {
        var connect = conn(options);
        connect.connect();
        connect.query(sql, function (err, result) {
            if (err) reject(err);
            else resolve(result);
            connect.end();
        })
    })
}
function del(sql, options = {}) {
    return new Promise(function (resolve, reject) {
        var connect = conn(options);
        connect.connect();
        connect.query(sql, function (err, result) {
            if (err) reject(err);
            else resolve(result);
            connect.end();
        })
    })
}

function update(sql, options = {}) {
    return new Promise(function (resolve, reject) {
        var connect = conn(options);
        connect.connect();
        connect.query(sql, function (err, result) {
            if (err) reject(err);
            else resolve(result);
            connect.end();
        })
    })
}

// searchMany(sql).then(data=>{
//     console.log(data);
// }).catch(err=>{
//     throw err;
// })

// var sql = `select id,name,class,chinese,math,english,chinese+math+english as total from grade limit 0,5`;

// searchOne(sql).then(data=>{
//     console.log(data);
// }).catch(err=>{
//     throw err;
// })
//查询
// conn.connect();
// conn.query(sql, function (err, result, field) {
//     if (err) throw err;
//     console.log(result);

//     conn.end();
// })

//增加
// conn.connect();
// var sql = ` insert into grade(name,class,chinese,math,english) values('bOB','GP01',55,66,77)`;
// conn.query(sql, function (err, result) {
//     if (err) {
//         console.log(err, sqlMessage);
//         console.log(err, sql);
//     } else {

//         console.log(result);
//         conn.end();
//     }
// })

module.exports = {
    searchMany,
    conn,
    searchOne,
    insert,
    del,
    update,
    hasId,
}