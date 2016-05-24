var mysql = require('mysql');

var conf = require('../conf/conf.js');
var sql = require('./loginSQL.js');

//使用连接池
var pool = mysql.createPool(conf.mysql);

module.exports = {
    login: function(req, res, next){
        pool.getConnection(function(err, connection){
            connection.query(sql.login, [req.body.username, req.body.password], function(err, data){
                if (err){
                    return console.error("我的错误：" + err);
                }

                res.locals.user = data;
                next();
            });
        });
    }
}
