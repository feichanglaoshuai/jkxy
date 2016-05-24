$(document).ready(function() {
    $(window).on("load",function(){
        //计算位置
        imgLocation();

        //滚动时动态加载的图片
        var dataImg = {"data": [{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"}]};
        window.onscroll=function(){
                if(canScrollSide()){
                    $.each(dataImg.data, function(index, value){
                        var box = $("<div>").addClass("box").appendTo($("#container"));
                        var content = $("<div>").addClass("content").appendTo(box);
                        $("<img>").attr("src","img/"+$(value).attr("src")).appendTo(content);
                    });
                }

                //计算位置
                imgLocation();
        }
    })
});

$(window).resize(function() {
    //计算位置
    imgLocation();
});

//滚动到最后一张图片一半高度时开始加载后面的图片
function canScrollSide(){
    var box = $(".box");
    //最后一张图片一半高度
    var lastBoxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height()/2);
    //文档的高度
    var documentHeight = $(document).height();
    //鼠标滚动的高度
    var mouseScrollHeight = $(window).scrollTop();

    return (lastBoxHeight<mouseScrollHeight+documentHeight)?true:false;
}

//图片位置计算
function imgLocation(){
    //选择器：所有盒子
    var box = $(".box");
    //每张图片都是等宽的
    var boxWidth = box.eq(0).width();
    //每行可放图片数量
    var num = Math.floor($(window).width()/boxWidth);

    //遍历所有图片
    var boxArr=[];
    box.each(function(index, value){
        var boxHeight = box.eq(index).height();

        //存储第一行高度
        if(index<num){
            boxArr[index] = boxHeight;

            //初始设置图片盒子的位置
            $(value).css({
                "position":"relative",
                "top":"0",
                "left":"auto"
            });
        }else{
            //计算第一行最小图片高度
            var minBoxHeight = Math.min.apply(null, boxArr);
            //计算第一行最小高度图片的位置
            var minBoxIndex = $.inArray(minBoxHeight, boxArr);

            //设置图片盒子的位置
            $(value).css({
                "position":"absolute",
                "top":minBoxHeight,
                "left":box.eq(minBoxIndex).position().left
            });

            //重新记录当前盒子高度
            boxArr[minBoxIndex]+=box.eq(index).height();
        }
    });
}