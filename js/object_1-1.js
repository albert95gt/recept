 // 1)  Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
 
//  const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,  
//  }
//  user.mood = "happy";
//  user.hobby = "skydiving";
//  user.premium = false;
//  console.log(user);
//  const userKeys = Object.keys(user)
//  for (const key of userKeys) {
     
//      console.log(`${key}: ${user[key]}`);
//  }
// ========================================================================== //
// 2) У нас есть объект, в котором хранятся зарплаты нашей команды.Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.
// Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.

// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// }

// const values = Object.values(salaries);
// let totalSalaries = 0;
// for (const value of values) {
//     totalSalaries += value; 
// }
// console.log(totalSalaries);
// ====================================================== //
// 3) Напишите ф-цию calcTotalPrice(stones, stoneName), которая принимает массив обьектов и строку с названием камня.
// Ф - ция считает и возвращает общую стоимость камней с таким именем, ценой и количеством из обьекта

// const stones = [
//   { name: "Изумруд", cost: 1300, quantity: 4 },
//   { name: "Бриллиант", cost: 2700, quantity: 3 },
//   { name: "Сапфир", cost: 400, quantity: 7 },
//   { name: "Щебень", cost: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
    
//     for (const stone of stones) {
//         console.log(stone.name);
//         if(stoneName === stone.name) {
//             return stone.cost * stone.quantity;
//         }
//     }
//     return "Stone not exist";
// }
// console.log(calcTotalPrice(stones, "Кварц")); // 
// console.log(calcTotalPrice(stones, "Сапфир"));; // 2800
// ======================================================== //

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
    DEPOSIT: "deposit",
    WITHDRAW: "withdraw",
  };
  
  /*
   * Каждая транзакция это объект со свойствами: id, type и amount
   */
  
  const wallet = {
    // Текущий баланс счета
    balance: 100,
  
    // История транзакций
    transactions: [],
  
    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */
    createTransaction(amount, type) {
      return {
        id: this.transactions.length,
        amount,
        type,
      };
    },
  
    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
    deposit(amount) {
      this.balance += amount;
      const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
      this.transactions.push(transaction);
    },
  
    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
    withdraw(amount) {
      this.balance -= amount;
      const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
      this.transactions.push(transaction);
    },
  
    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {
      return this.balance;
    },
  
    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(id) {
      for (let transaction of this.transactions) {
        if (transaction.id === id) {
          return transaction;
        }
      }
      return "Transaction not exist";
    },
  
    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    //   getTransactionTotal(type) {
    //     const searchResult = [];
    //     let total = 0;
    //     for (let transaction of this.transactions) {
    //       if (transaction.type === type) {
    //         searchResult.push(transaction);
    //       }
    //     }
  
    //     for (let transaction of searchResult) {
    //       total += transaction.amount;
    //     }
    //     return total;
    //   },
  
    getTransactionTotal(type) {
      let total = 0;
      for (let transaction of this.transactions) {
        if (transaction.type === type) {
          total += transaction.amount;
        }
      }
      return total;
    },
  };
  
//   wallet.deposit(50);
//   wallet.withdraw(30);
//   wallet.deposit(150);
//   wallet.deposit(20);
//   wallet.withdraw(10);
  
//   console.log(wallet.getBalance());
//   console.log(wallet.transactions);
//   console.log(wallet.getTransactionDetails(3));
//   console.log(wallet.getTransactionTotal(Transaction.DEPOSIT));
//   console.log(wallet.getTransactionTotal(Transaction.WITHDRAW));