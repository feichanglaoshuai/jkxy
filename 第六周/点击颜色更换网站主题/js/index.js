/*改变颜色*/
function changeColor(c){
    var pages = document.getElementById("pages");

    if (c!=""){
        for(var i=0;i<pages.children.length;i++){
            pages.children[i].style.backgroundColor=c;
        }

        /*存储颜色*/
        window.localStorage.defaultColor=c;
    }
}

/*加载颜色*/
function loadColor(){
    /*读取颜色*/
    var color = localStorage.defaultColor;

    changeColor(color);
}