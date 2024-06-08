// // Завдання 1.
// // Рекурсивне зведення в ступінь
// // Реалізувати рекурсивну функцію, яка зводить число в ступінь.
// // Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
// // Ступінь передається як другий аргумент у функцію pow (num, degree).

function pow(num, degree) {
  return degree >= 1 ? num * pow(num, degree - 1) : 1;
}

function getUserInput(question, isValid) {
  let input = prompt(question);
  while (!isValid(input)) {
    input = prompt(`${question} correctly`);
  }
  return input.trim();
}

function isValidNumber(str) {
  console.log(Number(str));
  return str !== null && str !== "" && str !== " " && !isNaN(Number(str));
}

function isValidArray(str) {
  return Number(str) > 0;
}

function isValidString(str) {
  return str !== null && str !== "" && str.trim().length !== 0;
}

function printPow() {
  const number = Number(getUserInput("Enter the number", isValidNumber));
  const degree = Number(getUserInput("Enter the degree", isValidNumber));

  document.write(
    `<p style="font-size: 2rem">${number} in the degree ${degree} will be ${pow(
      number,
      degree
    )}</p>`
  );
}

printPow();

// Завдання 2. Реалізуйте функцію removeElement
// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

function removeElement(array, index) {
  array.splice(index - 1, 1);
  return array;
}

function printArrayAfterDeleteingElement() {
  const array = [];
  const arrLength = Number(
    getUserInput("Enter the array lenght, more then 0", isValidArray)
  );

  for (let i = 0; i < arrLength; i++) {
    const number = Number(getUserInput(`${i + 1} element of array`, isValidNumber));
    array.push(number);
  }

  const element = Number(getUserInput(`Enter what element of array do  you want to delete from 1 to ${arrLength}`, (input) => isValidArray(input) && Number(input) <= arrLength));

  document.write(`
    <p style="font-size: 2rem">Your entered array is [${array}]</p>
    <p style="font-size: 2rem">
      You want to delete ${element} element
    </p>
    <p style="font-size: 2rem">
      New array is [${removeElement(array, element)}]
    </p>
  `);
}

printArrayAfterDeleteingElement();

// Завдання 3. Реалізуйте функцію generateKey
// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length.

function generateKey(length, characters) {
  let key = "";
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * characters.length);
    key += characters[index];
  }
  return key;
}

const str = "abcdefghijklmnopqrstuvwxyz0123456789";

function printRandomKey() {
  const keyLength = Number(
    getUserInput(
      "Enter the key lenght, more then 0",
      (input) => isValidNumber(input) && Number(input) > 0
    )
  );

  document.write(`
    <p style="font-size: 2rem">
      The ${keyLength}-key of random characters is <b>${generateKey(keyLength, str)}</b>
    </p>
  `);
}

printRandomKey();
