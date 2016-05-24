<?php
    $username = $_REQUEST['username'];
    if ($username=="admin"){
        echo json_encode(array('msg'=>"登录陈宫","data"=>"ok"));
    };
?>