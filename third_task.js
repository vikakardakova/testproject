/* 1. Використовуючи колекцію Set написати функцію, яка перевірить чи всі елементи в масиві, який передається 
як аргумент, є унікальними та поверне як результат true або false */


function areAllUnique(arr) {
  let array = [...new Set(arr)];
  if (JSON.stringify(arr) == JSON.stringify(array)) 
  return true;
  else {
    return false;
  }
}
console.log(areAllUnique([1, 4, 6, 7])); // виведе true
console.log(areAllUnique([1,1])); // виведе false







/* 2. Дано масив імен [ "Alex", "Bob", "Peter", "Annie"]. За допомогою колекції Map дати кожному з елементів 
масиву унікальний числовий ідентифікатор (починаючи з 1ці) та повернути створену колекцію Map. */

function addIds(names) {
 const IdMap = new Map ()
 let i = 1;

 for (const name of names) {
  IdMap.set(name, i); 
  i++; 
}
return IdMap;
}
console.log(addIds(["Alex", "Bob", "Peter", "Annie"])); // виведе Map(4) { 'Alex' => 1, 'Bob' => 2, 'Peter' => 3, 'Annie' => 4 }



/* 3. Дано обʼєкт obj з двома числовими властивостями та двома методами add та subtract
які відповідно додають або віднімають властивості. Необхідно написати функцію, яка прийме
як параметри сам обʼєкт та назву метода і перевірить чи наявний метод у цьому обʼєкту.
Якщо метод наявний - функція поверне результат його роботи, якщо ні - 
поверне текст "There no such function in object" */

const obj = {
  a: 5,
  b: 2,
  add: function () {
    return this.a + this.b;
  },
  subtract: function () {
    return this.a - this.b;
  },
};

function checkMethodAvaliability(funcName, object) {
  if (object.hasOwnProperty(funcName) && typeof object [funcName] === 'function') {
    return object[funcName]();
  } else {
    return "There is no such function in object";
  }
}
  // Ваш код


console.log(checkMethodAvaliability("add", obj)); // виведе 7
console.log(checkMethodAvaliability("subtract", obj)); // виведе 3
console.log(checkMethodAvaliability("multiply", obj)); // виведе There no such function in object




/* 4. Дано обʼєкт obj1 з двома числовими властивостями та двома методами add та subtract
які відповідно додають або віднімають властивості. Необхідно написати функцію що створить новий обʼєкт, 
який успадкує прототип обʼєкту obj1, розширить його функціонал методами multiply та divide 
та поверне цей новий обʼект. */
const obj1 = {
  a: 5,
  b: 2,
  add: function () {
    return this.a + this.b;
  },
  subtract: function () {
    return this.a - this.b;
  },
}
function inheritanceWithExpandedMethods () {
  let objtwo = Object.create(obj1) 

  objtwo.multiply = function () {
    return this.a * this.b;
  };
      objtwo.divide = function () {
        return this.a / this.b;
      };
    return objtwo;
  }

console.log(inheritanceWithExpandedMethods(obj1).multiply()); // виведе 10
console.log(inheritanceWithExpandedMethods(obj1).divide()); // виведе 2.5
console.log(inheritanceWithExpandedMethods(obj1).add()); // виведе 7
console.log(inheritanceWithExpandedMethods(obj1).subtract()); // виведе 3





//My examples

// const numbers = [11, 21, 333,34, 53];

// for (const everymy of numbers) {
//   console.log(everymy); // Вивести кожен елемент масиву
// }


// const text = "Hello";

// for (const char of text) {
//   console.log(char); // Вивести кожний символ рядку
// }


// const Vika = new Map([
//   ['weight', '45'],
//   ['height', '160'],
//   ['bell', '60']
// ]);

// for (const [myvalue, mykey] of Vika)
// {
//   console.log(myvalue, mykey);}






//callback
// Функція, яка приймає і викликає функцію-колбек
// function first(callback) {
//   console.log('Виконуємо деяку роботу');
//   callback(); // Виклик функції-колбека
// }

// // Функція-колбек, яка виконується після doSomething
// function second() {
//   console.log('Робота завершена');
// }

// // Виклик функції first з передачею second як колбека
// first(second);