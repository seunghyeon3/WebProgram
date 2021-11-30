//document 1) createElement(tag) -> tag 생성
//         2) getElementsByTagName(tag) => tag를 찾음.

// var tbl = document.createElement('table'); //element 생성.(ex, tag)
// tbl.setAttribute('border','1');
// tbl.setAttribute('id','tbl');



function createList() {
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    li.textContent = 'banana';

    li = document.createElement('li');
    li.textContent = 'cherry';
    ul.appendChild(li);

    var bd = document.getElementsByTagName('body');

    console.log(bd[0].appendChild(ul));
}