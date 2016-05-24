var mysql = require('mysql');

var conf = require('../conf/conf.js');
var sql = require('./newsSQL.js');

//使用连接池
var pool = mysql.createPool(conf.mysql);

module.exports = {
    findByTypeID: function(req, res, next){
        pool.getConnection(function(err, connection){
            // 获取前台页面传过来的参数
            var param = req.query || req.params;
            if (!param.id){
                param.id = 1;
            }

            connection.query(sql.queryByTypeID, [param.id], function(err, data){
                if (err){
                    res.ob_news = err;
                }
                else{
                    res.ob_news = data;
                }
                console.log('新闻find');
                next(); // 将控制转向下一个中间件
            });
        });
    },

    findAll: function(req, res, next){
        pool.getConnection(function(err, connection){
            connection.query(sql.queryAll, function(err, data){
                if (err){
                    res.ob_news = err;
                }
                else{
                    res.ob_news = data;
                }
                next(); // 将控制转向下一个中间件
            });
        });
    }
}
