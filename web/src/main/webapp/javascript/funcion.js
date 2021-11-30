  //오버 로딩 안됨(덮어써짐 마지막걸로), 클래스 생성자도 한개뿐임.
  var result2 = sum(10, 20, 30);

  function sum(a = 1, b = 2) {
      var result = a + b;
      return result;
  }

  function sum(a, b, c) {
      var result3 = a + b + c;
      return result3;
  }

  var result1 = sum(10, 20);
  console.log(result1);
  console.log(result2);
  //document.write(result);

  function getSum() {
      var lnth = arguments.length;
      var sum = 0;
      for (var i = 0; i < lnth; i++) {
          sum += arguments[i];
      }
      return sum;
  }

  result = getSum(1, 2, 3, 4, 5, 6, 7);
  console.log(result);

  var fnc = function (n1, n2) {
      return n1 * n2;
  }

  console.log(fnc(3, 5));
  var otherFnc = fnc;
  console.log(otherFnc(2, 10));

  var students = [{
          name: "hong",
          math: 80,
          eng: 90
      },
      {
          name: "kim",
          math: 85,
          eng: 85
      },
      {
          name: "lee",
          math: 90,
          eng: 75
      }
  ];

  makeTableList(students);

  function makeTableList(ary) {
      var str = "<table border='1'>";
      var obj = ary[0];
      str += "<thead>";
      for(var field in obj){
          str += "<th>" + field + "</th>";
      }
      str += "<tbody>";
      for (var i = 0; i < ary.length; i++) {
          str += "<tr><td>" + ary[i].name + "</td><td>" + ary[i].math + "</td><td>" + ary[i].eng + "</td></tr>";
      }
      str += "</tbody></table>";
      document.write(str);
  }