<?php
    header("Content-type:text/html;charset=utf-8");

    // 连接数据库
    $con = mysql_connect("localhost", "root", "");
    if (!$con){
        die('could not connect database');
    }

    //连接数据库
    mysql_select_db('ob_db', $con);

    //设置编码
    mysql_query("set names 'utf8'", $con);

    //新增分类
    $typeName=$_GET['typeName'];
    mysql_query("insert into ob_types (name) values ('".$typeName."')" , $con);

    echo "ok";

    //关闭数据库
    mysql_close($con);
?>