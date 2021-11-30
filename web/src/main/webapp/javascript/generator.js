 // 생성자 함수
 function Student(sno, sname, sphone, sbirth, score) {
    this.sno = sno;
    this.sname = sname;
    this.sphone = sphone;
    this.sbirth = sbirth;
    this.score = score;
}

students[0] = new Student('S0001', 'hong', '010-111', '1990-01', 1);
students.push(new Student('S0002', 'park', '010-222', '1990-02', 2));
students.push(new Student('S0003', 'lee', '010-333', '1990-03', 3));
students.unshift(new Student('S0004', 'kim', '010-444', '1990-04', 4));

window.addEventListener('DOMContentLoaded', windowLoad);

function windowLoad() {

    // var studentsOver2 = students.filter(function (item, index, ary){
    //     return item.score > 2;
    // }); //return 기준으로 필터링함. 

    var studentsOver2 = students.filter(item => item.score > 2);

    document.write('<ul>');
    studentsOver2.forEach(forEachCallBack); //메소드의 매개값으로 함수가 들어오면 -> 콜백함수
    document.write('</ul>');
}

function forEachCallBack(item, index, ary) {
    console.log(item, index, ary);
    document.write('<li>' + item.sno + ',' + item.sname + '</li>');
}