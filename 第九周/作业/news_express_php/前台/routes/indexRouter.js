var express = require('express');
var router = express.Router();

//执行中间件：查询所有分类
var typesDAO = require('../dao/typesDAO.js');
router.use('/', typesDAO.findAll);

//执行中间件：查询所有新闻
var newsDAO = require('../dao/newsDAO.js');
router.use('/', newsDAO.findByTypeID);

//挂载中间件：渲染所有新闻和分类
router.get('/', function(req, res, next) {
    var data = res.ob_news;
    if (data){
        var cnt = 0;
        var content_news='';

        for (var i = 0; i < data.length; i++) {
            var el = data[i];

            content_news = content_news + "<div class='news' data-src=" + el.url +">";
            content_news = content_news + '<div class="left">';
            content_news = content_news + '<img src="'+ el.img +'">';
            content_news = content_news + '</div>';
            content_news = content_news + '<div class="right">';
            content_news = content_news + '<div class="news_title">' + el.title + '</div>' ;
            content_news = content_news + '</div>';
            content_news = content_news + '</div>';
        }
    }

    var data = res.ob_types;
    if (data){
        var cnt = 0;
        var content_types='<table><tbody id="typeWrapper">';
        console.log('....' + content_types);

        for (var i = 0; i < data.length; i++) {
            var el = data[i];

            cnt++;

            //新的一行开始
            if (cnt == 1){
                content_types = content_types + "<tr>";
            }

            //增加一个新的分类
            content_types = content_types + "<td class='typeItem'><a href='/?id=" + el.id + "'>" + el.name + "</a></td>";

            //新的一行结束
            if(cnt==5 ||i==data.length-1){
                content_types = content_types +　"</tr>";
                cnt = 0;
            }
        }

        content_types = content_types + '</tbody></table>';
    }

    //渲染
    res.render('index', { newcontent: content_news, typecontent: content_types });
});

module.exports = router;
