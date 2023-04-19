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