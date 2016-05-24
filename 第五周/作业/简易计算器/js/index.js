function calculate(){
    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;
    var sign = document.getElementById("sign").value;
    var show = document.getElementById("show");

    switch(sign){
        case "*":
            show.value=parseFloat((x*y).toFixed(8));
            break;
        case "/":
            if (y==0){
                alert("除数不能为0");
            }
            show.value=parseFloat(x)/parseFloat(y);
            break;
        case "+":
            show.value=parseFloat(x)+parseFloat(y);
            break;
        case "-":
            show.value=x-y;
            break;
        default:
            value=-1;
            show.value="请输入正确表达式";
    }

    return 0;
}