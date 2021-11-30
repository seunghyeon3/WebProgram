function getIdFunc() {
    var id = document.getElementById('user_id');
    console.log(id.value);
    
}

/*
    <input type="text" id="user_id" value="1234"><br>
    <button onclick="getIdFunc()">id 값 가져오기</button>
    <button onclick="drawTable()">클릭</button>
    <div id='show'>
    </div>
    <script>
    </script>
    <script src="dom.js"></script>
*/
var students = [
    kim = {
        name: 'kim',
        math: 90,
        eng: 100
    },
    lee = {
        name: 'lee',
        math: 75,
        eng: 99
    }
];

function drawTable() {
    var tbl = document.createElement('table');
    tbl.border = 1; //tbl.setAttribute('border', 1);
    tbl.width = 200;
    var thd = document.createElement('thead');
    var tbd = document.createElement('tbody');
    var htr = document.createElement('tr');

    for (var head in students[0]) {
        var th = document.createElement('th');
        th.textContent = head;
        htr.appendChild(th);
    }

    thd.appendChild(htr);
    tbl.appendChild(thd);
    for (var student of students) {
        var trTag = document.createElement('tr');
        for (var field in student) {
            var tdTag = document.createElement('td');
            tdTag.textContent = student[field];
            trTag.appendChild(tdTag);
        }
        tbd.appendChild(trTag);
    }

    tbl.appendChild(tbd);
    //id로 볼러오는 방법
    var div = document.getElementById('show');
    div.appendChild(tbl);
    //아래 내용은 tagName(배열로 리턴됨)
    //var div = document.getElementsByTagName('div');
    //div[0].appendChild(tbl);
}