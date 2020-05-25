var groupmates = [
    {
      name: "Александр",
      surname: "Иванов",
      group: "БВТ1702",
      marks: [3, 3, 3]
    },
    {
      name: "Иван",
      surname: "Петров",
      group: "БСТ1702",
      marks: [4, 4, 4]
    },
    {
      name: "Кирилл",
      surname: "Смирнов",
      group: "БАП1801",
      marks: [5, 5, 5]
    },
    {
      name: "Кыпирилл",
      surname: "Смиыпрнов",
      group: "БАП1801",
      marks: [5, 5, 5]
    },
  ];
  
  var rpad = function(str, length) {
    str = str.toString();
    while (str.length < length)
    str = str + ' ';
    return str;
  };
  
  var printStudents = function(students){
    console.log(
      rpad("Имя", 15),
      rpad("Фамилия", 15),
      rpad("Группа", 8),
      rpad("Оценки", 20)
    );
  
    for (var i = 0; i<=students.length-1; i++){
      console.log(
        rpad(students[i]['name'], 15),
        rpad(students[i]['surname'], 15),
        rpad(students[i]['group'], 8),
        rpad(students[i]['marks'], 20)
      );
    }
    console.log('\n'); 
  };
  printStudents(groupmates);
  
  
  
  function average(nums) {
      return nums.reduce((a, b) => (a + b)) / nums.length;
  }
  
  n = prompt('Введите средний балл:');
  const nage = groupmates.filter(function (e) {
    return average(e.marks) >= n;
  });
  console.log(nage);
  
  
  
  
  n = prompt('Введите номер группы:');
  const ngroup = groupmates.filter(function (e) {
    return e.group == n;
  });
  console.log(ngroup);
  
  
  