/*记录上次结果*/
var lastValue = 0;
/*标记新的操作数开始录入*/
var beginInput = 1;
/*记录当前操作符*/
var operateCurrent="";
/*标识位*/
var flag=0;

/*删除一个数字*/
function delOneData(){
    var obj = document.getElementsByName("dataResult")[0];
    var oldValue = obj.value;
    var newValue = "0";
    if (oldValue.length==1){
        newValue = "0";
    }
    else{
        newValue = oldValue.substring(0, oldValue.length-1);
    }
    obj.value = newValue;
}

/*清除数字*/
function clearData(){
    var obj = document.getElementsByName("dataResult")[0];
    obj.value = 0;
    operateCurrent="";

}

/*录入数字*/
function addOneData(data){
    var obj = document.getElementsByName("dataResult")[0];
    if ((beginInput == 1) || (flag == 1)){
        obj.value=0;
        beginInput=0;
    }
    flag=0;

    if ((obj.value=="0") && (data!=".")){
        obj.value = data;
    }
    else{
        obj.value = obj.value.concat(data);
    }

}

/*开始一个操作符*/
function beginOperate(sign){
    /*记录上次结果*/
    var show = document.getElementsByName("dataResult")[0];

    lastValue = show.value;
    /*标记新的操作数开始录入*/
    beginInput=1;
    /*记录当前操作符*/
    operateCurrent=sign;

    /*单目运算符，立即计算*/
    if ((sign=="sin") || (sign=="cos") || (sign=="1/x") || (sign=="√")){
        calculate();
    }
}

/*计算*/
function calculate(){
    var show = document.getElementsByName("dataResult")[0];
    var x = lastValue;
    var y = show.value;
    var sign = operateCurrent;

    switch(sign){
        case "×":
            show.value=parseFloat((x*y).toFixed(8));
            break;
        case "÷":
            if (y==0){
                alert("除数不能为0");
            }
            show.value=parseFloat(x)/parseFloat(y);
            break;
        case "+":
            show.value=parseFloat((parseFloat(x)+parseFloat(y)).toFixed(8));
            break;
        case "－":
            show.value=parseFloat((x-y).toFixed(8));
            break;
        case "sin":
            show.value=parseFloat(Math.sin(parseFloat(x)/180*Math.PI).toFixed(8));
            break;
        case "cos":
            show.value=parseFloat(Math.cos(parseFloat(x)/180*Math.PI).toFixed(8));
            break;
        case "1/x":
            show.value = 1/show.value;
            break;
        case "％":
            if (y==0){
                alert("除数不能为0");
            }
            show.value = x % y;
            break;
        case "√":
            show.value = Math.sqrt(x);
            break;
        case "":
            break;
        default:
            alert("请输入正确表达式");
    }

    lastValue = show.value;
    flag=1;
}