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
  const puzzle2 = (a, b) => {
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
        } else if (age = 0 || age <= 12) {
        console.log('Привет, друг!');
        } else {
        console.log('Добро пожаловать!');
        }
    }
    greeting()

    //5
    /* Напишите функцию, которая на вход принимает 2 числа:
    Проверяет, являются ли переданные параметры корректными числами.
    (Преобразование типов и isNaN()помогут.)
    Если нет, то вернуть строку 'Одно или оба значения не являются числом'.
    Если оба параметра — числа, то вернуть произведение данных чисел. */
    
    const check = (a, b) => {
        if (isNaN(a) || isNaN(b)) {
          return 'Одно или оба значения не являются числом';
        } else {
          return a * b;
        }
      }
      
      console.log(check(5, 'may')); 
      console.log(check(5, 8));

    //6
    /* Напишите функцию, которая спрашивает у пользователя число, 
    проверяет его на корректность, после чего возводит его в куб 
    и возвращает следующую строку:
    'n в кубе равняется <получившееся значение>'. 
    Если переданный параметр не число, вернуть строку 
    'Переданный параметр не является числом'.
    Проверьте самостоятельно, что данная функция работает корректно и 
    выводит правильный результат с параметрами от 0 до 10 включительно.*/

    const cube = () => {
        const input = prompt('Введите число:');
        const number = Number(input);
        if (isNaN(number)) {
          return 'Переданный параметр не является числом';
        } else {
          const result = number ** 3;
          return `${number} в кубе равняется ${result}`;
        }
      }
      
      console.log(cube());

    //7
    /* Создайте объекты circle1 и circle2 со свойством radius. 
    У объектов должен быть методам getArea, которое возвращает площадь круга 
    через радиус, а также getPerimeter, который возвращает периметр окружности.*/

    function getCircleArea () {
        return this.radius * 3.14;
    }
    function getCirclePerimeter () {
        return this.radius * 2 * 3.14;
    }

    const circle1 = {
        radius: 7,

        getArea: getCircleArea,
        getPerimeter: getCirclePerimeter,
    };

    const circle2 = {
        radius: 50,

        getArea: getCircleArea,
        getPerimeter: getCirclePerimeter,
    };

    console.log(circle1.getArea ());
    console.log(circle1.getPerimeter());
    console.log(circle2.getArea());
    console.log(circle2.getPerimeter());


          



  
