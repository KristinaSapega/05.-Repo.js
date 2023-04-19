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




