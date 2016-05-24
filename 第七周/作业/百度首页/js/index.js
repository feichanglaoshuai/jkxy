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

    $(".s_bri,.s_bdbri").mouseover(function() {
        $(".s_bdbri").css({
            display: 'block'
        });
    });

    $(".s_bri,.s_bdbri").mouseout(function() {
        $(".s_bdbri").css({
            display: 'none'
        });
    });

    $(".s-menu-mine").click(function() {
        $("#s_xmancard_nav .s-nav-wrapper .nav-tips").remove();
        // F.use("superman:common/user_attr", function(e) {
        //   e.setAttr("supermanNavGuide", "off")
        // })
    });

    $(".to-top").hover(function() {
        $(".icon-mask").css({
            display: 'block'
        });
    }, function() {
        $(".icon-mask").css({
            display: 'none'
        });
    });

    $(".to-top").click(function(event) {
        $('body,html').animate({
            scrollTop: 0
        });
    });

    $(".s-menu-item").click(function(event) {
        var data = this.attributes["data-id"].value;
        var btn = '.s-menu-item[data-id="' + data + '"]';
        var str = '.s-content[data-id="' + data + '"]';
        $(".s-menu-item").removeClass('current');
        $(btn).addClass('current');

        $(".s-content").hide('fast', function() {
            $(str).show('fast', function() {});
        });
    });


});
