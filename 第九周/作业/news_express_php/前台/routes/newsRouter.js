var express = require('express');
var router = express.Router();

//执行中间件：查询所有新闻
var newsDAO = require('../dao/newsDAO.js');
router.use('/', newsDAO.findAll);

//挂载中间件：渲染所有新闻
router.get('/', function(req, res, next) {
    console.log('news......');
    var data = res.ob_news;
    if (data){
        var cnt = 0;
        var content='';

        for (var i = 0; i < data.length; i++) {
            var el = data[i];

            content = content + "<div class='news' data-src=" + el.url +">";
            content = content + '<div class="left">';
            content = content + '<img src="'+ el.img +'">';
            content = content + '</div>';
            content = content + '<div class="right">';
            content = content + '<div class="news_title">' + el.title + '</div>' ;
            content = content + '</div>';
            content = content + '</div>';
        }

        res.render('index', { newcontent: content });
    }
});

module.exports = router;
