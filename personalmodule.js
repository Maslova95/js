// 12-2

function greetUser(username) {
    const currentHour = new Date().getHours();
    let greeting;
  
    if (currentHour >= 0 && currentHour < 6) {
      greeting = 'Доброї ночі';
    } else if (currentHour >= 6 && currentHour < 12) {
      greeting = 'Доброго ранку';
    } else if (currentHour >= 12 && currentHour < 18) {
      greeting = 'Доброго дня';
    } else {
      greeting = 'Доброго вечора';
    }
  
    return `${greeting}, ${username}!`;
  }
  
  module.exports = { greetUser };
  