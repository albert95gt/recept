// Напишите следующие функции:

// createProduct(obj, callback) - принимает объект товара без id, а также колбек.
// Функция создаёт обьект товара, добавляя ему уникальный идентификатор в свойство id и вызывает колбек передавая ему созданный обьект.
// logProduct(product) - коллбек принимающий обьект продукта и логирующий его в консоль
// logTotalPrice(product) - коллбек принимающий обьект продукта и логирующий общую стоимость товара в консоль

// function creaateProduct(obj, callback){
//     const product = {...obj, id: Date.now()};
//     callback(product);
// }
// function logProduct(product) {
//     console.log("product callback", product);
// }
// function logTotalPrice(product){
//     console.log("product price:", product.price * product.quantity);
// }

// creaateProduct({name: "apple", price: 10, quantity: 6}, logProduct);
// creaateProduct({name: "orange", price: 50, quantity: 6}, logTotalPrice);
// ==================================================================================== //

// Напишите функцию each(array, callback), которая первым параметром ожидает массив,
//   а вторым - функцию, которая применится к каждому элементу массива.Функция each должна вернуть
//   новый массив, элементами которого будут результаты вызова коллбека.

// function each(array, callback) {
//     const newArray = [];

//     for (const el of array) {
//         newArray.push(callback(el))
//     }
//     return newArray;
// }



// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   })
// );



// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   })
// );



// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return value * 2;
//   })
// );
// =========================================================== //
