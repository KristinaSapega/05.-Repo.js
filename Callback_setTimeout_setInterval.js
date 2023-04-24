//1 
/*Написать функцию, которая на вход принимает массив чисел и 
callback-функцию.
Функция должна возвращать целое число, в зависимости от callback 
это может быть сумма всех чисел массива, произведение. 
Функции, вычисляющие произведение и сумму чисел массива, 
также необходимо реализовать.*/

function mult(arr)  {
    result = arr[0] * arr[1] * arr[2] * arr[3];
    console.log(result);
}   

function sum(arr) {
    result = arr[0] + arr[1] + arr[2] + arr[3];
    console.log(result);
}

function getResult (callback, arr) {

    callback(arr);
}

arr = [6, 9, 3, 2];
getResult (mult, arr);
getResult (sum, arr);


//2
/*Дан массив объектов:
const users = [
	{name: 'Jon', age: 22},
	{name: 'Richard', age: 18},
	{name: 'Anton', age: 32},
	{name: 'Lida', age: 23},
	{name: 'Bob', age: 44}
];
Необходимо отсортировать элементы массива в порядке увеличения возраста.*/


function sort(arr) {
for (let i = 0; i < arr.length; i++) {
        // запускаем второй цикл, в котором будем сравнивать arr[i] с другими элементами
    for (let j = i; j < arr.length; j++) {
        // если arr[i] окажется больше какого-то из элементов,
        // то меняем их местами, для этого вводим вспомогательную
        // переменную temp
if (arr[i].toString() > arr[j].toString()) { // приводим элементы к строке, так делает оригинальный метод sort
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
return arr;
}
function compareNum(a, b) { // сравниваем числа
	return a - b;
}
// сравниваем объекты со свойствами name и age
function compareUser(a, b) { 
	if (a.age > b.age) return 1;
	if (a.age < b.age) return -1;
	return 0;
}
function sort(arr, compareFunction) {
    for (let i = 0; i < arr.length; i++) {
	  for (let j = i; j < arr.length; j++) {
			// ввели переменную condition, которая проверяет,
			// передана ли callback-функция, и тогда сохраняет результат ее вызова
			// если не передана, то выполняет условие по умолчанию
	    const condition = compareFunction // если этот параметр не будет передан, то здесь будет undefined, т. е. ложь (false)
                ? compareFunction(arr[i], arr[j]) > 0 // в callback-функцию мы можем передать сколько угодно параметров, но они должны находиться в пределах функции
                : arr[i].toString() > arr[j].toString(); // условие по умолчанию
	    if (condition) {
				let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
const listUsers = [
	{name: 'Jon', age: 22},
	{name: 'Richard', age: 18},
	{name: 'Anton', age: 32},
	{name: 'Lida', age: 23},
	{name: 'Bob', age: 44}
];
listUsers.sort(compareUser);// передаем в качестве параметра наш callback, но уже для User
console.log(listUsers);


//3
/*Создайте функцию each, которая может производить любые манипуляции 
над переданным массивом в зависимости от переданной 
callback-функции. Реализуйте несколько callback-функций, 
которые будут делать следующее:

Переворачивать массив:
const arr = [1, '4', 9, 'two'];
each(arr, reversArr); // ['two', 9, '4', 1]*/
/*Преобразовывать все элементы к числу; если элемент 
получился NaN, то удалять его:
const arr = [1, '4', false, 9, 'two'];
each(arr, toNumberArr); // [1, 4, 0, 9]*/

function reversArr(item) {
    if (Array.isArray(item)) {
      return item.reverse();
    } else {
      return item;
    }
  }
  
  function each(arr, callback) {
    const reversedArr = arr.reverse(); // переворачиваем исходный массив?
    const result = callback(reversedArr); // применяем callback-функцию к перевернутому массиву
    return result;
  }
  
  const arr = [1, '4', 9, 'two'];
  const resultArr = each(arr, reversArr);
  console.log(resultArr);

/*Преобразовывать все элементы к числу; если элемент 
получился NaN, то удалять его:
const arr = [1, '4', false, 9, 'two'];
each(arr, toNumberArr); // [1, 4, 0, 9]*/

function toNumberArr2(item) { //Объявление функции toNumberArr, которая принимает параметр item.
    const num = Number(item); //Создание переменной num и присвоение ей значения, полученного из item с помощью метода Number().
    if (isNaN(num)) { //Проверка, является ли num не числом (NaN) с помощью функции isNaN()
      return null; //Если num является NaN, то функция возвращает значение null.
    }
    return num; //Если num не является NaN, то функция возвращает его значение.
  }
  
  function each(arr2, callback) { //Объявление функции each, которая принимает два параметра: arr (массив) и callback (функция обратного вызова).
    for (let i = arr2.length - 1; i >= 0; i--) { //Создание цикла for со счетчиком i, который проходит по массиву arr в обратном порядке.
      const item = callback(arr2[i]); //Вызов функции callback для элемента arr[i] и присвоение ее результата переменной item.
      if (item === null) { //Если значение item равно null, то удаляем элемент i массива с помощью метода splice().
        arr2.splice(i, 1);
      } else { //Если значение item не равно null, то присваиваем его элементу i массива arr.
        arr2[i] = item;
      }
    }
  }
  
  const arr2 = [1, '4', false, 9, 'two']; //Объявление переменной arr и присвоение ей значения массива [1, '4', false, 9, 'two'].
  each(arr2, toNumberArr2); //Вызов функции each с параметрами arr и toNumberArr.
  console.log(arr2); /*Вывод массива arr в консоль. 
  Результатом будет массив [1, 4, 0, 9], 
  так как значения false и 'two' были преобразованы в числа 0 и удалены из массива.*/

//4
/*Напишите программу, которая на протяжении 30 секунд, 
каждые 3 секунды, будет выводить в консоль текущую дату. 
Последней строкой должно выводиться сообщение «30 секунд прошло».*/

let counter = 0; //Создание переменной counter и присвоение ей значения 0. 
//Она будет использоваться для отслеживания времени внутри функции printTime.

function printTime() {  //
  console.log(new Date().toLocaleString());
  counter += 3;

  if (counter >= 30) {
    console.log("30 секунд прошло");
    clearInterval(intervalId); 
  }
}

const intervalId = setInterval(printTime, 3000); 
/*Создание интервала выполнения функции printTime() каждые 3 секунды 
с помощью setInterval(). 
Результатом этого выражения является идентификатор интервала, 
который будет использоваться для остановки интервала выполнения функции.*/

//5

