/*
1. Написати функцію, яка перетворює строку на масив слів,
    сортує його за алфавітним порядком і повертає (у масиві не повинно бути пробілів як елементів)
 */

const str = "це довільний текст для створення масиву слів ";
function stringToArray(str) {
  const newMassive = str.split(" ");
  newMassive.sort();
  newMassive.shift();
  console.log(newMassive);
}
stringToArray(str); // виводить [ 'для', 'довільний', 'масиву', 'слів', 'створення', 'текст', 'це' ]

/*
2. Написати функцію, яка видаляє з масива елементи, що дублюються, та повертає масив оригінальних елементів,
відсортованих за зростанням
 */
const initialArray = [1, 4, 6, 6, 7, 5, 34, 5, 1000, 66, 1];
function removeDuplicatesAndSort(arr) {
  let uniqueChars = [...new Set(initialArray)];
  uniqueChars.sort(function (a, b) {
    return a - b;
  });
  console.log(uniqueChars);
}

console.log(removeDuplicatesAndSort(initialArray)); // виводить [ 1, 4, 5, 6, 7, 34, 66, 1000 ]

/*
3. Написати функцію, яка поверне масив парних чисел
 */
const initialArray2 = [2, 3, 6, 7, 9, 12];
function arrayOfEvens(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      console.log(arr[i]);
    }
  }
}
console.log(arrayOfEvens(initialArray2)); // виводить [ 2, 6, 12 ]



/*
4. Написати функцію, яка сформує масив з послідовності чисел, формуючи його з аргумента, який збільшує
кожний наступний елемент послідовності на самого себе. Максимальне значення масиву не повинно перевищувати число 30.
 */

function createArray(element) {

    const sequenceArray = [];
    let currentNumber = element;
    while (currentNumber <= 30) {  // тут ітерація до 30
      sequenceArray.push(currentNumber); // тут зберігаєте поточне значення у масиві
      currentNumber = currentNumber + element; // тут додаєте до поточного значення сам елемент
    }
    return sequenceArray; // повертаєте сформований масив

}
console.log(createArray(5)); // виведе [ 5, 10, 15, 20, 25, 30 ]
