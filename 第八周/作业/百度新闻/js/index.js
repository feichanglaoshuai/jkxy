// 骨架准备完成
$(document).ready(function() {
    // 绑定分类事件
    function bindTypeEvent(){
        $(".typeItem").bind('click', function(event) {
            loadNews(this.attributes["data-id"].value);
        });
    }
    // 绑定新闻事件
    function bindNewsEvent(){
        $(".news").bind('click', function(event) {
            document.location = this.attributes["data-src"].value;
        });
    };

    // 加载分类
    function loadType(){
        $.ajax({
            url: "./data/types.php",
            dataType: "json",
            type: 'get',
            success: function(data){
                var cnt = 0;
                var parent = $("#typeWrapper");
                var content;
                $.each(data, function(index, el) {
                    cnt++;

                    //新的一行开始
                    if (cnt == 1){
                        content = "<tr>";
                    }

                    //增加一个新的分类
                    content = content + "<td class='typeItem' data-id='" + el.id + "'>" + el.name + "</td>";

                    //新的一行结束
                    if(cnt==5 ||index==data.length-1){
                        content = content +　"</tr>";
                        parent.append(content);
                        content = "";
                        cnt = 0;
                    }
                });


                bindTypeEvent();
            },
            error:function(e){
                alert(e);
            }
        });
    }

    // 加载新闻
    function loadNews(t){
        $.ajax({
            url: "./data/news.php",
            dataType: "json",
            data: {
                id:t
            },
            type: 'get',
            success: function(data){
                var parent = $("#content");
                //初始化
                parent.html("");
                //加载新的内容
                var content;
                $.each(data, function(index, el) {
                    content = "<div class='news' data-src=" + el.url +">";
                    content = content + '<div class="left">';
                    content = content + '<img src="'+ el.img +'">';
                    content = content + '</div>';
                    content = content + '<div class="right">';
                    content = content + '<div class="news_title">' + el.title + '</div>' ;
                    content = content + '</div>';
                    content = content + '</div>';
                    parent.append(content);
                });

                bindNewsEvent();
            },
            error:function(e){
                alert(e);
            }
        });
    }

    loadType();
    loadNews(1);

});

