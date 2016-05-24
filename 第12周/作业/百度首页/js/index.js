//单例设计模式
//1.对象是唯一的
//2.保护内部数据
var index = {
    init: function(argument){
        var me = this;
        me.render();
        me.bind();
    },

    render: function(){
        var me = this;
        me.btnBri = $(".s_bri,.s_bdbri");
        me.btnBdbri = $(".s_bdbri");
        me.mnuMine = $(".s-menu-mine");
        me.mnuItem = $(".s-menu-item");
        me.mnuData = $("#s_xmancard_nav .s-nav-wrapper .nav-tips");
        me.btnTop = $(".to-top");
        me.iconMask = $(".icon-mask");
        me.dataBody = $('body,html');
    },

    bind: function(){
        var me = this;
        me.btnBri.mouseover(function() {
            me.btnBdbri.css({
                    display: 'block'
                });
        });
        me.btnBri.mouseout(function() {
            me.btnBdbri.css({
                display: 'none'
            });
        });

        me.mnuMine.click(function() {
            me.mnuData.remove();
        });

        me.mnuItem.click(function(event) {
            var data = this.attributes["data-id"].value;
            var btn = '.s-menu-item[data-id="' + data + '"]';
            var str = '.s-content[data-id="' + data + '"]';
            $(".s-menu-item").removeClass('current');
            $(btn).addClass('current');

            $(".s-content").hide('fast', function() {
                $(str).show('fast', function() {});
            });
        });


        me.btnTop.hover(function() {
            me.iconMask.css({
                display: 'block'
            });
        }, function() {
            me.iconMask.css({
                display: 'none'
            });
        });

        me.btnTop.click(function(event) {
            me.dataBody.animate({
                scrollTop: 0
            });
        });
    }
}

index.init();
