var express = require('express');
var router = express.Router();

//执行中间件：查询所有分类
var typesDAO = require('../dao/typesDAO.js');
router.use('/', typesDAO.findAll);

//挂载中间件：渲染所有分类
router.get('/', function(req, res, next) {
    var data = res.ob_types;
    if (data){
        var cnt = 0;
        var content='<table><tbody id="typeWrapper">';

        for (var i = 0; i < data.length; i++) {
            var el = data[i];

            cnt++;

            //新的一行开始
            if (cnt == 1){
                content = content + "<tr>";
            }

            //增加一个新的分类
            content = content + "<td class='typeItem' data-id='" + el.id + "'>" + el.name + "</td>";

            //新的一行结束
            if(cnt==5 ||i==data.length-1){
                content = content +　"</tr>";
                cnt = 0;
            }
        }

        content = content + '</tbody></table>';

        res.render('index', { typecontent: content });
        next();
    }
});

module.exports = router;
