// 1

function sumSliceArray(arr, first, second) {
    if (typeof first !== 'number' || typeof second !== 'number') {
      throw new Error('Порядкові номери повинні бути числами');
    }
  
    if (first < 0 || second < 0 || first >= arr.length || second >= arr.length) {
      throw new Error('Порядкові номери виходять за межі масиву');
    }
  
    return arr[first] + arr[second];
  }
  
  // Приклад 
  const arr = [1, 2, 3, 4, 5];
  try {
    const result = sumSliceArray(arr, 2, 4);
    console.log(result); 
  } catch (error) {
    console.log('Сталася помилка:', error.message);
  }

//   2

function checkAge() {
    try {
      const name = prompt('Введіть ваше ім\'я:');
      const age = prompt('Введіть ваш вік:');
      const status = prompt('Введіть ваш статус (адмін, модератор, користувач):');
  
      if (!name || !age || !status) {
        throw new Error('The field is empty! Please enter your age');
      }
  
      const parsedAge = parseInt(age);
      if (isNaN(parsedAge)) {
        throw new TypeError('Вік повинен бути числом');
      }
  
      if (parsedAge < 18 || parsedAge > 70) {
        throw new RangeError('Ви не можете переглядати фільм');
      }
  
      if (status !== 'адмін' && status !== 'модератор' && status !== 'користувач') {
        throw new EvalError('Неправильний статус');
      }
  
      alert('Ви маєте доступ до перегляду фільму!');
    } catch (error) {
      alert('Сталася помилка: ' + error.name + '\n' + error.message);
    }
  }
  
  checkAge();

//   3

function calcRectangleArea(width, height) {
    if (typeof width !== 'number' || typeof height !== 'number') {
      throw new TypeError('Параметри повинні бути числами');
    }
  
    return width * height;
  }
  
  // Приклад 
  try {
    const width = prompt('Введіть ширину прямокутника:');
    const height = prompt('Введіть висоту прямокутника:');
  
    const area = calcRectangleArea(parseFloat(width), parseFloat(height));
    alert('Площа прямокутника: ' + area);
  } catch (error) {
    alert('Сталася помилка: ' + error.message);
  }
  
//   4

class MonthException {
    constructor(message) {
      this.name = 'MonthException';
      this.message = message;
    }
  }
  
  function showMonthName(month) {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
  
    if (month >= 1 && month <= 12) {
      return months[month - 1];
    } else {
      throw new MonthException('Incorrect month number');
    }
  }
  
  try {
    console.log(showMonthName(5));
  } catch (error) {
    console.log(`${error.name} ${error.message}`);
  }
  
  try {
    console.log(showMonthName(14));
  } catch (error) {
    console.log(`${error.name} ${error.message}`);
  }

//   5

class UserException {
    constructor(message) {
      this.name = 'UserException';
      this.message = message;
    }
  }
  
  function showUser(id) {
    if (id >= 0) {
      return { id };
    } else {
      throw new UserException('ID must not be negative');
    }
  }
  
  function showUsers(ids) {
    const validIds = [];
    const errors = [];
  
    for (let id of ids) {
      try {
        validIds.push(showUser(id));
      } catch (error) {
        errors.push(`${error.name}: ${error.message}`);
      }
    }
  
    if (errors.length > 0) {
      console.error(errors.join('\n'));
    }
  
    return validIds;
  }
  
  console.log(showUsers([7, -12, 44, 22]));

  
//   or

class UserException extends Error {
    constructor(message) {
      super(message);
      this.name = 'UserException';
    }
  }
  
  const showUser = (id) => {
    if (id >= 0) {
      return { id };
    } else {
      throw new UserException('ID must not be negative');
    }
  };
  
  const showUsers = (ids) => {
    const validIds = [];
    const errors = [];
  
    for (let id of ids) {
      try {
        validIds.push(showUser(id));
      } catch (error) {
        errors.push(`${error.name}: ${error.message}`);
      }
    }
  
    if (errors.length > 0) {
      console.error(errors.join('\n'));
    }
  
    return validIds;
  };
  
  console.log(showUsers([7, -12, 44, 22]));
  