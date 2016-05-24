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

    //修改分类
    $typeID=$_GET['id'];
    mysql_query("delete from ob_types where id=".$typeID , $con);

    echo "ok";

    //关闭数据库
    mysql_close($con);
?>