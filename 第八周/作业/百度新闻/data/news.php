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

    //查询新闻
    $id=$_GET['id'];
    $sql = "select a.*,b.name as typeName from ob_news a inner join ob_types b on a.typeID=b.id";
    if($id!='-1'){
        $sql = $sql." where a.typeID=".$id;
    }
    $result = mysql_query($sql, $con);
    $types = array();
    while($row=mysql_fetch_array($result)){
        array_push($types, array("title"=>$row['title'], "img"=>$row['img'], "url"=>$row['url'], "typeName"=>$row['typeName']));
    };

    //返回给前端
    echo json_encode($types);

    //关闭数据库
    mysql_close($con);
?>