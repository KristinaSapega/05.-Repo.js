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