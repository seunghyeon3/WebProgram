// createTable.js => 타이틀 배열, 데이터 배열.

function createTable(titleAry, dataAry) {
	//tr 생성해주는 함수

	function makeRow(obj) {
		let tr = document.createElement('tr');
		tr.setAttribute('id', obj['employeeId']);
		titleAry.forEach(field => {
			let td = document.createElement('td');
			td.textContent = obj[field];
			tr.appendChild(td);
		});
		/*//추가컬럼.
		var td = document.createElement('td');
		td.innerHTML = `<a target"_blank" href="daumMap.html?lat=${obj.lat}&lng=${obj.lng}&cent=${obj.centerName}">지도</a>`;
		tr.appendChild(td);*/
		return tr;
	}

	// table 작성
	let table = document.createElement('table');
	table.setAttribute('border', '1');
	// thead 작성
	let thead = document.createElement('thead');
	let tr = document.createElement('tr');
	thead.appendChild(tr);
	titleAry.forEach(item => {
		let th = document.createElement('th');
		th.textContent = item;
		tr.appendChild(th);
	});

	/* //지도표시.(추가정보)
	 let th = document.createElement('th');
	 th.textContent = '지도';
	tr.appendChild(th);*/

	// tbody 작성
	let tbody = document.createElement('tbody');
	dataAry.forEach(item => {
		tbody.appendChild(makeRow(item));
	});
	console.log(tbody);
	table.appendChild(thead);
	table.appendChild(tbody);
	return table;
}