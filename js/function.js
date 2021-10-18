/**
 * Индекс массы тела
 *
 * Напиши функцию calcBMI(weight, height) которая рассчитывает
 * и возвращает индекс массы тела человека. Для этого необходимо
 * разделить вес в киллограммах на квадрат высоты человека в метрах.
 *
 * Вес и высота будут специально переданы как строки.
 * Нецелые числа могут быть заданы в виде "24.7" или "24,7",
 * то есть в качестве разделителя дробной части может быть запятая.
 *
 * Индекс массы тела необходимо округлить до одной цифры после запятой.
 */

//  function calcBMI(weight, height) {
//     const numericWeight = Number(weight.replace(',', '.'));
//     const numericHeight = Number(height.replace(',', '.'));
//     let bmi = numericWeight / numericHeight ** 2;
//     bmi = bmi.toFixed(1);
//     bmi = Number(bmi);
//     return bmi;
//   }
  
//   console.log(calcBMI('88,3', '1.75'));
//   console.log(calcBMI('68,3', '1.65'));
//   console.log(calcBMI('118,3', '1.95'));
// =====================================================================

/**
 * Меньшее из чисел
 *
 * Напиши функцию `min(a,b)`, которая возвращает меньшее из чисел `a` и `b`.
 */
// Вариатн 1:
// function min(a, b){
//     if(a > b) {
//         return b;
//     }
//     return a;
// }
// ************************************ //

// Вариант 2:
// function min(a, b){
//     return Math.min(a, b);
// }
// ********************************** //

// Вариант 3:
// function min(a, b) {
//     return a > b ? b : a;
// }

// console.log(min(10, -15));
// console.log(min(564132321, 2651564));
// ============================================ //
/**
 * Площадь прямоугольника
 *
 * Напиши функцию `getRectArea(dimensions)` для вычисления
 * площади прямоугольника со сторонами, значения которых
 * будут переданы в параметр `dimensions` в виде строки.
 * Значения гарантированно разделены пробелом.
 */

// function getReactArea(dimentions) {
//  const dimentionsArray = dimentions.split(" ");
//  const result = dimentionsArray[0] * dimentionsArray[1];
//  return result;
//  console.log(result);
// }

// console.log(getReactArea("8 11"));
// ================================================================ //
/**
 * Логирование элементов
 *
 * Напиши функцию `logItems(items)`, которая получает массив
 * и использует цикл `for`, который для каждого элемента массива  будет
 * выводить в консоль сообщение в формате `<номер элемента> - <значение элемента>`.
 * Нумерация элементов должна начинаться с `1`.
 *
 * Например для первого элемента массива `['Mango', 'Poly', 'Ajax']`
 * с индексом `0` будет выведено `1 - Mango`, а для индекса 2 выведет `3 - Ajax`.
 */

//  function logItems(items) {
//     console.log(items);
//     for (let i = 0; i < items.length; i += 1) {
//       console.log(`${i + 1} - ${items[i]}`);
//     }
//   }
  
//   logItems(['Mango', 'Poly', 'Ajax']);
//   logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
// ===========================================================  //
/**
 * Логирование контактов
 *
 * Напиши функцию `printContactsInfo(names, phones)` которая
 * выводит в консоль имя и телефонный номер пользователя.
 * В параметры `names` и `phones` будут переданы строки имен
 * и телефонных номеров, разделенные запятыми. Порядковый номер
 * имен и телефонов в строках указывают на соответствие.
 *
 * Количество имен и телефонов гарантированно одинаковое.
 */

// function printContactInfo(names, phones) {
//     const userNames = names.split(",");
//     const userPhones = phones.split(",");
//     console.log(userNames);
//     for(let i = 0; i < userNames.length; i++){
//         console.log(`${userNames[i]} - ${userPhones[i]}`);
//     }
// }

// console.log(printContactInfo('jacob, william, ajax, petro', '8022556644, 8066445588, 8077446655, 8044889966'));
// ================================================================================================================= //
/**
 * Среднее значение
 *
 * Напишите функцию `calAverage()` которая принимает произвольное
 * кол-во аргументов и возвращает их среднее значение.
 *
 * Все аругменты будут только числами.
 */

// function calAverage(...numbers) {
//     let total = 0;
//     for(let i = 0; i < numbers.length; i++){
//         // console.log(numbers[i]);
//         total += numbers[i];
//     }
//     return total /= numbers.length;
    
// }

// console.log(calAverage(1, 2, 3, 4));
// console.log(calAverage(14, 8, 2));
// console.log(calAverage(27, 43, 2, 8, 36));
// ============================================================== //
/**
 * Форматирование времени
 *
 * Напиши функцию `formatTime(minutes)` которая переведёт значение `minutes`
 * (количество минут) в строку в формате часов и минут `HH:MM`.
 */

//  function addLeadingZero(value) {
//     return String(value).padStart(2, 0);
//   }
  
//   function formatTime(totalMinutes) {
//     const hours = Math.floor(totalMinutes / 60);
//     const minutes = totalMinutes % 60;
//     return `${addLeadingZero(hours)}:${addLeadingZero(minutes)}`;
//   }
  
//   console.log(formatTime(70)); // "01:10"
//   console.log(formatTime(450)); // "07:30"
//   console.log(formatTime(1441)); // "24:01"
// ======================================================== //
  