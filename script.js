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

function removeElement(array, item) {
  let index = array.indexOf(item);
  while (index !== -1) {
    array.splice(index, 1);
    index = array.indexOf(item);
  }
  return array;
}

function printArrayAfterDeleteingElement() {
  const array = [];
  const arrLength = Number(
    getUserInput("Enter the array lenght, more then 0", isValidArray)
  );

  for (let i = 0; i < arrLength; i++) {
    const number = Number(
      getUserInput(`${i + 1} element of array`, isValidNumber)
    );
    array.push(number);
  }

  const element = Number(getUserInput(
    `Enter a value from array [${array}] which you want to delete`, 
    (input) => isValidNumber(input) && array.includes(Number(input)))
  );

  document.write(`
    <p style="font-size: 2rem">Your entered array is [${array}]</p>
    <p style="font-size: 2rem">
      You want to delete ${element}
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

function printRandomKey() {
  const str = getUserInput("Enter the characters set correctly", isValidString).replace(" ", '');
  const keyLength = Number(getUserInput("Enter the key lenght, more then 0", isValidNumber));

  document.write(`
    <p style="font-size: 2rem">
      Your characters set is <b>${str}</b>
    </p>
    <p style="font-size: 2rem">
      The ${keyLength}-key of random characters from ${str} is <b>${generateKey(keyLength, str)}</b>
    </p>
  `);
}

printRandomKey();
