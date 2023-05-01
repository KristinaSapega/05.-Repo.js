//task 1
function strCount(str, letter){  
    //используем метод split чтобы разбить строку
    let arr = str.split("");
    // используем оператор filter, чтобы отфильтровать только символы, 
    // равные заданному символу
    let filteredArr = arr.filter(function(s) {
      return s === letter;
    });
    // возвращаем длину отфильтрованного массива, 
    // которая соответствует количеству вхождений символа в строку
    return filteredArr.length;
  }
  console.log(strCount("hello world", "r")); //1

  //вар 2
  function strCount(str, letter){  
  
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] == letter)
        count++;
    }
    
    return count;
    
  }
  console.log (strCount ("sun shine is bright", "m")); //0

  //task 2
// Создаем функцию squareSum, которая принимает массив чисел numbers в качестве аргумента
    function squareSum(numbers) {
// Используем метод map для получения массива квадратов элементов
    return numbers.map(function(x) {
      return x * x;
    })
// Используем метод reduce для получения суммы элементов массива
    .reduce(function(sum, current) {
      return sum + current;
    }, 0);
  }
  
  console.log(squareSum([3, 2, 2])); //17

  //вар 2
  function squareSum(numbers){
    return numbers.reduce((sum,num) => sum + (num * num), 0);
  }
  
  console.log(squareSum([3, 2, 2]));

  //вар 3
  function squareSum(numbers){
    let sum = 0;
    numbers.forEach(function(n) {
      sum += n * n
    });
    return sum;
  }
  
  console.log(squareSum([3, 2, 2]));



  //task 3
  function nearestSq(n) {
    const minSq = Math.floor(Math.sqrt(n)); // находим ближайший меньший квадрат числа n и присваиваем его переменной minSq
    const maxSq = Math.ceil(Math.sqrt(n)); // находим ближайший больший квадрат числа n и присваиваем его переменной maxSq
      
    if ((maxSq ** 2 - n) >= (n - minSq ** 2)) { // если расстояние между n и maxSq**2 больше или равно расстоянию между n и minSq**2,
        return minSq ** 2; // возвращаем значение minSq**2
      
    } else { //иначе
      return maxSq ** 2; //возвращаем значение maxSq**2
    }
  }
  console.log(nearestSq(111));


  // task 4
  function solution(str){
    str = str.split ('');
    str = str.reverse ();
    str = str.join ('');
    return (str);
  }
  console.log(solution('world'));
  console.log(solution('word'));

  //вар 2
  function solution(str){
    return str.split('').reverse().join('');  
  }
  console.log(solution('world'));

  //task 5
  function addLength(str) {
        return str.split(' ').map(word => `${word} ${word.length}`);  //разбиваем исходную строку на отдельные слова, используя пробел в качестве разделителя
      } //Затем метод map() применяется к массиву слов, который был получен после применения split(), и для каждого слова создаётся новая строка, состоящая из слова и его длины
      console.log(addLength('hello world')); //[ 'hello 5', 'world 5' ]

//task 6
/*есть два параметра: количество манго и цена за манго. 
Чтобы рассчитать общую стоимость манго, мы должны умножить количество манго на цену за манго.*/

function mango(quantity, price){
    if (quantity > 0) {
        return (quantity * price) - Math.floor (quantity / 3) * price;
    } else {
        return 0;      
    }
}
console.log(mango (3,3)); // 6
/* Math.floor(quantity / 3) вычисляет количество бесплатных манго, 
которые можно получить при покупке тройки манго. 
Так как каждая тройка манго дает одно бесплатное, то можно вычислить это количество 
как целую часть от деления quantity на 3.
Вычитание Math.floor(quantity / 3) * price вычитает из общей стоимости манго стоимость бесплатных манго, 
которые мы получаем при покупке троек.*/

//вар 2
function mango(quantity, price){
    return price * (quantity - Math.floor(quantity / 3));
  }
  console.log (mango (3, 3));

// task 7
/* умножение времени на 0.5, 
округление до наименьшего значения, и возврат полученного значения*/

function litres(time) {
    if (time > 0) {
      return Math.floor(time * 0.5);
    } else {
      return 0;
    }
  }
  console.log(litres(6.7)); //3

  //вар 2
  function litres(time) {
    return Math.floor(time * 0.5);
  }

  // вар 3
  function litres(time) {
    return Math.floor(time/2);
  }

// task 8
/* пройти по каждому элементу массива с помощью метода map(), 
и вернуть текущий элемент, умноженный на -1. 
В итоге получим массив, в котором все числа инвертированы. 
Если исходный массив пустой, то мы можем просто вернуть пустой массив.*/

function invert(array) {
    if (array.length > 0) {
      return array.map(item => (item * -1));
    } else {
      return [];
    }
  }
  
  console.log(invert([5, 6, 8])); // [ -5, -6, -8 ]
  console.log(invert([-5, -6, -8])); // [5, 6, 8]

//вар 2
const invert = array => array.map(num => -num);
console.log(invert([5, 6, 8]));

/*функция проверяет длину массива. 
Если массив не пустой, то каждый элемент массива умножается на -1 с помощью метода map. 
Если массив пустой, то функция возвращает пустой массив.*/

// task 9
/* создании функции, которая принимает неотрицательное целое число 
в качестве входных данных. 
Затем функция должна вернуть список всех степеней двойки 
в диапазоне от 0 до n (включительно). 
Для решения этой задачи можно использовать цикл, 
который будет выполняться от 0 до n, и в каждой итерации будет возводить 
2 в степень текущего числа. Результат будет добавляться в список. 
В конце функция должна вернуть этот список*/

  function powersOfTwo(n){
    let i = 0;            // создаем переменную i, которая будет хранить текущий показатель степени
    let result = [];      // создаем пустой массив для хранения результатов
    
    while (i <= n) {      // выполняем цикл, пока i не превысит n
      result.push(Math.pow(2, i));  // добавляем в массив 2 в степени i
      i++;                // увеличиваем значение i на 1
    }
    
    return result;        // возвращаем массив со всеми степенями двойки
  }
  
  console.log(powersOfTwo(0)); //[ 1 ]
  console.log(powersOfTwo(1)); //[ 1, 2 ]
  console.log(powersOfTwo(2)); //[ 1, 2, 4 ]

// task 10
function grow (x){
    x = x.reduce((a,b) => a * b)
    return x;
  }
  console.log (grow ([1,2,3,4])); //24
  
  
//вар 2
const arr = [1, 2, 3, 4];
const result = arr.reduce((intermediate, value) => intermediate * value);
console.log(result); 

//вар 3
const grow=x=> x.reduce((a,b) => a*b);
console.log (grow ([1,2,3,4]));