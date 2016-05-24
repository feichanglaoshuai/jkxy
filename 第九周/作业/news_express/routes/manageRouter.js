var express = require('express');
var router = express.Router();

var typeDao = require('../dao/typesDAO.js');
var newsDao = require('../dao/newsDAO.js');

//登录验证
router.use('/', function(req, res, next){
    if (!req.session.user){
        req.session.error = "请先登录"
        res.redirect('/login');
    }
    next();
});

//主页模板渲染
router.get('/', function(req, res, next){
    res.render('manage');
});

//新闻路由
router.get('/news', newsDao.findAll, function(req, res, next){
    res.type('json');
    res.json(res.ob_news);
});

router.post('/deletex', newsDao.delete, function(req, res, next){
    res.type('json');
    res.json(res.ob_news);
});

router.post('/updatex', newsDao.update, function(req, res, next){
    res.type('json');
    res.json(res.ob_news);
});

router.post('/insertx', newsDao.insert, function(req, res, next){
    res.type('json');
    res.json(res.ob_news);
});

//分类路由
router.get('/find', typeDao.findAll, function(req, res, next){
    res.type('json');
    res.json(res.ob_types);
});

router.post('/delete', typeDao.delete, function(req, res, next){
    res.type('json');
    res.json(res.ob_types);
});

router.post('/update', typeDao.update, function(req, res, next){
    res.type('json');
    res.json(res.ob_types);
});

router.post('/insert', typeDao.insert, function(req, res, next){
    res.type('json');
    res.json(res.ob_types);
});

module.exports = router;