var mysql = require('mysql');

var conf = require('../conf/conf.js');
var sql = require('./typesSQL.js');

//使用连接池
var pool = mysql.createPool(conf.mysql);

module.exports = {
    //查询所有分类
    findAll: function(req, res, next){
        pool.getConnection(function(err, connection){
            connection.query(sql.queryAll, function(err, data){
                if (err){
                    res.ob_types = err;
                }
                else{
                    res.ob_types = data;
                }
                next(); // 将控制转向下一个中间件
            });
            connection.release();
        });
    }
}