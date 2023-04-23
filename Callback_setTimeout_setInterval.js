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


