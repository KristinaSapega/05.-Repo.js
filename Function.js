// 1
const puzzle = (a, b) => {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  };
  
  console.log(puzzle(8, 4));

  //1.2
  const puzzle = (a, b) => {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  };
  
  console.log(puzzle(6, 6));

  //2
  const task = (n) => {
    if (n % 2 == 0) {
        return "Число четное";
    } else {
        return "Число нечетное";
    }
  };
  console.log(task (5));
  console.log(task (4));

  //3
  //3.1
  const exercise = (n) => {
    console.log(n ** 2);
  }
  exercise (7);

  //3.2
  /* Напишите функцию, которая принимает параметром число 
  и возвращает квадрат этого числа. */

  const exercise2 = (n) => {
    return n ** 2;
  }
  exercise2 (7);

  //4
  /* Создайте функцию, которая:
  Спрашивает у пользователя, сколько ему лет.
  Если пользователь вводит отрицательное число, 
  выводит на экран «Вы ввели неправильное значение».
  Если пользователь введет число от 0 до 12, 
  выводит на экран «Привет, друг!».
  Если пользователь введет число больше или равно 13, 
  выводит на экран «Добро пожаловать!».*/
  
  function greeting() {
    let age = Number (prompt ('Сколько вам лет?'));
    if (age < 0) {
        console.log('Вы ввели неправильное значение');
    } else if (age = 0 || age >= 12) {
        console.log('Привет, друг!');
        
    } else {
        console.log('Добро пожаловать!');
    }
    }
    greeting()



  
