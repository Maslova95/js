// 1
// Створення нового вікна 
let newWindow = window.open('', '', 'width=300,height=300');

// Зміна розмірів вікна з затримкою 2 секунди
setTimeout(function() {
  newWindow.resizeTo(500, 500);
}, 2000);

// Переміщення вікна з затримкою 2 секунди
setTimeout(function() {
  newWindow.moveTo(200, 200);
}, 4000);

// Закриття вікна з затримкою 2 секунди
setTimeout(function() {
  newWindow.close();
}, 6000);

// 2

function changeCSS() {
    const paragraph = document.getElementById('text');
  
    paragraph.style.color = 'orange';
    paragraph.style.fontSize = '20px';
    paragraph.style.fontFamily = 'Comic Sans MS';
  }
  
  const button = document.querySelector('button');
  
  button.addEventListener('click', changeCSS);

// 3

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const link = document.getElementById('link');

button1.addEventListener('click', function() {
  document.body.style.backgroundColor = 'blue';
});

button2.addEventListener('dblclick', function() {
  document.body.style.backgroundColor = 'pink';
});

button3.addEventListener('mousedown', function() {
  document.body.style.backgroundColor = 'brown';
});

button3.addEventListener('mouseup', function() {
  document.body.style.backgroundColor = 'white';
});

link.addEventListener('mouseover', function() {
  document.body.style.backgroundColor = 'yellow';
});

link.addEventListener('mouseout', function() {
  document.body.style.backgroundColor = 'white';
});

// 4
const select = document.getElementById('mySelect');
const removeButton = document.getElementById('removeButton');

removeButton.addEventListener('click', function() {
  const selectedOption = select.options[select.selectedIndex];
  select.remove(selectedOption.index);
});

// 5
const button = document.getElementById('myButton');

button.addEventListener('click', function() {
  console.log("I was pressed!");
});

button.addEventListener('mouseover', function() {
  console.log("Mouse on me!");
});

button.addEventListener('mouseout', function() {
  console.log("Mouse is not on me!");
});

