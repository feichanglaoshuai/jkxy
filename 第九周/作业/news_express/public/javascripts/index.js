// 骨架准备完成
$(document).ready(function() {

    function bindEvent(){
        // 绑定新闻事件
        $(".news").bind('click', function(event) {
            document.location = this.attributes["data-src"].value;
        });

        //绑定登录事件
        $("#loginBtn").bind('click', function(event) {
            $.ajax({
                url: '/login/do',
                type: 'post',
                dataType: 'json',
                data: {
                    username: $("#username").val(),
                    password: $("#password").val()
                },
                success: function(data){
                    if (data.status == 'true'){
                        location.href = '/manage';
                    }
                    else
                    {
                        alert('请检查用户名或者密码！');
                    }
                },
                error: function(data, err){
                    alert('出错了：' + err.message);
                }
            });
        });
    };

    //执行绑定
    bindEvent();
});

