var str = `
    <form action='basic.html' name='myname' id='myform' onsubmit='submitFnc(event)'>
        학번 : <input type='text' name='sno'><br>
        이름 : <input type='text' name='sname'><br>
        연락처 : <input type='text' name='sphone'><br>
        생년월일 : <input tyep='text' name='sbirth'><br>
    <input type='submit' value='저장'>
    </form>
`;

var checkedAry = [];
// sno, sname, sphone, sbirth => students

var fields = {
    sno: '학번',
    sname: '이름',
    sphone: '연락처',
    sbirth: '생년월일',
};

document.write(str);
document.write('<div id="show"></div>');
// onsubmit= 'submitFnc(event) -> document.getElementById('myform').onsubmit = function(){};

createTableList();

function submitFnc(e) {
    e.preventDefault();
    // var s_no = document.querySelector('form>input[name="sno"]').value;
    // var s_name = document.querySelector('form>input[name="sname"]').value;
    // var s_phone = document.querySelector('form>input[name="sphone"]').value;
    // var s_birth = document.querySelector('form>input[name="sbirth"]').value;
    // var std = {
    //     sno: s_no,
    //     sname: s_name,
    //     sphone: s_phone,
    //     sbirth: s_birth
    // };

    // document.getElementById('tby').appendChild(getTrStudent(std));
    console.log(document.forms['myform'].elements);
    console.log(document.forms['myform'].elements['sno'].value);

    var s_no = document.forms['myform'].elements[0].value;
    var s_name = document.forms['myform'].elements[1].value;
    var s_phone = document.forms['myform'].elements[2].value;
    var s_birth = document.forms['myform'].elements[3].value;

    // var s_no = document.forms['myform'].elements['sno'].value;
    // var s_name = document.forms['myform'].elements['sname'].value;
    // var s_phone = document.forms['myform'].elements['sphone'].value;
    // var s_birth = document.forms['myform'].elements['sbirth'].value;

    var std = {
        sno: s_no,
        sname: s_name,
        sphone: s_phone,
        sbirth: s_birth
    };

    document.getElementById('tby').appendChild(getTrStudent(std));

}

function getTrStudent(student) {
    var tr = document.createElement('tr');
    tr.onmouseover = mouseOverFnc; //이벤트 발생시, 이름만써줌 () 제외 왜냐면,,, ()해주면 코드 실행하면서 실행해라! 이렇게 되기 때문, 이벤트 발생시만 쓰기 위해 function 이름만씀(코드 실행시 실행 안됨.)
    tr.onmouseout = mouseOutFnc;

    var td = document.createElement('td');
    var chkbox = document.createElement('input');
    chkbox.onchange = changeFnc;
    chkbox.setAttribute('type', 'checkbox');
    td.appendChild(chkbox);
    //td.innerHTML = "<input type='checkbox'>";
    tr.appendChild(td);
    for (var field in fields) {
        var td = document.createElement('td');
        td.textContent = student[field];
        tr.appendChild(td);
    }
    //추가내용.
    var td = document.createElement('td');
    var btn = document.createElement('button');
    btn.textContent = '복사';
    btn.onclick = clickFnc;
    td.appendChild(btn);
    tr.appendChild(td);
    return tr;
}

function createTableList() {
    var table = document.createElement('table');
    table.setAttribute('border', '1');

    var thead = makeHead();
    table.appendChild(thead);

    var tbody = makeBody();
    table.appendChild(tbody);
    //div 하위 요소로 출력
    document.getElementById('show').appendChild(table);
}

function clickFnc(e) {
    //1.삭제
    //console.log(this);
    //console.log(e.path[2].remove());
    //2.복제
    // var no = this.parentNode.parentNode.children[1].textContent;
    // var name = this.parentNode.parentNode.children[2].textContent;
    // var phone = this.parentNode.parentNode.children[3].textContent;
    // var birth = this.parentNode.parentNode.children[4].textContent;
    // var obj = {
    //     sno: no,
    //     sname: name,
    //     sphone: phone,
    //     sbirth: birth
    // }
    // document.getElementById('tby').appendChild(getTrStudent(obj));

    var selected_tr = this.parentNode.parentNode;
    var clone_tr = selected_tr.cloneNode(true);
    console.log(clone_tr);
    document.getElementById('tby').appendChild(clone_tr);
}

function mouseOverFnc() {
    this.style.backgroundColor = 'yellow';
    //console.log(event.target.parentNode);
}

function mouseOutFnc() {
    this.style.backgroundColor = '';
}

function changeFnc() {
    //console.log(this.parentNode.nextSibling.textContent);
    var searchSno = this.parentNode.nextSibling.textContent; //nextSibling 계속해주면 다른 td 를 가져옴. parentNode는 자신위치에서 부모를 지칭 연속 사용 가능
    //console.log(this.checked);
    if (this.checked) {
        var lnth = checkedAry.length;
        //checkedAry[lnth] = searchSno;
        checkedAry.splice(0, 1, searchSno);
    } else {
        for (var i = 0; i < checkedAry.length; i++) {
            if (checkedAry[i] == searchSno) {
                //delete checkedAry[i];
                checkedAry.splice(i, 1);
                break;
            }
        }
    }
    console.log(checkedAry);
}

function makeBody() {
    var tbody = document.createElement('tbody');

    tbody.setAttribute('id', 'tby');

    for (var student of students) {
        tbody.appendChild(getTrStudent(student));
    }
    return tbody;
}

function makeHead() {
    var thead = document.createElement('thead');
    var tr = document.createElement('tr');
    //추가 칼럼.
    var th = document.createElement('th');
    th.textContent = '선택';
    tr.appendChild(th);
    for (var field in fields) {
        var th = document.createElement('th');
        th.textContent = fields[field];
        tr.appendChild(th);
    }

    //추가내용
    th = document.createElement('th');
    th.textContent = '버튼';
    tr.appendChild(th);
    thead.appendChild(tr);
    return thead;
}