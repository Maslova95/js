// завдання 1

function compact(arr) {
    return [...new Set(arr)];
  }
  
  const arr = [5, 3, 4, 5, 6, 7, 3];
  const arr2 = compact(arr);
  console.log(arr2); // [5, 3, 4, 6, 7]

//   зкавдання 2

function createArray(start, end) {
    const arr = [];
    for (let i = start; i <= end; i++) {
      arr.push(i);
    }
    return arr;
  }
  
  let arr = createArray(2, 9);
  console.log(arr); // [2, 3, 4, 5, 6, 7, 8, 9]

//   завдання 3

function printNumbers(a, b) {
    for (let i = a; i <= b; i++) {
      for (let j = a; j <= i; j++) {
        console.log(i);
      }
    }
  }
  
  // Приклад виклику функції
  printNumbers(2, 5);

//   завдання 4

function randArray(k) {
    const arr = [];
    for (let i = 0; i < k; i++) {
      const randomNumber = Math.floor(Math.random() * 500) + 1;
      arr.push(randomNumber);
    }
    return arr;
  }
  
  // Приклад виклику функції
  const result = randArray(5);
  console.log(result); // 

//   завдання 5

function funcName(arr) {
    const numberArr = [];
    const stringArr = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') {
        numberArr.push(arr[i]);
      } else if (typeof arr[i] === 'string') {
        stringArr.push(arr[i]);
      } else if (Array.isArray(arr[i])) {
        const subArray = arr[i].filter(item => typeof item === 'number');
        numberArr.push(...subArray);
      }
    }
  
    return [numberArr, stringArr];
  }
  
  // Приклад виклику функції
  const arr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
  const arrNew = funcName(arr);
  console.log(arrNew);

//   завдання 6

// Отримання поточного часу
const currentTime = new Date();
const currentHour = currentTime.getHours();

// Використання умовної конструкції switch
switch (true) {
  case (currentHour >= 23 || currentHour < 5):
    console.log("Доброї ночі");
    break;
  case (currentHour >= 5 && currentHour < 11):
    console.log("Доброго ранку");
    break;
  case (currentHour >= 11 && currentHour < 17):
    console.log("Доброго дня");
    break;
  default:
    console.log("Доброго вечора");
    break;
}

  