// 1
document.addEventListener('DOMContentLoaded', function() {
    const showModalBtn = document.getElementById('showModalBtn');
    showModalBtn.addEventListener('click', showModalContent);
});

function showModalContent() {
    const list = document.getElementById('list');
    const items = list.getElementsByTagName('li');
            
    let content = '';
            
    content += items[0].textContent + ', '; // Перший елемент списку
    content += items[items.length - 1].textContent + ', '; // Останній елемент списку
    content += items[1].textContent + ', '; // Другий елемент списку
    content += items[3].textContent + ', '; // Четвертий елемент списку
    content += items[2].textContent; // Третій елемент списку
            
    alert(content);
}

// 2

// Вибір елементів за допомогою їх id або тегу
let header = document.querySelector("h1");
let firstParagraph = document.querySelector("#myDiv p:first-child");
let secondParagraph = document.querySelector("#myDiv p:nth-child(2)");
let thirdParagraph = document.querySelector("#myDiv p:nth-child(3)");
let fourthParagraph = document.querySelector("#myDiv p:nth-child(4)");
let spanElement = document.querySelector("span");

// Застосування стилів до вибраних елементів
header.style.fontSize = "36px";
header.style.fontWeight = "bold";
header.style.backgroundColor = "green";

firstParagraph.style.fontWeight = "bold";

secondParagraph.style.textDecoration = "underline";

thirdParagraph.style.cursor = "pointer";

fourthParagraph.style.display = "inline-block";

spanElement.style.display = "none";

// 3
// Створення елементів
const body = document.querySelector("body");
const main = document.createElement("main");
main.setAttribute("class", "mainClass check item");

const div = document.createElement("div");
div.setAttribute("id", "myDiv");

const paragraph = document.createElement("p");
paragraph.textContent = "First paragraph";

// Додавання елементів до структури
div.appendChild(paragraph);
main.appendChild(div);
body.appendChild(main);

// 4

// Вибір елементів
const btn = document.querySelector(".btn");
const outBlock = document.querySelector(".out");
const inputs = document.querySelectorAll(".arr");

// Додавання обробника події для кнопки
btn.addEventListener("click", function(event) {
  event.preventDefault(); // Зупинити стандартну поведінку форми

  let data = {}; // Об'єкт для збереження даних з полів

  // Отримання значень полів та збереження їх у об'єкті
  inputs.forEach(function(input) {
    const key = input.getAttribute("data-form");
    const value = input.value;
    data[key] = value;
  });

  // Виведення даних у блок `outBlock`
  outBlock.textContent = JSON.stringify(data, null, 2);
});

// 5

// Вибірка всіх елементів з класом "circle"
const circles = document.querySelectorAll(".circle");

// Перебір кожного елемента
circles.forEach(circle => {
  // Отримання значення атрибуту "data-anim"
  const animClass = circle.getAttribute("data-anim");
  
  // Додавання класу анімації
  circle.classList.add(animClass);
});

// 6
// елементи з класом gradient
const gradients = document.querySelectorAll('.gradient');

// елементи з класом color
const colors = document.querySelectorAll('.color');

// елемент, в якому буде відображатись ціна
const priceElement = document.getElementById('outprice');

// Функція для оновлення ціни 
function updatePrice(price) {
  priceElement.textContent = price.toFixed(2);
}

// Додаємо обробник події gradient
gradients.forEach((gradient) => {
  gradient.addEventListener('click', () => {
    const price = parseFloat(gradient.dataset.price);
    updatePrice(price);
  });
});

// Додаємо обробник події color
colors.forEach((color) => {
  color.addEventListener('click', () => {
    const price = parseFloat(color.dataset.price);
    updatePrice(price);
  });
});

