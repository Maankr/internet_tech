'use strict';

// задание №1
let yourName;
yourName = 'Мария';
alert(yourName); // показывает содержимое переменной


// задание №2
alert(3+5);

// задание №3
let mes = 'результат деления 16 на 2 равен '
let d = 16/2;
let Del = confirm(mes+d+'?');
alert(Del); // true, если нажата OK

// задание №4
var age = 25;
console.log('возраст: ' + age);

// задание №5
let word = prompt("Введите любое слово:");
let wordLength = word.length;
console.log("Длина слова:", wordLength);
console.log("Первые две буквы слова:", word.substring(0, 2));

// задание №6
let parent1 = prompt("Введите возраст 1 родителя: ");
let parent2 = prompt("Введите возраст 2 родителя: ");
if (parseInt(parent1) > parent2) {
  console.log("Родитель 1");
} else if (parseInt(parent1) < parent2) {
  console.log("Родитель 2");
} else {
  console.log("Возраст одинаковый");
}

// задание №7
let childAge = prompt("Введите возраст ребенка:");
if (parseInt(childAge) > 12) {
  let response = confirm("Желаете ли вы отправиться на концерт Аллы Пугачевой?");
  if (response) {
    alert("Вперед за билетами");
  } else {
    alert("Сиди дома");
  }
} else {
  alert("Сиди дома");
}

// задание №8
function squareNumber(number)
 {
  return number * number;
 }
let numberToSquare = prompt("Введите число, которое нужно возвести в квадрат:");
let squaredNumber = squareNumber(parseInt(numberToSquare));
alert("Результат возведения в квадрат: " + squaredNumber);

// задание №9
function greetUser(name) 
{
  alert("Доброго здоровечка, " + name);
}
let userName = prompt("Введите ваше имя:");
greetUser(userName);

// задание №10
function divideByFour(number) 
{
  return number / 4;
}
let inputNumber = prompt("Введите число для деления на 4:");
let result = divideByFour(parseInt(inputNumber));
if (result % 1 === 0) {
  alert("Выражение истинно");
} else {
  alert("Выражение ложно");
}

// задание №11
function периметрПрямоугольника(a, b) {
  return 2 * (a + b);
}

// задание №12
for (let i = 1; i <= 10; i++) 
  {
  console.log(i);
  }

// задание №13
for (let i = 5; i <= 50; i += 5) 
  {
  console.log(i);
  }

// задание №14
let j = 1;
while (j <= 10)
   {
    console.log(j);
    j++;
   }

// задание №15
let p = 5;
while (p <= 50)
  {
  console.log(p);
  p += 5;
  }

// задание №16
let i = 5;
while (i >= 1) 
  {
    console.log("Нас не задушишь, не убьешь");
    i--;
  }

// задание №17
const выбор = prompt("Что вы желаете заказать: яблоко, апельсин, сок или пиво?");

switch (выбор) {
  case "яблоко":
    console.log("Ваш выбор яблоко просто идеален");
    break;
  case "апельсин":
    console.log("Ваш выбор апельсин просто идеален");
    break;
  case "сок":
    console.log("Ваш выбор сок просто идеален");
    break;
  case "пиво":
    console.log("Ваш выбор пиво просто идеален");
    break;
  default:
    console.log("Пошел прочь!");
}

// задание №18
const массив = ["яблоко", "апельсин", "банан", "груша", "виноград"];
console.log(массив[2]); 

// задание №19
console.log(массив.length);


// задание №20
for (let i = 0; i < массив.length; i++) {
  console.log(массив[i]);
}

// задание №21
const м_новый = new Array();
м_новый[0] = "яблоко";
м_новый[1] = "апельсин";
м_новый[2] = ["банан", "груша", "виноград"];
м_новый[3] = "сок";
м_новый[4] = "пиво";

console.log(м_новый);

// задание №22
const телефоннаяКнига = 
{
  ФИО: "Иванов Иван Иванович",
  телефонныйНомер: "+7 (900) 00-00-00",
};

console.log(телефоннаяКнига.ФИО); 
console.log(телефоннаяКнига.телефонныйНомер); 

// задание №23
const объект = new Object();
объект.свойство1 = "ехал грека через реку";
объект.свойство2 = 10;
объект.свойство3 = false;
объект.свойство4 = ["слива", "груша", "яблоко"];
объект.свойство5 = "абвгд";

for (let свойство in объект) {
  console.log(свойство);
}

// задание №24
for (let свойство in объект) {
  console.log(объект[свойство]);
}


