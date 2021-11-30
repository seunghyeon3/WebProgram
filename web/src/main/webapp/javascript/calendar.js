// calendar.js
// var year = 1600;
// var month = 2;

createCalendar(1990, 12);

function createCalendar(year, month) {

    var thisMonth = new Date(year, month - 1);
    var thisMonthDay = thisMonth.getDay();
    var today = new Date();

    var days = ["일", "월", "화", "수", "목", "금", "토"];
    var str = "";
    str += "<table border='1'>";
    str += "<caption>" + year + "년" + month + "월</caption>";
    str += "<thead>";
    for (var day of days) {
        str += "<th>" + day + "</th>";
    }
    str += "</thead><tbody>";
    str += "<tr>";
    for (var i = 0; i < thisMonthDay; i++) {
        str += "<td></td>";
    }
    var lastDay = getLastDate(year, month);

    for (var i = 1; i <= lastDay; i++) {
        if (i == today.getDate()) {
            str += "<td onclick='clickFun(event)' class='active'>" + i + "</td>";
        } else {
            str += "<td onclick='clickFun(event)'>" + i + "</td>";
        }
        if ((i + thisMonthDay) % 7 == 0) {
            str += "</tr><tr>";
        }
    }

    str += "</tr></tbody></table>";
    window.document.write(str);
}

function getLastDate(year, month) {

    var result = -1;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            result = 31;
            break;
        case 2:
            result = getLeapYear(year) ? 29 : 28;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            result = 30;
    }
    return result;
}

function getLeapYear(year) {
    if (year % 4 == 0) {
        if (year % 400 == 0) {
            return true;
        } else if (year % 100 == 0) {
            return false;
        }
        return true;
    }
    return false;
}

function clickFun(e) {
    console.log(this);
    window.console.log(e.target.textContent);
    window.alert(e.target.textContent + "를 선택하였습니다.");
}

//obj는 값을 가지고 있는 속성(필드)
//obj는 기능 가지고 있는 메소드(메소드)

var obj = {
    name: 'hong',
    age: 15,
    getInfo: function () {
        return "이름은 " + this.name + ", 나이는 " + this.age;
    }
}

console.log(obj.getInfo());