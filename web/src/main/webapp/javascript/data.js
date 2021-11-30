var data =
    `
[{"id":1,"first_name":"Theresina","last_name":"Gress","email":"tgress0@e-recht24.de","gender":"Male","salary":3673},
{"id":2,"first_name":"Brianna","last_name":"Coxen","email":"bcoxen1@ucsd.edu","gender":"Male","salary":12830},
{"id":3,"first_name":"Kelsi","last_name":"Maghull","email":"kmaghull2@mtv.com","gender":"Female","salary":12297},
{"id":4,"first_name":"Sanford","last_name":"Comazzo","email":"scomazzo3@printfriendly.com","gender":"Female","salary":13255},
{"id":5,"first_name":"Bride","last_name":"Lawry","email":"blawry4@unesco.org","gender":"Female","salary":11409},
{"id":6,"first_name":"Liva","last_name":"Shmyr","email":"lshmyr5@columbia.edu","gender":"Female","salary":7974},
{"id":7,"first_name":"Matthew","last_name":"Maudson","email":"mmaudson6@hatena.ne.jp","gender":"Female","salary":3107},
{"id":8,"first_name":"Cele","last_name":"Davio","email":"cdavio7@github.io","gender":"Female","salary":9032},
{"id":9,"first_name":"Dulcy","last_name":"Hamlen","email":"dhamlen8@4shared.com","gender":"Female","salary":10060},
{"id":10,"first_name":"Daryle","last_name":"Blanking","email":"dblanking9@etsy.com","gender":"Male","salary":14534}]`;

var dataAry = JSON.parse(data);


var filterAry = dataAry.filter((item, index, ary) => {
    return item.salary > 10000;
});

var mapAry = filterAry.map((item, index, ary) => {
    var obj = {};
    obj.name = item.first_name + ' ' + item.last_name;
    obj.sal = item.salary;
    return obj;
});

console.log(mapAry);

var div = document.getElementById('show');
mapAry.forEach((item, index, ary) => {
    console.log(item, index, ary);
    var p = document.createElement('p');
    p.textContent = item.name;
    div.appendChild(p);
});

console.clear();
console.log('---------------------------------------');

filterAry = dataAry.filter(item => {
    return item.salary > 10000;
}).map(item => {
    return item.salary;
})
.join('-');
//var str = filterAry.join(',');
console.clear();
console.log(filterAry);
var newAry = filterAry.split(','); // split , 을 기준으로 배열을 만들어주는 메소드
console.log(newAry);
  
//console.log(dataAry);

dataAry.forEach((item, ind, ary) => {
console.log(item, ind, ary)
});
