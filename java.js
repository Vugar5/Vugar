// var age = prompt ('возраст?', 18);
// if  (age < 3)  {
// message = 'Здравствуй, малыш!' ;
// } else if (age < 18)  { 
//     'Привет' ;
// } else if(age < 100)  {
// message = 'Здравтсвуйте!' ;
// } else {
// message = 'Какой необычный возраст!';
// }
// alert(message);

// var year = prompt('В каком году появилась спецификация ECMA-262 5.1?', '');

// if (year != 2011) alert( 'А вот и неправильно!' );

// var year = prompt('В каком году появилась спецификация ECMA-262 5.1?', '');

// if (year < 2011) {
//   alert( 'Это слишком рано..' );
// } else if (year > 2011) {
//   alert( 'Это поздновато..' );
// } else {
//   alert( 'Да, точно в этом году!' );
// }

// var company = prompt('Какая компания создала JavaScript?', '');

// if (company == 'Netscape') {
//    alert('Да, верно'); 
// } else {
//     alert('Непарвильно');
// }  

// alert( true || true ); // true
// alert( false || true ); // true
// alert( true || false ); // true
// alert( false || false ); // false

// var hour = 9;
// if (hour < 10 || hour > 18) {
//     alert ('Офис до 10 или после 18 закрыт');
// }

// var hour = 12, isWeekend = true;
// if (hour < 10 || hour > 18 || isWeekend) {
//     alert ('Офис до 10 или после 18 или в выходной закрыт');
// }

// var hour = 12,
//   minute = 30;

// if (hour == 12 && minute == 30) {
//   alert( 'Время 12:30' );
// }

// var i = 3
// alert( i-- ); // выведет 3, затем уменьшит i до 2

// alert(i--) // выведет 2, затем уменьшит i до 1

// alert(i--) // выведет 1, затем уменьшит i до 0

// // все, проверка while(i) не даст выполняться циклу дальше

// outer: for (var i = 0; i < 3; i++) {

//     for (var j = 0; j < 3; j++) {
  
//       var input = prompt('Значение в координатах '+i+','+j, '');
  
//       // если отмена ввода или пустая строка -
//       // завершить оба цикла
//       if (!input) break outer; // (*)
  
//     }
//   }
//   alert('Готово!');

// for (var i = 0; i < 10; i++) {

//     if (i % 8 == 0) continue;
  
//     alert(i);
//   }

var sum = 0;

while (true) {

  var value = +prompt("Введите число", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Сумма: ' + sum );