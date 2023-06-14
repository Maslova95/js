// 1
function upperCase(string) {
    if (string.charAt(0) === string.charAt(0).toUpperCase()) {
      return "String's starts with uppercase character";
    } else {
      return "String's not starts with uppercase character";
    }
  }
  
  // Приклади:
  console.log(upperCase('regexp'));  
  console.log(upperCase('RegExp')); 

//   2

function checkEmail(email) {
    // Використовуємо регулярний вираз 
    let emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  }
  
  // Приклад:
  console.log(checkEmail("Qmail2@gmail.com")); 

//   3

function swapSubstrings(inputString) {
    let regex = /^(\w+)\s+(\w+)$/;
    return inputString.replace(regex, "$2, $1");
  }
  
  // Приклад:
  console.log(swapSubstrings("Java Script")); 

//   4

function validateCreditCardNumber(cardNumber) {
    let regex = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;
    return regex.test(cardNumber);
  }
  
  // Приклади використання:
  console.log(validateCreditCardNumber("1234-5678-9012-3456"));  // true
  console.log(validateCreditCardNumber("1234-5678-9012"));      // false
  console.log(validateCreditCardNumber("1234567890123456"));    // false

//   5

function checkEmail(email) {
    let regex = /^[A-Za-z0-9]+([_\-.][A-Za-z0-9]+)*@[A-Za-z0-9]+([_\-.][A-Za-z0-9]+)*\.[A-Za-z]{2,}$/;
    if (regex.test(email)) {
      return "Email is correct!";
    } else {
      return "Email is not correct!";
    }
  }
  
  // Приклади:
  console.log(checkEmail('my_mail@gmail.com'));     
  console.log(checkEmail('#my_mail@gmail.com'));    
  console.log(checkEmail('my_ma--il@gmail.com'));  
  
//   6

function checkLogin(login) {
    let regex = /^[A-Za-z][A-Za-z0-9]{1,9}$/;
    let numbers = login.match(/[0-9]+(\.[0-9]+)?/g);
  
    if (regex.test(login) && numbers) {
      return numbers;
    } else {
      return false;
    }
  }
  
  // Приклади:
  console.log(checkLogin('ee1.1ret3'));   
  console.log(checkLogin('ee1*1ret3'));  
  
  

  
  
  

  