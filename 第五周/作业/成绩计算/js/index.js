function calculate(){
    var x = document.getElementById("x").value;
    var result = document.getElementById("result");

    if(x>=0 && x<=10)
    {
        result.value = "10级";
    }
    else
    if(x>10 && x<=20)
    {
        result.value = "9级";
    }
    else
    if (x>20 && x<=30)
    {
        result.value = "8级";
    }
    else
    if (x>30 && x<=40)
    {
        result.value = "7级";
    }
    else
    if (x>40 && x<=50)
    {
        result.value = "6级";
    }
    else
    if (x>50 && x<=60)
    {
        result.value = "5级";
    }
    else
    if (x>60 && x<=70)
    {
        result.value = "4级";
    }
    else
    if (x>70 && x<=80)
    {
        result.value = "3级";
    }
    else
    if (x>80 && x<=90)
    {
        result.value = "2级";
    }
    else
    if (x>90 && x<=100)
    {
        result.value = "1级";
    }
    else
    {
        result.value = "请输入合法成绩";
    }

    return 0;
}