// 骨架准备完成
$(document).ready(function() {
    // 绑定新闻事件
    function bindNewsEvent(){
        $(".news").bind('click', function(event) {
            document.location = this.attributes["data-src"].value;
        });
    };

    //执行绑定
    bindNewsEvent();
});

