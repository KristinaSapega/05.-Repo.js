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

  


