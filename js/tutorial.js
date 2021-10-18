function calculateTotalPrice(orderedItems) {
    let totalPrice = 0;
    // Change code below this line
    orderedItems.forEach(number => totalPrice += number);
    
    
  
    // Change code above this line
    return totalPrice;
  }
//   console.log(calculateTotalPrice([12, 85, 37, 4]));

  function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Change code below this line
    numbers.forEach(number => {
        if(number > value){
            filteredNumbers.push(number);
        }
    })
    
  
    // Change code above this line
    return filteredNumbers;
  }
//   console.log(filterArray([1, 2, 3, 4, 5], 3));

function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Change code below this line
    firstArray.forEach(number => {
        if(secondArray.includes(number)){
            commonElements.push(number)
        }
    })
    return commonElements
    // Change code above this line
  }
// console.log(getCommonElements([1, 2, 3], [2, 4]));

function changeEven(numbers, value) {
    // Change code below this line
    const newArray = [];
    numbers.forEach(number => {

        if(number % 2 === 0) {
            number += value
        }
        newArray.push(number);
    })
    return newArray;
    
    // Change code above this line
  }

  // console.log(changeEven([1, 2, 3, 4, 5], 10));

  const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      genres: ["adventure", "history"],
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      genres: ["fiction", "mysticism"],
    },
    {
      title: "Redder Than Blood",
      author: "Tanith Lee",
      genres: ["horror", "mysticism", "adventure"],
    },
  ];
  // Change code below this line
  const allGenres = books.flatMap(user => user.genres);
  const uniqueGenres = allGenres.filter((user, index, array) => array.indexOf(user) === index
  );
  // console.log(allGenres);
  // =============================== //
  // Change code below this line
const getFriends = (users) => users.flatMap(user => user.friend).filter((friend, index, array) => array.indexOf(friend) === index);
// Change code above this line
console.log(getFriends([
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39
  }
]));
  