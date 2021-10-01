// Объяви следующие методы класса:

// getItems() - возвращает массив текущих товаров в свойстве items объекта который вызывает этот метод.
// addItem(newItem) - принимает новый товар newItem и добавляет его в массив товаров в свойстве items объекта который вызывает этот метод.
// removeItem(itemToRemove) - принимает товар itemToRemove и удаляет его из массива товаров в свойстве items объекта который вызывает этот метод.

// class Storage {
    
//     constructor(items) {
//         this.items = items;

//     }
//     getItems(){
//         return this.items;
//     }
//     addItem(newItem) {
//         this.items.push(newItem);
//     }
//     removeItem(itemToRemove) {
//     const indexForItem =  this.items.indexOf(itemToRemove);
    
//     this.items.splice(indexForItem, 1);

//     }
// }


// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
// storage.removeItem("Droid");
// console.log(storage.getItems());


//    Напиши класс StringBuilder
// Объяви следующие методы класса:

// getValue() - возвращает текущее значение свойства value.
// padEnd(str) - получает парметр str (строку) и добавляет её в конец значения свойства value объекта который вызывает этот метод.
// padStart(str) - получает парметр str (строку) и добавляет её в начало значения свойства value объекта который вызывает этот метод.
// padBoth(str) - получает парметр str (строку) и добавляет её в начало и в конец значения свойства value объекта который вызывает этот метод.


// class StringBuilder {
//     constructor(initialValue) {
//       this.value = initialValue;
//     }
//      getValue(){
//       return this.value;
//      }
//      padEnd(str) {
//       this.value = `${this.value}${str}`;
//      }
//      padStart(str) {
//      this.value = `${str}${this.value}`
//      }
//      padBoth(str) {
//       this.value = `${str}${this.value}${str}`
//      }


// padEnd(str) {
//     this.value += str;
//   }

//   padStart(str) {
//     this.value = str + this.value;
//   }

//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
//    }

//    // Change code above this line
//    const builder = new StringBuilder(".");
//    console.log(builder.getValue()); // "."
//    builder.padStart("^");
//    console.log(builder.getValue()); // "^."
//    builder.padEnd("^");
//    console.log(builder.getValue()); // "^.^"
//    builder.padBoth("=");
//    console.log(builder.getValue()); // "=^.^="


// Статические методы

// Добавь классу Car публичный статический метод checkPrice(price), принимающий цену автомобиля. Метод должен сравнить значения параметра price и приватного статического свойства MAX_PRICE.

// Если цена автомобиля превышает максимальную, метод должен вернуть строку "Error! Price exceeds the maximum".
// В противном случае метод должен вернуть строку "Success! Price is within acceptable limits".

// class Car {
//     static #MAX_PRICE = 50000;
//     // Change code below this line
//     static checkPrice(price){
//      if(price > Car.#MAX_PRICE){
//       return  "Error! Price exceeds the maximum";
//      }
//       return  "Success! Price is within acceptable limits";
//     }
//     // Change code above this line
//     constructor({ price }) {
//       this.price = price;
//     }
//   }
  
//   const audi = new Car({ price: 36000 });
//   const bmw = new Car({ price: 64000 });
  
//   console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
//   console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"


// Конструктор дочернего класса
// Добавь классу Admin метод constructor, который принимает один параметр - объект настроек с двумя свойствами email и accessLevel.
//  Добавь классу Admin публичное свойство accessLevel, значение которого будет передаваться при вызове конструктора.

// class User {
//     email;
  
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
  
//   class Admin extends User {
//     // Change code below this line
//     constructor({email, accessLevel}) {
//      super(email);
//      this.accessLevel = accessLevel; 
//     }
//     static AccessLevel = {
//       BASIC: "basic",
//       SUPERUSER: "superuser",
//     };
  
//     // Change code above this line
//   }
  
//   const mango = new Admin({
//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
//   });
  
//   console.log(mango.email); // "mango@mail.com"
//   console.log(mango.accessLevel); // "superuser"

// Методы дочернего класса
// Добавь классу Admin следующие свойства и методы.

// Публичное свойство blacklistedEmails для хранения чёрного списка почтовых адресов пользователей. Значение по умолчанию это пустой массив.
// Публичный метод blacklist(email) для добавления почты в чёрный список.
// Метод должен добавлять значение параметра email в массив хранящийся в свойстве blacklistedEmails.
// Публичный метод isBlacklisted(email) для проверки почты в чёрном списке. 
// Метод должен проверять наличие значения параметра email в массиве хранящемся в свойстве blacklistedEmails и возвращать true или false.

class User {
    email;
  
    constructor(email) {
      this.email = email;
    }
  
    get email() {
      return this.email;
    }
  
    set email(newEmail) {
      this.email = newEmail;
    }
  }
  class Admin extends User {
    // Change code below this line
  
    static AccessLevel = {
      BASIC: "basic",
      SUPERUSER: "superuser",
    };
  
    constructor({ email, accessLevel }) {
      super(email);
      this.accessLevel = accessLevel;
    }

    blacklistedEmails = [];
    blacklist(email) {
        this.blacklistedEmails.push(email);
    }
    isBlacklisted(email) {
       return this.blacklistedEmails.includes(email);
    }
  
    // Change code above this line
  }
  
  const mango = new Admin({
    email: "mango@mail.com",
    accessLevel: Admin.AccessLevel.SUPERUSER,
  });
  
//   console.log(mango.email); // "mango@mail.com"
//   console.log(mango.accessLevel); // "superuser"
  
  mango.blacklist("poly@mail.com");
  console.log(mango.blacklistedEmails); // ["poly@mail.com"]
  console.log(mango.isBlacklisted("mango@mail.com")); // false
  console.log(mango.isBlacklisted("poly@mail.com")); // true
  