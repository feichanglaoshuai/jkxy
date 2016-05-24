<?php
    header('Content-type:text/html;charset=utf-8');

    // 连接数据库
    $con = mysql_connect("localhost","root");
    if(!$con){
        die('could not connect database');
    }
    mysql_select_db("ob_db", $con);

    //用户查询
    $username=$_GET['username'];
    $password=$_GET['password'];
    $sql = "select * from ob_user where username='".$username."' and password='".$password."'";
    $result = mysql_query($sql, $con);

    //返回前端
    $row = mysql_fetch_row($result);
    if($row){
        echo "<script language='javascript' type='text/javascript'>";
        echo "window.location.href ='../manage.html'";
        echo "</script>";
    }
    else{
        echo "<script language='javascript' type='text/javascript'>";
        echo "alert('用户名或密码错误！');";
        echo "window.location.href ='../login.html';";
        echo "</script>";
    }

    //关闭数据库
    mysql_close($con);

?>