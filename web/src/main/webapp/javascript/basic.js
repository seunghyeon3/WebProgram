var v1;
window.console.log(typeof v1);

v1 = 10;
window.console.log(typeof v1);

v1 = 'hello';
window.console.log(typeof v1);

v1 = true;
window.console.log(typeof v1);

v1 = null;
window.console.log(typeof v1);

v1 = "hello";
window.console.log(typeof v1);

var result = 10 + 20;
result = '10' + '20';
result = '20' / '10';
result = '20' / 10;
console.log(result);
result = '30' / 10;
console.log(result);

var result = 30 * '2';
window.console.log(typeof result);

var Result = 60;

if (result == Result) {
    console.log('같습니다.')
} else {
    console.log('다릅니다.')
}
var strTag = '<h1>Hello</h1>';
strTag += '<ul><li>Apple</li>';
strTag += '<li>Banana</li>';
strTag += '</ul>';

strTag = "result 변수에 들어 있는 값 " + result;
strTag = `result 변수에 들어 있는 값 ${result}<br>`;
window.document.write(strTag);

result = 6 / 4;
document.write(result);

if (result > 1) {
    document.write(`1보다 큽니다.`);
} else {
    document.write(`1보다 작습니다.`);
}

var cnt = 10;
for (var i = 0; i <= 10; i++) {
    document.write(`${i} <br>`);
}
document.write('<ul>');
while (cnt > 0) {
    document.write(`<li> cnt의 값 : ${cnt}</li>`)
    cnt--;
}
document.write(`</ul>`);
var obj = {}; // new Object();
obj.id = 'user1';
obj.name = 'Hong';
obj['phone'] = '010-1111-2222';

obj = {
    id: 'user2',
    name: 'Hwang',
    phone: '010-1111-1212'
}
var field = 'phone';
console.log(typeof obj);
document.write(`<p>id: ${obj.id}</p>`);
document.write(`<p>name: ${obj['name']}</p>`);
document.write(`<p>phone: ${obj[field]}</p>`);

var ary = []; // new array()
ary[0] = 'hong';
ary[1] = 'hwang';
ary[2] = `park`;
ary[3] = 100;
ary[4] = {
    name: 'Amy',
    age: 15
}
console.log(ary);
delete ary[1];
for (var i = 0; i < ary.length; i++) {
    if (ary[i] != undefined)
        console.log(ary[i]);
}

var obj1 = {
    name: 'hwang'
}

var obj2 = obj1;
obj2.name = 'park';
obj2 = {
    name: 'kim'
}

console.log(obj1);

var kim = {
    name: 'kim',
    age: 25,
    phone: '010-111'
}
var lee = {
    name: 'lee',
    age: 28,
    phone: '010-222'
}
var park = {
    name: 'park',
    age: 33,
    phone: '010-222'
}

for (var field in park) {
    console.log(field, `1`, park[field]);
}
console.clear();
var objAry = [kim, lee, park];

document.write(`<table border="1">`);
for (var obj of objAry) {

    document.write(`<tr>`);

    for (var field in obj) {

        document.write(`<td>`);

        document.write(`${obj[field]}`);

        document.write(`</td>`);
    }
    document.write(`</tr>`);
}
document.write(`</table>`);
//false : +0 -0 null '' undefined