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
  


