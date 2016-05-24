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
    },

    //删除分类
    delete: function(req, res, next){
        pool.getConnection(function(err, connection){
            connection.query(sql.delete, [req.body.id], function(err, data){
                if (err){
                    res.ob_types = err;
                }
                else{
                    res.ob_types = data;
                }
                next();
            });
            connection.release();
        });
    },

    //修改分类
    update: function(req, res, next){
        pool.getConnection(function(err, connection){
            console.log(req.body);
            connection.query(sql.update, [req.body.name, req.body.id], function(err, data){
                if (err){
                    res.ob_types = err;
                }
                else{
                    res.ob_types = data;
                }
                next();
            });
            connection.release();
        });
    },

    //修改分类
    insert: function(req, res, next){
        pool.getConnection(function(err, connection){
            connection.query(sql.insert, [req.body.name], function(err,data){
                if (err){
                    res.ob_types = err;
                }
                else{
                    res.ob_types = data;
                }
                next();
            });
            connection.release();
        })
    }
}