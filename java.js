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

// var hour = 10, isWeekend = true;
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

// var sum = 0;
// while (true) {
//   var value = +prompt("Введите число", '');
//   if (!value) break; // (*)
//   sum += value;
// }
// alert( 'Сумма: ' + sum );

// 12.02.19

// var i = 3;
// while (i) {
//   alert( i-- );
// }
// Выведите чётные числа
// При помощи цикла for выведите чётные числа от 2 до 10.
// for (var i = 2; i <= 10; i++) {
//   if (i % 2 == 0) {
//     alert( i );
//   }
// }

// Замените for на while
// Перепишите код, заменив цикл for на while, 
// без изменения поведения цикла.
// for (var i = 0; i < 3; i++) {
//   alert( "номер " + i + "!" );
// }
// var i = 0;
// while (i < 3) {
//   alert( "номер " + i + "!" );
//   i++;
// }

// Повторять цикл, пока ввод неверен
// Напишите цикл, который предлагает prompt ввести число, большее 100. 
// Если посетитель ввёл другое число – попросить ввести ещё раз, 
// и так далее.
// Цикл должен спрашивать число пока либо посетитель не введёт число, 
// большее 100, 
// либо не нажмёт кнопку Cancel (ESC).
// Предполагается, что посетитель вводит только числа. 
// Предусматривать обработку нечисловых строк 
// в этой задаче необязательно.
 
// var num;
// do {
//   num = prompt("Введите число больше 100?", 0);
// } while (num <= 100 && num != null);

// Вывести простые числа
// Натуральное число, большее 1, называется простым, 
// если оно ни на что не делится, кроме себя и 1.
// Другими словами, n>1 – простое, если при делении на любое 
// число от 2 до n-1 есть остаток.
// Создайте код, который выводит все простые числа 
// из интервала от 2 до 10. Результат должен быть: 2,3,5,7.

// for (var i = 3; i <= 10; i++)
// {
//   for (var j = 3; j < i; j++)
//   {
//     if (i % j == 0) continue
//   }
//   alert(i);
// }

// Конструкция switc
// var a = 2 + 2;
// switch (a) {
//   case 3:
//     alert( 'Маловато' );
//     break;
//   case 4:
//     alert( 'В точку!' );
//     break;
//   case 5:
//     alert( 'Перебор' );
//     break;
//   default:
//     alert( 'Я таких значений не знаю' );
// }

// Задачи
// Напишите "if", аналогичный "switch"
// Напишите if..else, соответствующий следующему switch:
// switch (browser) {
//   case 'IE':
//     alert( 'О, да у вас IE!' );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Да, и эти браузеры мы поддерживаем' );
//     break;

//   default:
//     alert( 'Мы надеемся, что и в вашем браузере все ок!' );
// }
// Решение
// if(browser == 'IE') 
// {
//   alert('О, да у вас IE!');
// } else if (browser == 'Chrome'
//  || browser == 'Firefox'
//  || browser == 'Safari'
//  || browser == 'Opera') {
//   alert('Да, и эти браузеры мы поддерживаем');
// } else {
//   alert('Мы надеемся, что и в вашем браузере все ок!');
// }

// Переписать if'ы в switch
// Перепишите код с использованием одной конструкции switch
// var a = +prompt('a?', '');
// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }
// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }
// Решение
// var a = +prompt('a?', '');
// switch (a) {
//   case 0:
//     alert( 0 );
//     break;

//   case 1:
//     alert( 1 );
//     break;

//   case 2:
//   case 3:
//     alert( '2,3' );
//     break;
// }

// Функции
// function showMessage() 
// {
//   alert( 'Привет всем присутствующим!' );
// }
// showMessage();
// showMessage();

// function showMessage() {
//   var message = 'Привет, я - Вася!'; // локальная переменная
//   alert( message );
// }
// showMessage(); // 'Привет, я - Вася!'
// alert( message );

// function count() {
//   // переменные i,j не будут уничтожены по окончании цикла
//   for (var i = 0; i < 3; i++) {
//     var j = i * 2;
//   }
//   alert( i ); 
//   alert( j ); 
// }
// Внешние переменные
// var userName = 'Vugar';
// function showMessage() {
//   var message = 'Привет, я ' + userName;
//   alert(message);
// }
// showMessage(); // Привет, я Вася