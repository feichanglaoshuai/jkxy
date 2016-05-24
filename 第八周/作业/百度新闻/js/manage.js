$(document).ready(function() {
    // 默认加载
    $(window).load(function() {
        //加载类别
        loadType();
    });

    // 导航切换
    $(".side-nav li").click(function(event) {
        //样式控制
        $(this).addClass('active').siblings().removeClass('active');

        //导航控制
        var navName = $.trim($(this).text());
        $(".breadcrumb li a").eq(1).text(navName);

        //数据加载
        if (navName=='类别管理'){
            //显隐控制
            $(".typePanel").show();
            $(".newPanel").hide();

            //加载数据
            loadType();
        }
        else{
            //显隐控制
            $(".typePanel").hide();
            $(".newPanel").show();

            //加载数据
            loadNews(-1);
        }
    });

    //绑定事件
    function bindEvent(){
        //修改分类
        $(".editType").click(function(event) {
            $("#editTypeName").attr("data-id",this.attributes['data-id'].value);
            $("#editTypeName").val(this.attributes['data-name'].value);
        });

        //删除分类
        $(".delType").click(function(event) {
            var r=confirm("是否确认删除！");
            if(r==true){
                $.ajax({
                    url: './data/typesDel.php',
                    type: 'get',
                    dataType: "json",
                    data: {
                        id: this.attributes['data-id'].value,
                    },
                    success: function(data){
                        //加载类别
                        loadType();
                    },
                    error: function(e) {
                        //加载类别
                        loadType();
                    }
                })
            }
        });
    }

    // 加载分类
    function loadType(){
        $.ajax({
            url: "./data/types.php",
            dataType: "json",
            type: 'get',
            success: function(data){
                var cnt = 0;
                var parent = $(".typePanel table tbody");
                //初始化
                parent.html("");

                //加载新的内容
                var content;
                $.each(data, function(index, el) {
                    content = "<tr>";
                    content = content + "<td>"+ el.id +"</td>";
                    content = content + "<td>"+ el.name +"</td>";
                    content = content + "<td>"
                        +"<button type='button' class='editType btn btn-info btn-sm' data-id=" + el.id
                        +" data-name=" + el.name
                        +" data-toggle='modal'"
                        +" data-target='#myEditModal'>修改</button>"
                        +"<button type='button' class='delType btn btn-warning btn-sm' data-id=" + el.id + ">删除</button>"
                        +"</td>";
                    content = content + "</tr>";
                    parent.append(content);
                });

                // 绑定事件
                bindEvent();
            },
            error:function(e){
                alert(e);
            }
        });
    }

    //加载新闻
    function loadNews(t){
        $.ajax({
            url: "./data/news.php",
            dataType: "json",
            data: {
                id:t
            },
            type: 'get',
            success: function(data){
                var parent = $(".newPanel table tbody");
                //初始化
                parent.html("");

                //加载新的内容
                var content;
                var index = 0;
                $.each(data, function(index, el) {
                    index++;
                    content = "<tr>";
                    content = content + "<td>"+ index +"</td>";
                    content = content + "<td>"+ el.typeName +"</td>";
                    content = content + "<td>"+ el.title +"</td>";
                    content = content + "<td>"+ el.img +"</td>";
                    content = content + "<td>"+ el.url +"</td>";
                    content = content + "</tr>";
                    parent.append(content);
                });
            },
            error:function(e){
                alert(e);
            }
        });
    }

    //修改分类
    $("#btnEditType").click(function(event) {
        $.ajax({
                url: './data/typesEdit.php',
                type: 'get',
                dataType: "json",
                data: {
                    id: $("#editTypeName").attr("data-id"),
                    typeName: $("#editTypeName").val()
                },
                success: function(data){
                    //加载类别
                    loadType();
                },
                error: function(e) {
                    //加载类别
                    loadType();
                }
            })
    });

    //新增分类
    $("#btnSaveType").click(function(event) {
        $.ajax({
            url: './data/typesSave.php',
            type: 'get',
            dataType: "json",
            data: {
                typeName: $("#newTypeName").val()
            },
            success: function(data){
                //加载类别
                loadType();
            },
            error: function(e) {
                //加载类别
                loadType();
            }
        })

    });
});


