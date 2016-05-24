<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>php</title>
    <script type="text/javascript" src="jquery-2.2.3.min.js"></script>
</head>
<body>
    <div>
        <label>姓名</label>
        <input type="text" id="username">
        <label>密码</label>
        <input type="text" id="password">
        <input type="button" id="save">
    </div>
</body>
    <script type="text/javascript">
        $('#save').click(function(event) {
            $.ajax({
                url:'a.php',
                data:{
                    username:$('#username').val(),
                    password:$('#password').val()
                },
                dataType:"json",
                type: "get",
                success: function(data){
                    alert(data.msg);
                }
            });
        });

        people = function(color){
            this.eye=color;
            this.header="大头人";
        }
        //原型是共有的
        people.prototype.print = function(){
            alert(this.header + ":" + this.eye);
        }

        yellowman = function(color){
            //借用people函数
            people.call(this,color);
        }
        p = new yellowman('blue');
        alert(p.header);

        //复制原型
        yellowman.prototype = Object.create(people.prototype);
        //引用原型
        //yellowman.prototype = people.prototype;

        p1 = new yellowman('yellow');
        p1.print();
    </script>
</html>