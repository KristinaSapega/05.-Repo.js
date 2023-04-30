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
  console.log(strCount("hello world", "r"));

  //вар 2
  function strCount(str, letter){  
  
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] == letter)
        count++;
    }
    
    return count;
    
  }
  console.log (strCount ("sun shine is bright", "m"));

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
  
  console.log(squareSum([3, 2, 2]));

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