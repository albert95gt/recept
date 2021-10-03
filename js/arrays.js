// Задача 1 - Базовые операции с массивом

// Создайте массив genres с элементами «Jazz» и «Blues».
// Добавьте «Рок-н-ролл» в конец.
// Выведите в консоль первый элемент массива.
// Выведите в консоль последний элемент массива. Код должен работать для массива произвольной длины.
// Удалите первый элемент и выведите его в консоль.
// Вставьте «Country» и «Reggy» в начало массива.

// const genres = ["Jazz", "Blues"];
// genres.push("Rock-and-roll");
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// console.log(genres.shift());
// genres.unshift("Country", "Reggy");
// console.log(genres);
// =============================================================================== //
// Задача 2 - Массивы и строки
// Напиши скрипт для вычисления площади прямоугольника со сторонами, значения которых хранятся в переменной values в виде строки. Значения гарантированно разделены пробелом.


// const values = "8 11";
// const numbers = values.split(" ");

// const result = numbers[0] * numbers[1];
// console.log(result);
// ===========================================================================  //
// Задача 3 - Перебор массива
// Напиши скрипт для перебора массива fruits циклом for. Для каждого элемента массива выведи в консоль строку в формате номер_элемента: значение_элемента. Нумерация элементов должна начинаться с 1.

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

// for (const fruit of fruits) {
//    const indexOfFruit = fruits.indexOf(fruit);
//    console.log(indexOfFruit + 1);
//    console.log("fruit", fruit); 
    
// }
// =========================================================================  //
// Задача 4 - Массивы и циклы
// Напиши скрипт который выводит в консоль имя и телефонный номер пользователя. В переменных names и phones хранятся строки имен и телефонных номеров, разделенные запятыми. Порядковый номер имен и телефонов в строках указывают на соответствие. Количество имен и телефонов гарантированно одинаковое.

// const names = "Jacob,William,Solomon,Artemis";
// const phones = "89001234567,89001112233,890055566377,890055566300";

// const userNames = names.split(",");
// console.log(userNames);
// const userPhones = phones.split(",");
// console.log(userPhones);
//     let message = [];
//     for (let i = 0; i < userNames.length; i += 1) {
//         message.push(`${userNames[i]} - ${userPhones[i]}`) ;
//     }
// console.log(message);
//  ========================================================================== //
 
// Задача 5 - Массивы и строки
// Напиши скрипт который выводит в консоль все слова строки кроме первого и последнего. Результирующая строка не должна начинаться или заканчиваться пробельным символом. Скрипт должен работать для любой строки.


// const string = "Welcome to the future";

// const stringArray = string.split(" ");

//  Первый вариант:

// console.log(stringArray); 
// const result = stringArray.slice(1,stringArray.length - 1).join(" ");
// console.log(result);
// ************************************************************************
// Второй вариант:

// let result = [];
// for (let i = 0; i < stringArray.length; i++) {
//     if(i === 0 || i === stringArray.length - 1){
//         continue;
//     }
//     result.push(stringArray[i]);
// }
// result.join(" ");
// console.log(result);
// **************************************************************************
// Третий вариант:

// stringArray.shift();
// stringArray.pop();
// const result = stringArray.join(" ");
// console.log(result);
// ====================================================================================== //
// Задача 6 - Массивы и строки
// Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит ее в консоль.
// const string = "Welcome to the future";
// const stringArray = string.split(" ");
// const reversedArray = stringArray.reverse()
// const reversedString = reversedArray.join(" ");
// console.log(reversedString);
// ============================================================================================ //
// Задача 7 - Поиск элемента
// Напиши скрипт поиска самого маленького числа в массиве. Код должен работать для любого массива чисел. Используй цикл для решения задачи.

const numbers = [1, 17, 94, 2, 23, 37, 0, 51];
let min = numbers[0];
for (const number of numbers) {
    
    if(min > number){
        min = number;
    }    
}
console.log(min);
// ======================================================== // 
