// class User {
//     // Синтаксис объявления метода класса
//     constructor(name, email) {
//       // Инициализация свойств экземпляра
//       this.name = name;
//       this.email = email;
//     }
//   }
  
//   const mango = new User("Манго", "mango@mail.com");
//   console.log(mango); // { name: 'Манго', email: 'mango@mail.com' }
  
//   const poly = new User("Поли", "poly@mail.com");
//   console.log(poly); // { name: 'Поли', email: 'poly@mail.com' }

// class User {
//     // Деструктуризируем объект
//     constructor({ name, email }) {
//       this.name = name;
//       this.email = email;
//     }
//   }
  
//   const mango = new User({
//     name: "Манго",
//     email: "mango@mail.com",
//   });
//   console.log(mango); // { name: "Манго", email: "mango@mail.com" }
  
//   const poly = new User({
//     name: "Поли",
//     email: "poly@mail.com",
//   });
//   console.log(poly); // { name: "Поли", email: "poly@mail.com" }
// ========================================================================= //
// Метод ф-ции

// class User {
//     constructor({ name, email }) {
//       this.name = name;
//       this.email = email;
//     }
  
//     // Метод getEmail
//     getEmail() {
//       return this.email;
//     }
  
//     // Метод changeEmail
//     changeEmail(newEmail) {
//       this.email = newEmail;
//     }
//   }
// ================================================================= //
// Приватные свойства

// class User {
//     // Необязательное объявление публичных свойств
//     name;
//     // Обязательное объявление приватных свойств
//     #email;
//     #password;
  
//     constructor({ name, email, password }) {
//       this.name = name;
//       this.#email = email;
//       this.#password = password;
//     }
  
//     getEmail() {
//       return this.#email;
//     }
  
//     changeEmail(newEmail) {
//       this.#email = newEmail;
//     }
//     getPaswword(newPassword) {
//         this.#password = newPassword;
//     }
//   }
  
//   const mango = new User({
//     name: "Манго",
//     email: "mango@mail.com",
//     password: "QWee",
//   });
//   mango.changeEmail("mango@supermail.com");
// //   console.log(mango.getEmail()); // mango@supermail.com
// //   console.log(mango.#email); // Будет ошибка, это приватное свойство
//   console.log(mango.#password);
