//1
let str = 'js';
console.log(str.toUpperCase()); //JS

//2
const fruits = ['apple', 'pineapple', 'pear', 'strawberry', 'blueberry'];
const search = 'apple';
fruits.forEach((fruits) => {
    if (fruits.toLocaleLowerCase ().includes(search.toLowerCase ())) {
        console.log(fruits);
    }
}
) // apple pineapple

//3
//Округлите число 32.58884:
//До меньшего целого
const num = 32.58884;
const result = Math.floor(num);
console.log(result); //32

//До большего целого
const num2 = 32.58884;
const result2 = Math.ceil(num2);
console.log(result2); //33

//До ближайшего целого
const num3 = 32.58884;
const result3 = Math.round(num3);
console.log(result3); //32

//4
/*Даны числа 52, 53, 49, 77, 21, 32. 
Необходимо найти среди этих чисел наименьшее и наибольшее числа и вывести их в консоль.*/

const numbers = [52, 53, 49, 77, 21, 32];
const max = Math.max(...numbers);
const min = Math.min(...numbers);
console.log(`Наибольшее число: ${max}`);
console.log(`Наименьшее число: ${min}`);

//5
/*Создайте функцию, которая будет выводить в консоль 
рандомное число от 1 до 10.*/

function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
  }
  generateRandomNumber();

//6
/* Напишите функцию, которая будет принимать на вход целое число, 
а возвращать массив случайных целых чисел от 0 до переданного числа. 
Длина массива должна быть в 2 раза меньше переданного числа.*/
  
function getRandomArrNumbers (n) {
    const arr = [];
    const length = Math.floor(n / 2);
    for (let i = 0; i < length; i++) {
      const randomNumbers = Math.floor(Math.random() * (n + 1));
      arr.push(randomNumbers);
    }
    return arr;
  }
    const n = 5;
    const arrNumbers = getRandomArrNumbers(n);
    console.log(arrNumbers);

//7
/*Напишите функцию, которая на вход принимает 2 целых числа, 
а в качестве результата возвращает случайное целое число в этом диапазоне*/

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
    const randomNumber = getRandomNumber(3, 7);
    console.log(randomNumber);


//8
/*Выведите в консоль текущую дату в стандартном режиме. 
Используйте один из трех рассмотренных в уроке способов.*/

let currentDate = new Date();
console.log(currentDate);

//9
/*Создайте переменную currentDate и сохраните в нее текущую дату. 
Выведите дату, которая наступит через 73 дня после текущей.*/

let currentDate2 = new Date();
currentDate2.setDate(currentDate2.getDate() + 73);
console.log(currentDate2);

//10
