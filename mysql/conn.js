var mysql = require("mysql");
// console.log(mysql);
let host = "127.0.0.1";
let user = "root";
let pwd = "123456";
let dbName = "gp01";
var conn = mysql.createConnection({ host, user, password: pwd, database: dbName });
console.log(conn);


//查询
// conn.connect();
// var sql = `select id,name,class,chinese,math,english,chinese+math+english as total from grade limit 0,5`;
// conn.query(sql, function (err, result, field) {
//     if (err) throw err;
//     console.log(result);

//     conn.end();
// })

//增加
conn.connect();
var sql = ` insert into grade(name,class,chinese,math,english) values('bOB','GP01',55,66,77)`;
conn.query(sql, function (err, result) {
    if (err) {
        console.log(err, sqlMessage);
        console.log(err, sql);
    } else {

        console.log(result);
        console.log(result.affectedRows);//受影响的函数
        console.log(result.insertId);//新增数据的id
        conn.end();
    }
})