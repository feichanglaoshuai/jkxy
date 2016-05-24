<?php
    header("Content-Type:application/json;charset=utf-8");
    header("Cashe-Control:max-age=0");
    $i=1;
    while($i<=9){
        $i++;
        $res=array("success"=>"ok","test"=>"我的测试的文本");
        echo json_encode($res);
        echo "<br/>";
        //不向浏览器输出
        ob_flush();
        //向浏览器输出
        flush();
    }
?>