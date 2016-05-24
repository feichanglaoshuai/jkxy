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
        //删除分类
        $(".delType").unbind('click').click(function(event) {
            var r=confirm("是否确认删除！");
            if(r==true){
                deleteType(this.attributes['data-id'].value);
            }
        });
        //删除新闻
        $(".delNew").unbind('click').click(function(event) {
            var r=confirm("是否确认删除！");
            if(r==true){
                deleteNew(this.attributes['data-id'].value);
            }
        });

        //修改分类
        $(".editType").unbind('click').click(function(event) {
            $("#editTypeName").attr("data-id",this.attributes['data-id'].value);
            $("#editTypeName").val(this.attributes['data-name'].value);
        });
        $("#btnEditType").unbind('click').click(function(event) {
            editType($("#editTypeName").attr("data-id"), $("#editTypeName").val());
        });
        //修改新闻
        $(".editNews").unbind('click').click(function(event) {
            $("#newsEditTitle").attr("data-id",this.attributes['data-id'].value);
            $("#newsEditTitle").attr("data-typeid",this.attributes['data-typeid'].value);
            $("#newsEditImg").val(this.attributes['data-img'].value);
            $("#newsEditUrl").val(this.attributes['data-url'].value);
        });
        $("#btnSaveEditNews").unbind('click').click(function(event) {
            editNews($("#newsEditTitle").attr("data-id"), $("#newsEditTitle").val(), $("#newsEditImg").val(), $("#newsEditUrl").val(), $("#selectEidtTypes").find("option:selected").val());
        });

        //新增分类
        $("#btnSaveType").unbind('click').click(function(event) {
            addType($("#newTypeName").val());
        });
        //新增新闻
        $("#btnSaveNews").unbind('click').click(function(event) {
            addNews($("#newsTitle").val(), $("#newsImg").val(), $("#newsUrl").val(), $("#selectTypes").find("option:selected").val());
        });

        //新增新闻，显示分类
        $('#appendNewModal').on('show.bs.modal', function (e) {
            loadTypeToSelect($("#selectTypes"), -1);
        });
        //修改新闻，显示分类
        $('#editNewModal').on('show.bs.modal', function (e) {
            loadTypeToSelect($("#selectEidtTypes"), $("#newsEditTitle").attr("data-typeid"));
        });
    };

    //加载分类
    function loadTypeToSelect(obj, value){
        $.ajax({
            url: "/manage/find",
            type: 'get',
            dataType: "json",
            success: function(data){
                var cnt = 0;
                //初始化
                obj.html("");

                //加载新的内容
                $.each(data, function(index, el) {
                    if (el.id == value){
                        obj.append("<option selected value='" + el.id + "'>" + el.name + "</option>");
                    }
                    else{
                        obj.append("<option value='" + el.id + "'>" + el.name + "</option>");
                    }
                });
            },
            error:function(e){
                alert('查询出错了：' + e.responseText);
            }
        });
    }

    //删除分类
    function deleteType(delID){
        $.ajax({
            url: 'manage/delete',
            type: 'post',
            dataType: "json",
            data: {
                id: delID,
            },
            success: function(data){
                //加载类别
                loadType();
            },
            error: function(e) {
                alert('删除出错了：' + e.responseText);
            }
        });
    }

    //删除新闻
    function deleteNew(delID){
        $.ajax({
            url: 'manage/deletex',
            type: 'post',
            dataType: "json",
            data: {
                id: delID,
            },
            success: function(data){
                //加载新闻
                loadNews(-1);
            },
            error: function(e) {
                alert('删除出错了：' + e.responseText);
            }
        });
    }

    //修改分类
    function editType(dataID, dataName){
        $.ajax({
            url: '/manage/update',
            type: 'post',
            dataType: "json",
            data: {
                id: dataID,
                name: dataName
            },
            success: function(data){
                //加载类别
                loadType();
            },
            error: function(e) {
                alert('修改出错了：' + e.responseText);
            }
        });
    }

    //修改分类
    function editNews(dataID, dataTitle, dataImg, dataUrl, dataTypeID){
        $.ajax({
            url: '/manage/updatex',
            type: 'post',
            dataType: "json",
            data: {
                id: dataID,
                title: dataTitle,
                img: dataImg,
                url: dataUrl,
                typeid: dataTypeID
            },
            success: function(data){
                //加载新闻
                loadNews(-1);
            },
            error: function(e) {
                alert('修改出错了：' + e.responseText);
            }
        });
    }

    //新增分类
    function addType(dataName){
        $.ajax({
            url: '/manage/insert',
            type: 'post',
            dataType: "json",
            data: {
                name: dataName
            },
            success: function(data){
                //加载类别
                loadType();
            },
            error: function(e) {
                alert('新增出错了：' + e.responseText);
            }
        });
    }

    //新增新闻
    function addNews(vTitle, vImg, vUrl, vTypeID){
        $.ajax({
            url: '/manage/insertx',
            type: 'post',
            dataType: "json",
            data: {
                title: vTitle,
                img: vImg,
                url: vUrl,
                typeid: vTypeID
            },
            success: function(data){
                //加载新闻
                loadNews(-1);
            },
            error: function(e) {
                alert('新增出错了：' + e.responseText);
            }
        });
    }

    // 加载分类
    function loadType(){
        $.ajax({
            url: "/manage/find",
            type: 'get',
            dataType: "json",
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
                alert('查询出错了：' + e.responseText);
            }
        });
    }

    //加载新闻
    function loadNews(t){
        $.ajax({
            url: "/manage/news",
            type: 'get',
            dataType: "json",
            data: {
                id:t
            },
            success: function(data){
                var parent = $(".newPanel table tbody");
                //初始化
                parent.html("");

                //加载新的内容
                var content;
                $.each(data, function(index, el) {
                    content = "<tr>";
                    content = content + "<td>"+ el.id +"</td>";
                    content = content + "<td>"+ el.typeName +"</td>";
                    content = content + "<td>"+ el.title +"</td>";
                    content = content + "<td>"+ el.img +"</td>";
                    content = content + "<td>"+ el.url +"</td>";
                    content = content + "<td>"
                        +"<button type='button' class='editNews btn btn-info btn-sm' data-id=" + el.id
                        +" data-typeid=" + el.typeID
                        +" data-title=" + el.title
                        +" data-img=" + el.img
                        +" data-url=" + el.url
                        +" data-toggle='modal'"
                        +" data-target='#editNewModal'>修改</button>"
                        +"<button type='button' class='delNew btn btn-warning btn-sm' data-id=" + el.id + ">删除</button>"
                        +"</td>";
                    content = content + "</tr>";
                    parent.append(content);
                });

                // 绑定事件
                bindEvent();
            },
            error:function(e){
                alert('查询出错了：' + e.responseText);
            }
        });
    }
});


