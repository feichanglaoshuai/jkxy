var express = require('express');
var router = express.Router();

//执行中间件
var loginDAO = require('../dao/loginDao.js');
router.post('/do', loginDAO.login, function(req, res, next){
    res.type("json");
    if (res.locals.user.length==1)
    {
        req.session.user = res.locals.user;
        res.json({status: 'true'});
    }
    else
    {
        res.json({status: 'false'});
    }
});

//到登录主页
router.get('/', function(req, res, next){
    res.render('login');
})

module.exports = router;