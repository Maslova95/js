// // завдання 1

// const a = 1;
// const b = 3;
// const c = 5;

// const result = a < b && b < c;
// console.log(result);

// // завдання 2

// let x = 1;
// let y = 2;

// let res1 = "" + x + y;
// console.log(res1); 
// console.log(typeof res1); 

// let res2 = Boolean(x) + "" + y;
// console.log(res2); 
// console.log(typeof res2); 

// let res3 = x < y;
// console.log(res3); 
// console.log(typeof res3); 

// let res4 = x - parseFloat("y");
// console.log(res4); 
// console.log(typeof res4); 

// // завдання 3

// let isAdult = prompt("Ви досягли повнолітнього віку? Введіть 'так' або 'ні'.");

// if (isAdult === "так") {
//   console.log("Ви досягли повнолітнього віку.");
// } else if (isAdult === "ні") {
//   console.log("Ви ще надто молоді.");
// } else {
//   console.log("Ви ввели недійсну відповідь.");
// }


// // завдання 4

// let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
// let frequencyMap = {};
// let mostFrequentNumber;
// let highestFrequency = 0;

// // Створення мапи частот
// for (let i = 0; i < arr.length; i++) {
//   let num = arr[i];
//   if (frequencyMap[num]) {
//     frequencyMap[num]++;
//   } else {
//     frequencyMap[num] = 1;
//   }
// }

// // Пошук числа з найбільшою частотою
// for (let num in frequencyMap) {
//   if (frequencyMap[num] > highestFrequency) {
//     highestFrequency = frequencyMap[num];
//     mostFrequentNumber = Number(num);
//   }
// }

// // Видалення всіх входжень найчастішого числа з поточного масиву
// arr = arr.filter(num => num !== mostFrequentNumber);

// console.log(arr); 


// // завдання 5

// // Введення довжин сторін трикутника
// let side1 = parseFloat(prompt("Введіть довжину першої сторони трикутника:"));
// let side2 = parseFloat(prompt("Введіть довжину другої сторони трикутника:"));
// let side3 = parseFloat(prompt("Введіть довжину третьої сторони трикутника:"));

// // Перевірка коректності введених значень
// if (
//   isNaN(side1) ||
//   isNaN(side2) ||
//   isNaN(side3) ||
//   side1 <= 0 ||
//   side2 <= 0 ||
//   side3 <= 0
// ) {
//   console.log("Incorrect data");
// } else {
//   // Обчислення площі трикутника за формулою Герона
//   let semiPerimeter = (side1 + side2 + side3) / 2;
//   let area = Math.sqrt(
//     semiPerimeter *
//       (semiPerimeter - side1) *
//       (semiPerimeter - side2) *
//       (semiPerimeter - side3)
//   );

//   // Виведення площі трикутника з точністю 3 знаки після коми
//   console.log("Площа трикутника: " + area.toFixed(3));

//   // Перевірка чи трикутник є прямокутним
//   if (
//     side1 * side1 + side2 * side2 === side3 * side3 ||
//     side1 * side1 + side3 * side3 === side2 * side2 ||
//     side2 * side2 + side3 * side3 === side1 * side1
//   ) {
//     console.log("Цей трикутник є прямокутним.");
//   } else {
//     console.log("Цей трикутник не є прямокутним.");
//   }
// }


// // Завдання 6

// function calc(a, b, op) {
//     let result;
  
//     if (op === 1) {
//       result = a - b;
//     } else if (op === 2) {
//       result = a * b;
//     } else if (op === 3) {
//       result = a / b;
//     } else {
//       result = a + b;
//     }
  
//     return result;
//   }
  
// //   let a = 5;
// //   let b = 3;
// //   let op = 2;
// //   let result = calc(a, b, op);
// //   console.log(result); 

// //   завдання 7

// function findUnique(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] === arr[j]) {
//           return false; // Знайдено дублікат, повертаємо false
//         }
//       }
//     }
  
//     return true; // Немає дублікатів, повертаємо true
//   }
  
  
//   console.log(findUnique([1, 2, 3, 5, 3]));  
//   console.log(findUnique([1, 2, 3, 5, 11])); 
  
  
