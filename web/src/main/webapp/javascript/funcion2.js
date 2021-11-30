// 구구단.
function multi(num = 2){
    var str = "<table border = '1' width = 200 style='border-collapse:collapse'>";
    for(var i =1; i<10; i++){
        str+="<tr><td>" + num + "</td><td>*</td><td>" + i + "</td><td>=</td><td>" + (num*i) + "</td></tr>";
    }
    str += "</table>";
    document.write(str);
}
for( var i = 2 ; i<=9; i ++){
    multi(i);
}
