
var xhtp = new XMLHttpRequest();
xhtp.open('get', '../GetJsonServlet');
xhtp.send();
xhtp.onload = function() {
	var data = JSON.parse(xhtp.responseText);
	console.log(data);
	//필요한 컬럼필드.

	var fields = ['employeeId', 'firstName', 'lastName', 'email', 'jobId',
		'hireDate', 'salary'
	];
	var table = createTable(fields, data);
	document.getElementById('show').appendChild(table);

	let headTr = document.querySelector('#show>table>thead>tr');
	let th = document.createElement('th');
	th.textContent = '삭제';
	headTr.appendChild(th);
	let trs = document.querySelectorAll('#show>table>tbody>tr');
	console.log(trs);

	for (var i = 0; i < trs.length; i++) {
		let td = document.createElement('td');
		let btn = document.createElement('button');
		btn.textContent = '삭제';
		btn.addEventListener('click', delEmp);
		td.appendChild(btn);
		trs[i].appendChild(td);
		//console.log(trs[i].children[0].children[0].textContent);
		//trs[i].setattributes('id',trs[i].children[0].children[0].textContent); //이것도 가능 ID추가
		trs[i].addEventListener('click', trClick);
	}
}



function updateFnc(event) {
	let ei = document.forms['myform']['employee_id'].value;
	let fn = document.forms['myform']['first_name'].value;
	let ln = document.forms['myform']['last_name'].value;
	let em = document.forms['myform']['email'].value;
	let hd = document.forms['myform']['hire_date'].value;
	let ji = document.forms['myform']['job_id'].value;
	let sa = document.forms['myform']['salary'].value;
	
	console.log(document.getElementById(ei));

	let param = `cmd=update&a=${ei}&b=${fn}&c=${ln}&d=${em}&e=${hd}&f=${ji}&g=${sa}`;

	var ajax = new XMLHttpRequest();
	//post, get.....
	//post -> get ->
	ajax.open('post', '../GetJsonServlet');
	ajax.setRequestHeader("Content-type",
		"application/x-www-form-urlencoded");
	ajax.send(param);
	ajax.onload = function() {
		let result = JSON.parse(ajax.responseText);
		console.log(result);
		if (result.retCode == 'Success') {
			alert('정상적으로 수정쓰되었쓰');
			let selectedTr = document.getElementById(ei);
			console.log(selectedTr);
			selectedTr.children[1].textContent = result.retVal.firstName;
			selectedTr.children[2].textContent = result.retVal.lastName;
			selectedTr.children[3].textContent = result.retVal.email;
			selectedTr.children[4].textContent = result.retVal.jobId;
			selectedTr.children[5].textContent = result.retVal.hireDate;
			selectedTr.children[6].textContent = result.retVal.salary;
			
			// 입력값을 결과값으로 받아와서 그 값을 가지고 화면에 추가.
		} else {
			alert(result.retVal);
		}
	}
}

function delEmp(e) {
	console.log(e.target.parentNode.parentNode.children[0].textContent);
	e.stopPropagation(); //이벤트가 전파되는 것을 차단(해당 위치 중복 이벤트가 있을때 다른 이벤트 진행 하지 않도록하는 함수)

	let ei = e.target.parentNode.parentNode.children[0].textContent; //td, tr, 1번째 값

	let param = `cmd=delete&a=${ei}`;
	var ajax = new XMLHttpRequest();
	//post, get.....
	//post -> get ->
	ajax.open('post', '../GetJsonServlet');
	ajax.setRequestHeader("Content-type",
		"application/x-www-form-urlencoded");
	ajax.send(param);
	ajax.onload = function() {
		let result = JSON.parse(ajax.responseText);
		console.log(JSON.parse(ajax.responseText));
		if (result.retCode == 'Success') {
			alert('정상적으로 삭제되었슴둥.');
			e.target.parentNode.parentNode.remove();
		} else {
			alert('처리중 에러 발생');
		}
	}

}

function submitFnc(event) {
	event.preventDefault();

	// Inversion of Control : tomcat
	let ei = document.forms['myform']['employee_id'].value;
	let fn = document.forms['myform']['first_name'].value;
	let ln = document.forms['myform']['last_name'].value;
	let em = document.forms['myform']['email'].value;
	let hd = document.forms['myform']['hire_date'].value;
	let ji = document.forms['myform']['job_id'].value;
	let sa = document.forms['myform']['salary'].value;

	let param = `cmd=insert&a=${ei}&b=${fn}&c=${ln}&d=${em}&e=${hd}&f=${ji}&g=${sa}`;

	var ajax = new XMLHttpRequest();
	//post, get.....
	//post -> get ->
	ajax.open('post', '../GetJsonServlet');
	ajax.setRequestHeader("Content-type",
		"application/x-www-form-urlencoded");
	ajax.send(param);
	ajax.onload = function() {
		let result = JSON.parse(ajax.responseText);
		console.log(JSON.parse(ajax.responseText));

		if (result.retCode == 'Success') {
			alert('정상적으로 입력되었습니다.');
			let tbody = document.querySelector('#show>table>tbody');
			let tr = document.createElement('tr');
			var fields = ['employeeId', 'firstName', 'lastName', 'email', 'jobId',
				'hireDate', 'salary'
			];
			for(let field of fields){
				let td = document.createElement('td');
				td.textContent = result.retVal[field];
				tr.appendChild(td);
			}
			let td = document.createElement('td');
			let btn = document.createElement('button');
			btn.textContent = '삭제';
			btn.addEventListener('click', delEmp);
			td.appendChild(btn);
			tr.appendChild(td);
			tbody.prepend(tr);
			// 입력값을 결과값으로 받아와서 그 값을 가지고 화면에 추가.
		} else {
			alert(result.retVal);
		}
	}

}


function trClick(e) {
	//tr 클릭할때마다 값을 form 영역에 보여주기
	console.log(e.target.parentNode.children[0].textContent, this);
	document.getElementById('employee_id').value = this.children[0].textContent;
	document.getElementById('first_name').value = this.children[1].textContent;
	document.getElementById('last_name').value = this.children[2].textContent;
	document.getElementById('email').value = this.children[3].textContent;
	document.getElementById('hire_date').value = this.children[5].textContent;
	document.getElementById('salary').value = this.children[6].textContent;
}
