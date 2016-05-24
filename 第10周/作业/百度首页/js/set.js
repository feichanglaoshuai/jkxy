// 用户名称
$(document).ready(function() {
    $(".s-user-name-top,#s_user_name_menu").mouseover(function() {
        $("#s_user_name_menu").css({
            display: 'block'
        });
    });

    $(".s-user-name-top,#s_user_name_menu").mouseout(function() {
        $("#s_user_name_menu").css({
            display: 'none'
        });
    });

    $(".s-user-setting-top,#s_user_setting_menu").mouseover(function() {
        $("#s_user_setting_menu").css({
            display: 'block'
        });
    });

    $(".s-user-setting-top,#s_user_setting_menu").mouseout(function() {
        $("#s_user_setting_menu").css({
            display: 'none'
        });
    });
});
